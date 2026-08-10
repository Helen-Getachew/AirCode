// router.js — controls which tab/view is visible

let currentRoute = null;
let routeState = {};

// ─── Show Tab ─────────────────────────────────────────
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active-tab'));
  const tab = document.getElementById(tabId);
  if (tab) tab.classList.add('active-tab');
}

// ─── Update Bottom Nav ────────────────────────────────
function setActiveNav(tabName) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.removeAttribute('aria-current');
  });
  const btn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-current', 'page');
  }
}

// ─── Navigate ─────────────────────────────────────────
function navigateTo(route, state = {}) {
  currentRoute = route;
  routeState = state;

  const loginScreen = document.getElementById('screen-login');
  const mainScreen = document.getElementById('screen-main');

  if (!loginScreen || !mainScreen) {
    console.error('Router: required screens not found in DOM');
    return;
  }

  loginScreen.classList.remove('active');
  mainScreen.classList.add('active');

  switch (route) {
    case 'login':
      mainScreen.classList.remove('active');
      loginScreen.classList.add('active');
      if (typeof renderAuth === 'function') renderAuth();
      break;

    case 'home':
      showTab('tab-learn');
      setActiveNav('learn');
      if (typeof renderHome === 'function') renderHome();
      break;

    case 'levels':
      showTab('tab-levels');
      setActiveNav('learn');
      if (typeof renderLevels === 'function') renderLevels(state.subject);
      break;

    case 'lessons':
      showTab('tab-lessons');
      setActiveNav('learn');
      if (typeof renderLessonList === 'function') renderLessonList(state.subject, state.level);
      break;

    case 'lesson':
      showTab('tab-lesson');
      setActiveNav('learn');
      if (typeof renderLesson === 'function') renderLesson(state.subject, state.level, state.lessonId);
      break;

    case 'exam':
      showTab('tab-exam');
      setActiveNav('learn');
      if (typeof renderExam === 'function') renderExam(state.subject, state.level);
      break;

    case 'practice':
      showTab('tab-practice');
      setActiveNav('practice');
      if (typeof renderPractice === 'function') renderPractice();
      break;

    case 'editor':
      showTab('tab-editor');
      // Editor is not in bottom nav, so no active nav button
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
      });
      if (typeof renderEditor === 'function') renderEditor(state);
      break;

    case 'profile':
      showTab('tab-profile');
      setActiveNav('profile');
      if (typeof renderProfile === 'function') renderProfile();
      break;

    default:
      console.warn('Router: unknown route "' + route + '", falling back to home');
      showTab('tab-learn');
      setActiveNav('learn');
      if (typeof renderHome === 'function') renderHome();
  }

  window.scrollTo(0, 0);
}
