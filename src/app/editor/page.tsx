"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";

const DEFAULTS = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body>

  <header>
    <h1>Hello, World! 👋</h1>
    <p>Edit any tab above and click <strong>Run ▶</strong></p>
  </header>

  <section class="card-grid">
    <div class="card">🌐 HTML</div>
    <div class="card">🎨 CSS</div>
    <div class="card">⚡ JavaScript</div>
  </section>

  <button onclick="greet()">Click me!</button>

</body>
</html>`,

  css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #0f1117;
  color: #e2e4f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 28px;
  padding: 32px;
}

header {
  text-align: center;
}

h1 {
  font-size: 36px;
  background: linear-gradient(90deg, #6c63ff, #00d9a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

p { color: #8890b0; font-size: 15px; }
p strong { color: #00d9a0; }

.card-grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: #1a1d27;
  border: 1px solid #2e3250;
  border-radius: 12px;
  padding: 24px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: default;
  transition: transform .2s, border-color .2s;
}

.card:hover {
  transform: translateY(-4px);
  border-color: #6c63ff;
}

button {
  background: #6c63ff;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background .2s, transform .2s;
}

button:hover {
  background: #7c74ff;
  transform: translateY(-2px);
}`,

  js: `function greet() {
  const messages = [
    "Hello from JavaScript! 👋",
    "You clicked the button! 🎉",
    "Keep learning, you're doing great! 🚀",
    "HTML + CSS + JS = Web magic ✨",
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];

  // Create a floating toast
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = \`
    position: fixed; bottom: 24px; left: 50%;
    transform: translateX(-50%);
    background: #232639; border: 1px solid #6c63ff;
    color: #e2e4f0; padding: 12px 24px;
    border-radius: 10px; font-size: 14px;
    box-shadow: 0 8px 24px rgba(0,0,0,.4);
    z-index: 999; animation: fadeIn .3s ease;
  \`;
  document.body.appendChild(toast);

  // Also log to console
  console.log('Button clicked:', msg);

  setTimeout(() => toast.remove(), 2500);
}

// Log something on load
console.info('JavaScript loaded successfully ✅');
console.log('Try editing me in the JS tab!');`,
};

