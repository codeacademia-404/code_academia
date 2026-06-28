# CodeAcademia - GeeksforGeeks-Style Tech Education Site

CodeAcademia is a highly optimized, fully static technology education platform built using standard HTML5, Vanilla CSS3, and client-side JavaScript. It is designed to be hosted for free on **GitHub Pages** and is pre-configured with a tactical **Google AdSense** placement strategy.

---

## 📁 Directory Structure

```
codeacademia/
│
├── index.html                  # Homepage
├── about.html                  # About page
├── contact.html                # Contact page
│
├── css/
│   ├── style.css               # Global theme styles
│   ├── article.css             # Article/tutorial layouts
│   └── responsive.css          # Mobile responsiveness
│
├── js/
│   ├── main.js                 # Search logic, dark theme, navigation
│   └── ads.js                  # AdSense placeholder/live loaders
│
├── topics/                     # Category Pages
│   ├── python.html
│   ├── webdev.html
│   ├── dsa.html
│   ├── javascript.html
│   └── linux.html
│
├── articles/                   # Tutorial Content Pages
│   ├── python-basics.html
│   ├── html-intro.html
│   ├── binary-search.html
│   └── ...
│
├── assets/
│   └── images/
│       ├── logo.png            # Site logo
│       └── og-banner.png       # OG Share Banner
│
├── ads/
│   └── adsense.html            # AdSense HTML snippet codes
│
├── sitemap.xml                 # For SEO indexing
├── robots.txt                  # Crawl rules
├── 404.html                    # Custom Page Not Found
└── README.md
```

---

## 🚀 GitHub Pages Setup

Hosting CodeAcademia on GitHub Pages takes under 2 minutes:

1. **Create a GitHub Repository**: Name the repository `codeacademia` (or `yourusername.github.io` if you want it on the root domain).
2. **Push the Files**: Commit all files from this directory and push them to the `main` branch.
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** tab.
   - Scroll down to the **Pages** menu on the left sidebar.
   - Under **Build and deployment**, set the source to **Deploy from a branch**.
   - Select the `main` branch and `/root` folder, then click **Save**.
4. **Access the Site**: Your site will go live at `https://yourusername.github.io/codeacademia/`.

### Custom Domain Configuration (Optional)
If you purchased a custom domain (e.g., `codeacademia.in`):
1. In the repository **Settings → Pages** menu, type your domain in the **Custom domain** box and save.
2. This creates a `CNAME` file in the root of your repository.
3. Update your DNS settings at your domain registrar (Namecheap, GoDaddy, etc.) by creating standard `A` records pointing to GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

---

## 💰 Google AdSense Integration Strategy

CodeAcademia has built-in slots located at high-earning focal points:

| Location | Type | Slot ID Reference | Best For |
|---|---|---|---|
| Below header | Leaderboard (728×90) | `top-banner` | Instant visibility |
| Mid-article | In-article ad | `mid-ad` | Content absorption breaks |
| Sidebar | Rectangle (300×250) | `sidebar-ad` | Desktop users |
| After article | Responsive ad | `bottom-ad` | End-of-article engagement |

### Launching Live Ads
By default, CodeAcademia runs in **development preview mode** with clean, glassmorphic layout placeholders. Once your AdSense application is approved:

1. Open `index.html`, `about.html`, `contact.html`, and any page in `topics/` or `articles/`.
2. Locate the AdSense script tag in the `<head>` of the files:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script>
   ```
3. Replace the Client ID `ca-pub-XXXXXXXX` with your actual AdSense Publisher ID.
4. Push the changes to GitHub. The code in `js/ads.js` will automatically detect the active publisher script and swap mock indicators with live Google Ad units.

---

## 🎨 Design System & Customization

The site styling is fully parameterized via CSS Variables inside `css/style.css`.
- **Toggle Light/Dark**: Handled by changing `data-theme="light"` or `data-theme="dark"` on the `<html>` root node, managed via `js/main.js`.
- **Primary Color Accents**: Adjust variables like `--primary` or `--accent-gradient` inside `css/style.css` to instantly change theme colors across the entire site.
- **Adding Articles**: Save new tutorial files in the `articles/` directory. Add them to `ARTICLES_DATABASE` in `js/main.js` so they instantly appear in client-side search results.
