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
  const moonSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:block">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`;
  const sunSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:block">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`;
  document.querySelectorAll('.theme-toggle, #theme-toggle').forEach(btn => {
    btn.innerHTML = current === 'light' ? moonSVG : sunSVG;
  });
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

    // Keep tooltip on screen
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
      // Just came back online
      badge.className = 'online';
      badge.textContent = '🌐 Back Online';

      // Show sync toast
      if (syncToast) {
        syncToast.style.display = 'block';
        setTimeout(() => {
          syncToast.style.display = 'none';
        }, 3000);
      }

      // Hide badge after a delay
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
      streakEl.style.color = streak > 0 ? 'var(--accent)' : 'var(--text-muted)';
    }

    if (levelEl) {
      levelEl.textContent = `Lv ${stats.level || 1}`;
    }

    if (traceEl) {
      const hasTraceData = stats.traceTotal > 0;
      if (hasTraceData) {
        const accuracy = Math.round((stats.traceCorrect / stats.traceTotal) * 100);
        traceEl.textContent = `${accuracy}%`;
        traceEl.style.color = accuracy >= 70 ? 'var(--success)' : 'var(--accent)';
      } else {
        traceEl.textContent = 'Start a lesson!';
        traceEl.style.color = 'var(--text-muted)';
        traceEl.style.fontSize = '12px';
      }
    }
  }).catch(err => {
    console.warn('Failed to load stats:', err);
    // Show friendly fallback
    const streakEl = document.getElementById('stat-streak');
    const levelEl = document.getElementById('stat-level');
    const traceEl = document.getElementById('stat-trace');
    if (streakEl) streakEl.textContent = '🔥 0';
    if (levelEl) levelEl.textContent = 'Lv 1';
    if (traceEl) {
      traceEl.textContent = 'Start a lesson!';
      traceEl.style.color = 'var(--text-muted)';
      traceEl.style.fontSize = '12px';
    }
  });
}

// ─── First-Run Onboarding Walkthrough ──────────────────
const ONBOARDING_STEPS = [
  {
    target: '#stats-bar',
    title: '👋 Welcome to AirCode',
    body: 'This bar tracks your streak, level, and trace accuracy as you learn. Everything here is saved on your device, even offline.'
  },
  {
    target: '#subject-list',
    title: '📚 Pick a subject',
    body: 'Choose a language to start learning. Every lesson works with zero internet once the app is loaded.'
  },
  {
    target: null,
    title: '🔍 Trace before you run',
    body: 'When you get to the code editor, try predicting the output before hitting Run. That habit is the whole idea behind AirCode.'
  }
];

function maybeShowOnboarding() {
  if (typeof dbGet !== 'function' || typeof STORES === 'undefined') return;
  dbGet(STORES.SESSION, 'onboarded').then(flag => {
    if (flag) return;
    showOnboardingStep(0);
  }).catch(() => {});
}

