// auth.js — handles login, signup, session management, Google Sign-In, and analytics

// ─── Check if online ──────────────────────────────────
function isOnline() {
  return navigator.onLine;
}

// ─── Render Auth Screen ───────────────────────────────
function renderAuth() {
  showLoginForm();
}

function showLoginForm() {
  const form = document.getElementById('auth-form');
  form.innerHTML = `
    <h2 class="auth-title">Welcome back</h2>
    <div class="auth-error" id="auth-error"></div>

    <div id="google-btn-container" style="margin-bottom:16px"></div>
    <div id="google-offline-note" style="display:none;font-size:12px;color:var(--text-muted);
      text-align:center;margin-bottom:16px">
      Google Sign-In needs internet. Use email below instead.
    </div>

    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <div style="flex:1;height:1px;background:var(--border)"></div>
      <span style="font-size:12px;color:var(--text-muted)">or</span>
      <div style="flex:1;height:1px;background:var(--border)"></div>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input class="form-input" type="email" id="input-email" placeholder="you@example.com" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input class="form-input" type="password" id="input-password" placeholder="Your password" />
    </div>
    <button class="btn-primary" id="btn-login">Log In</button>
    <div class="auth-switch">
      Don't have an account? <span id="go-signup">Sign up</span>
    </div>
  `;

  document.getElementById('btn-login').addEventListener('click', handleLogin);
  document.getElementById('go-signup').addEventListener('click', showSignupForm);
  document.getElementById('input-password').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleLogin();
  });

  initGoogleSignIn();
}

function showSignupForm() {
  const form = document.getElementById('auth-form');
  form.innerHTML = `
    <h2 class="auth-title">Create account</h2>
    <div class="auth-error" id="auth-error"></div>

    <div id="google-btn-container" style="margin-bottom:16px"></div>
    <div id="google-offline-note" style="display:none;font-size:12px;color:var(--text-muted);
      text-align:center;margin-bottom:16px">
      Google Sign-In needs internet. Use email below instead.
    </div>

    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <div style="flex:1;height:1px;background:var(--border)"></div>
      <span style="font-size:12px;color:var(--text-muted)">or</span>
      <div style="flex:1;height:1px;background:var(--border)"></div>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input class="form-input" type="email" id="input-email" placeholder="you@example.com" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input class="form-input" type="password" id="input-password" placeholder="Min 6 characters" />
    </div>
    <div class="form-group">
      <label>Confirm Password</label>
      <input class="form-input" type="password" id="input-confirm" placeholder="Repeat password" />
    </div>
    <button class="btn-primary" id="btn-signup">Create Account</button>
    <div class="auth-switch">
      Already have an account? <span id="go-login">Log in</span>
    </div>
  `;

  document.getElementById('btn-signup').addEventListener('click', handleSignup);
  document.getElementById('go-login').addEventListener('click', showLoginForm);

  initGoogleSignIn();
}

// ─── Handle Login ─────────────────────────────────────
function handleLogin() {
  const email = document.getElementById('input-email').value.trim();
  const password = document.getElementById('input-password').value;

  if (!email || !password) {
    showAuthError('Please fill in all fields.');
    return;
  }

  getUser(email).then(user => {
    if (!user) {
      showAuthError('No account found with this email.');
      return;
    }
    if (user.password !== password) {
      showAuthError('Incorrect password.');
      return;
    }
    saveSession(email).then(() => {
      logEvent(email, 'login');
      navigateTo('home');
    });
  });
}

// ─── Handle Signup ────────────────────────────────────
function handleSignup() {
  const email = document.getElementById('input-email').value.trim();
  const password = document.getElementById('input-password').value;
  const confirm = document.getElementById('input-confirm').value;

  if (!email || !password || !confirm) {
    showAuthError('Please fill in all fields.');
    return;
  }

  if (password.length < 6) {
    showAuthError('Password must be at least 6 characters.');
    return;
  }

  if (password !== confirm) {
    showAuthError('Passwords do not match.');
    return;
  }

  getUser(email).then(existing => {
    if (existing) {
      showAuthError('An account with this email already exists.');
      return;
    }
    createUser(email, password).then(() => {
      saveSession(email).then(() => {
        logEvent(email, 'signup');
        navigateTo('home');
      });
    });
  });
}

// ─── Handle Logout ────────────────────────────────────
function handleLogout() {
  clearSession().then(() => {
    navigateTo('login');
  });
}

// ─── Show Error ───────────────────────────────────────
function showAuthError(message) {
  const el = document.getElementById('auth-error');
  if (!el) return;
  el.textContent = message;
  el.style.display = 'block';
}

// ─── Google Sign-In (optional, requires internet) ─────
// Set this after creating a free OAuth Client ID at console.cloud.google.com
const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com'; // ← replace before demo

function initGoogleSignIn() {
  const container = document.getElementById('google-btn-container');
  const offlineNote = document.getElementById('google-offline-note');
  if (!container) return;

  if (!navigator.onLine || typeof google === 'undefined') {
    container.style.display = 'none';
    if (offlineNote) offlineNote.style.display = 'block';
    return;
  }

  try {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredential
    });

    google.accounts.id.renderButton(container, {
      theme: 'outline',
      size: 'large',
      width: 280,
      text: 'continue_with'
    });
  } catch (e) {
    container.style.display = 'none';
    if (offlineNote) offlineNote.style.display = 'block';
  }
}

function handleGoogleCredential(response) {
  // Decode the JWT payload locally, no server needed
  const payload = JSON.parse(atob(response.credential.split('.')[1]));
  const email = payload.email;
  const name = payload.name;

  getUser(email).then(existing => {
    const proceed = existing
      ? Promise.resolve()
      : createUser(email, null, { name, provider: 'google' });

    proceed.then(() => {
      saveSession(email).then(() => {
        logEvent(email, existing ? 'login_google' : 'signup_google');
        navigateTo('home');
      });
    });
  });
}

// ─── Anonymous usage tracking (fire-and-forget, online only) ──
// Paste your Google Apps Script Web App URL here after deploying it
const ANALYTICS_URL = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';

function logEvent(email, eventName) {
  if (!navigator.onLine) return; // never blocks offline use
  if (!ANALYTICS_URL || ANALYTICS_URL.startsWith('PASTE_')) return;

  fetch(ANALYTICS_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      email,
      event: eventName,
      device: navigator.userAgent.substring(0, 60)
    })
  }).catch(() => {}); // optional feature, safe to fail silently
}
