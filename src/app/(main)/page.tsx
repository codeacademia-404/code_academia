"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const bars = barsRef.current;
    if (bars.length === 0) return;

    const widths = bars.map((b) => b?.getAttribute("data-width") || "0%");

    // Initialize to 0 width
    bars.forEach((b) => {
      if (b) b.style.width = "0%";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const idx = bars.indexOf(target);
            if (idx !== -1) {
              target.style.width = widths[idx];
              observer.unobserve(target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((b) => {
      if (b) observer.observe(b);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span></span> 500+ free tutorials · no account needed
        </div>

        <h1 className="hero-title">
          Learn to code.
          <br />
          <span className="highlight">Build the web.</span>
        </h1>

        <p className="hero-sub">
          The fastest way to learn HTML, CSS, JavaScript, Python, SQL and more —
          with interactive examples you can edit right in your browser.
        </p>

        <div className="hero-cta">
          <Link href="/learn/html-learn" className="btn btn-hero">
            Start Learning →
          </Link>
          <a href="#languages" className="btn btn-outline">
            Browse Topics
          </a>
        </div>

        {/* mini live code preview */}
        <div className="hero-code">
          <div className="hero-code-bar">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="filename">hello.html</span>
          </div>
          <pre>
            <span className="tag">&lt;!DOCTYPE</span>{" "}
            <span className="attr">html</span>
            <span className="tag">&gt;</span>
            {"\n"}
            <span className="tag">&lt;html</span>{" "}
            <span className="attr">lang</span>
            <span className="op">=</span>
            <span className="str">&quot;en&quot;</span>
            <span className="tag">&gt;</span>
            {"\n"}
            <span className="tag">&lt;head&gt;</span>
            {"\n  "}
            <span className="tag">&lt;title&gt;</span>My First Page
            <span className="tag">&lt;/title&gt;</span>
            {"\n"}
            <span className="tag">&lt;/head&gt;</span>
            {"\n"}
            <span className="tag">&lt;body&gt;</span>
            {"\n  "}
            <span className="tag">&lt;h1&gt;</span>Hello, World!
            <span className="tag">&lt;/h1&gt;</span>
            {"\n  "}
            <span className="tag">&lt;p&gt;</span>I just wrote my first webpage
            🎉<span className="tag">&lt;/p&gt;</span>
            {"\n"}
            <span className="tag">&lt;/body&gt;</span>
            {"\n"}
            <span className="tag">&lt;/html&gt;</span>
            <span className="cursor"></span>
          </pre>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stat">
          <div className="stat-num">
            500<span className="accent">+</span>
          </div>
          <div className="stat-label">Free tutorials</div>
        </div>
        <div className="stat">
          <div className="stat-num">
            12<span className="accent">M</span>
          </div>
          <div className="stat-label">Learners worldwide</div>
        </div>
        <div className="stat">
          <div className="stat-num">
            40<span className="accent">+</span>
          </div>
          <div className="stat-label">Topics covered</div>
        </div>
        <div className="stat">
          <div className="stat-num">
            1<span className="accent">K</span>
          </div>
          <div className="stat-label">Code examples</div>
        </div>
        <div className="stat">
          <div className="stat-num">
            100<span className="accent">%</span>
          </div>
          <div className="stat-label">Free forever</div>
        </div>
      </div>

      {/* LANGUAGE CARDS */}
      <section className="section" id="languages">
        <div className="section-inner">
          <div className="section-eyebrow">What to learn</div>
          <h2 className="section-title">Pick your language</h2>
          <p className="section-sub">
            Every track starts from zero — no prior experience needed.
          </p>

          <div className="lang-grid">
            <Link href="/learn/html-learn" className="lang-card html">
              <div className="lang-icon">🌐</div>
              <div>
                <div className="lang-name">HTML</div>
                <div className="lang-count">52 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[0] = el;
                  }}
                  data-width="90%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>

            <Link href="/learn/html-learn" className="lang-card css">
              <div className="lang-icon">🎨</div>
              <div>
                <div className="lang-name">CSS</div>
                <div className="lang-count">68 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[1] = el;
                  }}
                  data-width="85%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>

            <Link href="/learn/html-learn" className="lang-card js">
              <div className="lang-icon">⚡</div>
              <div>
                <div className="lang-name">JavaScript</div>
                <div className="lang-count">94 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[2] = el;
                  }}
                  data-width="95%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>

            <Link href="/learn/html-learn" className="lang-card python">
              <div className="lang-icon">🐍</div>
              <div>
                <div className="lang-name">Python</div>
                <div className="lang-count">76 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[3] = el;
                  }}
                  data-width="80%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>

            <Link href="/learn/html-learn" className="lang-card sql">
              <div className="lang-icon">🗄️</div>
              <div>
                <div className="lang-name">SQL</div>
                <div className="lang-count">44 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[4] = el;
                  }}
                  data-width="70%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>

            <Link href="/learn/html-learn" className="lang-card react">
              <div className="lang-icon">⚛️</div>
              <div>
                <div className="lang-name">React</div>
                <div className="lang-count">58 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[5] = el;
                  }}
                  data-width="75%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>

            <Link href="/learn/html-learn" className="lang-card node">
              <div className="lang-icon">🟢</div>
              <div>
                <div className="lang-name">Node.js</div>
                <div className="lang-count">36 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[6] = el;
                  }}
                  data-width="60%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>

            <Link href="/learn/html-learn" className="lang-card git">
              <div className="lang-icon">🌿</div>
              <div>
                <div className="lang-name">Git</div>
                <div className="lang-count">28 lessons</div>
              </div>
              <div className="lang-bar">
                <div
                  ref={(el) => {
                    if (el) barsRef.current[7] = el;
                  }}
                  data-width="55%"
                  className="lang-bar-fill"
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="section"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="section-inner">
          <div className="section-eyebrow">Why CodeAcademia</div>
          <h2 className="section-title">Built for how people actually learn</h2>
          <p className="section-sub">
            We removed everything that makes learning to code feel hard.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon fi-green">▶️</div>
              <div className="feature-title">Run code in your browser</div>
              <div className="feature-desc">
                Every lesson has a live editor. Type, see results instantly — no
                installs, no setup, no friction.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon fi-purple">📐</div>
              <div className="feature-title">Clear, structured paths</div>
              <div className="feature-desc">
                Lessons are ordered so each one builds on the last. You always
                know what to learn next.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon fi-orange">🧩</div>
              <div className="feature-title">Exercises after every topic</div>
              <div className="feature-desc">
                Practice what you learn with real coding challenges. See hints
                when you're stuck.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon fi-blue">📖</div>
              <div className="feature-title">Reference anytime</div>
              <div className="feature-desc">
                Complete cheat sheets and tag references for when you're building
                real projects.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon fi-red">🏆</div>
              <div className="feature-title">Track your progress</div>
              <div className="feature-desc">
                Earn badges as you complete topics. See exactly how far you've
                come.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon fi-pink">📱</div>
              <div className="feature-title">Works on any device</div>
              <div className="feature-desc">
                Learn on your laptop, tablet, or phone. Your progress syncs
                everywhere.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR TUTORIALS */}
      <section className="section tutorials-section">
        <div className="section-inner">
          <div className="section-eyebrow">Trending now</div>
          <h2 className="section-title">Most popular tutorials</h2>
          <p className="section-sub">
            Start anywhere — these are the lessons learners love most.
          </p>

          <div className="tutorial-list">
            <Link href="/learn/html-learn" className="tutorial-row">
              <div className="tut-num">01</div>
              <div className="tut-icon">🌐</div>
              <div className="tut-info">
                <div className="tut-title">
                  HTML Basics – Build your first webpage
                </div>
                <div className="tut-meta">HTML · 52 lessons · 2.1M learners</div>
              </div>
              <span className="tut-badge tut-beginner">Beginner</span>
              <span className="tut-arrow">›</span>
            </Link>

            <Link href="/learn/html-learn" className="tutorial-row">
              <div className="tut-num">02</div>
              <div className="tut-icon">🎨</div>
              <div className="tut-info">
                <div className="tut-title">
                  CSS Flexbox – Master modern layouts
                </div>
                <div className="tut-meta">CSS · 14 lessons · 1.8M learners</div>
              </div>
              <span className="tut-badge tut-beginner">Beginner</span>
              <span className="tut-arrow">›</span>
            </Link>

            <Link href="/learn/html-learn" className="tutorial-row">
              <div className="tut-num">03</div>
              <div className="tut-icon">⚡</div>
              <div className="tut-info">
                <div className="tut-title">
                  JavaScript DOM – Make pages interactive
                </div>
                <div className="tut-meta">JS · 28 lessons · 1.5M learners</div>
              </div>
              <span className="tut-badge tut-intermediate">Intermediate</span>
              <span className="tut-arrow">›</span>
            </Link>

            <Link href="/learn/html-learn" className="tutorial-row">
              <div className="tut-num">04</div>
              <div className="tut-icon">🐍</div>
              <div className="tut-info">
                <div className="tut-title">
                  Python for Beginners – Variables to functions
                </div>
                <div className="tut-meta">
                  Python · 40 lessons · 1.3M learners
                </div>
              </div>
              <span className="tut-badge tut-beginner">Beginner</span>
              <span className="tut-arrow">›</span>
            </Link>

            <Link href="/learn/html-learn" className="tutorial-row">
              <div className="tut-num">05</div>
              <div className="tut-icon">🗄️</div>
              <div className="tut-info">
                <div className="tut-title">SQL SELECT – Query a real database</div>
                <div className="tut-meta">SQL · 18 lessons · 980K learners</div>
              </div>
              <span className="tut-badge tut-beginner">Beginner</span>
              <span className="tut-arrow">›</span>
            </Link>

            <Link href="/learn/html-learn" className="tutorial-row">
              <div className="tut-num">06</div>
              <div className="tut-icon">⚛️</div>
              <div className="tut-info">
                <div className="tut-title">
                  React Hooks – useState and useEffect explained
                </div>
                <div className="tut-meta">
                  React · 22 lessons · 870K learners
                </div>
              </div>
              <span className="tut-badge tut-intermediate">Intermediate</span>
              <span className="tut-arrow">›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Suggested path</div>
          <h2 className="section-title">From zero to full-stack</h2>
          <p className="section-sub">
            Follow this order if you're starting from scratch.
          </p>

          <div className="path-steps">
            <div className="path-step">
              <div className="step-num">1</div>
              <div className="step-body">
                <div className="step-title">Structure with HTML</div>
                <div className="step-desc">
                  Learn what a webpage is made of. Tags, elements, attributes,
                  forms, and semantic structure.
                </div>
                <div className="step-tags">
                  <span className="step-tag">Tags</span>
                  <span className="step-tag">Attributes</span>
                  <span className="step-tag">Forms</span>
                  <span className="step-tag">Semantic HTML</span>
                </div>
              </div>
            </div>

            <div className="path-step">
              <div className="step-num">2</div>
              <div className="step-body">
                <div className="step-title">Style with CSS</div>
                <div className="step-desc">
                  Make it look good. Colors, fonts, layout with Flexbox and Grid,
                  and responsive design.
                </div>
                <div className="step-tags">
                  <span className="step-tag">Selectors</span>
                  <span className="step-tag">Flexbox</span>
                  <span className="step-tag">Grid</span>
                  <span className="step-tag">Responsive</span>
                </div>
              </div>
            </div>

            <div className="path-step">
              <div className="step-num">3</div>
              <div className="step-body">
                <div className="step-title">Interact with JavaScript</div>
                <div className="step-desc">
                  Add logic and behavior. Variables, functions, events, DOM
                  manipulation, and async/await.
                </div>
                <div className="step-tags">
                  <span className="step-tag">DOM</span>
                  <span className="step-tag">Events</span>
                  <span className="step-tag">Arrays</span>
                  <span className="step-tag">Fetch API</span>
                </div>
              </div>
            </div>

            <div className="path-step">
              <div className="step-num">4</div>
              <div className="step-body">
                <div className="step-title">Go deeper</div>
                <div className="step-desc">
                  Pick a speciality — React for frontend, Node.js for backend,
                  Python for data, SQL for databases.
                </div>
                <div className="step-tags">
                  <span className="step-tag">React</span>
                  <span className="step-tag">Node.js</span>
                  <span className="step-tag">Python</span>
                  <span className="step-tag">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="section-inner">
          <div className="cta-banner">
            <h2 className="cta-title">Ready to write your first line of code?</h2>
            <p className="cta-sub">
              Free. No signup required. Just open a lesson and start typing.
            </p>
            <div className="cta-actions">
              <Link href="/learn/html-learn" className="btn btn-hero">
                Start with HTML →
              </Link>
              <a href="#languages" className="btn btn-outline">
                See all topics
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
