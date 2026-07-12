// editor.js — offline code editor for HTML/CSS/JS and Python

// ─── Render Editor Screen ─────────────────────────────
function renderEditor(options = {}) {
  const {
    title = 'Practice Editor',
    language = 'html',
    starterCode = '',
    challenge = null,
    backRoute = 'home',
    backState = {}
  } = options;

  document.getElementById('editor-title').textContent = title;
  const container = document.getElementById('editor-content');
  container.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:flex;flex-direction:column;height:calc(100vh - 60px)';

  wrapper.innerHTML = `
    <!-- Language Selector -->
    <div style="display:flex;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border);overflow-x:auto">
      ${['html','css','javascript','python'].map(lang => `
        <button class="lang-btn ${lang === language ? 'lang-active' : ''}"
          data-lang="${lang}"
          style="padding:6px 14px;border-radius:8px;font-size:13px;font-weight:600;min-height:36px;
          background:${lang === language ? 'linear-gradient(135deg,#7c3aed,#2563eb)' : 'var(--surface2)'};
          color:${lang === language ? '#fff' : 'var(--text-muted)'};
          border:1.5px solid ${lang === language ? 'transparent' : 'var(--border)'};
          white-space:nowrap;flex-shrink:0">
          ${getLangIcon(lang)} ${lang.toUpperCase()}
        </button>
      `).join('')}
    </div>

    <!-- Challenge Box -->
    ${challenge ? `
    <div style="padding:12px 16px;background:var(--surface);border-bottom:1px solid var(--border)">
      <div style="font-size:11px;font-weight:700;color:var(--accent2);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">
        📋 Challenge
      </div>
      <p style="font-size:14px;color:var(--text);line-height:1.5">${challenge.instruction}</p>
      ${challenge.expected ? `<div style="margin-top:8px;font-size:12px;color:var(--text-muted)">Expected output: <code style="color:var(--accent);background:var(--surface2);padding:2px 6px;border-radius:4px">${challenge.expected}</code></div>` : ''}
    </div>` : ''}

    <!-- Editor Area -->
    <div style="flex:1;display:flex;flex-direction:column;min-height:0">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;background:var(--surface);border-bottom:1px solid var(--border)">
        <span style="font-size:12px;color:var(--text-muted);font-weight:600" id="editor-lang-label">
          ${getLangIcon(language)} ${language.toUpperCase()}
        </span>
        <button id="btn-clear" style="font-size:12px;padding:4px 10px;min-height:28px;background:var(--surface2);color:var(--text-muted);border:1px solid var(--border);border-radius:6px">
          Clear
        </button>
      </div>
      <textarea id="code-editor"
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        style="flex:1;padding:16px;background:#0a0614;color:#e2d9f3;font-family:'Courier New',monospace;
        font-size:14px;line-height:1.7;border:none;outline:none;resize:none;tab-size:2;
        min-height:200px"
        placeholder="Write your ${language.toUpperCase()} code here...">${starterCode}</textarea>
    </div>

    <!-- Tracing Assistant: predict before you run -->
    <div id="trace-box" style="padding:12px 16px;background:var(--surface2);border-top:1px solid var(--border)">
      <div style="font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">
        🔍 Tracing Assistant
      </div>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:8px;line-height:1.5">
        Before you run it, trace through the code yourself. What do you think it will output?
      </p>
      <textarea id="trace-prediction"
        placeholder="Type what you think the output will be..."
        style="width:100%;min-height:60px;padding:10px;background:var(--bg);color:var(--text);
        font-family:'Courier New',monospace;font-size:13px;border:1px solid var(--border);
        border-radius:8px;resize:vertical"></textarea>
    </div>

    <!-- Run Button -->
    <div style="padding:12px 16px;background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
      <button id="btn-run" style="width:100%;padding:13px;background:linear-gradient(135deg,#7c3aed,#2563eb);
        color:#fff;border-radius:12px;font-size:15px;font-weight:700;
        box-shadow:0 4px 16px rgba(124,58,237,0.4)">
        ▶ Run Code
      </button>
    </div>

    <!-- Trace Result: prediction vs reality -->
    <div id="trace-result" style="display:none;padding:12px 16px;background:var(--surface);border-bottom:1px solid var(--border)">
      <div style="font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px">
        🔍 Your Trace vs. Reality
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <div style="flex:1;min-width:140px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">You predicted</div>
          <div id="trace-predicted-value" style="padding:8px;background:var(--surface2);border-radius:6px;
            font-family:'Courier New',monospace;font-size:13px;color:var(--text);white-space:pre-wrap"></div>
        </div>
        <div style="flex:1;min-width:140px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Actually happened</div>
          <div id="trace-actual-value" style="padding:8px;background:var(--surface2);border-radius:6px;
            font-family:'Courier New',monospace;font-size:13px;color:var(--text);white-space:pre-wrap"></div>
        </div>
      </div>
      <div id="trace-match-note" style="margin-top:10px;font-size:13px;font-weight:600"></div>
    </div>

    <!-- Output / Preview -->
    <div style="flex:1;min-height:200px;display:flex;flex-direction:column">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;background:var(--surface);border-bottom:1px solid var(--border)">
        <span style="font-size:12px;color:var(--text-muted);font-weight:600" id="output-label">
          Output
        </span>
        <button id="btn-clear-output" style="font-size:12px;padding:4px 10px;min-height:28px;background:var(--surface2);color:var(--text-muted);border:1px solid var(--border);border-radius:6px">
          Clear
        </button>
      </div>

      <!-- HTML/CSS/JS Preview -->
      <iframe id="preview-frame"
        style="flex:1;border:none;background:#fff;display:none;min-height:200px"
        sandbox="allow-scripts">
      </iframe>

      <!-- Python/Text Output -->
      <div id="output-console"
        style="flex:1;padding:16px;background:#0a0614;color:#34d399;font-family:'Courier New',monospace;
        font-size:14px;line-height:1.7;overflow-y:auto;min-height:200px;display:none">
        <span style="color:var(--text-muted)">Output will appear here...</span>
      </div>

      <!-- Result feedback -->
      <div id="run-feedback" style="display:none;padding:12px 16px;font-size:14px;font-weight:500"></div>
    </div>
  `;

  container.appendChild(wrapper);

  // ─── State ────────────────────────────────────────────
  let currentLang = language;

  // ─── Language Switch ──────────────────────────────────
  wrapper.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;

      wrapper.querySelectorAll('.lang-btn').forEach(b => {
        b.style.background = 'var(--surface2)';
        b.style.color = 'var(--text-muted)';
        b.style.borderColor = 'var(--border)';
      });
      btn.style.background = 'linear-gradient(135deg,#7c3aed,#2563eb)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'transparent';

      document.getElementById('editor-lang-label').textContent =
        `${getLangIcon(currentLang)} ${currentLang.toUpperCase()}`;
      document.getElementById('code-editor').placeholder =
        `Write your ${currentLang.toUpperCase()} code here...`;
      document.getElementById('code-editor').value = '';
      document.getElementById('trace-prediction').value = '';
      document.getElementById('trace-result').style.display = 'none';

      // Show right output panel
      updateOutputPanel(currentLang);
    });
  });

  // ─── Tab Key Support ──────────────────────────────────
  document.getElementById('code-editor').addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = e.target;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
      ta.selectionStart = ta.selectionEnd = start + 2;
    }
  });

  // ─── Clear Button ─────────────────────────────────────
  document.getElementById('btn-clear').addEventListener('click', () => {
    document.getElementById('code-editor').value = '';
    document.getElementById('trace-prediction').value = '';
    document.getElementById('trace-result').style.display = 'none';
  });

  document.getElementById('btn-clear-output').addEventListener('click', () => {
    document.getElementById('output-console').innerHTML =
      '<span style="color:var(--text-muted)">Output will appear here...</span>';
    document.getElementById('preview-frame').srcdoc = '';
    document.getElementById('run-feedback').style.display = 'none';
  });

  // ─── Run Button ───────────────────────────────────────
  document.getElementById('btn-run').addEventListener('click', () => {
    const code = document.getElementById('code-editor').value.trim();
    if (!code) return;
    const prediction = document.getElementById('trace-prediction').value.trim();

    // Gentle nudge, not a hard block — keeps the flow honest to the tracing method
    if (!prediction) {
      const runAnyway = confirm("You haven't traced a prediction yet. Run anyway without predicting?");
      if (!runAnyway) return;
    }

    runCode(currentLang, code, challenge, prediction);
  });

  // ─── Back Button ──────────────────────────────────────
  document.getElementById('btn-back-editor').addEventListener('click', () => {
    navigateTo(backRoute, backState);
  });

  // ─── Theme Toggle ─────────────────────────────────────
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);

  // Set initial output panel
  updateOutputPanel(currentLang);
}

