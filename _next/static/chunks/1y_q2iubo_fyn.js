(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return i}};for(var r in s)Object.defineProperty(n,r,{enumerable:!0,get:s[r]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,s=e.protocol||"",r=e.pathname||"",l=e.hash||"",i=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(o.urlQueryToSearchParams(i)));let d=e.search||i&&`?${i}`||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||a.test(s))&&!1!==c?(c="//"+(c||""),r&&"/"!==r[0]&&(r="/"+r)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),r=r.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${s}${c}${r}${d}${l}`}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return r}});let s=e.r(71645);function r(e,t){let n=(0,s.useRef)(null),r=(0,s.useRef)(null);return(0,s.useCallback)(s=>{if(null===s){let e=n.current;e&&(n.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(n.current=o(e,s)),t&&(r.current=o(t,s))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let s=e.r(18967),r=e.r(52817);function o(e){if(!(0,s.isAbsoluteUrl)(e))return!0;try{let t=(0,s.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,r.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},22016,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={default:function(){return x},useLinkStatus:function(){return b}};for(var r in s)Object.defineProperty(n,r,{enumerable:!0,get:s[r]});let o=e.r(90809),a=e.r(43476),l=o._(e.r(71645)),i=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(88540),f=e.r(91949),m=e.r(73668),g=e.r(9396);function x(t){var n,s;let r,o,x,[b,y]=(0,l.useOptimistic)(f.IDLE_LINK_STATUS),j=(0,l.useRef)(null),{href:w,as:S,children:C,prefetch:k=null,passHref:N,replace:T,shallow:_,scroll:E,onClick:M,onMouseEnter:L,onTouchStart:$,legacyBehavior:P=!1,onNavigate:O,transitionTypes:R,ref:I,unstable_dynamicOnHover:D,...H}=t;r=C,P&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let U=l.default.useContext(c.AppRouterContext),A=!1!==k,B=!1!==k?null===(s=k)||"auto"===s?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,z="string"==typeof(n=S||w)?n:(0,i.formatUrl)(n);if(P){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(r)}let K=P?o&&"object"==typeof o&&o.ref:I,W=l.default.useCallback(e=>(null!==U&&(j.current=(0,f.mountLinkInstance)(e,z,U,B,A,y)),()=>{j.current&&((0,f.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,f.unmountPrefetchableInstance)(e)}),[A,z,U,B,y]),J={ref:(0,d.useMergedRef)(W,K),onClick(t){P||"function"!=typeof M||M(t),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,n,s,r,o,a,i){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){r&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);l.default.startTransition(()=>{u(n,r?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,s.current,i)})}}(t,z,j,T,E,O,R)},onMouseEnter(e){P||"function"!=typeof L||L(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&A&&(0,f.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){P||"function"!=typeof $||$(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&A&&(0,f.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,u.isAbsoluteUrl)(z)?J.href=z:P&&!N&&("a"!==o.type||"href"in o.props)||(J.href=(0,h.addBasePath)(z)),x=P?l.default.cloneElement(o,J):(0,a.jsx)("a",{...H,...J,children:r}),(0,a.jsx)(v.Provider,{value:b,children:x})}e.r(84508);let v=(0,l.createContext)(f.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(v);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},75677,e=>{"use strict";var t=e.i(43476),n=e.i(22016),s=e.i(71645);let r={html:`<!DOCTYPE html>
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
</html>`,css:`* {
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
}`,js:`function greet() {
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
console.log('Try editing me in the JS tab!');`};e.s(["default",0,function(){let[e,o]=(0,s.useState)("html"),[a,l]=(0,s.useState)(r.html),[i,c]=(0,s.useState)(r.css),[d,u]=(0,s.useState)(r.js),[h,p]=(0,s.useState)(13),[f,m]=(0,s.useState)(!1),[g,x]=(0,s.useState)([]),[v,b]=(0,s.useState)("Ready"),[y,j]=(0,s.useState)(!1),[w,S]=(0,s.useState)(50),[C,k]=(0,s.useState)(!1),[N,T]=(0,s.useState)(""),[_,E]=(0,s.useState)(""),[M,L]=(0,s.useState)(!1),$=(0,s.useRef)(null),[,P]=(0,s.useTransition)();(0,s.useEffect)(()=>{{let e=new URLSearchParams(window.location.search).get("code");if(e)try{let t=JSON.parse(decodeURIComponent(escape(atob(e))));t.html&&l(t.html),t.css&&c(t.css),t.js&&u(t.js),R("✨ Code loaded from shared link")}catch{}else{let e=sessionStorage.getItem("code_html"),t=sessionStorage.getItem("code_css"),n=sessionStorage.getItem("code_js");e&&l(e),t&&c(t),n&&u(n)}let t=()=>{E(new Date().toLocaleTimeString())};t();let n=setInterval(t,1e3);return()=>clearInterval(n)}},[]),(0,s.useEffect)(()=>{sessionStorage.setItem("code_html",a)},[a]),(0,s.useEffect)(()=>{sessionStorage.setItem("code_css",i)},[i]),(0,s.useEffect)(()=>{sessionStorage.setItem("code_js",d)},[d]),(0,s.useEffect)(()=>{let e=e=>{e.data&&"CONSOLE_LOG"===e.data.type&&(x(t=>[...t,{type:e.data.level,text:e.data.text}]),"error"===e.data.level&&(m(!0),b("Error inside code"),j(!0)))};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);let O=(e=!1)=>{if(!$.current)return;L(!0),e||x([]);let t=`<style>${i}</style>`,n=`
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
    `,s=`<script>
      try {
        ${d}
      } catch(e) {
        console.error(e.message);
      }
    </script>`,r=a;r=/<\/head>/i.test(r)?r.replace(/<\/head>/i,`${t}
</head>`):t+r,r=/<head>/i.test(r)?r.replace(/<head>/i,`<head>
${n}`):n+r,/<\/body>/i.test(r)?r=r.replace(/<\/body>/i,`${s}
</body>`):r+=s;let o=$.current,l=o.contentDocument||o.contentWindow?.document;l&&(l.open(),l.write(r),l.close()),setTimeout(()=>{L(!1),e||(b("Ran at "+new Date().toLocaleTimeString()),j(!1))},200)};(0,s.useEffect)(()=>{O(!0)},[]);let R=e=>{T(e),setTimeout(()=>T(""),2500)},I=(e,t)=>{let n=e.currentTarget,s=n.selectionStart,r=n.selectionEnd;if("Tab"===e.key){e.preventDefault();let o="html"===t?a:"css"===t?i:d,h=o.substring(0,s)+"  "+o.substring(r);"html"===t?l(h):"css"===t?c(h):u(h),setTimeout(()=>{n.selectionStart=n.selectionEnd=s+2},0);return}if((e.ctrlKey||e.metaKey)&&("s"===e.key||"Enter"===e.key)){e.preventDefault(),O(),"s"===e.key&&R("Saved & Ran Code");return}let o={"(":")","{":"}","[":"]",'"':'"',"'":"'","`":"`"};if(o[e.key]){e.preventDefault();let h="html"===t?a:"css"===t?i:d,p=h.substring(s,r),f=e.key+p+o[e.key],m=h.substring(0,s)+f+h.substring(r);"html"===t?l(m):"css"===t?c(m):u(m),setTimeout(()=>{n.selectionStart=n.selectionEnd=s+1},0);return}if("Enter"===e.key){e.preventDefault();let o="html"===t?a:"css"===t?i:d,h=o.lastIndexOf("\n",s-1)+1,p=o.substring(h,s),f=p.match(/^(\s*)/),m="\n"+(f?f[1]:"")+(/[{(\[]$/.test(p.trimEnd())?"  ":""),g=o.substring(0,s)+m+o.substring(r);"html"===t?l(g):"css"===t?c(g):u(g),setTimeout(()=>{n.selectionStart=n.selectionEnd=s+m.length},0);return}if("Backspace"===e.key&&s===r){let r="html"===t?a:"css"===t?i:d,o=r[s-1],h=r[s],p={"(":")","{":"}","[":"]",'"':'"',"'":"'","`":"`"};if(p[o]&&p[o]===h){e.preventDefault();let o=r.substring(0,s-1)+r.substring(s+1);"html"===t?l(o):"css"===t?c(o):u(o),setTimeout(()=>{n.selectionStart=n.selectionEnd=s-1},0)}}},D=e=>Array.from({length:e.split("\n").length},(e,t)=>t+1);return(0,t.jsxs)("div",{className:`body-wrapper ${C?"fullscreen-preview":""}`,style:{display:"flex",flexDirection:"column",height:"100vh"},children:[(0,t.jsxs)("div",{className:"topbar",children:[(0,t.jsxs)(n.default,{href:"/",className:"logo",children:[(0,t.jsx)("div",{className:"logo-icon",children:"{}"}),"CodeAcademia"]}),(0,t.jsx)("div",{className:"topbar-divider"}),(0,t.jsx)("span",{className:"topbar-title",children:"Try It Editor"}),(0,t.jsx)("span",{className:"topbar-sub",children:"— HTML / CSS / JavaScript"}),(0,t.jsxs)("div",{className:"topbar-actions",children:[(0,t.jsxs)("button",{className:"btn btn-ghost",onClick:()=>{if("html"===e){let e=0;l(a.split("\n").map(e=>e.trim()).filter(e=>e).map(t=>{let n=/^<\//.test(t),s=/\/>$/.test(t)||/^<(meta|link|img|br|hr|input|style|script)/.test(t),r=/^<!/.test(t);n&&(e=Math.max(0,e-1));let o=(r?"":"  ".repeat(e))+t;return!n&&!s&&/^<[^/!]/.test(t)&&e++,o}).join("\n"))}else"css"===e?c(i.replace(/\s*{\s*/g," {\n  ").replace(/;\s*/g,";\n  ").replace(/\s*}\s*/g,"\n}\n").replace(/  \n}/g,"\n}").replace(/\n{3,}/g,"\n\n").trim()):u(d.replace(/;(?!\n)/g,";\n").replace(/\n{3,}/g,"\n\n").trim());R("✨ Code formatted")},title:"Auto-format code",children:[(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M21 10H7M21 6H3M21 14H3M21 18H7"})}),"Format"]}),(0,t.jsxs)("button",{className:"btn btn-ghost",style:{color:f?"var(--accent2)":""},onClick:()=>m(e=>!e),title:"Toggle console",children:[(0,t.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("polyline",{points:"4 17 10 11 4 5"}),(0,t.jsx)("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]}),"Console"]}),(0,t.jsx)("button",{className:"btn btn-icon",onClick:()=>k(e=>!e),title:"Preview fullscreen",children:(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"})})}),(0,t.jsxs)("button",{className:"btn btn-ghost",onClick:()=>{let e=btoa(unescape(encodeURIComponent(JSON.stringify({html:a,css:i,js:d})))),t=window.location.href.split("?")[0]+"?code="+e;navigator.clipboard.writeText(t).then(()=>{R("🔗 Share link copied to clipboard!")})},title:"Copy share link",children:[(0,t.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("circle",{cx:"18",cy:"5",r:"3"}),(0,t.jsx)("circle",{cx:"6",cy:"12",r:"3"}),(0,t.jsx)("circle",{cx:"18",cy:"19",r:"3"}),(0,t.jsx)("path",{d:"M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"})]}),"Share"]}),(0,t.jsxs)("button",{className:"btn btn-ghost",onClick:()=>{window.confirm("Reset all code to defaults?")&&(l(r.html),c(r.css),u(r.js),R("↺ Reset to defaults"))},title:"Reset all code",children:[(0,t.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("polyline",{points:"1 4 1 10 7 10"}),(0,t.jsx)("path",{d:"M3.51 15a9 9 0 102.13-9.36L1 10"})]}),"Reset"]}),(0,t.jsxs)("button",{className:"btn btn-run",onClick:()=>O(!1),children:[(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M5 3l14 9-14 9V3z"})}),"Run ▶"]})]})]}),(0,t.jsxs)("div",{className:"editor-layout",id:"editorLayout",style:{display:"flex",flex:1},children:[(0,t.jsxs)("div",{className:"code-side",style:{width:C?"0%":`${w}%`,display:C?"none":"flex"},children:[(0,t.jsxs)("div",{className:"editor-tabs",children:[(0,t.jsxs)("button",{className:`tab-btn ${"html"===e?"active":""}`,onClick:()=>o("html"),children:[(0,t.jsx)("span",{className:"tab-dot html"})," HTML"]}),(0,t.jsxs)("button",{className:`tab-btn ${"css"===e?"active":""}`,onClick:()=>o("css"),children:[(0,t.jsx)("span",{className:"tab-dot css"})," CSS"]}),(0,t.jsxs)("button",{className:`tab-btn ${"js"===e?"active":""}`,onClick:()=>o("js"),children:[(0,t.jsx)("span",{className:"tab-dot js"})," JS"]}),(0,t.jsxs)("div",{className:"tab-actions",children:[(0,t.jsx)("button",{className:"tab-action-btn",onClick:()=>{p(e=>Math.min(20,e+1)),R(`Font size: ${Math.min(20,h+1)}px`)},title:"Increase font size",children:"A+"}),(0,t.jsx)("button",{className:"tab-action-btn",onClick:()=>{p(e=>Math.max(10,e-1)),R(`Font size: ${Math.max(10,h-1)}px`)},title:"Decrease font size",children:"A-"}),(0,t.jsx)("button",{className:"tab-action-btn",onClick:()=>{let t="html"===e?a:"css"===e?i:d;navigator.clipboard.writeText(t).then(()=>{R("⎘ Copied to clipboard!")})},title:"Copy code",children:"⎘"})]})]}),(0,t.jsxs)("div",{className:`editor-pane-wrap ${"html"===e?"active":""}`,children:[(0,t.jsx)("div",{className:"line-numbers",children:D(a).map(e=>(0,t.jsx)("span",{style:{fontSize:h,lineHeight:`${1.6*h}px`},children:e},e))}),(0,t.jsx)("textarea",{className:"code-textarea",style:{fontSize:h,lineHeight:`${1.6*h}px`},spellCheck:"false",value:a,onChange:e=>{l(e.target.value),P(()=>O(!0))},onKeyDown:e=>I(e,"html")})]}),(0,t.jsxs)("div",{className:`editor-pane-wrap ${"css"===e?"active":""}`,children:[(0,t.jsx)("div",{className:"line-numbers",children:D(i).map(e=>(0,t.jsx)("span",{style:{fontSize:h,lineHeight:`${1.6*h}px`},children:e},e))}),(0,t.jsx)("textarea",{className:"code-textarea",style:{fontSize:h,lineHeight:`${1.6*h}px`},spellCheck:"false",value:i,onChange:e=>{c(e.target.value),P(()=>O(!0))},onKeyDown:e=>I(e,"css")})]}),(0,t.jsxs)("div",{className:`editor-pane-wrap ${"js"===e?"active":""}`,children:[(0,t.jsx)("div",{className:"line-numbers",children:D(d).map(e=>(0,t.jsx)("span",{style:{fontSize:h,lineHeight:`${1.6*h}px`},children:e},e))}),(0,t.jsx)("textarea",{className:"code-textarea",style:{fontSize:h,lineHeight:`${1.6*h}px`},spellCheck:"false",value:d,onChange:e=>{u(e.target.value),P(()=>O(!0))},onKeyDown:e=>I(e,"js")})]}),(0,t.jsxs)("div",{className:"editor-status",children:[(0,t.jsx)("span",{children:"Ready"}),(0,t.jsxs)("span",{children:["html"===e?a.length:"css"===e?i.length:d.length," ","chars"]}),(0,t.jsx)("span",{children:e.toUpperCase()}),(0,t.jsx)("span",{className:y?"status-err":"status-ok",children:v})]}),(0,t.jsxs)("div",{className:`console-panel ${f?"open":""}`,children:[(0,t.jsxs)("div",{className:"console-header",children:[(0,t.jsx)("span",{className:"console-title",children:"Console"}),(0,t.jsx)("span",{style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:g.length>0&&`(${g.length})`}),(0,t.jsx)("button",{className:"console-clear",onClick:()=>x([]),children:"Clear"})]}),(0,t.jsx)("div",{className:"console-output",children:0===g.length?(0,t.jsx)("div",{className:"console-empty",children:"Console output will appear here."}):g.map((e,n)=>(0,t.jsxs)("div",{className:`console-line ${e.type}`,children:[(0,t.jsx)("span",{className:"con-icon",children:"error"===e.type?"✖":"warn"===e.type?"⚠":"info"===e.type?"ℹ":"›"}),(0,t.jsx)("span",{children:e.text})]},n))})]})]}),!C&&(0,t.jsx)("div",{className:"resize-handle",id:"resizeHandle",onMouseDown:e=>{e.preventDefault();let t=e=>{S(Math.min(80,Math.max(20,e.clientX/window.innerWidth*100)))},n=()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}}),(0,t.jsxs)("div",{className:"preview-side",children:[(0,t.jsxs)("div",{className:"preview-tabs",children:[(0,t.jsx)("span",{className:"preview-label",children:"Preview"}),(0,t.jsxs)("div",{className:"preview-url",children:[(0,t.jsx)("div",{className:"preview-url-dot"}),"CodeAcademia://preview"]}),(0,t.jsx)("button",{className:"btn btn-icon",onClick:()=>O(!1),title:"Reload preview",style:{marginLeft:"4px"},children:(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,t.jsx)("polyline",{points:"1 4 1 10 7 10"}),(0,t.jsx)("path",{d:"M3.51 15a9 9 0 102.13-9.36L1 10"})]})}),(0,t.jsx)("button",{className:"btn btn-icon",onClick:()=>k(e=>!e),title:"Fullscreen preview",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,t.jsx)("path",{d:"M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"})})})]}),(0,t.jsxs)("div",{className:"preview-content",children:[(0,t.jsx)("iframe",{ref:$,id:"livePreview",title:"Live Preview",sandbox:"allow-scripts allow-same-origin"}),(0,t.jsx)("div",{className:`preview-loading ${M?"show":""}`,children:(0,t.jsx)("div",{className:"spinner"})})]})]})]}),(0,t.jsxs)("div",{className:"bottombar",children:[(0,t.jsx)("span",{children:"🟢 CodeAcademia Editor"}),(0,t.jsx)("span",{children:"HTML · CSS · JS"}),(0,t.jsxs)("div",{className:"bb-right",style:{marginLeft:"auto",display:"flex",gap:"16px"},children:[(0,t.jsx)("span",{children:"Tab = 2 spaces"}),(0,t.jsx)("span",{children:_})]})]}),(0,t.jsx)("div",{className:`toast ${N?"show":""}`,children:N})]})}])}]);