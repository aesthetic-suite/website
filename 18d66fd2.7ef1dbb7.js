(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||c;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},113:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},114:function(e,t,a){"use strict";var n=a(0),r=a(115);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},115:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},118:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(114),l=a(113),i=a(47),o=a.n(i);const s=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:i,values:b,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(c.a)(),[O,f]=Object(n.useState)(i),[h,j]=Object(n.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==O&&b.some(t=>t.value===e)&&f(e)}const y=e=>{f(e),null!=p&&d(p,e)},g=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},w=()=>{j(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",w)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===e}),style:h?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),v(e)},onFocus:()=>y(e),onClick:()=>{y(e),j(!1)},onPointerDown:()=>j(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===O)[0]))}},119:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(111)),l=a(118),i=a(119),o={title:"Prerequisites"},s={unversionedId:"prerequisites",id:"prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"Aesthetic is written in Typescript and compiled to JavaScript. As such, all tooling requires at",source:"@site/docs/prerequisites.mdx",slug:"/prerequisites",permalink:"/docs/prerequisites",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/prerequisites.mdx",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"What is a design system?",permalink:"/docs/design-system"}},u=[{value:"Command line",id:"command-line",children:[{value:"Global install",id:"global-install",children:[]},{value:"Local install",id:"local-install",children:[]},{value:"NPX",id:"npx",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Aesthetic is written in Typescript and compiled to JavaScript. As such, all tooling requires at\nminimum NodeJS v10.10 to run correctly."),Object(c.b)("p",null,"We highly suggest installing and managing NodeJS with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"nvm"),"."),Object(c.b)("h2",{id:"command-line"},"Command line"),Object(c.b)("p",null,"Aesthetic provides an interactive command line program through the ",Object(c.b)("inlineCode",{parentName:"p"},"@aesthetic/cli")," package. In\nfurthur documentation, we'll use the ",Object(c.b)("inlineCode",{parentName:"p"},"aesthetic")," binary within examples, which should be substituted\nwith 1 of the following patterns."),Object(c.b)("h3",{id:"global-install"},"Global install"),Object(c.b)("p",null,"Install the package globally to make the ",Object(c.b)("inlineCode",{parentName:"p"},"aesthetic")," binary available everywhere."),Object(c.b)(l.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add @aesthetic/cli\n"))),Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g @aesthetic/cli\n")))),Object(c.b)("p",null,"Then run the binary as-is."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"aesthetic <cmd>\n")),Object(c.b)("h3",{id:"local-install"},"Local install"),Object(c.b)("p",null,"Install the package locally to the project to make the ",Object(c.b)("inlineCode",{parentName:"p"},"aesthetic")," binary available within scripts."),Object(c.b)(l.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @aesthetic/cli\n"))),Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev @aesthetic/cli\n")))),Object(c.b)("p",null,"Update ",Object(c.b)("inlineCode",{parentName:"p"},"package.json")," to define the script."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "compile": "aesthetic compile <name> ./build"\n  }\n}\n')),Object(c.b)("p",null,"Then run the script with NPM or Yarn."),Object(c.b)(l.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run compile\n"))),Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run compile\n")))),Object(c.b)("h3",{id:"npx"},"NPX"),Object(c.b)("p",null,"Execute a one-off command using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/npx"}),"NPX"),", which is installed\nalongside Node.js and NPM."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx @aesthetic/cli <cmd>\n")))}p.isMDXComponent=!0}}]);