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

// ─── Start App ────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initTheme();

  getSession().then(session => {
    if (session && session.email) {
      console.log("Restored session:", session.email);

      updateStreak();
      navigateTo('home');

    } else {
      console.log("No saved session");
      navigateTo('login');
    }
  }).catch(error => {
    console.error("Session error:", error);
    navigateTo('login');
  });
});
// ─── Online / Offline Status ─────────────────────

const connectionBadge = document.getElementById("connection-badge");

function showConnectionStatus(status) {
  if (!connectionBadge) return;

  connectionBadge.className = status;

  if (status === "offline") {
    connectionBadge.textContent =
      "No internet connection — AirCode is offline";
    connectionBadge.style.display = "block";
  }

  if (status === "online") {
    connectionBadge.textContent =
      "✓ Back online";
    connectionBadge.style.display = "block";

    setTimeout(() => {
      connectionBadge.style.display = "none";
    }, 3000);
  }
}


// Detect changes
window.addEventListener("offline", () => {
  showConnectionStatus("offline");
});

window.addEventListener("online", () => {
  showConnectionStatus("online");
});


// Check current state
if (!navigator.onLine) {
  showConnectionStatus("offline");
}
