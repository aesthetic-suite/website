(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[3975],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8070:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={title:"CSS-in-JS engine",sidebar_label:"Overview"},s={unversionedId:"packages/style",id:"packages/style",isDocsHomePage:!1,title:"CSS-in-JS engine",description:"The @aesthetic/style package is a low-level, high-performance, atomic-based CSS-in-JS styling",source:"@site/docs/packages/style.md",sourceDirName:"packages",slug:"/packages/style",permalink:"/docs/packages/style",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style.md",version:"current",sidebar_label:"Overview",frontMatter:{title:"CSS-in-JS engine",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/packages/addon-vendor/setup"},next:{title:"Getting started",permalink:"/docs/packages/style/setup"}},p=[{value:"What it provides",id:"what-it-provides",children:[]},{value:"What it <em>does not</em> provide",id:"what-it-does-not-provide",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@aesthetic/style")," package is a low-level, high-performance, atomic-based CSS-in-JS styling\nengine. It can be used stand-alone but has been designed to power additional abstractions or APIs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/packages/style/setup"},"Getting started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/packages/style/concepts"},"Rendering concepts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/packages/style/options"},"Features & options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/packages/style/ssr"},"Server-side rendering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/packages/style/testing"},"Test utilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/packages/style/api"},"API"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createClientEngine } from '@aesthetic/style';\n\n// Instantiate a client side (DOM) engine\nconst engine = createClientEngine();\n\n// Render a style decleration into individual atomic class names\nconst className = engine.renderRule({\n    margin: 0,\n    textAlign: 'center',\n    color: 'var(--color)',\n    backgroundColor: 'transparent',\n    border: '2px solid #eee',\n\n    ':hover': {\n        borderColor: '#fff',\n    },\n\n    '@media': {\n        '(max-width: 600px)': {\n            display: 'block',\n        },\n    },\n\n    '@variants': {\n        'size:small': {\n            fontSize: 14,\n            padding: '4px 10px',\n        },\n        'size:default': {\n            fontSize: 16,\n            padding: '6px 12px',\n        },\n        'size:large': {\n            fontSize: 18,\n            padding: '8px 14px',\n        },\n    },\n});\n\nclassName.result; // -> a b c d e f g\nclassName.variants; // -> [h i, j k, l m]\n")),(0,i.kt)("h2",{id:"what-it-provides"},"What it provides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Atomic based CSS. One declaration per class name."),(0,i.kt)("li",{parentName:"ul"},"Variants and compound variants for complex styling."),(0,i.kt)("li",{parentName:"ul"},"Specificity ranking so the intended property is always rendered."),(0,i.kt)("li",{parentName:"ul"},"Font faces, keyframes, imports, and other globals are rendered before normal declarations."),(0,i.kt)("li",{parentName:"ul"},"Media and support queries are grouped and rendered after normal declarations."),(0,i.kt)("li",{parentName:"ul"},"Media queries are sorted mobile-first or desktop-first."),(0,i.kt)("li",{parentName:"ul"},"Injection buffering for increased performance and reduced paints."),(0,i.kt)("li",{parentName:"ul"},"Style declarations support pseudos, attributes, conditional at-rules, and nested declarations."),(0,i.kt)("li",{parentName:"ul"},"Deterministic or atomic incremental CSS class names."),(0,i.kt)("li",{parentName:"ul"},"Right-to-left (RTL) integration."),(0,i.kt)("li",{parentName:"ul"},"Vendor prefixing for browsers with >= 1% market share."),(0,i.kt)("li",{parentName:"ul"},"Unit suffixing for numerical values."),(0,i.kt)("li",{parentName:"ul"},"First-class CSS variables support."),(0,i.kt)("li",{parentName:"ul"},"Server-side rendering ",(0,i.kt)("em",{parentName:"li"},"and")," client-side hydration."),(0,i.kt)("li",{parentName:"ul"},"Framework and library agnostic. Can be used stand-alone.")),(0,i.kt)("h2",{id:"what-it-does-not-provide"},"What it ",(0,i.kt)("em",{parentName:"h2"},"does not")," provide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A plugin system, as such a system would degrade performance."),(0,i.kt)("li",{parentName:"ul"},"Rendering of styles in the global scope: ",(0,i.kt)("inlineCode",{parentName:"li"},"div"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Rendering of uncommon at-rules: ",(0,i.kt)("inlineCode",{parentName:"li"},"@namespace"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@document"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@page"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@viewport"),".")))}d.isMDXComponent=!0}}]);