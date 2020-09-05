(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||l;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),l=(n(0),n(113)),s={title:"Local styles"},o={unversionedId:"packages/sss/local",id:"packages/sss/local",isDocsHomePage:!1,title:"Local styles",description:"A local style sheet defines styles for multiple elements within a single component by mapping",source:"@site/docs/packages/sss/local.md",slug:"/packages/sss/local",permalink:"/docs/packages/sss/local",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/sss/local.md",version:"current",sidebar:"docs",previous:{title:"Specification",permalink:"/docs/packages/sss/spec"},next:{title:"Global styles",permalink:"/docs/packages/sss/global"}},i=[{value:"Structure",id:"structure",children:[{value:"<code>@fallbacks</code>",id:"fallbacks",children:[]},{value:"<code>@media</code>",id:"media",children:[]},{value:"<code>@selectors</code>",id:"selectors",children:[]},{value:"<code>@supports</code>",id:"supports",children:[]},{value:"<code>@variables</code>",id:"variables",children:[]},{value:"<code>@variants</code>",id:"variants",children:[]}]},{value:"Parsing",id:"parsing",children:[]}],c={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A local style sheet defines styles for multiple elements within a single component by mapping\nselectors (elements and element states) to style declarations, which is known as a ruleset. Within\neach declaration, standard CSS properties can be defined, as well as element level at-rules."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"LocalStyleSheet")," interface can be used for type information."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { LocalStyleSheet } from '@aesthetic/sss';\n")),Object(l.b)("h2",{id:"structure"},"Structure"),Object(l.b)("p",null,"As mentioned above, local style sheets map selectors to style declarations. You can imagine a\nselector as either an element or an element state, like the following."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const localSheet: LocalStyleSheet = {\n  modal: {\n    display: 'block',\n  },\n  modal_hidden: {\n    display: 'none',\n  },\n  modal_fixed: {\n    position: 'fixed',\n  },\n  modalHeader: {},\n  modalBody: {},\n  modalBody_overflow: {},\n  modalFooter: {},\n};\n")),Object(l.b)("p",null,"In the example above, we have 4 elements denoted by camel case names, and 3 states/modifiers denoted\nby underscores. We use a BEM-like format to easily differentiate purpose, but feel free to write\nselectors however you please!"),Object(l.b)("p",null,"Besides standard CSS properties, the following at-rules can be defined within each selector ruleset,\nand are ",Object(l.b)("em",{parentName:"p"},"not allowed")," in the sheet root."),Object(l.b)("h3",{id:"fallbacks"},Object(l.b)("inlineCode",{parentName:"h3"},"@fallbacks")),Object(l.b)("p",null,"Defines\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://modernweb.com/using-css-fallback-properties-for-better-cross-browser-compatibility/"}),"CSS property fallbacks"),"\nfor legacy browsers that do not support newer properties. The at-rule requires an object, with the\nkey being a property name, and the value being a property value, or an array of values."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const localSheet: LocalStyleSheet = {\n  element: {\n    background: 'linear-gradient(...)',\n    display: 'flex',\n\n    '@fallbacks': {\n      // Single fallback\n      background: 'red',\n      // Multiple fallbacks\n      display: ['block', 'inline-block'],\n    },\n  },\n};\n")),Object(l.b)("p",null,"Emits a ",Object(l.b)("inlineCode",{parentName:"p"},"block:fallback")," event per property with an array of values."),Object(l.b)("h3",{id:"media"},Object(l.b)("inlineCode",{parentName:"h3"},"@media")),Object(l.b)("p",null,"Defines ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media"}),"media queries")," by mapping\nbreakpoints and queries to style declarations. Declarations can nest selectors and additional\nat-rules."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const localSheet: LocalStyleSheet = {\n  element: {\n    maxWidth: 300,\n\n    '@media': {\n      '(min-width: 400px)': {\n        maxWidth: 'auto',\n      },\n      'screen and (min-width: 1800px)': {\n        maxWidth: '100%',\n      },\n    },\n  },\n};\n")),Object(l.b)("p",null,"Emits a ",Object(l.b)("inlineCode",{parentName:"p"},"block:media")," event per media query declaration."),Object(l.b)("h3",{id:"selectors"},Object(l.b)("inlineCode",{parentName:"h3"},"@selectors")),Object(l.b)("p",null,"Defines advanced ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/sss/spec#selectors"}),"selectors")," that aren't type-safe or supported by\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/frenic/csstype"}),"csstype"),"'s standard attributes and pseudos. This includes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators"}),"Combinators")," denoted\nby a leading ",Object(l.b)("inlineCode",{parentName:"li"},">")," (also known as direct descendents)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"}),"Attribute selectors")," that\nmatch against a value using patterns."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:not"}),"Pseudo class functions")," like ",Object(l.b)("inlineCode",{parentName:"li"},":not()")," and\n",Object(l.b)("inlineCode",{parentName:"li"},":nth-child()")," (as they incur infinite combinations)."),Object(l.b)("li",{parentName:"ul"},"Multiple selectors separated by a comma.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const localSheet: LocalStyleSheet = {\n  element: {\n    '@selectors': {\n      // Combinators must start with >, ~, or +\n      '> li': {\n        listStyle: 'none',\n      },\n\n      // Attributes must start with [ and end with ]\n      '[href*=\"foo\"]': {\n        color: 'red',\n      },\n\n      // Pseudos must start with : or ::\n      ':not(:nth-child(9))': {\n        display: 'hidden',\n      },\n\n      // Multiple selectors can be separated with a comma\n      ':disabled, [disabled]': {\n        opacity: 0.75,\n      },\n    },\n  },\n};\n")),Object(l.b)("p",null,"Emits a ",Object(l.b)("inlineCode",{parentName:"p"},"block:selector"),", ",Object(l.b)("inlineCode",{parentName:"p"},"block:pseudo"),", or ",Object(l.b)("inlineCode",{parentName:"p"},"block:attribute")," event per selector declaration."),Object(l.b)("h3",{id:"supports"},Object(l.b)("inlineCode",{parentName:"h3"},"@supports")),Object(l.b)("p",null,"Defines ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@supports"}),"supports")," by mapping feature\nqueries to style declarations. Declarations can nest selectors and additional at-rules."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const localSheet: LocalStyleSheet = {\n  element: {\n    float: 'left',\n\n    '@supports': {\n      '(display: flex)': {\n        float: 'none',\n        display: 'flex',\n      },\n      'not (display: grid)': {\n        display: 'block',\n      },\n    },\n  },\n};\n")),Object(l.b)("p",null,"Emits a ",Object(l.b)("inlineCode",{parentName:"p"},"block:media")," event per feature query declaration."),Object(l.b)("h3",{id:"variables"},Object(l.b)("inlineCode",{parentName:"h3"},"@variables")),Object(l.b)("p",null,"Defines element level CSS variables, by mapping variable names to their value. Names can be in camel\ncase or variable kebab case (prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"--"),"). Useful for overriding root and theme CSS variables\non a per element basis."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const localSheet: LocalStyleSheet = {\n  element: {\n    '@variables': {\n      spacingDf: '1.5rem',\n      '--spacing-df': '1.5rem',\n    },\n  },\n};\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Variable values are not transformed in any way, so they must be explicit. For example, unitless\nvalues are not supported for values that require a unit suffix.")),Object(l.b)("p",null,"Emits a ",Object(l.b)("inlineCode",{parentName:"p"},"block:variable")," event for each CSS variable."),Object(l.b)("h3",{id:"variants"},Object(l.b)("inlineCode",{parentName:"h3"},"@variants")),Object(l.b)("p",null,"Defines multiple variations for the rule in question. Each variation is a style object that maps to\na specific variation type and value combination, defined by the object key and separated by a\n",Object(l.b)("em",{parentName:"p"},"single")," underscore."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const localSheet: LocalStyleSheet = {\n  element: {\n    display: 'block',\n\n    '@variants': {\n      size_small: { fontSize: 14 },\n      size_default: { fontSize: 16 },\n      size_large: { fontSize: 18 },\n\n      type_failure: {},\n      type_success: {},\n      type_brandPrimary: {},\n    },\n  },\n};\n")),Object(l.b)("p",null,"The variant block ",Object(l.b)("em",{parentName:"p"},"does not")," merge into the parent block, as the consumer should handle what to do\nwith variants. If no custom handling is provided, variants are a no-op."),Object(l.b)("p",null,"Emits a ",Object(l.b)("inlineCode",{parentName:"p"},"block:variant")," event for each CSS variant object."),Object(l.b)("h2",{id:"parsing"},"Parsing"),Object(l.b)("p",null,"To parse a style sheet, import and instantiate the ",Object(l.b)("inlineCode",{parentName:"p"},"LocalParser"),". To streamline consumption, the\nparser utilizes an event emitter, where each at-rule must be listened to and handled. Once listeners\nare registered, execute the ",Object(l.b)("inlineCode",{parentName:"p"},"parse()")," method with the style sheet."),Object(l.b)("p",null,'Because of this architecture, you must "build" or "handle" the final result yourself. However, any\nevent that starts with ',Object(l.b)("inlineCode",{parentName:"p"},"block:")," is automatically handled by modifying the object used in the parent\n",Object(l.b)("inlineCode",{parentName:"p"},"block")," and ",Object(l.b)("inlineCode",{parentName:"p"},"ruleset")," events. Typically these do not need to be defined."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { LocalParser } from '@aesthetic/sss';\n\nconst sheet = new CSSStyleSheet();\n\nconst parser = new LocalParser({\n  // For `fontFamily` property\n  onFontFace(fontFace, family) {\n    sheet.insertRule(`@font-face { ${cssify(fontFace)} }`, sheet.cssRules.length);\n\n    return family;\n  },\n  // For `animationName` property\n  onKeyframes(keyframes, name) {\n    sheet.insertRule(`@keyframes ${name} { ${cssify(keyframes)} }`, sheet.cssRules.length);\n\n    return name;\n  },\n  onRuleset(name, selector, declaration) {\n    sheet.insertRule(\n      `.${createClassName(selector)} { ${cssify(declaration)} }`,\n      sheet.cssRules.length,\n    );\n  },\n});\n\nparser.parse({\n  container: {\n    display: 'flex',\n    maxWidth: '100%',\n  },\n\n  button: {\n    display: 'inline-block',\n    textAlign: 'center',\n    padding: '8px 12px',\n    borderRadius: '3px',\n  },\n\n  button_active: {\n    fontWeight: 'bold',\n  },\n});\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The full list of events and their types can be found in the\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aesthetic-suite/framework/blob/master/packages/sss/src/Parser.ts"}),"source ",Object(l.b)("inlineCode",{parentName:"a"},"Parser")," class"),".")))}b.isMDXComponent=!0}}]);