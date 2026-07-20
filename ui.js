// ui.js — renders all screens

// ─── Theme ────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const theme = saved || preferred;
  document.documentElement.setAttribute('data-theme', theme);
  updateToggleLabels();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabels();
}

function updateToggleLabels() {
  const current = document.documentElement.getAttribute('data-theme');
  document.querySelectorAll('.theme-toggle, #theme-toggle').forEach(btn => {
    btn.textContent = current === 'light' ? '☀️' : '🌙';
  });
}

// ─── Logo Split Intro Transition ──────────────────────
function playSplitTransition(callback) {
  document.getElementById('app-split-transition')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'app-split-transition';
  overlay.innerHTML = `
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg">
      <polygon id="cap-left" points="200,40 70,150 200,260"
        fill="var(--surface2)" stroke="var(--accent)" stroke-width="12"
        stroke-linejoin="round" />
      <polygon id="cap-right" points="200,40 330,150 200,260"
        fill="var(--surface2)" stroke="var(--accent)" stroke-width="12"
        stroke-linejoin="round" />
      <path id="u-shape"
        d="M140,235 L140,300 Q140,325 165,325 L235,325 Q260,325 260,300 L260,235"
        fill="none" stroke="var(--accent2)" stroke-width="14"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
  document.body.appendChild(overlay);

  requestAnimationFrame(() => overlay.classList.add('animate'));

  setTimeout(() => {
    overlay.remove();
    if (callback) callback();
  }, 600);
}

// ─── Tooltip System ───────────────────────────────────
function initTooltips() {
  const tooltipContainer = document.getElementById('tooltip-container');
  if (!tooltipContainer) return;

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (!target) return;

    const text = target.getAttribute('data-tooltip');
    tooltipContainer.textContent = text;
    tooltipContainer.classList.add('visible');

    const rect = target.getBoundingClientRect();
    const tooltipRect = tooltipContainer.getBoundingClientRect();

    let top = rect.bottom + 8;
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

    if (left < 8) left = 8;
    if (left + tooltipRect.width > window.innerWidth - 8) {
      left = window.innerWidth - tooltipRect.width - 8;
    }
    if (top + tooltipRect.height > window.innerHeight - 8) {
      top = rect.top - tooltipRect.height - 8;
    }

    tooltipContainer.style.top = top + 'px';
    tooltipContainer.style.left = left + 'px';
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('[data-tooltip]')) {
      tooltipContainer.classList.remove('visible');
    }
  });
}

// ─── Offline / Online Status ──────────────────────────
function initConnectionStatus() {
  const badge = document.getElementById('connection-badge');
  const syncToast = document.getElementById('sync-toast');
  if (!badge) return;

  let wasOffline = false;

  function updateStatus() {
    const isOnline = navigator.onLine;

    if (!isOnline) {
      wasOffline = true;
      badge.style.display = 'block';
      badge.className = 'offline';
      badge.textContent = '⚠️ Offline Mode — Your progress is saved locally';
    } else if (wasOffline) {
      badge.className = 'online';
      badge.textContent = '🌐 Back Online';

      if (syncToast) {
        syncToast.style.display = 'block';
        setTimeout(() => {
          syncToast.style.display = 'none';
        }, 3000);
      }

      setTimeout(() => {
        badge.className = 'hidden';
      }, 2500);

      wasOffline = false;
    } else {
      badge.className = 'hidden';
    }
  }

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
  updateStatus();
}

// ─── Stats Bar ────────────────────────────────────────
function updateStatsBar() {
  if (typeof getStats !== 'function') return;
  getStats().then(stats => {
    const streakEl = document.getElementById('stat-streak');
    const levelEl = document.getElementById('stat-level');
    const traceEl = document.getElementById('stat-trace');

    if (streakEl) {
      const streak = stats.streak || 0;
      streakEl.textContent = streak > 0 ? `🔥 ${streak}` : '🔥 0';
    }

    if (levelEl) {
      levelEl.textContent = `Lv ${stats.level || 1}`;
    }

    if (traceEl) {
      const hasTraceData = stats.traceTotal > 0;
      if (hasTraceData) {
        const accuracy = Math.round((stats.traceCorrect / stats.traceTotal) * 100);
        traceEl.textContent = `${accuracy}%`;
      } else {
        traceEl.textContent = '–';
      }
    }
  }).catch(err => console.warn('Failed to load stats:', err));
}

// ─── Home Screen ──────────────────────────────────────
function renderHome() {
  const container = document.getElementById('subject-list');
  if (!container) return;
  container.innerHTML = '';

  updateStatsBar();
  initTooltips();
  initConnectionStatus();

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.onclick = toggleTheme;

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.onclick = () => {
      const tab = btn.dataset.tab;
      if (tab === 'learn') navigateTo('home');
      else if (tab === 'practice') navigateTo('practice');
      else if (tab === 'profile') navigateTo('profile');
    };
  });

  const subjects = [
    { id: 'html', name: 'HTML', desc: '3 levels · 30 lessons', icon: '📄' },
    { id: 'css', name: 'CSS', desc: '3 levels · 30 lessons', icon: '🎨' },
    { id: 'javascript', name: 'JavaScript', desc: '3 levels · 30 lessons', icon: '⚡' },
    { id: 'python', name: 'Python', desc: '3 levels · 30 lessons', icon: '🐍' }
  ];

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:20px';

  subjects.forEach(subject => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div style="font-size:32px;margin-bottom:8px">${subject.icon}</div>
      <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px">${subject.name}</div>
      <div style="font-size:12px;color:var(--text-muted)">${subject.desc}</div>
    `;
    card.onclick = () => navigateTo('levels', { subject: subject.id });
    wrapper.appendChild(card);
  });

  container.appendChild(wrapper);
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Lesson List Screen ───────────────────────────────
function renderLessonList(subjectId, level) {
  const container = document.getElementById('lesson-list');
  if (!container) return;
  container.innerHTML = '';

  const lessonContainer = document.createElement('div');
  lessonContainer.className = 'lessons-container';
  lessonContainer.innerHTML = `<p style="color:var(--text-muted);text-align:center">Lessons loading...</p>`;
  container.appendChild(lessonContainer);

  document.getElementById('btn-back-levels').onclick = () =>
    navigateTo('levels', { subject: subjectId });
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Lesson Detail Screen ─────────────��───────────────
function renderLesson(subjectId, level, lessonId) {
  const container = document.getElementById('lesson-content');
  if (!container) return;
  container.innerHTML = '';

  const body = document.createElement('div');
  body.className = 'lesson-body';
  body.innerHTML = `<p style="color:var(--text-muted)">Lesson loading...</p>`;
  container.appendChild(body);

  document.getElementById('btn-back-lessons').onclick = () => 
    navigateTo('lessons', { subject: subjectId, level });
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Levels Screen ────────────────────────────────────
function renderLevels(subjectId) {
  const container = document.getElementById('level-list');
  if (!container) return;
  container.innerHTML = '';

  const list = document.createElement('div');
  list.className = 'level-list';

  ['beginner', 'intermediate', 'advanced'].forEach(level => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
      <div class="level-name">${level.charAt(0).toUpperCase() + level.slice(1)}</div>
      <div class="level-meta">30 lessons</div>
      <div class="level-progress"><div class="level-progress-fill" style="width:0%"></div></div>
    `;
    card.onclick = () => navigateTo('lessons', { subject: subjectId, level });
    list.appendChild(card);
  });

  container.appendChild(list);
  document.getElementById('btn-back-home').onclick = () => navigateTo('home');
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Practice Screen ──────────────────────────────────
function renderPractice() {
  const container = document.getElementById('practice-content');
  if (!container) return;
  container.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:20px';

  ['HTML', 'CSS', 'Python'].forEach(lang => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div style="font-size:32px;margin-bottom:8px">💻</div>
      <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px">${lang}</div>
      <div style="font-size:12px;color:var(--text-muted)">Practice here</div>
    `;
    wrapper.appendChild(card);
  });

  container.appendChild(wrapper);
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Profile Screen ───────────────────────────────────
function renderProfile() {
  const container = document.getElementById('profile-content');
  if (!container) return;

  container.innerHTML = `
    <div style="padding:24px">
      <div style="text-align:center;margin-bottom:32px">
        <div style="width:80px;height:80px;border-radius:50%;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 12px;font-size:32px">👤</div>
        <div style="font-size:16px;font-weight:700;color:var(--text)">Student</div>
      </div>
      <div style="background:var(--surface);border:1.5px solid var(--border);
        border-radius:16px;padding:20px;margin-bottom:16px">
        <div style="font-size:14px;color:var(--text-muted);margin-bottom:12px">Stats</div>
        <div style="display:flex;justify-content:space-around">
          <div style="text-align:center">
            <div style="font-size:24px;font-weight:800;color:var(--accent)">0</div>
            <div style="font-size:12px;color:var(--text-muted)">Lessons</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:24px;font-weight:800;color:var(--success)">0</div>
            <div style="font-size:12px;color:var(--text-muted)">Exams</div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Helpers ──────────────────────────────────────────
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