function showOnboardingStep(index) {
  document.getElementById('onboarding-overlay')?.remove();

  if (index >= ONBOARDING_STEPS.length) {
    if (typeof dbSet === 'function' && typeof STORES !== 'undefined') {
      dbSet(STORES.SESSION, { key: 'onboarded', value: true });
    }
    return;
  }

  const step = ONBOARDING_STEPS[index];
  const targetEl = step.target ? document.querySelector(step.target) : null;

  const overlay = document.createElement('div');
  overlay.id = 'onboarding-overlay';
  overlay.style.cssText = `position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.55)`;

  let highlightStyle = '';
  if (targetEl) {
    const r = targetEl.getBoundingClientRect();
    highlightStyle = `position:absolute;top:${r.top - 4}px;left:${r.left - 4}px;
      width:${r.width + 8}px;height:${r.height + 8}px;
      border:2px solid var(--accent);border-radius:12px;
      box-shadow:0 0 0 9999px rgba(0,0,0,0.55);pointer-events:none`;
  }

  const cardTop = targetEl
    ? Math.min(targetEl.getBoundingClientRect().bottom + 16, window.innerHeight - 180)
    : window.innerHeight / 2 - 90;

  overlay.innerHTML = `
    ${targetEl ? `<div style="${highlightStyle}"></div>` : ''}
    <div style="position:absolute;top:${cardTop}px;left:16px;right:16px;max-width:340px;margin:0 auto;
      background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:18px;
      box-shadow:0 8px 32px rgba(0,0,0,0.4)">
      <div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px">${step.title}</div>
      <div style="font-size:13px;color:var(--text-muted);line-height:1.5;margin-bottom:14px">${step.body}</div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <button id="ob-skip" style="font-size:12px;color:var(--text-muted);background:none;padding:6px">Skip</button>
        <div style="display:flex;gap:6px;align-items:center">
          <span style="font-size:11px;color:var(--text-muted)">${index + 1}/${ONBOARDING_STEPS.length}</span>
          <button id="ob-next" class="btn-primary" style="padding:8px 16px;font-size:13px">
            ${index === ONBOARDING_STEPS.length - 1 ? 'Got it' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById('ob-next').addEventListener('click', () => showOnboardingStep(index + 1));
  document.getElementById('ob-skip').addEventListener('click', () => {
    if (typeof dbSet === 'function' && typeof STORES !== 'undefined') {
      dbSet(STORES.SESSION, { key: 'onboarded', value: true });
    }
    overlay.remove();
  });
}

// ─── Home Screen ──────────────────────────────────────
function renderHome() {
  const container = document.getElementById('subject-list');
  if (!container) return;
  container.innerHTML = '';

  updateStatsBar();
  maybeShowOnboarding();
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
    {
      id: 'html',
      name: 'HTML',
      desc: 'Structure of the web · 3 levels · 30 lessons',
      color: '#e34c26',
      bg: 'rgba(227,76,38,0.12)',
      border: 'rgba(227,76,38,0.3)',
      svg: `<svg viewBox="0 0 452 520" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path fill="#e44d26" d="M41 460L0 0h452l-41 460-185 52z"/>
        <path fill="#f16529" d="M226 489l149-41 35-394H226z"/>
        <path fill="#ebebeb" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l8 87 116 32z"/>
        <path fill="#fff" d="M226 208v56h70l-7 73-63 17v59l116-32 8-87 8-86zm0-114v56h137l5-56z"/>
      </svg>`
    },
    {
      id: 'css',
      name: 'CSS',
      desc: 'Style and layout · 3 levels · 30 lessons',
      color: '#264de4',
      bg: 'rgba(38,77,228,0.12)',
      border: 'rgba(38,77,228,0.3)',
      svg: `<svg viewBox="0 0 384 512" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path fill="#264de4" d="M0 0l35 395 157 45 157-45 35-395z"/>
        <path fill="#2965f1" d="M192 432l128-36 30-340H192z"/>
        <path fill="#fff" d="M192 149h64l4-45h-68V57h117l-12 129H192zm0 205l-64-18-4-43H77l8 89 107 30z"/>
        <path fill="#ebebeb" d="M192 149v47h-60l-4-47zm0 205v47l-107-30-4-18h47l2 19 62 17z"/>
        <path fill="#fff" d="M192 196h60l-6 64-54 15v49l100-28 13-148H192z"/>
        <path fill="#ebebeb" d="M192 196v47l-57 16-4-47zm0 128v49l-62-17-4-19h47l2 19z"/>
      </svg>`
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      desc: 'Logic and interactivity · 3 levels · 30 lessons',
      color: '#f7df1e',
      bg: 'rgba(247,223,30,0.12)',
      border: 'rgba(247,223,30,0.3)',
      svg: `<svg viewBox="0 0 32 32" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#f7df1e"/>
        <text x="3" y="26" font-family="Arial Black,sans-serif" font-weight="900" font-size="18" fill="#222">JS</text>
      </svg>`
    },
    {
      id: 'python',
      name: 'Python',
      desc: 'Programming fundamentals · 3 levels · 30 lessons',
      color: '#3572A5',
      bg: 'rgba(53,114,165,0.12)',
      border: 'rgba(53,114,165,0.3)',
      svg: `<svg viewBox="0 0 256 255" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M126 0C60 0 64 28 64 28v29h63v9H40S0 62 0 128s35 64 35 64h21V175s-1-35 34-35h61s33 1 33-32V34S159 0 126 0zm-13 19c7 0 12 5 12 12s-5 12-12 12-12-5-12-12 5-12 12-12z" fill="#3572A5"/>
        <path d="M130 255c66 0 62-28 62-28v-29h-63v-9h87s40 4 40-62-35-64-35-64h-21v17s1 35-34 35H105s-33-1-33 32v53s-5 55 58 55zm13-19c-7 0-12-5-12-12s5-12 12-12 12 5 12 12-5 12-12 12z" fill="#ffd43b"/>
      </svg>`
    }
  ];

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'padding:20px;display:flex;flex-direction:column;gap:12px';

  subjects.forEach(subject => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.cssText = `
      background: var(--surface);
      border: 1.5px solid ${subject.border};
      border-radius: 16px;
      padding: 16px 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: all 0.2s;
      box-shadow: var(--shadow);
    `;

    card.innerHTML = `
      <div style="width:44px;height:44px;border-radius:10px;background:${subject.bg};
        display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${subject.svg}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:2px">
          ${subject.name}
        </div>
        <div style="font-size:12px;color:var(--text-muted);white-space:nowrap;
          overflow:hidden;text-overflow:ellipsis">
          ${subject.desc}
        </div>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
        style="color:var(--text-muted);flex-shrink:0">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    `;

    card.addEventListener('mouseover', () => {
      card.style.borderColor = subject.color;
      card.style.transform = 'translateX(4px)';
    });
    card.addEventListener('mouseout', () => {
      card.style.borderColor = subject.border;
      card.style.transform = 'translateX(0)';
    });
    card.addEventListener('click', () => navigateTo('levels', { subject: subject.id }));
    wrapper.appendChild(card);
  });

  container.appendChild(wrapper);
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Lesson List Screen ───────────────────────────────
function renderLessonList(subjectId, level) {
  const subject = getSubject(subjectId);
  document.getElementById('level-title').textContent = `${subject.name} — ${capitalize(level)}`;

  const container = document.getElementById('lesson-list');
  container.innerHTML = '';

  const lessons = getLessons(subjectId, level);
  const lessonContainer = document.createElement('div');
  lessonContainer.className = 'lessons-container';

  const prevLevel = level === 'intermediate' ? 'beginner' : level === 'advanced' ? 'intermediate' : null;

  getExamResult(subjectId, prevLevel || 'beginner').then(examResult => {
    const levelLocked = prevLevel && !examResult?.passed;

    if (levelLocked) {
      const banner = document.createElement('div');
      banner.style.cssText = `
        margin: 0 0 16px;
        padding: 16px;
        background: rgba(248,113,113,0.08);
        border: 1.5px solid rgba(248,113,113,0.3);
        border-radius: 12px;
        text-align: center;
        color: var(--error);
        font-size: 14px;
        font-weight: 500;
      `;
      banner.innerHTML = `🔒 Complete and pass the <strong>${capitalize(prevLevel)}</strong> exam with 70%+ to unlock this level.`;
      lessonContainer.appendChild(banner);
    }

    getAllProgress().then(allProgress => {
      const progressMap = {};
      allProgress.forEach(p => progressMap[p.id] = p);

      lessons.forEach((lesson, index) => {
        const progressId = `${subjectId}-${level}-${lesson.id}`;
        const done = progressMap[progressId]?.completed;

        const item = document.createElement('div');
        item.className = 'lesson-item';

        if (levelLocked) {
          item.style.cssText = 'opacity:0.5;cursor:not-allowed;';
        }

        item.innerHTML = `
          <div class="lesson-number ${done ? 'completed' : ''}">
            ${done ? '✓' : levelLocked ? '🔒' : index + 1}
          </div>
          <div class="lesson-info">
            <h4>${lesson.title}</h4>
            <p>${lesson.summary}</p>
          </div>
        `;

        if (!levelLocked) {
          item.addEventListener('click', () => navigateTo('lesson', {
            subject: subjectId,
            level,
            lessonId: lesson.id
          }));
        } else {
          item.addEventListener('click', () =>
            showLockMessage(`Pass the ${capitalize(prevLevel)} exam to unlock these lessons`)
          );
        }

        lessonContainer.appendChild(item);
      });

      const examBtn = document.createElement('button');
      examBtn.className = levelLocked ? 'btn-secondary' : 'btn-success';
      examBtn.style.cssText = 'margin:8px 0;width:100%';
      examBtn.textContent = levelLocked ? '🔒 Exam Locked' : '📝 Take Level Exam';

      if (!levelLocked) {
        examBtn.addEventListener('click', () =>
          navigateTo('exam', { subject: subjectId, level })
        );
      }

      lessonContainer.appendChild(examBtn);
      container.appendChild(lessonContainer);
    });
  });

  document.getElementById('btn-back-levels').onclick = () =>
    navigateTo('levels', { subject: subjectId });
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Lesson Detail Screen ─────────────────────────────
function renderLesson(subjectId, level, lessonId) {
  const lesson = getLesson(subjectId, level, lessonId);
  const lessons = getLessons(subjectId, level);
  const currentIndex = lessons.findIndex(l => l.id === lessonId);

  document.getElementById('lesson-title').textContent = lesson.title;

  const container = document.getElementById('lesson-content');
  container.innerHTML = '';

  const body = document.createElement('div');
  body.className = 'lesson-body';

  lesson.content.forEach(block => {
    if (block.type === 'text') {
      const p = document.createElement('p');
      p.textContent = block.value;
      body.appendChild(p);
    } else if (block.type === 'heading') {
      const h3 = document.createElement('h3');
      h3.textContent = block.value;
      body.appendChild(h3);
    } else if (block.type === 'code') {
      const pre = document.createElement('div');
      pre.className = 'code-block';
      pre.textContent = block.value;
      body.appendChild(pre);
    }
  });

  container.appendChild(body);

  if (lesson.quiz) {
    renderExercise(lesson.quiz, container, subjectId, level, lessonId, lessons, currentIndex);
  }
  document.getElementById('btn-back-lessons').onclick = () => navigateTo('lessons', { subject: subjectId, level });
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Levels Screen ────────────────────────────────────
function renderLevels(subjectId) {
  const subject = getSubject(subjectId);
  document.getElementById('subject-title').textContent = subject.name;

  const container = document.getElementById('level-list');
  container.innerHTML = '';

  const list = document.createElement('div');
  list.className = 'level-list';

  Promise.all([
    getExamResult(subjectId, 'beginner'),
    getExamResult(subjectId, 'intermediate')
  ]).then(([begExam, intExam]) => {

    const begPassed = begExam?.passed === true;
    const intPassed = intExam?.passed === true;

    const levelConfig = [
      { level: 'beginner', locked: false, lockReason: null },
      { level: 'intermediate', locked: !begPassed, lockReason: 'Pass the Beginner exam (70%+) to unlock' },
      { level: 'advanced', locked: !intPassed, lockReason: 'Pass the Intermediate exam (70%+) to unlock' }
    ];

    levelConfig.forEach(({ level, locked, lockReason }) => {
      const lessons = getLessons(subjectId, level);
      const hasContent = lessons.length > 0;

      const card = document.createElement('div');
      card.className = 'level-card';
      if (locked) card.style.cssText = 'opacity:0.6;cursor:not-allowed;';

      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div class="level-name">${capitalize(level)}</div>
          <div style="display:flex;gap:8px;align-items:center">
            <span class="badge badge-${level}">${level}</span>
            <span style="font-size:16px">${locked ? '🔒' : '🔓'}</span>
          </div>
        </div>
        <div class="level-meta">${hasContent ? lessons.length + ' lessons' : 'Coming soon'}</div>
        ${lockReason && locked ? `<div style="font-size:12px;color:var(--error);margin-top:6px;
          padding:8px 10px;background:rgba(248,113,113,0.08);border-radius:8px;
          border:1px solid rgba(248,113,113,0.2)">🔒 ${lockReason}</div>` : ''}
        <div class="level-progress" style="margin-top:14px">
          <div class="level-progress-fill" style="width:0%"></div>
        </div>
      `;

      if (hasContent) {
        card.addEventListener('click', () =>
          navigateTo('lessons', { subject: subjectId, level })
        );
      }

      if (locked) {
        card.addEventListener('click', () => showLockMessage(lockReason));
      }

      list.appendChild(card);
    });

    container.appendChild(list);
  });

  document.getElementById('btn-back-home').onclick = () => navigateTo('home');
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

function showLockMessage(message) {
  const existing = document.getElementById('lock-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'lock-toast';
  toast.className = 'toast';
  toast.textContent = '🔒 ' + message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ─── Exercise ─────────────────────────────────────────
function renderExercise(quiz, container, subjectId, level, lessonId, lessons, currentIndex) {
  const box = document.createElement('div');
  box.className = 'exercise-box';
  box.innerHTML = `
    <h3>✏️ Practice Quiz — ${quiz.length} Questions</h3>
    <div id="quiz-questions"></div>
    <button class="btn-primary" id="btn-submit-quiz" style="width:100%;margin-top:16px">Submit Answers</button>
    <div id="quiz-result" style="display:none;margin-top:16px"></div>
  `;
  container.appendChild(box);

  const questionsContainer = box.querySelector('#quiz-questions');
  const userAnswers = new Array(quiz.length).fill(null);

  quiz.forEach((q, qi) => {
    const qDiv = document.createElement('div');
    qDiv.style.cssText = 'margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid var(--border)';
    qDiv.innerHTML = `
      <p style="font-weight:600;margin-bottom:10px;color:var(--text)">${qi + 1}. ${q.question}</p>
      <div class="exercise-options" id="options-${qi}"></div>
      <div id="feedback-${qi}" style="font-size:13px;margin-top:8px"></div>
    `;
    questionsContainer.appendChild(qDiv);

    const optionsDiv = qDiv.querySelector(`#options-${qi}`);
    q.options.forEach((option, oi) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.dataset.index = oi;
      btn.addEventListener('click', () => {
        optionsDiv.querySelectorAll('.option-btn').forEach(b => b.style.borderColor = 'var(--border)');
        btn.style.borderColor = 'var(--accent)';
        userAnswers[qi] = oi;
      });
      optionsDiv.appendChild(btn);
    });
  });

  box.querySelector('#btn-submit-quiz').addEventListener('click', () => {
    const unanswered = userAnswers.findIndex(a => a === null);
    if (unanswered !== -1) {
      alert(`Please answer question ${unanswered + 1} before submitting.`);
      return;
    }

    let score = 0;
    quiz.forEach((q, qi) => {
      const optionsDiv = questionsContainer.querySelector(`#options-${qi}`);
      const feedbackDiv = questionsContainer.querySelector(`#feedback-${qi}`);
      const buttons = optionsDiv.querySelectorAll('.option-btn');
      buttons.forEach(b => b.disabled = true);

      if (userAnswers[qi] === q.correct) {
        score++;
        buttons[userAnswers[qi]].classList.add('correct');
        feedbackDiv.innerHTML = `<span style="color:var(--success)">✓ Correct!</span>`;
      } else {
        buttons[userAnswers[qi]].classList.add('wrong');
        buttons[q.correct].classList.add('correct');
        feedbackDiv.innerHTML = `<span style="color:var(--error)">✗ Wrong.</span> <span style="color:var(--text-muted)">${q.explanation}</span>`;
      }
    });

    box.querySelector('#btn-submit-quiz').style.display = 'none';

    const percent = Math.round((score / quiz.length) * 100);
    const resultDiv = box.querySelector('#quiz-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <div style="text-align:center;padding:16px;background:var(--surface2);border-radius:12px">
        <div style="font-size:32px;font-weight:800;color:${percent >= 60 ? 'var(--success)' : 'var(--error)'}">${score}/${quiz.length}</div>
        <div style="color:var(--text-muted);margin-top:4px">${percent}% — ${percent >= 60 ? 'Great work!' : 'Review the lesson and try again.'}</div>
      </div>
    `;

    saveProgress(subjectId, level, lessonId, {
      completed: true,
      score: percent,
      completedAt: new Date().toISOString()
    });

    showNextButton(container, subjectId, level, lessonId, lessons, currentIndex);
  });
}

// ─── Show "Next Lesson" Button ─────────────────────────
function showNextButton(container, subjectId, level, lessonId, lessons, currentIndex) {
  const existing = container.querySelector('#btn-next-lesson');
  if (existing) existing.remove();

  const nextLesson = lessons[currentIndex + 1];

  const btn = document.createElement('button');
  btn.id = 'btn-next-lesson';
  btn.className = 'btn-primary';
  btn.style.cssText = 'width:100%;margin-top:16px;padding:14px;';

  if (nextLesson) {
    btn.textContent = `Next: ${nextLesson.title} →`;
    btn.addEventListener('click', () => {
      navigateTo('lesson', {
        subject: subjectId,
        level,
        lessonId: nextLesson.id
      });
    });
  } else {
    btn.textContent = '✓ All lessons complete — Take the exam';
    btn.addEventListener('click', () => {
      navigateTo('exam', { subject: subjectId, level });
    });
  }

  container.appendChild(btn);
}

// ─── Exam Screen ──────────────────────────────────────
function renderExam(subjectId, level) {
  const questions = getExam(subjectId, level);
  const container = document.getElementById('exam-content');
  container.innerHTML = '';

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <div class="empty-state-title">Exam Coming Soon</div>
        <div class="empty-state-desc">This exam is still being prepared. Check back later!</div>
      </div>
    `;
    return;
  }

  let currentQ = 0;
  let score = 0;

  function renderQuestion() {
    const q = questions[currentQ];
    container.innerHTML = `
      <div class="exam-container">
        <div class="exam-progress">Question ${currentQ + 1} of ${questions.length}</div>
        <div class="progress-bar-wrap" style="margin-bottom:20px">
          <div style="height:4px;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:99px;width:${(currentQ / questions.length) * 100}%;transition:width 0.3s"></div>
        </div>
        <p class="exam-question">${q.question}</p>
        <div class="exercise-options" id="exam-options"></div>
      </div>
    `;

    const optionsContainer = container.querySelector('#exam-options');
    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.addEventListener('click', () => {
        optionsContainer.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
        if (index === q.correct) {
          btn.classList.add('correct');
          score++;
        } else {
          btn.classList.add('wrong');
          optionsContainer.querySelectorAll('.option-btn')[q.correct].classList.add('correct');
        }
        setTimeout(() => {
          currentQ++;
          if (currentQ < questions.length) {
            renderQuestion();
          } else {
            showExamResult();
          }
        }, 1000);
      });
      optionsContainer.appendChild(btn);
    });
  }

  function showExamResult() {
    const percent = Math.round((score / questions.length) * 100);
    const passed = percent >= 70;

    saveExamResult(subjectId, level, {
      score,
      total: questions.length,
      percent,
      passed,
      completedAt: new Date().toISOString()
    });

    container.innerHTML = `
      <div class="exam-result">
        <div class="exam-score">${percent}%</div>
        <p style="font-size:20px;font-weight:700;color:${passed ? 'var(--success)' : 'var(--error)'};margin:12px 0">
          ${passed ? '🎉 You Passed!' : '😅 Keep Practicing'}
        </p>
        <p style="color:var(--text-muted);margin-bottom:32px">
          You got ${score} out of ${questions.length} correct.
          ${passed ? 'Great work!' : 'You need 70% to pass.'}
        </p>
        <button class="btn-primary" id="btn-back-to-lessons">Back to Lessons</button>
        ${!passed ? `<button class="btn-secondary" id="btn-retry-exam" style="margin-top:10px;width:100%">Retry Exam</button>` : ''}
      </div>
    `;

    document.getElementById('btn-back-to-lessons').addEventListener('click', () =>
      navigateTo('lessons', { subject: subjectId, level })
    );
    if (!passed) {
      document.getElementById('btn-retry-exam').addEventListener('click', () =>
        renderExam(subjectId, level)
      );
    }
  }

  renderQuestion();
  document.getElementById('btn-back-exam').onclick = () => navigateTo('lessons', { subject: subjectId, level });
}

