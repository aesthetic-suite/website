(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return t?r.a.createElement(h,l(l({ref:n},p),{},{components:t})):r.a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(2),r=t(6),i=(t(0),t(111)),o={title:"CSS"},l={unversionedId:"design-tokens/web/css",id:"design-tokens/web/css",isDocsHomePage:!1,title:"CSS",description:"The following format is provided when compiling design tokens to CSS using web-css. It utilizes",source:"@site/docs/design-tokens/web/css.md",slug:"/design-tokens/web/css",permalink:"/docs/design-tokens/web/css",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-tokens/web/css.md",version:"current",sidebar:"docs",previous:{title:"CSS-in-JS",permalink:"/docs/design-tokens/web/css-in-js"},next:{title:"SCSS",permalink:"/docs/design-tokens/web/scss"}},s=[{value:"File structure",id:"file-structure",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Mixins",id:"mixins",children:[]},{value:"Integration",id:"integration",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:s};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following format is provided when compiling design tokens to CSS using ",Object(i.b)("inlineCode",{parentName:"p"},"web-css"),". It utilizes\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"}),"CSS variables")," for\nreusability. If you need to support legacy browsers, we suggest the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jhildenbiddle/css-vars-ponyfill"}),"css-vars-ponyfill")," library."),Object(i.b)("h2",{id:"file-structure"},"File structure"),Object(i.b)("p",null,"During compilation, an ",Object(i.b)("inlineCode",{parentName:"p"},"index.css")," file will be created based on the design system YAML\nconfiguration file. Additional ",Object(i.b)("inlineCode",{parentName:"p"},"themes/<name>.css")," files will be created for each theme configured\nin the YAML file. And lastly, a ",Object(i.b)("inlineCode",{parentName:"p"},"mixins.css")," file will also be created."),Object(i.b)("p",null,"This would look something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"styles/<target>/\n\u251c\u2500\u2500 themes/\n\u2502   \u251c\u2500\u2500 day.css\n\u2502   \u2514\u2500\u2500 night.css\n\u251c\u2500\u2500 index.css\n\u2514\u2500\u2500 mixins.css\n")),Object(i.b)("h2",{id:"variables"},"Variables"),Object(i.b)("p",null,"As mentioned above, a design system and multiple theme files are created. The design system file\ndefines primitive variables, while each theme file defines color and palette variables, both of\nwhich rely on CSS variables."),Object(i.b)("p",null,"The compiled design system file uses ",Object(i.b)("inlineCode",{parentName:"p"},":root")," and looks something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),":root {\n  --border-sm-radius: 0.11rem; /* 1.50px */\n  --border-sm-width: 0rem; /* 0px */\n  --border-df-radius: 0.21rem; /* 3px */\n  --border-df-width: 0.07rem; /* 1px */\n  --border-lg-radius: 0.32rem; /* 4.50px */\n  --border-lg-width: 0.14rem; /* 2px */\n\n  --breakpoint-xs-query: '(min-width: 45.71em)';\n  --breakpoint-xs-query-size: 640;\n  --breakpoint-xs-root-line-height: 1.33;\n  --breakpoint-xs-root-text-size: 14.94px;\n  --breakpoint-sm-query: '(min-width: 68.57em)';\n  --breakpoint-sm-query-size: 960;\n  --breakpoint-sm-root-line-height: 1.42;\n  --breakpoint-sm-root-text-size: 15.94px;\n  --breakpoint-md-query: '(min-width: 91.43em)';\n  --breakpoint-md-query-size: 1280;\n  --breakpoint-md-root-line-height: 1.52;\n  --breakpoint-md-root-text-size: 17.01px;\n  --breakpoint-lg-query: '(min-width: 114.29em)';\n  --breakpoint-lg-query-size: 1600;\n  --breakpoint-lg-root-line-height: 1.62;\n  --breakpoint-lg-root-text-size: 18.15px;\n  --breakpoint-xl-query: '(min-width: 137.14em)';\n  --breakpoint-xl-query-size: 1920;\n  --breakpoint-xl-root-line-height: 1.73;\n  --breakpoint-xl-root-text-size: 19.36px;\n\n  --depth-content: 100;\n  --depth-navigation: 1000;\n  --depth-sheet: 1100;\n  --depth-overlay: 1200;\n  --depth-modal: 1300;\n  --depth-toast: 1400;\n  --depth-dialog: 1500;\n  --depth-menu: 1600;\n  --depth-tooltip: 1700;\n\n  --heading-l1-letter-spacing: 0.25px;\n  --heading-l1-line-height: 1.5;\n  --heading-l1-size: 1.14rem; /* 16px */\n  --heading-l2-letter-spacing: 0.33px;\n  --heading-l2-line-height: 1.69;\n  --heading-l2-size: 1.43rem; /* 20px */\n  --heading-l3-letter-spacing: 0.44px;\n  --heading-l3-line-height: 1.9;\n  --heading-l3-size: 1.79rem; /* 25px */\n  --heading-l4-letter-spacing: 0.59px;\n  --heading-l4-line-height: 2.14;\n  --heading-l4-size: 2.23rem; /* 31.25px */\n  --heading-l5-letter-spacing: 0.79px;\n  --heading-l5-line-height: 2.4;\n  --heading-l5-size: 2.79rem; /* 39px */\n  --heading-l6-letter-spacing: 1.05px;\n  --heading-l6-line-height: 2.7;\n  --heading-l6-size: 3.49rem; /* 48.80px */\n\n  --shadow-xs-x: 0rem; /* 0px */\n  --shadow-xs-y: 0.14rem; /* 2px */\n  --shadow-xs-blur: 0.14rem; /* 2px */\n  --shadow-xs-spread: 0rem; /* 0px */\n  --shadow-sm-x: 0rem; /* 0px */\n  --shadow-sm-y: 0.23rem; /* 3.24px */\n  --shadow-sm-blur: 0.27rem; /* 3.75px */\n  --shadow-sm-spread: 0rem; /* 0px */\n  --shadow-md-x: 0rem; /* 0px */\n  --shadow-md-y: 0.37rem; /* 5.24px */\n  --shadow-md-blur: 0.39rem; /* 5.50px */\n  --shadow-md-spread: 0rem; /* 0px */\n  --shadow-lg-x: 0rem; /* 0px */\n  --shadow-lg-y: 0.61rem; /* 8.47px */\n  --shadow-lg-blur: 0.52rem; /* 7.25px */\n  --shadow-lg-spread: 0rem; /* 0px */\n  --shadow-xl-x: 0rem; /* 0px */\n  --shadow-xl-y: 0.98rem; /* 13.71px */\n  --shadow-xl-blur: 0.64rem; /* 9px */\n  --shadow-xl-spread: 0rem; /* 0px */\n\n  --spacing-xs: 0.31rem; /* 4.38px */\n  --spacing-sm: 0.63rem; /* 8.75px */\n  --spacing-df: 1.25rem; /* 17.50px */\n  --spacing-md: 2.5rem; /* 35px */\n  --spacing-lg: 3.75rem; /* 52.50px */\n  --spacing-xl: 5rem; /* 70px */\n  --spacing-unit: 17.5;\n\n  --text-sm-line-height: 1.25;\n  --text-sm-size: 0.89rem; /* 12.45px */\n  --text-df-line-height: 1.25;\n  --text-df-size: 1rem; /* 14px */\n  --text-lg-line-height: 1.25;\n  --text-lg-size: 1.13rem; /* 15.75px */\n\n  --typography-font-heading: 'Roboto';\n  --typography-font-monospace: '\"Lucida Console\", Monaco, monospace';\n  --typography-font-text: 'Roboto';\n  --typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"';\n  --typography-root-line-height: 1.25;\n  --typography-root-text-size: 14px;\n}\n")),Object(i.b)("p",null,"While the compiled theme files look loosely like the below (removed some repetition for brevity). Do\nnote that theme variables are scoped within a class name, ",Object(i.b)("em",{parentName:"p"},"not")," ",Object(i.b)("inlineCode",{parentName:"p"},":root"),", and as such, ",Object(i.b)("em",{parentName:"p"},"cannot")," be\npolyfilled."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".theme-day {\n  --palette-brand-color-00: #eceff1;\n  --palette-brand-color-10: #cfd8dc;\n  --palette-brand-color-20: #b0bec5;\n  --palette-brand-color-30: #90a4ae;\n  --palette-brand-color-40: #78909c;\n  --palette-brand-color-50: #607d8b;\n  --palette-brand-color-60: #546e7a;\n  --palette-brand-color-70: #455a64;\n  --palette-brand-color-80: #37474f;\n  --palette-brand-color-90: #263238;\n  --palette-brand-bg-base: #78909c;\n  --palette-brand-bg-disabled: #90a4ae;\n  --palette-brand-bg-focused: #607d8b;\n  --palette-brand-bg-hovered: #546e7a;\n  --palette-brand-bg-selected: #607d8b;\n  --palette-brand-fg-base: #546e7a;\n  --palette-brand-fg-disabled: #607d8b;\n  --palette-brand-fg-focused: #455a64;\n  --palette-brand-fg-hovered: #37474f;\n  --palette-brand-fg-selected: #455a64;\n\n  /*\n  --palette-primary-...\n  --palette-secondary-...\n  --palette-tertiary-...\n  --palette-neutral-...\n  --palette-muted-...\n  --palette-danger-...\n  --palette-warning-...\n  --palette-success-...\n  --palette-info-...\n  */\n}\n")),Object(i.b)("h2",{id:"mixins"},"Mixins"),Object(i.b)("p",null,"Coming soon..."),Object(i.b)("h2",{id:"integration"},"Integration"),Object(i.b)("p",null,"To activate a design system and theme, link the CSS file within your document to make the CSS\nvariables available."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<link href="styles/<target>/index.css" rel="stylesheet" />\n<link href="styles/<target>/themes/day.css" rel="stylesheet" />\n')),Object(i.b)("p",null,"With this pattern, only 1 design system may be active at a time, as they all rely on ",Object(i.b)("inlineCode",{parentName:"p"},":root"),".\nHowever, multiple themes can be active at a time, as they are scoped by class name. To apply a theme\nto the entire document, add the class name to ",Object(i.b)("inlineCode",{parentName:"p"},"<body />"),", while nested themes can be applied to any\nchild element."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<body class="theme-day" />\n<div class="theme-night" />\n')),Object(i.b)("p",null,"If using a bundler like Webpack or Parcel, import the CSS file within the root entry point, or as\nearly as possible."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import './styles/<target>/index.css';\nimport './styles/<target>/themes/day.css';\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Since the CSS format is built around variables, we can utilize the ",Object(i.b)("inlineCode",{parentName:"p"},"var()")," function for reusability.\nSimply reference the variables listed above like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".button {\n  display: inline-block;\n  text-align: center;\n  font-size: var(--text-df-size);\n  line-height: var(--text-df-line-height);\n  padding: var(--spacing-sm) var(--spacing-df);\n  color: var(--palette-neutral-color-00);\n  background-color: var(--palette-brand-bg-base);\n}\n\n.button:hover {\n  background-color: var(--palette-brand-bg-hovered);\n}\n")),Object(i.b)("p",null,"And apply the classes to HTML as normal."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<button type="button" class="button">Continue</button>\n')))}c.isMDXComponent=!0}}]);