// ─── Update Output Panel ──────────────────────────────
function updateOutputPanel(lang) {
  const preview = document.getElementById('preview-frame');
  const console_ = document.getElementById('output-console');
  const label = document.getElementById('output-label');

  if (lang === 'html' || lang === 'css' || lang === 'javascript') {
    preview.style.display = 'block';
    console_.style.display = 'none';
    label.textContent = '🌐 Live Preview';
  } else {
    preview.style.display = 'none';
    console_.style.display = 'block';
    label.textContent = '🐍 Python Output';
  }
}

// ─── Run Code ─────────────────────────────────────────
function runCode(lang, code, challenge, prediction) {
  const feedback = document.getElementById('run-feedback');
  feedback.style.display = 'none';
  document.getElementById('trace-result').style.display = 'none';

  if (lang === 'html') {
    runHTML(code, challenge, prediction);
  } else if (lang === 'css') {
    runCSS(code, challenge);
  } else if (lang === 'javascript') {
    runJavaScript(code, challenge, prediction);
  } else if (lang === 'python') {
    runPython(code, challenge, prediction);
  }
}

// ─── Tracing Assistant: compare prediction to actual output ──
function showTraceComparison(prediction, actual) {
  if (!prediction) return; // student skipped the prediction, don't force it

  const box = document.getElementById('trace-result');
  const predEl = document.getElementById('trace-predicted-value');
  const actEl = document.getElementById('trace-actual-value');
  const noteEl = document.getElementById('trace-match-note');

  const normalize = s => s.trim().replace(/\s+/g, ' ').toLowerCase();
  const isMatch = normalize(prediction) === normalize(actual);

  predEl.textContent = prediction;
  actEl.textContent = actual || '(no output)';

  if (isMatch) {
    noteEl.style.color = 'var(--success)';
    noteEl.textContent = '✅ Your trace matched. You predicted this correctly.';
  } else {
    noteEl.style.color = 'var(--accent2)';
    noteEl.textContent = '🔍 Not a match yet — look at where your prediction and the real output differ. That gap is usually where the bug or misunderstanding is.';
  }

  box.style.display = 'block';
}