// ─── Practice Screen ──────────────────────────────────
function renderPractice() {
  const container = document.getElementById('practice-content');
  if (!container) return;
  container.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'padding:20px;display:flex;flex-direction:column;gap:12px';

  const htmlStarter = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>Start coding here...</p>\n</body>\n</html>';
  
  const cssStarter = 'body {\n  font-family: sans-serif;\n  background: #f0f0f0;\n  margin: 0;\n  padding: 20px;\n}\n\nh1 {\n  color: #333;\n}\n\np {\n  color: #666;\n}';
  
  const pythonStarter = '# Write your Python here\n\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))\nprint(greet("AirCode"))';

  const subjects = [
    {
      id: 'html',
      name: 'HTML',
      desc: 'Practice building web structure',
      color: '#e34c26',
      bg: 'rgba(227,76,38,0.12)',
      border: 'rgba(227,76,38,0.3)',
      starter: htmlStarter,
      svg: `<svg viewBox="0 0 452 520" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path fill="#e44d26" d="M41 460L0 0h452l-41 460-185 52z"/>
        <path fill="#f16529" d="M226 489l149-41 35-394H226z"/>
        <path fill="#ebebeb" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l8 87 116 32z"/>
        <path fill="#fff" d="M226 208v56h70l-7 73-63 17v59l116-32 8-87 8-86zm0-114v56h137l5-56z"/>
      </svg>`
    },
    {
      id: 'css',
      name: 'CSS',
      desc: 'Practice styling and layouts',
      color: '#264de4',
      bg: 'rgba(38,77,228,0.12)',
      border: 'rgba(38,77,228,0.3)',
      starter: cssStarter,
      svg: `<svg viewBox="0 0 384 512" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path fill="#264de4" d="M0 0l35 395 157 45 157-45 35-395z"/>
        <path fill="#2965f1" d="M192 432l128-36 30-340H192z"/>
        <path fill="#fff" d="M192 149h64l4-45h-68V57h117l-12 129H192zm0 205l-64-18-4-43H77l8 89 107 30z"/>
        <path fill="#ebebeb" d="M192 149v47h-60l-4-47zm0 205v47l-107-30-4-18h47l2 19 62 17z"/>
        <path fill="#fff" d="M192 196h60l-6 64-54 15v49l100-28 13-148H192z"/>
        <path fill="#ebebeb" d="M192 196v47l-57 16-4-47zm0 128v49l-62-17-4-19h47l2 19z"/>
      </svg>`
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      desc: 'Logic and interactivity · 3 levels · 30 lessons',
      color: '#f7df1e',
      bg: 'rgba(247,223,30,0.12)',
      border: 'rgba(247,223,30,0.3)',
      svg: `<svg viewBox="0 0 32 32" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#f7df1e"/>
        <text x="3" y="26" font-family="Arial Black,sans-serif" font-weight="900" font-size="18" fill="#222">JS</text>
      </svg>`
    },
    {
      id: 'python',
      name: 'Python',
      desc: 'Practice programming fundamentals',
      color: '#3572A5',
      bg: 'rgba(53,114,165,0.12)',
      border: 'rgba(53,114,165,0.3)',
      starter: pythonStarter,
      svg: `<svg viewBox="0 0 256 255" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M126 0C60 0 64 28 64 28v29h63v9H40S0 62 0 128s35 64 35 64h21V175s-1-35 34-35h61s33 1 33-32V34S159 0 126 0zm-13 19c7 0 12 5 12 12s-5 12-12 12-12-5-12-12 5-12 12-12z" fill="#3572A5"/>
        <path d="M130 255c66 0 62-28 62-28v-29h-63v-9h87s40 4 40-62-35-64-35-64h-21v17s1 35-34 35H105s-33-1-33 32v53s-5 55 58 55zm13-19c-7 0-12-5-12-12s5-12 12-12 12 5 12 12-5 12-12 12z" fill="#ffd43b"/>
      </svg>`
    }
  ];

  subjects.forEach(subject => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.cssText = `
      background: var(--surface);
      border: 1.5px solid ${subject.border};
      border-radius: 16px;
      padding: 16px 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: all 0.2s;
      box-shadow: var(--shadow);
    `;

    card.innerHTML = `
      <div style="width:44px;height:44px;border-radius:10px;background:${subject.bg};
        display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${subject.svg}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:2px">
          ${subject.name}
        </div>
        <div style="font-size:12px;color:var(--text-muted)">
          ${subject.desc}
        </div>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
        style="color:var(--text-muted);flex-shrink:0">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    `;

    card.addEventListener('mouseover', () => {
      card.style.borderColor = subject.color;
      card.style.transform = 'translateX(4px)';
    });
    card.addEventListener('mouseout', () => {
      card.style.borderColor = subject.border;
      card.style.transform = 'translateX(0)';
    });
    card.addEventListener('click', () => {
      navigateTo('editor', {
        language: subject.id,
        title: subject.name + ' Editor',
        starterCode: subject.starter,
        backRoute: 'practice'
      });
    });

    wrapper.appendChild(card);
  });

  container.appendChild(wrapper);
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
}

