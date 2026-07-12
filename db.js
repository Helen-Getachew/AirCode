// db.js — IndexedDB wrapper for local storage

const DB_NAME = 'aircode-db';
const DB_VERSION = 2;

const STORES = {
  USERS: 'users',
  PROGRESS: 'progress',
  SESSION: 'session',
  STATS: 'stats'
};

let db;

// ─── Open Database ────────────────────────────────────
function openDB() {
  return new Promise((resolve, reject) => {
    if (db) return resolve(db);

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = event => {
      const database = event.target.result;

      // Users store
      if (!database.objectStoreNames.contains(STORES.USERS)) {
        const userStore = database.createObjectStore(STORES.USERS, { keyPath: 'email' });
        userStore.createIndex('email', 'email', { unique: true });
      }

      // Progress store
      if (!database.objectStoreNames.contains(STORES.PROGRESS)) {
        database.createObjectStore(STORES.PROGRESS, { keyPath: 'id' });
      }

      // Session store
      if (!database.objectStoreNames.contains(STORES.SESSION)) {
        database.createObjectStore(STORES.SESSION, { keyPath: 'key' });
      }

      // Stats store (streaks, XP, trace accuracy)
      if (!database.objectStoreNames.contains(STORES.STATS)) {
        database.createObjectStore(STORES.STATS, { keyPath: 'key' });
      }
    };

    request.onsuccess = event => {
      db = event.target.result;
      resolve(db);
    };

    request.onerror = event => {
      reject(event.target.error);
    };
  });
}

// ─── Generic Helpers ──────────────────────────────────
function dbSet(storeName, value) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(value);
    tx.oncomplete = () => resolve();
    tx.onerror = e => reject(e.target.error);
  }));
}

function dbGet(storeName, key) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const request = tx.objectStore(storeName).get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = e => reject(e.target.error);
  }));
}

function dbGetAll(storeName) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const request = tx.objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = e => reject(e.target.error);
  }));
}

function dbDelete(storeName, key) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = e => reject(e.target.error);
  }));
}

// ─── User Functions ───────────────────────────────────
function createUser(email, password, extra = {}) {
  return dbSet(STORES.USERS, {
    email,
    password, // null for Google accounts
    createdAt: new Date().toISOString(),
    ...extra
  });
}

function getUser(email) {
  return dbGet(STORES.USERS, email);
}

// ─── Session Functions ────────────────────────────────
function saveSession(email) {
  return dbSet(STORES.SESSION, { key: 'currentUser', email });
}

function getSession() {
  return dbGet(STORES.SESSION, 'currentUser');
}

function clearSession() {
  return dbDelete(STORES.SESSION, 'currentUser');
}

// ─── Current User Helper ───────────────────────────────
function getCurrentUserEmail() {
  return getSession().then(session => (session ? session.email : null));
}

// ─── Progress Functions (scoped per logged-in user) ────
function saveProgress(subject, level, lessonId, data) {
  return getCurrentUserEmail().then(email => {
    const id = `${email}::${subject}-${level}-${lessonId}`;
    return dbSet(STORES.PROGRESS, { id, email, subject, level, lessonId, ...data });
  });
}

function getProgress(subject, level, lessonId) {
  return getCurrentUserEmail().then(email => {
    const id = `${email}::${subject}-${level}-${lessonId}`;
    return dbGet(STORES.PROGRESS, id);
  });
}

function getAllProgress() {
  return getCurrentUserEmail().then(email =>
    dbGetAll(STORES.PROGRESS).then(all => all.filter(p => p.email === email))
  );
}

function saveExamResult(subject, level, data) {
  return getCurrentUserEmail().then(email => {
    const id = `${email}::exam-${subject}-${level}`;
    return dbSet(STORES.PROGRESS, { id, email, subject, level, type: 'exam', ...data });
  });
}

function getExamResult(subject, level) {
  return getCurrentUserEmail().then(email => {
    const id = `${email}::exam-${subject}-${level}`;
    return dbGet(STORES.PROGRESS, id);
  });
}

// ─── Stats Functions (streak, XP, trace accuracy — scoped per user) ─
function getStats() {
  return getCurrentUserEmail().then(email => {
    const key = `stats::${email}`;
    return dbGet(STORES.STATS, key).then(stats => stats || {
      key,
      xp: 0,
      level: 1,
      streak: 0,
      lastActiveDate: null,
      traceCorrect: 0,
      traceTotal: 0
    });
  });
}

function saveStats(stats) {
  return dbSet(STORES.STATS, stats);
}

// Call once per app session, e.g. right after login/home load
function updateStreak() {
  return getStats().then(stats => {
    const today = new Date().toDateString();
    const last = stats.lastActiveDate;

    if (last === today) {
      return stats; // already counted today
    }

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    stats.streak = (last === yesterday) ? stats.streak + 1 : 1;
    stats.lastActiveDate = today;

    return saveStats(stats).then(() => stats);
  });
}

// Call whenever a student earns XP (lesson complete, correct trace, etc.)
function addXP(amount) {
  return getStats().then(stats => {
    stats.xp += amount;
    stats.level = Math.floor(stats.xp / 100) + 1; // 100 XP per level
    return saveStats(stats).then(() => stats);
  });
}

// Call after every prediction comparison
function recordTraceResult(wasCorrect) {
  return getStats().then(stats => {
    stats.traceTotal += 1;
    if (wasCorrect) {
      stats.traceCorrect += 1;
      addXP(10); // bonus XP for a correct trace
    }
    return saveStats(stats);
  });
}
