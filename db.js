// db.js — IndexedDB wrapper for local storage

const DB_NAME = 'trace-code-db';
const DB_VERSION = 1;

const STORES = {
  USERS: 'users',
  PROGRESS: 'progress',
  SESSION: 'session'
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
function createUser(email, password) {
  return dbSet(STORES.USERS, {
    email,
    password,
    createdAt: new Date().toISOString()
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

// ─── Progress Functions ───────────────────────────────
function saveProgress(subject, level, lessonId, data) {
  const id = `${subject}-${level}-${lessonId}`;
  return dbSet(STORES.PROGRESS, { id, subject, level, lessonId, ...data });
}

function getProgress(subject, level, lessonId) {
  const id = `${subject}-${level}-${lessonId}`;
  return dbGet(STORES.PROGRESS, id);
}

function getAllProgress() {
  return dbGetAll(STORES.PROGRESS);
}

function saveExamResult(subject, level, data) {
  const id = `exam-${subject}-${level}`;
  return dbSet(STORES.PROGRESS, { id, subject, level, type: 'exam', ...data });
}

function getExamResult(subject, level) {
  const id = `exam-${subject}-${level}`;
  return dbGet(STORES.PROGRESS, id);
}