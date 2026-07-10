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
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
  if (btn) btn.classList.add('active');
}

// ─── Navigate ─────────────────────────────────────────
function navigateTo(route, state = {}) {
  currentRoute = route;
  routeState = state;

  document.getElementById('screen-login').classList.remove('active');
  document.getElementById('screen-main').classList.add('active');

  switch (route) {
    case 'login':
      document.getElementById('screen-main').classList.remove('active');
      document.getElementById('screen-login').classList.add('active');
      renderAuth();
      break;

    case 'home':
      showTab('tab-learn');
      setActiveNav('learn');
      renderHome();
      break;

    case 'levels':
      showTab('tab-levels');
      setActiveNav('learn');
      renderLevels(state.subject);
      break;

    case 'lessons':
      showTab('tab-lessons');
      setActiveNav('learn');
      renderLessonList(state.subject, state.level);
      break;

    case 'lesson':
      showTab('tab-lesson');
      setActiveNav('learn');
      renderLesson(state.subject, state.level, state.lessonId);
      break;

    case 'exam':
      showTab('tab-exam');
      setActiveNav('learn');
      renderExam(state.subject, state.level);
      break;

    case 'practice':
      showTab('tab-practice');
      setActiveNav('practice');
      renderPractice();
      break;

    case 'editor':
      showTab('tab-editor');
      renderEditor(state);
      break;

    case 'profile':
      showTab('tab-profile');
      setActiveNav('profile');
      renderProfile();
      break;

    default:
      showTab('tab-learn');
      setActiveNav('learn');
      renderHome();
  }

  window.scrollTo(0, 0);
}