// ─── Profile Screen ───────────────────────────────────
function renderProfile() {
  const container = document.getElementById('profile-content');
  if (!container) return;

  getSession().then(session => {
    container.innerHTML = `
      <div style="padding:24px">

        <!-- Avatar -->
        <div style="text-align:center;margin-bottom:32px">
          <div style="width:80px;height:80px;border-radius:50%;
            background:linear-gradient(135deg,#7c3aed,#2563eb);
            display:flex;align-items:center;justify-content:center;
            margin:0 auto 12px">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div style="font-size:16px;font-weight:700;color:var(--text)">
            ${session?.email?.split('@')[0] || 'Student'}
          </div>
          <div style="font-size:13px;color:var(--text-muted);margin-top:4px">
            ${session?.email || ''}
          </div>
        </div>

        <!-- Stats -->
        <div style="background:var(--surface);border:1.5px solid var(--border);
          border-radius:16px;padding:20px;margin-bottom:16px;box-shadow:var(--shadow)">
          <div style="font-size:11px;font-weight:700;color:var(--text-muted);
            text-transform:uppercase;letter-spacing:0.1em;margin-bottom:16px">
            Your Progress
          </div>
          <div id="profile-stats">
            <div style="color:var(--text-muted);font-size:14px">Loading...</div>
          </div>
        </div>

        <!-- Actions -->
        <div style="display:flex;flex-direction:column;gap:10px">

          <button id="btn-reset-progress"
            style="width:100%;text-align:left;padding:16px;
            background:var(--surface);border:1.5px solid var(--border);
            border-radius:14px;color:var(--text);display:flex;align-items:center;gap:12px;
            font-size:15px;font-weight:500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              style="color:var(--accent)">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 .49-3.36"/>
            </svg>
            Reset All Progress
          </button>

          <button id="btn-logout"
            style="width:100%;text-align:left;padding:16px;
            background:rgba(248,113,113,0.08);border:1.5px solid rgba(248,113,113,0.3);
            border-radius:14px;color:var(--error);display:flex;align-items:center;gap:12px;
            font-size:15px;font-weight:500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Log Out
          </button>

        </div>
      </div>
    `;

    getAllProgress().then(allProgress => {
      const completed = allProgress.filter(p => p.completed).length;
      const exams = allProgress.filter(p => p.type === 'exam' && p.passed).length;
      document.getElementById('profile-stats').innerHTML = `
        <div style="display:flex;justify-content:space-around;text-align:center">
          <div>
            <div style="font-size:28px;font-weight:800;color:var(--accent)">${completed}</div>
            <div style="font-size:12px;color:var(--text-muted)">Lessons Done</div>
          </div>
          <div>
            <div style="font-size:28px;font-weight:800;color:var(--success)">${exams}</div>
            <div style="font-size:12px;color:var(--text-muted)">Exams Passed</div>
          </div>
          <div>
            <div style="font-size:28px;font-weight:800;color:var(--accent2)">${SUBJECTS.length * 3 * 10}</div>
            <div style="font-size:12px;color:var(--text-muted)">Total Lessons</div>
          </div>
        </div>
      `;
    });

    document.getElementById('btn-logout').addEventListener('click', handleLogout);
    document.getElementById('btn-reset-progress').addEventListener('click', () => {
      if (confirm('Reset all your progress? This cannot be undone.')) {
        resetProgress().then(() => {
          alert('Progress reset.');
          renderProfile();
        });
      }
    });

    document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);
  });
}

// ─── Helpers ──────────────────────────────────────────
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
