// CodeAcademia AdSense Integrator & Mock Loader

document.addEventListener("DOMContentLoaded", () => {
  initAds();
});

function initAds() {
  const adSlots = document.querySelectorAll(".ad-slot");

  // Detect if we have a valid AdSense Client ID
  // Look for any script with the src targeting pagead2 and check client param
  let isRealAdSenseActive = false;
  const scriptTags = document.querySelectorAll("script[src*='pagead2.googlesyndication.com']");

  scriptTags.forEach(script => {
    const src = script.getAttribute("src");
    if (src && !src.includes("ca-pub-1683939206944896")) {
      isRealAdSenseActive = true;
    }
  });

  adSlots.forEach(slot => {
    const type = slot.getAttribute("data-ad-type");
    const spec = slot.getAttribute("data-ad-spec") || "Responsive";

    if (isRealAdSenseActive) {
      // If real AdSense client is active, render real AdSense ins tag
      const client = getAdSenseClientId();
      const slotId = slot.getAttribute("data-ad-slot-id") || "1234567890";

      slot.innerHTML = `
        <ins class="adsbygoogle"
             style="display:block; text-align:center;"
             data-ad-layout="in-article"
             data-ad-format="auto"
             data-ad-client="${client}"
             data-ad-slot="${slotId}"
             data-full-width-responsive="true"></ins>
      `;

      // Push to Google adsbygoogle array
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn("AdSense push error: ", e);
      }
    } else {
      // Render beautiful mock ads matching color scheme
      slot.style.display = "flex";

      let icon = "";
      if (type === "leaderboard") {
        icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="opacity:0.6; margin-bottom:8px;"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>`;
      } else if (type === "sidebar") {
        icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="opacity:0.6; margin-bottom:8px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 16H5v-6h7v6zm7 0h-6v-6h6v6zm0-8H5V5h14v6z"/></svg>`;
      } else {
        icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="opacity:0.6; margin-bottom:8px;"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/></svg>`;
      }

      slot.innerHTML = `
        ${icon}
        <div class="ad-slot-label">Google AdSense Placeholder</div>
        <div class="ad-slot-spec">${type.toUpperCase()} (${spec})</div>
      `;
    }
  });
}

function getAdSenseClientId() {
  const script = document.querySelector("script[src*='pagead2.googlesyndication.com']");
  if (script) {
    const src = script.getAttribute("src");
    const match = src.match(/client=(ca-pub-[a-zA-Z0-9]+)/);
    if (match) {
      return match[1];
    }
  }
  return "ca-pub-XXXXXXXX";
}
