// auth.js — handles login, signup, and session management

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
}

function showSignupForm() {
  const form = document.getElementById('auth-form');
  form.innerHTML = `
    <h2 class="auth-title">Create account</h2>
    <div class="auth-error" id="auth-error"></div>
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