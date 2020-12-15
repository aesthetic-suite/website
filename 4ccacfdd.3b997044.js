(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(h,s(s({ref:t},i),{},{components:n})):o.a.createElement(h,s({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(124)),l={title:"Global styles"},s={unversionedId:"packages/sss/global",id:"packages/sss/global",isDocsHomePage:!1,title:"Global styles",description:"A global style sheet serves 2 purposes. The 1st is that it houses all at-rules that should be",source:"@site/docs/packages/sss/global.md",slug:"/packages/sss/global",permalink:"/docs/packages/sss/global",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/sss/global.md",version:"current",sidebar:"docs",previous:{title:"Local styles",permalink:"/docs/packages/sss/local"},next:{title:"API",permalink:"/docs/packages/sss/api"}},c=[{value:"Structure",id:"structure",children:[{value:"<code>@font-face</code>",id:"font-face",children:[]},{value:"<code>@import</code>",id:"import",children:[]},{value:"<code>@keyframes</code>",id:"keyframes",children:[]},{value:"<code>@root</code>",id:"root",children:[]},{value:"<code>@variables</code>",id:"variables",children:[]}]},{value:"Parsing",id:"parsing",children:[]}],i={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A global style sheet serves 2 purposes. The 1st is that it houses all at-rules that should be\nprocessed at the document level, and not the element level. The 2nd is for defining global-like\nstyles, in which ",Object(r.b)("inlineCode",{parentName:"p"},"body")," style declarations can be defined, and should typically be scoped within a\nclass name to avoid collisions."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"GlobalStyleSheet")," interface can be used for type information."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { GlobalStyleSheet } from '@aesthetic/sss';\n")),Object(r.b)("h2",{id:"structure"},"Structure"),Object(r.b)("p",null,"For global style sheets, the following at-rules are the only values that may be defined in the root\nof the sheet."),Object(r.b)("h3",{id:"font-face"},Object(r.b)("inlineCode",{parentName:"h3"},"@font-face")),Object(r.b)("p",null,"Defines a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"}),"font face")," that can be\nreferenced with the ",Object(r.b)("inlineCode",{parentName:"p"},"fontFamily")," property. The at-rule requires an object, with the font family name\nas the key, and the font face(s) as the value. Each font face requires a ",Object(r.b)("inlineCode",{parentName:"p"},"srcPaths")," array."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const globalSheet: GlobalStyleSheet = {\n  '@font-face': {\n    'Open Sans': {\n      fontStyle: 'normal',\n      fontWeight: 'normal',\n      srcPaths: ['fonts/OpenSans.woff2', 'fonts/OpenSans.ttf'],\n    },\n  },\n};\n")),Object(r.b)("p",null,"To support multiple font variations, like bold and italics, pass an array of font faces."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const globalSheet: GlobalStyleSheet = {\n  '@font-face': {\n    'Open Sans': [\n      {\n        fontStyle: 'normal',\n        fontWeight: 'normal',\n        srcPaths: ['fonts/OpenSans.woff2', 'fonts/OpenSans.ttf'],\n      },\n      {\n        fontStyle: 'italic',\n        fontWeight: 'normal',\n        srcPaths: ['fonts/OpenSans-Italic.woff2', 'fonts/OpenSans-Italic.ttf'],\n      },\n      {\n        fontStyle: 'normal',\n        fontWeight: 'bold',\n        srcPaths: ['fonts/OpenSans-Bold.woff2', 'fonts/OpenSans-Bold.ttf'],\n      },\n    ],\n  },\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"fontFamily")," property can be omitted within the font face as it'll be inherited from the\nat-rule key.")),Object(r.b)("p",null,"Emits an ",Object(r.b)("inlineCode",{parentName:"p"},"onFontFace")," event for each declaration."),Object(r.b)("h3",{id:"import"},Object(r.b)("inlineCode",{parentName:"h3"},"@import")),Object(r.b)("p",null,"Defines one or many ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@import"}),"CSS files to import"),",\nrelative to the document root. An import can either be a proper CSS formatted string (including\nquotes), or an object of ",Object(r.b)("inlineCode",{parentName:"p"},"path")," (required), ",Object(r.b)("inlineCode",{parentName:"p"},"query"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"url"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const globalSheet: GlobalStyleSheet = {\n  '@import': [\n    // String\n    'url(\"css/reset.css\") screen',\n\n    // Object\n    {\n      path: 'css/reset.css',\n      media: 'screen',\n      url: true,\n    },\n  ],\n};\n")),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"url")," property is not defined, or is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", the import path will not be wrapped with\n",Object(r.b)("inlineCode",{parentName:"p"},"url()"),"."),Object(r.b)("p",null,"Emits an ",Object(r.b)("inlineCode",{parentName:"p"},"onImport")," event for each import."),Object(r.b)("h3",{id:"keyframes"},Object(r.b)("inlineCode",{parentName:"h3"},"@keyframes")),Object(r.b)("p",null,"Defines a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"}),"keyframes animation")," that\ncan be referenced with the ",Object(r.b)("inlineCode",{parentName:"p"},"animationName")," property. The at-rule requires an object, with the\nanimation name as the key, and the keyframes as the value. Supports both range (from/to) and\npercentage based sequences."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const globalSheet: GlobalStyleSheet = {\n  '@keyframes': {\n    // Range\n    fade: {\n      from: { opacity: 0 },\n      to: { opacity: 1 },\n    },\n\n    // Percentage\n    slide: {\n      '0%': { left: '0%' },\n      '50%': { left: '75%' },\n      '100%': { left: '100%' },\n    },\n  },\n};\n")),Object(r.b)("p",null,"Emits a ",Object(r.b)("inlineCode",{parentName:"p"},"onKeyframes")," event for each declaration."),Object(r.b)("h3",{id:"root"},Object(r.b)("inlineCode",{parentName:"h3"},"@root")),Object(r.b)("p",null,"As stated at the start of the chapter, the global style sheet can generate global-like CSS styles by\nusing the ",Object(r.b)("inlineCode",{parentName:"p"},"@root")," at-rule. This at-rule is a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/sss/local"}),"local style sheet")," that should be\nprocessed and generated to a class name that is set on the ",Object(r.b)("inlineCode",{parentName:"p"},"body")," element. It's built this way to\navoid global collisions between multiple themes or differing global style sheets."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const globalSheet: GlobalStyleSheet = {\n  '@root': {\n    fontFamily: 'Roboto',\n    fontSize: 16,\n    lineHeight: 1.5,\n    backgroundColor: 'white',\n    color: 'black',\n    height: '100%',\n    margin: 0,\n    padding: 0,\n\n    '@media': {\n      '(max-width: 400px)': {\n        fontSize: 14,\n        lineHeight: 1.25,\n      },\n    },\n\n    '@selectors': {\n      a: {\n        color: 'blue',\n      },\n\n      p: {\n        margin: 8,\n      },\n    },\n  },\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"html"),", ",Object(r.b)("inlineCode",{parentName:"p"},":root"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"*")," global styles cannot be defined with a global style sheet. Those\ncategory of globals should be handled outside of this system.")),Object(r.b)("p",null,"Emits a single ",Object(r.b)("inlineCode",{parentName:"p"},"onRoot")," event."),Object(r.b)("h3",{id:"variables"},Object(r.b)("inlineCode",{parentName:"h3"},"@variables")),Object(r.b)("p",null,"Defines and formats custom\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"}),"CSS variables")," to be\nused at the ",Object(r.b)("inlineCode",{parentName:"p"},":root"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const globalSheet: GlobalStyleSheet = {\n  '@variables': {\n    backgroundColor: 'black',\n    fontSize: '16px',\n  },\n};\n")),Object(r.b)("p",null,"Emits a single ",Object(r.b)("inlineCode",{parentName:"p"},"onRootVariables")," event."),Object(r.b)("h2",{id:"parsing"},"Parsing"),Object(r.b)("p",null,"To parse a style sheet, import and run ",Object(r.b)("inlineCode",{parentName:"p"},"parse()")," with type ",Object(r.b)("inlineCode",{parentName:"p"},"global"),". To streamline consumption, the\nparser utilizes an event emitter, where each at-rule must be listened to and handled. Once listeners\nare registered, execute the ",Object(r.b)("inlineCode",{parentName:"p"},"parse()")," method with the style sheet."),Object(r.b)("p",null,'Because of this architecture, you must "build" or "handle" the final result yourself. In the example\nbelow, when an event is emitted, we will insert a formatted rule into our style sheet.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { parse } from '@aesthetic/sss';\n\nconst sheet = new CSSStyleSheet();\nconst styles = {\n  '@root': {\n    width: '100%',\n    textAlign: 'center',\n  },\n};\n\nparse('global', styles, {\n  onFontFace(fontFace, family) {\n    sheet.insertRule(`@font-face { ${cssify(fontFace)} }`, sheet.cssRules.length);\n\n    return family;\n  },\n  onImport(path) {\n    sheet.insertRule(`@import ${path};`, sheet.cssRules.length);\n  },\n  onKeyframes(keyframes, name) {\n    sheet.insertRule(`@keyframes ${name} { ${cssify(keyframes)} }`, sheet.cssRules.length);\n\n    return name;\n  },\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The full list of events and their types can be found in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aesthetic-suite/framework/blob/master/packages/sss/src/Parser.ts"}),"source ",Object(r.b)("inlineCode",{parentName:"a"},"Parser")," class"),".")))}b.isMDXComponent=!0}}]);