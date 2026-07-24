// app.js — entry point, starts the app

// ─── Register Service Worker ──────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('SW registered:', reg.scope);

        // Check for updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              console.log('New version available');
              // Optional: prompt user to refresh
              if (confirm('A new version of AirCode is available. Refresh to update?')) {
                newWorker.postMessage('skipWaiting');
                window.location.reload();
              }
            }
          });
        });
      })
      .catch(err => console.error('SW failed:', err));
  });
}
// ─── Intro split-logo transition ──────────────────────
function playSplitTransition(callback) {
  const el = document.getElementById('app-split-transition');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!el || prefersReducedMotion) {
    callback();
    return;
  }

  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    el.style.display = 'none';
    el.classList.remove('animate', 'fade-out');
    el.style.opacity = '';
    callback();
  }

  el.style.display = 'flex';
  el.style.opacity = '1';
  void el.offsetWidth; // force reflow so the transition applies cleanly

  // Hold the full logo for a beat, then split it apart
  setTimeout(() => el.classList.add('animate'), 500);

  // u-shape finishes last (it has the 0.05s animation-delay)
  el.addEventListener('animationend', function onEnd(e) {
    if (e.target.id !== 'u-shape') return;
    el.removeEventListener('animationend', onEnd);
    el.classList.add('fade-out');
    setTimeout(finish, 250);
  });

  // Safety net in case animationend never fires
  setTimeout(finish, 2200);
}
// ─── Start App ────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Check for existing session
  getSession().then(session => {
    if (session) {
      updateStreak();
      playSplitTransition(() => navigateTo('home'));
    } else {
      navigateTo('login');
    }
  }).catch(() => {
    // If anything fails, go to login
    navigateTo('login');
  });
});
