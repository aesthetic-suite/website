(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||s;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},127:function(e,t,n){"use strict";var a=n(0),r=n(128);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},129:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(127),i=n(125),c=n(53),o=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,p=e.defaultValue,b=e.values,d=e.groupId,m=e.className,f=Object(s.a)(),g=f.tabGroupChoices,y=f.setTabGroupChoices,h=Object(a.useState)(p),O=h[0],j=h[1];if(null!=d){var v=g[d];null!=v&&v!==O&&b.some((function(e){return e.value===v}))&&j(v)}var N=function(e){j(e),null!=d&&y(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(c.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},130:function(e,t,n){"use strict";var a=n(3),r=n(0),s=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return s.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),s=(n(0),n(124)),i=n(129),c=n(130),o={title:"Getting started"},l={unversionedId:"packages/style/setup",id:"packages/style/setup",isDocsHomePage:!1,title:"Getting started",description:"Install with NPM or Yarn. No additional dependencies are required.",source:"@site/docs/packages/style/setup.mdx",slug:"/packages/style/setup",permalink:"/docs/packages/style/setup",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/setup.mdx",version:"current",sidebar:"docs",previous:{title:"CSS-in-JS style engine",permalink:"/docs/packages/style"},next:{title:"Rendering concepts",permalink:"/docs/packages/style/concepts"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Style sheet order",id:"style-sheet-order",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Install with NPM or Yarn. No additional dependencies are required."),Object(s.b)(i.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @aesthetic/style\n"))),Object(s.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @aesthetic/style\n")))),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("p",null,"We implement and provide what's known as an engine. The engine handles all the heavy lifting behind\na streamlined API, but at a high-level, it converts ",Object(s.b)("em",{parentName:"p"},"style objects")," to\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://css-tricks.com/lets-define-exactly-atomic-css/"}),"atomic CSS"),", which it then inserts into the\ndocument as performant as possible."),Object(s.b)("p",null,"To begin, import and call ",Object(s.b)("inlineCode",{parentName:"p"},"createClientEngine()")," from ",Object(s.b)("inlineCode",{parentName:"p"},"@aesthetic/style"),". This engine was designed\nfor the browser, but an alternative exists for ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/style/ssr"}),"server-side rendering"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { createClientEngine } from '@aesthetic/style';\n\nconst engine = createClientEngine();\n")),Object(s.b)("p",null,"You can then render CSS declarations and rules to generate atomic class names (1 class name per\ndeclaration). Rendered styles are batched and inserted every animation frame, in an effort to reduce\nrepaints and layout tearing."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const className = engine.renderRule({\n  margin: 0,\n  padding: '6px 12px',\n  textAlign: 'center',\n  color: 'var(--color)',\n  backgroundColor: 'transparent',\n  border: '2px solid #eee',\n\n  ':hover': {\n    borderColor: '#fff',\n  },\n\n  '@media (max-width: 600px)': {\n    display: 'block',\n  },\n}); // -> a b c d e f g h\n")),Object(s.b)("p",null,"That's about it, basic right? If you're looking for more advanced techniques, patterns, and usage,\ncontinue reading the following chapters."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/packages/style/concepts"}),"Rendering concepts")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/packages/style/options"}),"Features & options")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/packages/style/api"}),"API"))),Object(s.b)("h2",{id:"style-sheet-order"},"Style sheet order"),Object(s.b)("p",null,"The engine implements a unique approach around managing ",Object(s.b)("inlineCode",{parentName:"p"},"<style />")," elements, as it uses 3 elements\nunlike most competitors which use 1. By using multiple elements, we can ensure proper specificity\nand ordering of styles. In document order, the style sheets are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Globals")," are the 1st style sheet. Primarily used for rendering root level at-rules like\n",Object(s.b)("inlineCode",{parentName:"li"},"@font-face")," and ",Object(s.b)("inlineCode",{parentName:"li"},"@keyframes"),", but can house anything."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Standard rules")," are the 2nd style sheet. This is where most CSS declarations are rendered."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Conditional rules")," are the 3rd and final style sheet. Only renders ",Object(s.b)("inlineCode",{parentName:"li"},"@media")," and ",Object(s.b)("inlineCode",{parentName:"li"},"@supports"),"\nrules to ensure their styles override the standard styles. Media queries are also\n",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/sort-css-media-queries"}),"sorted based on their query"),".")))}b.isMDXComponent=!0}}]);