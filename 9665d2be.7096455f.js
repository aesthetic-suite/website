(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.a.createElement(u,o(o({ref:t},b),{},{components:n})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(111)),l={title:"API"},o={unversionedId:"packages/sss/api",id:"packages/sss/api",isDocsHomePage:!1,title:"API",description:"Parser",source:"@site/docs/packages/sss/api.md",slug:"/packages/sss/api",permalink:"/docs/packages/sss/api",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/sss/api.md",version:"current",sidebar:"docs",previous:{title:"Global styles",permalink:"/docs/packages/sss/global"},next:{title:"CSS-in-JS style engine",permalink:"/docs/packages/style"}},c=[{value:"<code>Parser</code>",id:"parser",children:[]},{value:"<code>LocalParser</code>",id:"localparser",children:[{value:"<code>parse</code>",id:"parse",children:[]}]},{value:"<code>GlobalParser</code>",id:"globalparser",children:[{value:"<code>parse</code>",id:"parse-1",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"parser"},Object(i.b)("inlineCode",{parentName:"h2"},"Parser")),Object(i.b)("p",null,"Accepts an object of event listeners through the constructor. Applies to all sub-classes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlock")," - Emits for each style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockAttribute")," - Emits for each HTML within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockFallback")," - Emits for each property within ",Object(i.b)("inlineCode",{parentName:"li"},"@fallbacks")," within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockMedia")," - Emits for each ",Object(i.b)("inlineCode",{parentName:"li"},"@media")," within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockProperty")," - Emits for each property within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockPseudo")," - Emits for each pseudo element/class within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockSelector")," - Emits for each selector within ",Object(i.b)("inlineCode",{parentName:"li"},"@selectors")," within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockSupports")," - Emits for each ",Object(i.b)("inlineCode",{parentName:"li"},"@supports")," within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockVariable")," - Emits for each CSS variable within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBlockVariant")," - Emits for each variant within ",Object(i.b)("inlineCode",{parentName:"li"},"@variants")," within a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onFontFace")," - Emits for each ",Object(i.b)("inlineCode",{parentName:"li"},"@font-face")," and each inlined into ",Object(i.b)("inlineCode",{parentName:"li"},"fontFamily"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onKeyframes")," - Emits for each ",Object(i.b)("inlineCode",{parentName:"li"},"@keyframes")," and each inlined into ",Object(i.b)("inlineCode",{parentName:"li"},"animationName"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onVariable")," - Emits for each variable within ",Object(i.b)("inlineCode",{parentName:"li"},"@variables"),".")),Object(i.b)("h2",{id:"localparser"},Object(i.b)("inlineCode",{parentName:"h2"},"LocalParser")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const parser = new LocalParser({\n  onBlock() {},\n  onClass() {},\n});\n")),Object(i.b)("p",null,"Supports the following additional events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onClass")," - Emits when a class name is passed instead of a style object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onRule")," - Emits when a rule is parsed. A rule represents each key-value pair in the style sheet.")),Object(i.b)("h3",{id:"parse"},Object(i.b)("inlineCode",{parentName:"h3"},"parse")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"LocalParser#parse(styleSheet: LocalStyleSheet): void")),Object(i.b)("p",null,"Parsers a local style sheet instance and emits an event for every node parsed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"parser.parser({\n  element: {\n    display: 'flex',\n  },\n});\n")),Object(i.b)("h2",{id:"globalparser"},Object(i.b)("inlineCode",{parentName:"h2"},"GlobalParser")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const parser = new GlobalParser({\n  onBlock() {},\n  onRoot() {},\n  onViewport() {},\n});\n")),Object(i.b)("p",null,"Supports the following additional events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onImport")," - Emits for each ",Object(i.b)("inlineCode",{parentName:"li"},"@import"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onPage")," - Emits for each ",Object(i.b)("inlineCode",{parentName:"li"},"@page"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onRoot")," - Emits when ",Object(i.b)("inlineCode",{parentName:"li"},"@root")," is parsed as a local style sheet."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onViewport")," Emits for ",Object(i.b)("inlineCode",{parentName:"li"},"@viewport"),".")),Object(i.b)("h3",{id:"parse-1"},Object(i.b)("inlineCode",{parentName:"h3"},"parse")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"GlobalParser#parse(styleSheet: GlobalStyleSheet): void")),Object(i.b)("p",null,"Parsers a global style sheet instance and emits an event for every node parsed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"parser.parser({\n  '@viewport': {\n    width: 'device-width',\n    orientation: 'landscape',\n  },\n});\n")))}s.isMDXComponent=!0}}]);