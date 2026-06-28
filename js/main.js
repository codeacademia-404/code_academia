// CodeAcademia Main JavaScript File

// Articles Index for Client-Side Search
const ARTICLES_DATABASE = [
  {
    title: "Python Basics: Get Started with Programming",
    url: "articles/python-basics.html",
    category: "Python",
    description: "Learn Python fundamentals including variables, data types, control flow, and basic loops from scratch."
  },
  {
    title: "Introduction to HTML: Build Your First Webpage",
    url: "articles/html-intro.html",
    category: "Web Dev",
    description: "Step-by-step introduction to HTML tags, semantic structure, lists, tables, and page metadata."
  },
  {
    title: "Understanding Binary Search: Concept & Code",
    url: "articles/binary-search.html",
    category: "DSA",
    description: "Deep dive into the binary search algorithm, its time complexity, log n analysis, and implementation."
  },
  {
    title: "Introduction to Javascript: Variables and Functions",
    url: "articles/javascript-basics.html",
    category: "JavaScript",
    description: "Master variables, scoping, arrow functions, and basic arrays in modern JavaScript."
  },
  {
    title: "Linux File System: Navigating directory structure",
    url: "articles/linux-filesystem.html",
    category: "Linux",
    description: "Understand the root hierarchy, home directories, hidden files, and basic navigation tools."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initSearch();
  initCodeCopy();
});

/* --- Theme Management --- */
function initTheme() {
  const themeToggleButtons = document.querySelectorAll(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark mode for rich visual aesthetics
  
  setTheme(savedTheme);

  themeToggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/* --- Mobile Navigation Menu --- */
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const isActive = navLinks.classList.contains("active");
      hamburger.innerHTML = isActive 
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
      });
    });
  }
}

/* --- Instant Search Logic --- */
function initSearch() {
  const searchInputs = document.querySelectorAll(".search-input");
  
  // Helper to determine the path prefix relative to depth
  const isNested = window.location.pathname.includes("/topics/") || window.location.pathname.includes("/articles/");
  const pathPrefix = isNested ? "../" : "";

  searchInputs.forEach(input => {
    // Create and append results container
    const container = input.parentElement;
    let dropdown = container.querySelector(".search-results-dropdown");
    
    if (!dropdown) {
      dropdown = document.createElement("div");
      dropdown.className = "search-results-dropdown";
      container.appendChild(dropdown);
    }

    input.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (!query) {
        dropdown.classList.remove("active");
        dropdown.innerHTML = "";
        return;
      }

      const matches = ARTICLES_DATABASE.filter(art => 
        art.title.toLowerCase().includes(query) ||
        art.category.toLowerCase().includes(query) ||
        art.description.toLowerCase().includes(query)
      );

      displaySearchResults(matches, dropdown, pathPrefix);
    });

    // Focus handler
    input.addEventListener("focus", (e) => {
      if (e.target.value.trim()) {
        dropdown.classList.add("active");
      }
    });
  });

  // Close search when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container") && !e.target.closest(".hero-search")) {
      document.querySelectorAll(".search-results-dropdown").forEach(drop => {
        drop.classList.remove("active");
      });
    }
  });
}

function displaySearchResults(results, dropdown, prefix) {
  dropdown.innerHTML = "";
  dropdown.classList.add("active");

  if (results.length === 0) {
    dropdown.innerHTML = `<div class="search-result-empty">No results found for your query.</div>`;
    return;
  }

  results.forEach(art => {
    const item = document.createElement("a");
    item.className = "search-result-item";
    item.href = prefix + art.url;
    
    item.innerHTML = `
      <div class="search-result-category">${art.category}</div>
      <div class="search-result-title">${art.title}</div>
    `;
    dropdown.appendChild(item);
  });
}

/* --- Code Highlight & Copy Code Button --- */
function initCodeCopy() {
  // If Highlight.js is loaded, highlight
  if (typeof hljs !== "undefined") {
    hljs.highlightAll();
  }

  const codeBlocks = document.querySelectorAll("pre code");
  
  codeBlocks.forEach(codeBlock => {
    const pre = codeBlock.parentElement;
    if (!pre) return;
    
    let container = pre.parentElement;
    let copyBtn;

    // Check if it's already wrapped in a code-block-container
    if (container && container.classList.contains("code-block-container")) {
      // Find the existing copy button in the header
      copyBtn = container.querySelector(".copy-code-btn");
    } else {
      // Wrap it dynamically
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-container";
      
      const header = document.createElement("div");
      header.className = "code-block-header";
      
      // Determine language
      let lang = "CODE";
      const classes = codeBlock.className.split(" ");
      classes.forEach(c => {
        if (c.startsWith("language-")) {
          lang = c.replace("language-", "").toUpperCase();
        }
      });
      
      header.innerHTML = `
        <span class="code-block-lang">${lang}</span>
        <button class="copy-code-btn" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right:2px;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          <span>Copy</span>
        </button>
      `;
      
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
      
      copyBtn = header.querySelector(".copy-code-btn");
    }

    // Attach copy event handler to the button
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const text = codeBlock.textContent;
        navigator.clipboard.writeText(text).then(() => {
          const btnSpan = copyBtn.querySelector("span");
          btnSpan.textContent = "Copied!";
          copyBtn.style.borderColor = "var(--accent)";
          copyBtn.style.color = "var(--accent)";
          
          setTimeout(() => {
            btnSpan.textContent = "Copy";
            copyBtn.style.borderColor = "";
            copyBtn.style.color = "";
          }, 2000);
        }).catch(err => {
          console.error("Failed to copy text: ", err);
        });
      });
    }
  });
}
