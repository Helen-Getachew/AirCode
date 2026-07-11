// app.js — entry point, starts the app
// ─── Connection Status Badge ──────────────────────────
function updateConnectionBadge() {
  const badge = document.getElementById('connection-badge');
  if (!badge) return;

  if (navigator.onLine) {
    badge.style.display = 'none';
  } else {
    badge.style.display = 'block';
    badge.style.background = '#7c3aed';
    badge.textContent = '📴 Offline — AirCode still works fully';
  }
}

window.addEventListener('online', updateConnectionBadge);
window.addEventListener('offline', updateConnectionBadge);
window.addEventListener('DOMContentLoaded', updateConnectionBadge); 
window.addEventListener('online', () => {
  updateConnectionBadge();
  const toast = document.getElementById('sync-toast');
  if (toast) {
    toast.style.display = 'block';
    setTimeout(() => toast.style.display = 'none', 3000);
  }
});
// ─── Register Service Worker ──────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.error('SW failed:', err));
  });
}

// ─── Start App ────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Check for existing session
  getSession().then(session => {
    if (session) {
      navigateTo('home');
    } else {
      navigateTo('login');
    }
  }).catch(() => {
    // If anything fails, go to login
    navigateTo('login');
  });
});