// ─── Run HTML ─────────────────────────────────────────
function runHTML(code, challenge, prediction) {
  const frame = document.getElementById('preview-frame');
  frame.srcdoc = code;

  setTimeout(() => checkHTMLOutput(frame, challenge, prediction), 500);
}

function checkHTMLOutput(frame, challenge, prediction) {
  try {
    const body = frame.contentDocument?.body?.innerText?.trim() || '';
    if (challenge?.expected) {
      showFeedback(body.includes(challenge.expected), challenge.expected, body);
    }
    showTraceComparison(prediction, body);
  } catch (e) {}
}

// ─── Run CSS ──────────────────────────────────────────
function runCSS(code, challenge) {
  const frame = document.getElementById('preview-frame');
  frame.srcdoc = `
    <html>
    <head><style>${code}</style></head>
    <body style="padding:16px;font-family:system-ui">
      <h1>Heading</h1>
      <p>This is a paragraph of text.</p>
      <button>A Button</button>
      <ul><li>List item one</li><li>List item two</li></ul>
    </body>
    </html>
  `;
}

// ─── Run JavaScript ───────────────────────────────────
function runJavaScript(code, challenge, prediction) {
  const frame = document.getElementById('preview-frame');
  const output = [];

  frame.srcdoc = `
    <html>
    <head>
      <style>
        body { font-family: 'Courier New', monospace; font-size: 14px;
               background: #0a0614; color: #34d399; padding: 16px; line-height: 1.7; }
        .error { color: #f87171; }
      </style>
    </head>
    <body>
      <script>
        const _log = console.log;
        const _err = console.error;
        const output = [];

        console.log = (...args) => {
          output.push('<div>' + args.join(' ') + '</div>');
          document.body.innerHTML = output.join('');
        };
        console.error = (...args) => {
          output.push('<div class="error">Error: ' + args.join(' ') + '</div>');
          document.body.innerHTML = output.join('');
        };

        try {
          ${code}
        } catch(e) {
          output.push('<div class="error">Error: ' + e.message + '</div>');
          document.body.innerHTML = output.join('');
        }
      <\/script>
    </body>
    </html>
  `;

  setTimeout(() => {
    try {
      const body = frame.contentDocument?.body?.innerText?.trim() || '';
      if (challenge?.expected) {
        showFeedback(body.includes(challenge.expected), challenge.expected, body);
      }
      showTraceComparison(prediction, body);
    } catch(e) {}
  }, 500);
}

