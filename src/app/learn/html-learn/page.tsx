"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Lesson {
  title: string;
  badge: string;
  time: string;
  section: string;
  content: string;
  tryItCode?: string;
  codeBlock?: {
    lang: string;
    code: string;
  };
}

const LESSONS: Record<string, Lesson> = {
  intro: {
    title: "HTML Introduction",
    badge: "Beginner",
    time: "5 min read",
    section: "Getting Started",
    content: `
      <p>HTML stands for <strong>HyperText Markup Language</strong>.
         It is the standard language used to create webpages.</p>

      <h2>What is HTML?</h2>
      <p>HTML describes the structure of a webpage using a series of elements.
         Elements tell the browser how to display content — whether it's a
         heading, paragraph, image, link, or anything else.</p>

      <div class="callout callout-tip">
        <strong>💡 Fun Fact</strong>
        HTML was invented by Tim Berners-Lee in 1991. The first website ever
        made is still online at info.cern.ch.
      </div>

      <h2>What Can HTML Do?</h2>
      <ul>
        <li>Create the structure and layout of web content</li>
        <li>Embed images, video, audio, and interactive media</li>
        <li>Build forms for user input</li>
        <li>Link pages together with hyperlinks</li>
      </ul>
    `,
  },
  basic: {
    title: "HTML Basic Structure",
    badge: "Beginner",
    time: "8 min read",
    section: "Getting Started",
    content: `
      <p>Every webpage you've ever visited is built on HTML —
        <strong>HyperText Markup Language</strong>. It's not a programming language;
        it's a <em>markup language</em> that tells your browser how to structure and
        display content.</p>

      <h2>The Anatomy of an HTML Document</h2>

      <p>A valid HTML document has a predictable skeleton. Think of it like the bones
        of a webpage — without the right structure, things fall apart.</p>

      <div class="callout callout-tip">
        <strong>💡 Tip</strong>
        Every HTML file you create should start with <code>&lt;!DOCTYPE html&gt;</code>.
        This tells the browser you're writing modern HTML5 — without it, browsers enter
        "quirks mode" and render things inconsistently.
      </div>

      <h2>What Each Tag Does</h2>

      <table class="data-table">
        <thead>
          <tr>
            <th>Tag</th>
            <th>Purpose</th>
            <th>Required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>&lt;!DOCTYPE html&gt;</code></td>
            <td>Declares the document type as HTML5</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><code>&lt;html&gt;</code></td>
            <td>The root element — wraps everything</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><code>&lt;head&gt;</code></td>
            <td>Metadata container — not visible to users</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><code>&lt;meta charset&gt;</code></td>
            <td>Sets character encoding (use UTF-8 always)</td>
            <td>Recommended</td>
          </tr>
          <tr>
            <td><code>&lt;title&gt;</code></td>
            <td>Sets the browser tab title</td>
            <td>Recommended</td>
          </tr>
          <tr>
            <td><code>&lt;body&gt;</code></td>
            <td>All visible page content goes here</td>
            <td>✅ Yes</td>
          </tr>
        </tbody>
      </table>

      <h2>Opening vs. Closing Tags</h2>
      <p>Most HTML elements have an opening tag like <code>&lt;p&gt;</code> and a
        closing tag like <code>&lt;/p&gt;</code>. The content goes between them.
        Some elements are <strong>self-closing</strong> — they don't wrap content,
        like <code>&lt;meta&gt;</code>, <code>&lt;img&gt;</code>,
        and <code>&lt;br&gt;</code>.</p>

      <div class="callout callout-warn">
        <strong>⚠️ Watch Out</strong>
        Forgetting to close tags is the most common beginner mistake. Always close
        what you open, in reverse order — like nested boxes.
      </div>

      <h2>Try It Yourself</h2>
      <p>Edit the HTML below and click <strong>Run</strong> to see your changes
        live in the preview panel.</p>
    `,
    codeBlock: {
      lang: "HTML",
      code: `<!-- Every HTML page starts with this -->
<!DOCTYPE html>

<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello, World!</h1>
    <p>Welcome to my first webpage.</p>
  </body>

</html>`,
    },
    tryItCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Page</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    h1   { color: #6c63ff; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Edit this code and click Run ▶</p>
  <ul>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Build things!</li>
  </ul>
</body>
</html>`,
  },
  elements: {
    title: "HTML Elements",
    badge: "Beginner",
    time: "7 min read",
    section: "Getting Started",
    content: `
      <p>An HTML element is defined by a start tag, some content, and an end tag.</p>

      <h2>Element Syntax</h2>
      <p>The basic syntax is:
         <code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code></p>

      <h2>Common HTML Elements</h2>
      <table class="data-table">
        <thead>
          <tr><th>Element</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>&lt;h1&gt; – &lt;h6&gt;</code></td><td>Headings (largest to smallest)</td></tr>
          <tr><td><code>&lt;p&gt;</code></td><td>Paragraph</td></tr>
          <tr><td><code>&lt;a&gt;</code></td><td>Hyperlink</td></tr>
          <tr><td><code>&lt;img&gt;</code></td><td>Image (self-closing)</td></tr>
          <tr><td><code>&lt;div&gt;</code></td><td>Generic block container</td></tr>
          <tr><td><code>&lt;span&gt;</code></td><td>Generic inline container</td></tr>
        </tbody>
      </table>

      <div class="callout callout-tip">
        <strong>💡 Tip</strong>
        Block elements (like <code>&lt;div&gt;</code>) stack vertically.
        Inline elements (like <code>&lt;span&gt;</code>) flow within text.
      </div>
    `,
  },
  attributes: {
    title: "HTML Attributes",
    badge: "Beginner",
    time: "6 min read",
    section: "Getting Started",
    content: `
      <p>Attributes provide extra information about HTML elements. They are always
         written inside the opening tag.</p>

      <h2>Attribute Syntax</h2>
      <p><code>&lt;tagname attribute="value"&gt;Content&lt;/tagname&gt;</code></p>

      <h2>Common Attributes</h2>
      <table class="data-table">
        <thead>
          <tr><th>Attribute</th><th>Element(s)</th><th>Purpose</th></tr>
        </thead>
        <tbody>
          <tr><td><code>href</code></td><td><code>&lt;a&gt;</code></td><td>Link destination URL</td></tr>
          <tr><td><code>src</code></td><td><code>&lt;img&gt;</code></td><td>Image source URL</td></tr>
          <tr><td><code>alt</code></td><td><code>&lt;img&gt;</code></td><td>Accessible description of image</td></tr>
          <tr><td><code>class</code></td><td>Any</td><td>CSS / JS hook</td></tr>
          <tr><td><code>id</code></td><td>Any</td><td>Unique identifier</td></tr>
          <tr><td><code>style</code></td><td>Any</td><td>Inline CSS styles</td></tr>
        </tbody>
      </table>
    `,
  },
};

const SIDEBAR_STRUCTURE = [
  {
    title: "Getting Started",
    items: [
      { id: "intro", label: "🏠 Introduction" },
      { id: "basic", label: "📄 Basic Structure" },
      { id: "elements", label: "🏷️ HTML Elements" },
      { id: "attributes", label: "⚙️ Attributes" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { id: "headings", label: "🔤 Headings" },
      { id: "paragraphs", label: "📝 Paragraphs" },
      { id: "links", label: "🔗 Links", badge: "New" },
      { id: "images", label: "🖼️ Images" },
      { id: "lists", label: "📋 Lists" },
      { id: "tables", label: "📊 Tables" },
    ],
  },
  {
    title: "Forms & Input",
    items: [
      { id: "forms", label: "📬 Forms" },
      { id: "input", label: "⌨️ Input Types" },
      { id: "validation", label: "✅ Validation" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { id: "semantic", label: "🏗️ Semantic HTML", badge: "New" },
      { id: "canvas", label: "🎨 Canvas" },
      { id: "media", label: "🎵 Audio & Video" },
    ],
  },
];

export default function HtmlLearn() {
  const [currentLessonId, setCurrentLessonId] = useState("basic");
  const [activeTopic, setActiveTopic] = useState("html");
  const [copied, setCopied] = useState(false);

  // Lesson try-it block state
  const [tryItCode, setTryItCode] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentLesson = LESSONS[currentLessonId] || {
    title: "Coming Soon",
    badge: "Beginner",
    time: "2 min read",
    section: "Tutorial",
    content: `<p>We are currently working on adding this lesson. Stay tuned!</p>`,
  };

  useEffect(() => {
    // Reset editor code when lesson changes
    if (currentLesson.tryItCode) {
      setTryItCode(currentLesson.tryItCode);
    } else {
      setTryItCode("");
    }
  }, [currentLessonId, currentLesson.tryItCode]);

  useEffect(() => {
    // Auto-run if editor code is set
    if (tryItCode && iframeRef.current) {
      runCode();
    }
  }, [tryItCode]);

  const runCode = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(tryItCode);
      doc.close();
    }
  };

  const resetEditor = () => {
    if (currentLesson.tryItCode) {
      setTryItCode(currentLesson.tryItCode);
    }
  };

  const copyCodeToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Find next/prev lessons
  const allAvailableIds = ["intro", "basic", "elements", "attributes"];
  const currentIndex = allAvailableIds.indexOf(currentLessonId);
  const prevLessonId = currentIndex > 0 ? allAvailableIds[currentIndex - 1] : null;
  const nextLessonId =
    currentIndex !== -1 && currentIndex < allAvailableIds.length - 1
      ? allAvailableIds[currentIndex + 1]
      : null;

  // Calculate Progress
  const progressPercent =
    ((allAvailableIds.indexOf(currentLessonId) + 1) / allAvailableIds.length) * 100;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* TOPBAR / HEADER */}
      <header className="learn-header">
        <Link href="/" className="logo">
          <div className="logo-icon">&#123;&#125;</div>
          CodeAcademia
        </Link>

        <div className="search-bar">
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Search tutorials, topics…" />
        </div>

        <nav className="nav-pills">
          <button
            className={`nav-pill ${activeTopic === "html" ? "active" : ""}`}
            onClick={() => setActiveTopic("html")}
          >
            HTML
          </button>
          <button
            className={`nav-pill ${activeTopic === "css" ? "active" : ""}`}
            onClick={() => setActiveTopic("css")}
          >
            CSS
          </button>
          <button
            className={`nav-pill ${activeTopic === "js" ? "active" : ""}`}
            onClick={() => setActiveTopic("js")}
          >
            JavaScript
          </button>
          <button
            className={`nav-pill ${activeTopic === "python" ? "active" : ""}`}
            onClick={() => setActiveTopic("python")}
          >
            Python
          </button>
          <button
            className={`nav-pill ${activeTopic === "sql" ? "active" : ""}`}
            onClick={() => setActiveTopic("sql")}
          >
            SQL
          </button>
        </nav>
      </header>

      {/* MAIN LAYOUT */}
      <div className="layout" style={{ display: "flex", flex: 1 }}>
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="progress-label">Your progress – HTML</div>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercent}%`, transition: "width 0.3s" }}
            ></div>
          </div>

          {SIDEBAR_STRUCTURE.map((sect) => (
            <div key={sect.title} className="sidebar-section">
              <div className="sidebar-heading">{sect.title}</div>
              {sect.items.map((item) => (
                <div
                  key={item.id}
                  className={`sidebar-item ${
                    currentLessonId === item.id ? "active" : ""
                  }`}
                  onClick={() => setCurrentLessonId(item.id)}
                >
                  {item.label}
                  {item.badge && <span className="tag">{item.badge}</span>}
                </div>
              ))}
            </div>
          ))}
        </aside>

        {/* MAIN */}
        <main className="main" style={{ flex: 1, padding: "40px" }}>
          <div className="content" id="lesson-content">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <span>{activeTopic.toUpperCase()}</span>
              <span style={{ color: "var(--muted)", margin: "0 8px" }}>›</span>
              <span>{currentLesson.section}</span>
              <span style={{ color: "var(--muted)", margin: "0 8px" }}>›</span>
              <span>{currentLesson.title}</span>
            </div>

            {/* Title */}
            <h1 className="page-title">{currentLesson.title}</h1>

            <div className="page-meta">
              <span
                className={`badge ${
                  currentLesson.badge === "Beginner"
                    ? "badge-beginner"
                    : "badge-intermediate"
                }`}
              >
                {currentLesson.badge}
              </span>
              <span className="read-time" style={{ marginLeft: "12px" }}>
                ⏱ {currentLesson.time}
              </span>
            </div>

            {/* PROSE */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: currentLesson.content }}
            ></div>

            {/* CODE BLOCK */}
            {currentLesson.codeBlock && (
              <div className="code-block">
                <div className="code-toolbar">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="code-lang">{currentLesson.codeBlock.lang}</div>
                  <div className="code-btn">
                    <button
                      className="btn-sm"
                      onClick={() =>
                        copyCodeToClipboard(currentLesson.codeBlock!.code)
                      }
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                <div className="code-area">
                  <pre>{currentLesson.codeBlock.code}</pre>
                </div>
              </div>
            )}

            {/* TRY IT EDITOR */}
            {tryItCode && (
              <div className="try-it-block">
                <div className="try-it-header">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
                    />
                  </svg>
                  <span>Try It Yourself</span>
                </div>

                <div className="try-it-body">
                  <div className="editor-pane">
                    <div className="pane-label">HTML Editor</div>
                    <textarea
                      className="code-editor"
                      value={tryItCode}
                      onChange={(e) => setTryItCode(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="output-pane">
                    <div className="pane-label">Preview</div>
                    <iframe
                      ref={iframeRef}
                      id="livePreview"
                      title="Live Preview"
                    ></iframe>
                  </div>
                </div>

                <div className="try-it-footer">
                  <button className="btn-sm" onClick={resetEditor}>
                    ↺ Reset
                  </button>
                  <button className="btn-sm btn-run" onClick={runCode}>
                    ▶ Run
                  </button>
                </div>
              </div>
            )}

            {/* LESSON NAV */}
            <div className="lesson-nav">
              {prevLessonId ? (
                <a
                  className="nav-card prev"
                  onClick={() => setCurrentLessonId(prevLessonId)}
                >
                  <div className="nav-card-label">← Previous</div>
                  <div className="nav-card-title">
                    {LESSONS[prevLessonId].title}
                  </div>
                </a>
              ) : (
                <div className="nav-card prev disabled">
                  <div className="nav-card-label">← Previous</div>
                  <div className="nav-card-title">None</div>
                </div>
              )}

              {nextLessonId ? (
                <a
                  className="nav-card next"
                  onClick={() => setCurrentLessonId(nextLessonId)}
                >
                  <div className="nav-card-label">Next →</div>
                  <div className="nav-card-title">
                    {LESSONS[nextLessonId].title}
                  </div>
                </a>
              ) : (
                <div className="nav-card next disabled">
                  <div className="nav-card-label">Next →</div>
                  <div className="nav-card-title">End of Track</div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
