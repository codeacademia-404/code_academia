(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return o},urlObjectKeys:function(){return d}};for(var r in n)Object.defineProperty(a,r,{enumerable:!0,get:n[r]});let l=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:a}=e,n=e.protocol||"",r=e.pathname||"",s=e.hash||"",d=e.query||"",o=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?o=t+e.host:a&&(o=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(o+=":"+e.port)),d&&"object"==typeof d&&(d=String(l.urlQueryToSearchParams(d)));let c=e.search||d&&`?${d}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==o?(o="//"+(o||""),r&&"/"!==r[0]&&(r="/"+r)):o||(o=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),r=r.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${o}${r}${c}${s}`}let d=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function o(e){return s(e)}},18581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=e.r(71645);function r(e,t){let a=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=a.current;e&&(a.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(a.current=l(e,n)),t&&(r.current=l(t,n))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},73668,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return l}});let n=e.r(18967),r=e.r(52817);function l(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,r.hasBasePath)(a.pathname)}catch(e){return!1}}},84508,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={default:function(){return f},useLinkStatus:function(){return y}};for(var r in n)Object.defineProperty(a,r,{enumerable:!0,get:n[r]});let l=e.r(90809),i=e.r(43476),s=l._(e.r(71645)),d=e.r(95057),o=e.r(8372),c=e.r(18581),u=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(88540),m=e.r(91949),g=e.r(73668),b=e.r(9396);function f(t){var a,n;let r,l,f,[y,x]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),j=(0,s.useRef)(null),{href:T,as:N,children:k,prefetch:C=null,passHref:w,replace:L,shallow:S,scroll:M,onClick:P,onMouseEnter:E,onTouchStart:H,legacyBehavior:O=!1,onNavigate:_,transitionTypes:A,ref:I,unstable_dynamicOnHover:R,...B}=t;r=k,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let U=s.default.useContext(o.AppRouterContext),D=!1!==C,$=!1!==C?null===(n=C)||"auto"===n?b.FetchStrategy.PPR:b.FetchStrategy.Full:b.FetchStrategy.PPR,W="string"==typeof(a=N||T)?a:(0,d.formatUrl)(a);if(O){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});l=s.default.Children.only(r)}let F=O?l&&"object"==typeof l&&l.ref:I,Y=s.default.useCallback(e=>(null!==U&&(j.current=(0,m.mountLinkInstance)(e,W,U,$,D,x)),()=>{j.current&&((0,m.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,m.unmountPrefetchableInstance)(e)}),[D,W,U,$,x]),K={ref:(0,c.useMergedRef)(Y,F),onClick(t){O||"function"!=typeof P||P(t),O&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),!U||t.defaultPrevented||function(t,a,n,r,l,i,d){if("u">typeof window){let o,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((o=t.currentTarget.getAttribute("target"))&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(a)){r&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(a,r?"replace":"push",!1===l?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,d)})}}(t,W,j,L,M,_,A)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),U&&D&&(0,m.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){O||"function"!=typeof H||H(e),O&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),U&&D&&(0,m.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,u.isAbsoluteUrl)(W)?K.href=W:O&&!w&&("a"!==l.type||"href"in l.props)||(K.href=(0,h.addBasePath)(W)),f=O?s.default.cloneElement(l,K):(0,i.jsx)("a",{...B,...K,children:r}),(0,i.jsx)(v.Provider,{value:y,children:f})}e.r(84508);let v=(0,s.createContext)(m.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(v);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},907,e=>{"use strict";var t=e.i(43476),a=e.i(22016),n=e.i(71645);let r={intro:{title:"HTML Introduction",badge:"Beginner",time:"5 min read",section:"Getting Started",content:`
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
    `},basic:{title:"HTML Basic Structure",badge:"Beginner",time:"8 min read",section:"Getting Started",content:`
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
    `,codeBlock:{lang:"HTML",code:`<!-- Every HTML page starts with this -->
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

</html>`},tryItCode:`<!DOCTYPE html>
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
</html>`},elements:{title:"HTML Elements",badge:"Beginner",time:"7 min read",section:"Getting Started",content:`
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
    `},attributes:{title:"HTML Attributes",badge:"Beginner",time:"6 min read",section:"Getting Started",content:`
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
    `}},l=[{title:"Getting Started",items:[{id:"intro",label:"🏠 Introduction"},{id:"basic",label:"📄 Basic Structure"},{id:"elements",label:"🏷️ HTML Elements"},{id:"attributes",label:"⚙️ Attributes"}]},{title:"Core Concepts",items:[{id:"headings",label:"🔤 Headings"},{id:"paragraphs",label:"📝 Paragraphs"},{id:"links",label:"🔗 Links",badge:"New"},{id:"images",label:"🖼️ Images"},{id:"lists",label:"📋 Lists"},{id:"tables",label:"📊 Tables"}]},{title:"Forms & Input",items:[{id:"forms",label:"📬 Forms"},{id:"input",label:"⌨️ Input Types"},{id:"validation",label:"✅ Validation"}]},{title:"Advanced",items:[{id:"semantic",label:"🏗️ Semantic HTML",badge:"New"},{id:"canvas",label:"🎨 Canvas"},{id:"media",label:"🎵 Audio & Video"}]}];e.s(["default",0,function(){let[e,i]=(0,n.useState)("basic"),[s,d]=(0,n.useState)("html"),[o,c]=(0,n.useState)(!1),[u,h]=(0,n.useState)(""),p=(0,n.useRef)(null),m=r[e]||{title:"Coming Soon",badge:"Beginner",time:"2 min read",section:"Tutorial",content:"<p>We are currently working on adding this lesson. Stay tuned!</p>"};(0,n.useEffect)(()=>{m.tryItCode?h(m.tryItCode):h("")},[e,m.tryItCode]),(0,n.useEffect)(()=>{u&&p.current&&g()},[u]);let g=()=>{let e=p.current;if(!e)return;let t=e.contentDocument||e.contentWindow?.document;t&&(t.open(),t.write(u),t.close())},b=["intro","basic","elements","attributes"],f=b.indexOf(e),v=f>0?b[f-1]:null,y=-1!==f&&f<b.length-1?b[f+1]:null,x=(b.indexOf(e)+1)/b.length*100;return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,t.jsxs)("header",{className:"learn-header",children:[(0,t.jsxs)(a.default,{href:"/",className:"logo",children:[(0,t.jsx)("div",{className:"logo-icon",children:"{}"}),"CodeAcademia"]}),(0,t.jsxs)("div",{className:"search-bar",children:[(0,t.jsxs)("svg",{width:"14",height:"14",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,t.jsx)("path",{d:"M21 21l-4.35-4.35"})]}),(0,t.jsx)("input",{type:"text",placeholder:"Search tutorials, topics…"})]}),(0,t.jsxs)("nav",{className:"nav-pills",children:[(0,t.jsx)("button",{className:`nav-pill ${"html"===s?"active":""}`,onClick:()=>d("html"),children:"HTML"}),(0,t.jsx)("button",{className:`nav-pill ${"css"===s?"active":""}`,onClick:()=>d("css"),children:"CSS"}),(0,t.jsx)("button",{className:`nav-pill ${"js"===s?"active":""}`,onClick:()=>d("js"),children:"JavaScript"}),(0,t.jsx)("button",{className:`nav-pill ${"python"===s?"active":""}`,onClick:()=>d("python"),children:"Python"}),(0,t.jsx)("button",{className:`nav-pill ${"sql"===s?"active":""}`,onClick:()=>d("sql"),children:"SQL"})]})]}),(0,t.jsxs)("div",{className:"layout",style:{display:"flex",flex:1},children:[(0,t.jsxs)("aside",{className:"sidebar",children:[(0,t.jsx)("div",{className:"progress-label",children:"Your progress – HTML"}),(0,t.jsx)("div",{className:"progress-bar-wrap",children:(0,t.jsx)("div",{className:"progress-bar-fill",style:{width:`${x}%`,transition:"width 0.3s"}})}),l.map(a=>(0,t.jsxs)("div",{className:"sidebar-section",children:[(0,t.jsx)("div",{className:"sidebar-heading",children:a.title}),a.items.map(a=>(0,t.jsxs)("div",{className:`sidebar-item ${e===a.id?"active":""}`,onClick:()=>i(a.id),children:[a.label,a.badge&&(0,t.jsx)("span",{className:"tag",children:a.badge})]},a.id))]},a.title))]}),(0,t.jsx)("main",{className:"main",style:{flex:1,padding:"40px"},children:(0,t.jsxs)("div",{className:"content",id:"lesson-content",children:[(0,t.jsxs)("div",{className:"breadcrumb",children:[(0,t.jsx)("span",{children:s.toUpperCase()}),(0,t.jsx)("span",{style:{color:"var(--muted)",margin:"0 8px"},children:"›"}),(0,t.jsx)("span",{children:m.section}),(0,t.jsx)("span",{style:{color:"var(--muted)",margin:"0 8px"},children:"›"}),(0,t.jsx)("span",{children:m.title})]}),(0,t.jsx)("h1",{className:"page-title",children:m.title}),(0,t.jsxs)("div",{className:"page-meta",children:[(0,t.jsx)("span",{className:`badge ${"Beginner"===m.badge?"badge-beginner":"badge-intermediate"}`,children:m.badge}),(0,t.jsxs)("span",{className:"read-time",style:{marginLeft:"12px"},children:["⏱ ",m.time]})]}),(0,t.jsx)("div",{className:"prose",dangerouslySetInnerHTML:{__html:m.content}}),m.codeBlock&&(0,t.jsxs)("div",{className:"code-block",children:[(0,t.jsxs)("div",{className:"code-toolbar",children:[(0,t.jsxs)("div",{className:"code-dots",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]}),(0,t.jsx)("div",{className:"code-lang",children:m.codeBlock.lang}),(0,t.jsx)("div",{className:"code-btn",children:(0,t.jsx)("button",{className:"btn-sm",onClick:()=>{var e;return e=m.codeBlock.code,void navigator.clipboard.writeText(e).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})},children:o?"Copied!":"Copy"})})]}),(0,t.jsx)("div",{className:"code-area",children:(0,t.jsx)("pre",{children:m.codeBlock.code})})]}),u&&(0,t.jsxs)("div",{className:"try-it-block",children:[(0,t.jsxs)("div",{className:"try-it-header",children:[(0,t.jsx)("svg",{width:"14",height:"14",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"})}),(0,t.jsx)("span",{children:"Try It Yourself"})]}),(0,t.jsxs)("div",{className:"try-it-body",children:[(0,t.jsxs)("div",{className:"editor-pane",children:[(0,t.jsx)("div",{className:"pane-label",children:"HTML Editor"}),(0,t.jsx)("textarea",{className:"code-editor",value:u,onChange:e=>h(e.target.value)})]}),(0,t.jsxs)("div",{className:"output-pane",children:[(0,t.jsx)("div",{className:"pane-label",children:"Preview"}),(0,t.jsx)("iframe",{ref:p,id:"livePreview",title:"Live Preview"})]})]}),(0,t.jsxs)("div",{className:"try-it-footer",children:[(0,t.jsx)("button",{className:"btn-sm",onClick:()=>{m.tryItCode&&h(m.tryItCode)},children:"↺ Reset"}),(0,t.jsx)("button",{className:"btn-sm btn-run",onClick:g,children:"▶ Run"})]})]}),(0,t.jsxs)("div",{className:"lesson-nav",children:[v?(0,t.jsxs)("a",{className:"nav-card prev",onClick:()=>i(v),children:[(0,t.jsx)("div",{className:"nav-card-label",children:"← Previous"}),(0,t.jsx)("div",{className:"nav-card-title",children:r[v].title})]}):(0,t.jsxs)("div",{className:"nav-card prev disabled",children:[(0,t.jsx)("div",{className:"nav-card-label",children:"← Previous"}),(0,t.jsx)("div",{className:"nav-card-title",children:"None"})]}),y?(0,t.jsxs)("a",{className:"nav-card next",onClick:()=>i(y),children:[(0,t.jsx)("div",{className:"nav-card-label",children:"Next →"}),(0,t.jsx)("div",{className:"nav-card-title",children:r[y].title})]}):(0,t.jsxs)("div",{className:"nav-card next disabled",children:[(0,t.jsx)("div",{className:"nav-card-label",children:"Next →"}),(0,t.jsx)("div",{className:"nav-card-title",children:"End of Track"})]})]})]})})]})]})}])}]);