// ─── Run Python ───────────────────────────────────────
function runPython(code, challenge, prediction) {
  const consoleEl = document.getElementById('output-console');
  consoleEl.innerHTML = '<span style="color:var(--text-muted)">Running...</span>';

  if (typeof Sk === 'undefined') {
    consoleEl.innerHTML = '<span style="color:var(--error)">Python engine not loaded. Check your libs/skulpt/ files.</span>';
    return;
  }

  let output = '';

  Sk.configure({
    output: text => {
      output += text;
      consoleEl.innerHTML = output
        .split('\n')
        .map(line => `<div>${escapeHtml(line)}</div>`)
        .join('');
    },
    read: file => {
      if (Sk.builtinFiles?.files[file] === undefined) {
        throw new Error(`File not found: '${file}'`);
      }
      return Sk.builtinFiles.files[file];
    },
    execLimit: 5000
  });

  Sk.misceval.asyncToPromise(() =>
    Sk.importMainWithBody('<stdin>', false, code, true)
  ).then(() => {
    if (challenge?.expected) {
      showFeedback(
        output.trim().includes(challenge.expected.trim()),
        challenge.expected,
        output.trim()
      );
    }
    if (!output) {
      consoleEl.innerHTML = '<span style="color:var(--text-muted)">Code ran with no output.</span>';
    }
    showTraceComparison(prediction, output.trim());
  }).catch(err => {
    consoleEl.innerHTML = `<div style="color:var(--error);font-family:'Courier New',monospace;
      font-size:13px;padding:8px;background:rgba(248,113,113,0.1);border-radius:6px;white-space:pre-wrap">
      ⚠️ ${escapeHtml(err.toString())}
    </div>`;
  });
}

// ─── Show Feedback ────────────────────────────────────
function showFeedback(passed, expected, actual) {
  const feedback = document.getElementById('run-feedback');
  feedback.style.display = 'block';

  if (passed) {
    feedback.style.cssText = `
      display:block;padding:14px 16px;
      background:rgba(52,211,153,0.1);
      border-top:2px solid var(--success);
      color:var(--success);font-size:14px;font-weight:600;
      animation:fadeIn 0.3s ease;
    `;
    feedback.innerHTML = '✅ Correct! Your output matches the expected result.';
  } else {
    feedback.style.cssText = `
      display:block;padding:14px 16px;
      background:rgba(248,113,113,0.1);
      border-top:2px solid var(--error);
      color:var(--error);font-size:14px;font-weight:500;
      animation:fadeIn 0.3s ease;
    `;
    feedback.innerHTML = `
      ❌ Not quite.<br>
      <span style="color:var(--text-muted);font-size:13px">
        Expected: <code style="color:var(--accent)">${escapeHtml(expected)}</code>
      </span>
    `;
  }
}

// ─── Helper Functions ─────────────────────────────────
function getLangIcon(lang) {
  const icons = { html: '🌐', css: '🎨', javascript: '⚡', python: '🐍' };
  return icons[lang] || '💻';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
