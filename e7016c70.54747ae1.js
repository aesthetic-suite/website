(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),s=n(6),r=(n(0),n(155)),l={title:"Component style sheets",sidebar_label:"For components"},o={id:"development/style-sheets/components",isDocsHomePage:!1,title:"Component style sheets",description:"Components and their tree are styled through style sheets created with the createComponentStyles()",source:"@site/docs/development/style-sheets/components.md",permalink:"/website/docs/development/style-sheets/components",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/development/style-sheets/components.md",sidebar_label:"For components",sidebar:"docs",previous:{title:"Theme style sheets",permalink:"/website/docs/development/style-sheets/themes"},next:{title:"Directionality",permalink:"/website/docs/development/direction"}},i=[{value:"Styling elements",id:"styling-elements",children:[{value:"Selectors",id:"selectors",children:[]},{value:"Media and feature queries",id:"media-and-feature-queries",children:[]},{value:"Font faces",id:"font-faces",children:[]},{value:"Keyframes",id:"keyframes",children:[]},{value:"Fallbacks",id:"fallbacks",children:[]},{value:"Variants",id:"variants",children:[]}]},{value:"Adding variants",id:"adding-variants",children:[{value:"By color scheme",id:"by-color-scheme",children:[]},{value:"By contrast level",id:"by-contrast-level",children:[]},{value:"By theme",id:"by-theme",children:[]}]},{value:"Rendering CSS",id:"rendering-css",children:[]},{value:"References",id:"references",children:[]}],c={rightToc:i};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Components and their tree are styled through style sheets created with the ",Object(r.b)("inlineCode",{parentName:"p"},"createComponentStyles()"),"\nmethod. For the purpose of this documentation, let's say we're building a button component that\nrenders many elements and components, we would have a style sheet that looks something like the\nfollowing."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { createComponentStyles } from '@aesthetic/core';\n\nconst styleSheet = createComponentStyles(() => ({\n  button: {\n    appearance: 'none',\n    backgroundColor: 'transparent',\n    border: 0,\n    cursor: 'pointer',\n    display: 'inline-flex',\n    fontSize: 'inherit',\n    margin: 0,\n    padding: '6px 8px',\n    textAlign: 'center',\n    textDecoration: 'none',\n    userSelect: 'auto',\n    verticalAlign: 'middle',\n  },\n  button_selected: { /* ... */ },\n  button_disabled: { /* ... */ },\n  before: { /* ... */ },\n  after: { /* ... */ },\n}));\n")),Object(r.b)("p",null,"In the example above, the keys of the object are known as selectors, with each selector being a\ncombination of element and optional modifier (separated by an underscore). This is similar to the\npopular ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://getbem.com/naming/"}),"BEM syntax"),', without the "block", as our style sheet is the\nblock (since styles are isolated). Style sheets support as many selectors as needed!'),Object(r.b)("h2",{id:"styling-elements"},"Styling elements"),Object(r.b)("h3",{id:"selectors"},"Selectors"),Object(r.b)("p",null,"There are 2 types of selectors, the first being ",Object(r.b)("em",{parentName:"p"},"basic selectors"),", which includes pseudo elements,\npseudo classes, and HTML attributes that are deterministic and ",Object(r.b)("strong",{parentName:"p"},"do not")," have permutations. They\ncan be defined as nested style objects directly on the element's style object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles((css) => ({\n  button: {\n    backgroundColor: css.var('palette-brand-bg-base'),\n    // ...\n\n    ':hover': {\n      backgroundColor: css.var('palette-brand-bg-hovered'),\n    },\n\n    '[disabled]': {\n      backgroundColor: css.var('palette-brand-bg-disabled'),\n      opacity: 0.75,\n    },\n  },\n\n  // ...\n}));\n")),Object(r.b)("p",null,"The other type is ",Object(r.b)("em",{parentName:"p"},"advanced selectors"),", which includes\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators"}),"combinators"),", as well\nas pseudos and attributes that ",Object(r.b)("strong",{parentName:"p"},"do")," have permutations. Furthermore, multiple selectors can be\ndefined at once using a comma separated list."),Object(r.b)("p",null,"Advanced selectors must be nested within a ",Object(r.b)("inlineCode",{parentName:"p"},"@selectors")," object as they can not be properly typed\nwith TypeScript."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  element: {\n    // ...\n\n    '@selectors': {\n      // Combinators must start with >, ~, or +\n      '> li': {\n        listStyle: 'none',\n      },\n\n      // Attributes must start with [ and end with ]\n      '[href*=\"foo\"]': {\n        color: 'red',\n      },\n\n      // Pseudos must start with : or ::\n      ':not(:nth-child(9))': {\n        display: 'hidden',\n      },\n\n      // Multiple selectors can be separated with a comma\n      ':disabled, [disabled]': {\n        opacity: 0.75,\n      },\n    },\n  },\n}));\n")),Object(r.b)("h3",{id:"media-and-feature-queries"},"Media and feature queries"),Object(r.b)("p",null,"Media and feature queries can be defined within a style object using ",Object(r.b)("inlineCode",{parentName:"p"},"@media")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@supports"),"\nrespectively. Both types require an object that maps query expressions to nested style objects."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  button: {\n    display: 'inline-block',\n    // ...\n\n    '@media': {\n      '(max-width: 600px)': {\n        width: '100%',\n      },\n    },\n\n    '@supports': {\n      '(display: inline-flex)': {\n        display: 'inline-flex',\n      },\n    },\n  },\n\n  // ...\n}));\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Both ",Object(r.b)("inlineCode",{parentName:"p"},"@media")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@supports")," may be nested within itself and each other.")),Object(r.b)("h3",{id:"font-faces"},"Font faces"),Object(r.b)("p",null,"Fonts are special as they need to be defined on the document instead of an element, which should be\ndone with a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/website/docs/development/style-sheets/themes"}),"theme style sheet"),". However, we provide some convenience through the\n",Object(r.b)("inlineCode",{parentName:"p"},"fontFamily")," property, which can accept one or many ",Object(r.b)("em",{parentName:"p"},"font face objects"),"."),Object(r.b)("p",null,"Unlike normal CSS font faces, a ",Object(r.b)("em",{parentName:"p"},"font face object")," requires a ",Object(r.b)("inlineCode",{parentName:"p"},"srcPath")," property, with a list of\nfile paths, instead of a ",Object(r.b)("inlineCode",{parentName:"p"},"src")," property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  element: {\n    // ...\n    fontFamily: {\n      fontFamily: 'Open Sans',\n      fontStyle: 'normal',\n      fontWeight: 'normal',\n      srcPaths: ['fonts/OpenSans.woff2', 'fonts/OpenSans.ttf'],\n    },\n  },\n}));\n")),Object(r.b)("h3",{id:"keyframes"},"Keyframes"),Object(r.b)("p",null,"Animations have the same semantics as fonts and should be defined on a document using a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/website/docs/development/style-sheets/themes"}),"theme style sheet"),", but also like fonts, we provide some convenience through the\n",Object(r.b)("inlineCode",{parentName:"p"},"animationName")," property, which accepts a single ",Object(r.b)("em",{parentName:"p"},"keyframes object"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  element: {\n    // ...\n    animationName: {\n      from: { transform: 'scaleX(0)' },\n      to: { transform: 'scaleX(1)' },\n    },\n    animationDuration: '3s',\n    animationTimingFunction: 'ease-in',\n  },\n}));\n")),Object(r.b)("h3",{id:"fallbacks"},"Fallbacks"),Object(r.b)("p",null,"A rarely used but necessary feature for progressive enhancement and supporting legacy browsers.\nFallbacks allow you to define one or many different values for a single property through the\n",Object(r.b)("inlineCode",{parentName:"p"},"@fallbacks")," object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  element: {\n    // ...\n    display: 'inline-flex',\n\n    '@fallbacks': {\n      display: ['inline', 'inline-block'],\n    },\n  },\n}));\n")),Object(r.b)("h3",{id:"variants"},"Variants"),Object(r.b)("p",null,"Variants are a staple feature of many components -- especially commonly used ones like buttons,\nalerts, and labels -- and encompasses everything from sizing (small, large) to palettes (success,\nfailure, etc)."),Object(r.b)("p",null,"With that being said, the guiding principle behind variants is that ",Object(r.b)("em",{parentName:"p"},"only 1")," may ever be active at a\ntime. If you need to apply more than 1, then you should use the element-modifier syntax mentioned at\nthe beginning of the chapter."),Object(r.b)("p",null,"To utilize variants, we define a ",Object(r.b)("inlineCode",{parentName:"p"},"@variants")," object on a per element basis that maps each variant\nname to a ",Object(r.b)("em",{parentName:"p"},"style object")," (that'll be applied when activated). Variant names are critically important\nand must be written in a format of ",Object(r.b)("inlineCode",{parentName:"p"},"<type>_<variant>"),", as demonstrated below."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles((css) => ({\n  button: {\n    // ...\n\n    '@variants': {\n      size_sm: { fontSize: css.var('text-sm-size') },\n      size_df: { fontSize: css.var('text-df-size') },\n      size_lg: { fontSize: css.var('text-lg-size') },\n\n      palette_brand: { backgroundColor: css.var('palette-brand-bg-base') },\n      palette_success: { backgroundColor: css.var('palette-success-bg-base') },\n      palette_warning: { backgroundColor: css.var('palette-warning-bg-base') },\n    },\n  },\n\n  // ...\n}));\n")),Object(r.b)("p",null,"How a variant gets activated is highly dependent on the integration you are using, but it basically\nboils down to the following class name generation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const className = cx('button', { size: 'sm', palette: 'brand' });\n")),Object(r.b)("h4",{id:"handling-defaults"},"Handling defaults"),Object(r.b)("p",null,"When handling default styles for a variant, you ",Object(r.b)("em",{parentName:"p"},"must")," define it as a variant instead of defining it\non the element directly. This is necessary as it avoids style collisions and specificity issues."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Correct\nconst styleSheet = createComponentStyles((css) => ({\n  button: {\n    '@variants': {\n      size_sm: { fontSize: 14 },\n      size_df: { fontSize: 16 },\n      size_lg: { fontSize: 18 },\n    },\n  },\n}));\n\n// INCORRECT\nconst styleSheet = createComponentStyles((css) => ({\n  button: {\n    fontSize: 16,\n\n    '@variants': {\n      size_sm: { fontSize: 14 },\n      size_lg: { fontSize: 18 },\n    },\n  },\n}));\n")),Object(r.b)("h2",{id:"adding-variants"},"Adding variants"),Object(r.b)("p",null,"While we support variants per ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#variants"}),"element"),", we also support variants on the style sheet.\nWhen defined at this level, any variants deemed active will be deeply merged into a single style\nsheet in the order of: base < color scheme < contrast level < theme."),Object(r.b)("p",null,"Style sheet variants will override any selector, element, element at-rule (even their variants), or\nnested style object from the base style sheet! This makes it very powerful and very robust."),Object(r.b)("h3",{id:"by-color-scheme"},"By color scheme"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"addColorSchemeVariant()"),' method for variants depending on the "light" or "dark" color\nscheme of the currently active theme. This is perfect for making slight changes to a theme between\nthe two modes.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  element: {\n    display: 'block',\n    color: 'gray',\n  },\n}))\n  .addColorSchemeVariant('light', () => ({\n    element: {\n      backgroundColor: 'white',\n      color: 'black',\n    },\n  }))\n  .addColorSchemeVariant('dark', () => ({\n    element: {\n      backgroundColor: 'black',\n      color: 'white',\n    },\n  }));\n")),Object(r.b)("p",null,"This is equivalent to the native ",Object(r.b)("inlineCode",{parentName:"p"},"prefers-color-scheme")," media query."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<link href="themes/default.css" rel="stylesheet" />\n<link href="themes/day.css" rel="stylesheet" media="screen and (prefers-color-scheme: light)" />\n<link href="themes/night.css" rel="stylesheet" media="screen and (prefers-color-scheme: dark)" />\n')),Object(r.b)("h3",{id:"by-contrast-level"},"By contrast level"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"addContrastVariant()"),' method for variants depending on the "low" or "high" contrast level\nof the currently active theme. This is perfect for providing accessible themes.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  element: {\n    display: 'block',\n    color: 'orange',\n  },\n}))\n  .addContrastVariant('low', () => ({\n    element: {\n      color: 'red',\n    },\n  }))\n  .addContrastVariant('high', () => ({\n    element: {\n      color: 'yellow',\n    },\n  }));\n")),Object(r.b)("p",null,"This is equivalent to the native ",Object(r.b)("inlineCode",{parentName:"p"},"prefers-contrast")," media query."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<link href="themes/default.css" rel="stylesheet" />\n<link href="themes/default-low.css" rel="stylesheet" media="screen and (prefers-contrast: low)" />\n<link href="themes/default-high.css" rel="stylesheet" media="screen and (prefers-contrast: high)" />\n')),Object(r.b)("h3",{id:"by-theme"},"By theme"),Object(r.b)("p",null,"And finally, use the ",Object(r.b)("inlineCode",{parentName:"p"},"addThemeVariant()")," method for variants depending on the currently active theme\nitself. This provides granular styles on a theme-by-theme basis, perfect for style sheets that are\nprovided by third-parties."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const styleSheet = createComponentStyles(() => ({\n  element: {\n    display: 'block',\n    color: 'gray',\n  },\n}))\n  .addThemeVariant('night', () => ({\n    element: {\n      color: 'blue',\n    },\n  }))\n  .addThemeVariant('twilight', () => ({\n    element: {\n      color: 'purple',\n    },\n  }));\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Theme names must match the names passed to ",Object(r.b)("inlineCode",{parentName:"p"},"registerTheme()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"registerDefaultTheme()"),".")),Object(r.b)("h2",{id:"rendering-css"},"Rendering CSS"),Object(r.b)("p",null,"Rendering a style sheet into CSS and injecting into the document is typically handled by an\nintegration and abstracted away from the consumer (see ",Object(r.b)("inlineCode",{parentName:"p"},"useStyles()")," in the React package). However,\nif you would like to render styles manually, you may do so with the ",Object(r.b)("inlineCode",{parentName:"p"},"renderComponentStyles()"),"\nmethod."),Object(r.b)("p",null,"This method requires the style sheet instance as the 1st argument, an optional object of\ncustomizable options as the 2nd argument, and returns an object of class names mapped to their\nselector."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { renderComponentStyles } from '@aesthetic/core';\nimport styleSheet from './some/styleSheet';\n\nconst classNames = renderComponentStyles(styleSheet, {\n  direction: 'rtl',\n  vendor: true,\n});\n")),Object(r.b)("p",null,"The following options are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contrast")," (",Object(r.b)("inlineCode",{parentName:"li"},"low | high"),") - Contrast level variant to activate."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"direction")," (",Object(r.b)("inlineCode",{parentName:"li"},"ltr | rtl"),") - Directionality of properties and their values."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scheme")," (",Object(r.b)("inlineCode",{parentName:"li"},"light | dark"),") - Color scheme variant to activate."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"theme")," (",Object(r.b)("inlineCode",{parentName:"li"},"string"),") - Theme instance to pass to style sheets. Defaults to the active theme."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"unit")," (",Object(r.b)("inlineCode",{parentName:"li"},"string | (prop: string) => string"),") - Default unit suffix. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"defaultUnit"),"\noption."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vendor")," (",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),") - Apply vendor prefixes. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"vendorPrefixes"),".")),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("p",null,"The structure of style objects is based on types provided by the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/website/docs/packages/sss"}),"@aesthetic/sss")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/website/docs/packages/style"}),"@aesthetic/style")," packages."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/sss/local"}),"Local style sheets")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/sss/global"}),"Global style sheets")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/style/concepts#styles"}),"Styles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/style/concepts#rules"}),"Selectors")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/style/concepts#media-queries"}),"Media queries")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/style/concepts#feature-queries"}),"Feature queries")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/style/concepts#font-faces"}),"Font faces")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/packages/style/concepts#keyframes"}),"Keyframes"))))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),b=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?s.a.createElement(h,o(o({ref:t},c),{},{components:n})):s.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);