export default function Editor() {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [htmlCode, setHtmlCode] = useState(DEFAULTS.html);
  const [cssCode, setCssCode] = useState(DEFAULTS.css);
  const [jsCode, setJsCode] = useState(DEFAULTS.js);
  const [fontSize, setFontSize] = useState(13);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [consoleItems, setConsoleItems] = useState<
    Array<{ type: string; text: string }>
  >([]);
  const [statusMsg, setStatusMsg] = useState("Ready");
  const [statusErr, setStatusErr] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(50);
  const [isFullscreenPreview, setIsFullscreenPreview] = useState(false);
  const [toast, setToast] = useState("");
  const [timeStr, setTimeStr] = useState("");
  const [loading, setLoading] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [, startTransition] = useTransition();

  // Load code from query parameter or sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const codeParam = searchParams.get("code");
      if (codeParam) {
        try {
          const decoded = JSON.parse(
            decodeURIComponent(escape(atob(codeParam)))
          );
          if (decoded.html) setHtmlCode(decoded.html);
          if (decoded.css) setCssCode(decoded.css);
          if (decoded.js) setJsCode(decoded.js);
          showToast("✨ Code loaded from shared link");
        } catch {
          // fallback
        }
      } else {
        const savedHtml = sessionStorage.getItem("code_html");
        const savedCss = sessionStorage.getItem("code_css");
        const savedJs = sessionStorage.getItem("code_js");
        if (savedHtml) setHtmlCode(savedHtml);
        if (savedCss) setCssCode(savedCss);
        if (savedJs) setJsCode(savedJs);
      }

      // Update time
      const updateTime = () => {
        setTimeStr(new Date().toLocaleTimeString());
      };
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  // Sync sessionStorage
  useEffect(() => {
    sessionStorage.setItem("code_html", htmlCode);
  }, [htmlCode]);
  useEffect(() => {
    sessionStorage.setItem("code_css", cssCode);
  }, [cssCode]);
  useEffect(() => {
    sessionStorage.setItem("code_js", jsCode);
  }, [jsCode]);

  // Handle messages from Iframe console proxy
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "CONSOLE_LOG") {
        setConsoleItems((prev) => [
          ...prev,
          { type: e.data.level, text: e.data.text },
        ]);
        if (e.data.level === "error") {
          setConsoleOpen(true);
          setStatusMsg("Error inside code");
          setStatusErr(true);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const runCode = (silent = false) => {
    if (!iframeRef.current) return;
    setLoading(true);
    if (!silent) {
      setConsoleItems([]);
    }

    const styleTag = `<style>${cssCode}</style>`;
    const consoleInterceptor = `
      <script>
        (function() {
          const _origLog = console.log;
          const _origError = console.error;
          const _origWarn = console.warn;
          const _origInfo = console.info;

          function sendParent(level, args) {
            window.parent.postMessage({
              type: 'CONSOLE_LOG',
              level: level,
              text: args.map(arg => {
                if (typeof arg === 'object') {
                  try { return JSON.stringify(arg, null, 2); } catch { return String(arg); }
                }
                return String(arg);
              }).join(' ')
            }, '*');
          }

          console.log = function(...a) { sendParent('log', a); _origLog.apply(console, a); };
          console.error = function(...a) { sendParent('error', a); _origError.apply(console, a); };
          console.warn = function(...a) { sendParent('warn', a); _origWarn.apply(console, a); };
          console.info = function(...a) { sendParent('info', a); _origInfo.apply(console, a); };

          window.onerror = function(message, source, lineno, colno, error) {
            sendParent('error', [\`\${message} (line \${lineno})\`]);
          };
        })();
      </script>
    `;

    const scriptTag = `<script>
      try {
        ${jsCode}
      } catch(e) {
        console.error(e.message);
      }
    <\/script>`;

    let fullHTML = htmlCode;
    // Inject Stylesheet
    if (/<\/head>/i.test(fullHTML)) {
      fullHTML = fullHTML.replace(/<\/head>/i, `${styleTag}\n</head>`);
    } else {
      fullHTML = styleTag + fullHTML;
    }

    // Inject Console proxy interceptor
    if (/<head>/i.test(fullHTML)) {
      fullHTML = fullHTML.replace(/<head>/i, `<head>\n${consoleInterceptor}`);
    } else {
      fullHTML = consoleInterceptor + fullHTML;
    }

    // Inject JavaScript script
    if (/<\/body>/i.test(fullHTML)) {
      fullHTML = fullHTML.replace(/<\/body>/i, `${scriptTag}\n</body>`);
    } else {
      fullHTML = fullHTML + scriptTag;
    }

    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(fullHTML);
      doc.close();
    }

    setTimeout(() => {
      setLoading(false);
      if (!silent) {
        setStatusMsg("Ran at " + new Date().toLocaleTimeString());
        setStatusErr(false);
      }
    }, 200);
  };

  // Run automatically on first load once refs are ready
  useEffect(() => {
    runCode(true);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(20, prev + 1));
    showToast(`Font size: ${Math.min(20, fontSize + 1)}px`);
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(10, prev - 1));
    showToast(`Font size: ${Math.max(10, fontSize - 1)}px`);
  };

  const copyCurrentCode = () => {
    const textToCopy =
      activeTab === "html" ? htmlCode : activeTab === "css" ? cssCode : jsCode;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("⎘ Copied to clipboard!");
    });
  };

  const shareCode = () => {
    const data = { html: htmlCode, css: cssCode, js: jsCode };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    const url = window.location.href.split("?")[0] + "?code=" + encoded;
    navigator.clipboard.writeText(url).then(() => {
      showToast("🔗 Share link copied to clipboard!");
    });
  };

  const resetAllCode = () => {
    if (!window.confirm("Reset all code to defaults?")) return;
    setHtmlCode(DEFAULTS.html);
    setCssCode(DEFAULTS.css);
    setJsCode(DEFAULTS.js);
    showToast("↺ Reset to defaults");
  };

  const formatCode = () => {
    if (activeTab === "html") {
      let indent = 0;
      const lines = htmlCode
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l);
      const formatted = lines
        .map((line) => {
          const isClose = /^<\//.test(line);
          const isSelf =
            /\/>$/.test(line) ||
            /^<(meta|link|img|br|hr|input|style|script)/.test(line);
          const isDoctype = /^<!/.test(line);

          if (isClose) indent = Math.max(0, indent - 1);
          const out = (isDoctype ? "" : "  ".repeat(indent)) + line;
          if (!isClose && !isSelf && /^<[^/!]/.test(line)) indent++;
          return out;
        })
        .join("\n");
      setHtmlCode(formatted);
    } else if (activeTab === "css") {
      const formatted = cssCode
        .replace(/\s*{\s*/g, " {\n  ")
        .replace(/;\s*/g, ";\n  ")
        .replace(/\s*}\s*/g, "\n}\n")
        .replace(/  \n}/g, "\n}")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
      setCssCode(formatted);
    } else {
      const formatted = jsCode
        .replace(/;(?!\n)/g, ";\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
      setJsCode(formatted);
    }
    showToast("✨ Code formatted");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    lang: "html" | "css" | "js"
  ) => {
    const ta = e.currentTarget;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;

    // Tab key
    if (e.key === "Tab") {
      e.preventDefault();
      const code = lang === "html" ? htmlCode : lang === "css" ? cssCode : jsCode;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      if (lang === "html") setHtmlCode(newCode);
      else if (lang === "css") setCssCode(newCode);
      else setJsCode(newCode);

      // set cursor position
      setTimeout(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      }, 0);
      return;
    }

    // Ctrl + S or Ctrl + Enter to run
    if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "Enter")) {
      e.preventDefault();
      runCode();
      if (e.key === "s") {
        showToast("Saved & Ran Code");
      }
      return;
    }

    // Auto-close brackets/quotes
    const pairs: Record<string, string> = {
      "(": ")",
      "{": "}",
      "[": "]",
      '"': '"',
      "'": "'",
      "`": "`",
    };
    if (pairs[e.key]) {
      e.preventDefault();
      const code = lang === "html" ? htmlCode : lang === "css" ? cssCode : jsCode;
      const selectionText = code.substring(start, end);
      const inserted = e.key + selectionText + pairs[e.key];
      const newCode = code.substring(0, start) + inserted + code.substring(end);

      if (lang === "html") setHtmlCode(newCode);
      else if (lang === "css") setCssCode(newCode);
      else setJsCode(newCode);

      setTimeout(() => {
        ta.selectionStart = ta.selectionEnd = start + 1;
      }, 0);
      return;
    }

    // Enter for auto indent
    if (e.key === "Enter") {
      e.preventDefault();
      const code = lang === "html" ? htmlCode : lang === "css" ? cssCode : jsCode;
      const lineStart = code.lastIndexOf("\n", start - 1) + 1;
      const lineText = code.substring(lineStart, start);
      const indentMatch = lineText.match(/^(\s*)/);
      const indent = indentMatch ? indentMatch[1] : "";
      const extraIndent = /[{(\[]$/.test(lineText.trimEnd()) ? "  " : "";
      const insertion = "\n" + indent + extraIndent;

      const newCode =
        code.substring(0, start) + insertion + code.substring(end);

      if (lang === "html") setHtmlCode(newCode);
      else if (lang === "css") setCssCode(newCode);
      else setJsCode(newCode);

      setTimeout(() => {
        ta.selectionStart = ta.selectionEnd = start + insertion.length;
      }, 0);
      return;
    }

    // Backspace auto-delete pair
    if (e.key === "Backspace" && start === end) {
      const code = lang === "html" ? htmlCode : lang === "css" ? cssCode : jsCode;
      const before = code[start - 1];
      const after = code[start];
      const closes: Record<string, string> = {
        "(": ")",
        "{": "}",
        "[": "]",
        '"': '"',
        "'": "'",
        "`": "`",
      };
      if (closes[before] && closes[before] === after) {
        e.preventDefault();
        const newCode =
          code.substring(0, start - 1) + code.substring(start + 1);

        if (lang === "html") setHtmlCode(newCode);
        else if (lang === "css") setCssCode(newCode);
        else setJsCode(newCode);

        setTimeout(() => {
          ta.selectionStart = ta.selectionEnd = start - 1;
        }, 0);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const handleMouseMove = (moveEvent: MouseEvent) => {
      const pct = (moveEvent.clientX / window.innerWidth) * 100;
      setSidebarWidth(Math.min(80, Math.max(20, pct)));
    };
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const getLineNumbersArray = (code: string) => {
    const linesCount = code.split("\n").length;
    return Array.from({ length: linesCount }, (_, i) => i + 1);
  };

  return (
    <div
      className={`body-wrapper ${
        isFullscreenPreview ? "fullscreen-preview" : ""
      }`}
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      {/* TOP BAR */}
      <div className="topbar">
        <Link href="/" className="logo">
          <div className="logo-icon">&#123;&#125;</div>
          CodeAcademia
        </Link>

        <div className="topbar-divider"></div>
        <span className="topbar-title">Try It Editor</span>
        <span className="topbar-sub">— HTML / CSS / JavaScript</span>

        <div className="topbar-actions">
          <button className="btn btn-ghost" onClick={formatCode} title="Auto-format code">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
            </svg>
            Format
          </button>

          <button
            className="btn btn-ghost"
            style={{ color: consoleOpen ? "var(--accent2)" : "" }}
            onClick={() => setConsoleOpen((prev) => !prev)}
            title="Toggle console"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            Console
          </button>

          <button
            className="btn btn-icon"
            onClick={() => setIsFullscreenPreview((prev) => !prev)}
            title="Preview fullscreen"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
            </svg>
          </button>

          <button className="btn btn-ghost" onClick={shareCode} title="Copy share link">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
            </svg>
            Share
          </button>

          <button className="btn btn-ghost" onClick={resetAllCode} title="Reset all code">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
            </svg>
            Reset
          </button>

          <button className="btn btn-run" onClick={() => runCode(false)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            Run ▶
          </button>
        </div>
      </div>

      {/* EDITOR LAYOUT */}
      <div className="editor-layout" id="editorLayout" style={{ display: "flex", flex: 1 }}>
        {/* LEFT: CODE SIDE */}
        <div
          className="code-side"
          style={{
            width: isFullscreenPreview ? "0%" : `${sidebarWidth}%`,
            display: isFullscreenPreview ? "none" : "flex",
          }}
        >
          {/* Tabs */}
          <div className="editor-tabs">
            <button
              className={`tab-btn ${activeTab === "html" ? "active" : ""}`}
              onClick={() => setActiveTab("html")}
            >
              <span className="tab-dot html"></span> HTML
            </button>
            <button
              className={`tab-btn ${activeTab === "css" ? "active" : ""}`}
              onClick={() => setActiveTab("css")}
            >
              <span className="tab-dot css"></span> CSS
            </button>
            <button
              className={`tab-btn ${activeTab === "js" ? "active" : ""}`}
              onClick={() => setActiveTab("js")}
            >
              <span className="tab-dot js"></span> JS
            </button>

            <div className="tab-actions">
              <button className="tab-action-btn" onClick={increaseFontSize} title="Increase font size">
                A+
              </button>
              <button className="tab-action-btn" onClick={decreaseFontSize} title="Decrease font size">
                A-
              </button>
              <button className="tab-action-btn" onClick={copyCurrentCode} title="Copy code">
                ⎘
              </button>
            </div>
          </div>

          {/* HTML Pane */}
          <div
            className={`editor-pane-wrap ${
              activeTab === "html" ? "active" : ""
            }`}
          >
            <div className="line-numbers">
              {getLineNumbersArray(htmlCode).map((line) => (
                <span key={line} style={{ fontSize, lineHeight: `${fontSize * 1.6}px` }}>
                  {line}
                </span>
              ))}
            </div>
            <textarea
              className="code-textarea"
              style={{ fontSize, lineHeight: `${fontSize * 1.6}px` }}
              spellCheck="false"
              value={htmlCode}
              onChange={(e) => {
                setHtmlCode(e.target.value);
                startTransition(() => runCode(true));
              }}
              onKeyDown={(e) => handleKeyDown(e, "html")}
            ></textarea>
          </div>

          {/* CSS Pane */}
          <div
            className={`editor-pane-wrap ${activeTab === "css" ? "active" : ""}`}
          >
            <div className="line-numbers">
              {getLineNumbersArray(cssCode).map((line) => (
                <span key={line} style={{ fontSize, lineHeight: `${fontSize * 1.6}px` }}>
                  {line}
                </span>
              ))}
            </div>
            <textarea
              className="code-textarea"
              style={{ fontSize, lineHeight: `${fontSize * 1.6}px` }}
              spellCheck="false"
              value={cssCode}
              onChange={(e) => {
                setCssCode(e.target.value);
                startTransition(() => runCode(true));
              }}
              onKeyDown={(e) => handleKeyDown(e, "css")}
            ></textarea>
          </div>

          {/* JS Pane */}
          <div
            className={`editor-pane-wrap ${activeTab === "js" ? "active" : ""}`}
          >
            <div className="line-numbers">
              {getLineNumbersArray(jsCode).map((line) => (
                <span key={line} style={{ fontSize, lineHeight: `${fontSize * 1.6}px` }}>
                  {line}
                </span>
              ))}
            </div>
            <textarea
              className="code-textarea"
              style={{ fontSize, lineHeight: `${fontSize * 1.6}px` }}
              spellCheck="false"
              value={jsCode}
              onChange={(e) => {
                setJsCode(e.target.value);
                startTransition(() => runCode(true));
              }}
              onKeyDown={(e) => handleKeyDown(e, "js")}
            ></textarea>
          </div>

          {/* Status Bar */}
          <div className="editor-status">
            <span>Ready</span>
            <span>
              {activeTab === "html"
                ? htmlCode.length
                : activeTab === "css"
                ? cssCode.length
                : jsCode.length}{" "}
              chars
            </span>
            <span>{activeTab.toUpperCase()}</span>
            <span className={statusErr ? "status-err" : "status-ok"}>
              {statusMsg}
            </span>
          </div>

          {/* Console */}
          <div className={`console-panel ${consoleOpen ? "open" : ""}`}>
            <div className="console-header">
              <span className="console-title">Console</span>
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  marginLeft: "4px",
                }}
              >
                {consoleItems.length > 0 && `(${consoleItems.length})`}
              </span>
              <button
                className="console-clear"
                onClick={() => setConsoleItems([])}
              >
                Clear
              </button>
            </div>
            <div className="console-output">
              {consoleItems.length === 0 ? (
                <div className="console-empty">
                  Console output will appear here.
                </div>
              ) : (
                consoleItems.map((item, idx) => (
                  <div key={idx} className={`console-line ${item.type}`}>
                    <span className="con-icon">
                      {item.type === "error"
                        ? "✖"
                        : item.type === "warn"
                        ? "⚠"
                        : item.type === "info"
                        ? "ℹ"
                        : "›"}
                    </span>
                    <span>{item.text}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* RESIZE HANDLE */}
        {!isFullscreenPreview && (
          <div
            className="resize-handle"
            id="resizeHandle"
            onMouseDown={handleMouseDown}
          ></div>
        )}

        {/* RIGHT: PREVIEW SIDE */}
        <div className="preview-side">
          <div className="preview-tabs">
            <span className="preview-label">Preview</span>
            <div className="preview-url">
              <div className="preview-url-dot"></div>
              CodeAcademia://preview
            </div>
            <button
              className="btn btn-icon"
              onClick={() => runCode(false)}
              title="Reload preview"
              style={{ marginLeft: "4px" }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
            </button>
            <button
              className="btn btn-icon"
              onClick={() => setIsFullscreenPreview((prev) => !prev)}
              title="Fullscreen preview"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
              </svg>
            </button>
          </div>

          <div className="preview-content">
            <iframe
              ref={iframeRef}
              id="livePreview"
              title="Live Preview"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
            <div className={`preview-loading ${loading ? "show" : ""}`}>
              <div className="spinner"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bottombar">
        <span>🟢 CodeAcademia Editor</span>
        <span>HTML · CSS · JS</span>
        <div className="bb-right" style={{ marginLeft: "auto", display: "flex", gap: "16px" }}>
          <span>Tab = 2 spaces</span>
          <span>{timeStr}</span>
        </div>
      </div>

      {/* Toast */}
      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </div>
  );
}
