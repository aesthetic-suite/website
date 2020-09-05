(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),b=r,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||a;return t?i.a.createElement(u,s(s({ref:n},p),{},{components:t})):i.a.createElement(u,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(2),i=t(6),a=(t(0),t(113)),o={title:"JavaScript/TypeScript (expanded)",sidebar_label:"JS/TS (exp)"},s={unversionedId:"design-tokens/web/tsx",id:"design-tokens/web/tsx",isDocsHomePage:!1,title:"JavaScript/TypeScript (expanded)",description:"The following format is provided when compiling design tokens for advanced solutions, like",source:"@site/docs/design-tokens/web/tsx.md",slug:"/design-tokens/web/tsx",permalink:"/docs/design-tokens/web/tsx",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-tokens/web/tsx.md",version:"current",sidebar_label:"JS/TS (exp)",sidebar:"docs",previous:{title:"JavaScript/TypeScript",permalink:"/docs/design-tokens/web/ts"},next:{title:"CSS",permalink:"/docs/design-tokens/web/css"}},l=[{value:"File structure",id:"file-structure",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Mixins",id:"mixins",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:l};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following format is provided when compiling design tokens for advanced solutions, like\nCSS-in-JS. It currently supports 2 different targets:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"web-tsx")," for TypeScript."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"web-jsx")," for JavaScript (using ECMA modules).")),Object(a.b)("p",null,"This format is different from other CSS-like formats, and the base JS/TS format, as it ",Object(a.b)("em",{parentName:"p"},"does not"),"\ngenerate a standard list of variables (design tokens), but instead generates a design system and\ntheme hierarchy composed of classes. This layer is powered by the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/packages/system"}),"@aesthetic/system")," package."),Object(a.b)("p",null,"For the remainder of this documentation, we'll use TypeScript as our format."),Object(a.b)("h2",{id:"file-structure"},"File structure"),Object(a.b)("p",null,"During compilation, an ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," file will be created based on the design system YAML configuration\nfile. Additional ",Object(a.b)("inlineCode",{parentName:"p"},"themes/<name>.ts")," files will be created for each theme configured in the YAML\nfile."),Object(a.b)("p",null,"This would look something like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"styles/<target>/\n\u251c\u2500\u2500 themes/\n\u2502   \u251c\u2500\u2500 day.ts\n\u2502   \u2514\u2500\u2500 night.ts\n\u2514\u2500\u2500 index.ts\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"JavaScript formats will use ",Object(a.b)("inlineCode",{parentName:"p"},".js")," file extensions.")),Object(a.b)("h2",{id:"variables"},"Variables"),Object(a.b)("p",null,"As mentioned above, a design system and multiple theme files are created. The design system file\ndefines primitive variables through an exported ",Object(a.b)("inlineCode",{parentName:"p"},"Design")," class instance. Each theme file defines\ncolor and palette variables through an exported ",Object(a.b)("inlineCode",{parentName:"p"},"Theme")," class instance, while also inheriting all\nprimitive variables from the parent design system."),Object(a.b)("p",null,"The compiled design system file looks something like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Design } from '@aesthetic/system';\n\nexport default new Design('example', {\n  border: {\n    sm: {\n      radius: '0.11rem', // 1.50px\n      width: '0rem', // 0px\n    },\n    df: {\n      radius: '0.21rem', // 3px\n      width: '0.07rem', // 1px\n    },\n    lg: {\n      radius: '0.32rem', // 4.50px\n      width: '0.14rem', // 2px\n    },\n  },\n  breakpoint: {\n    xs: {\n      query: '(min-width: 45.71em)',\n      querySize: 640,\n      rootLineHeight: 1.33,\n      rootTextSize: '14.94px',\n    },\n    sm: {\n      query: '(min-width: 68.57em)',\n      querySize: 960,\n      rootLineHeight: 1.42,\n      rootTextSize: '15.94px',\n    },\n    md: {\n      query: '(min-width: 91.43em)',\n      querySize: 1280,\n      rootLineHeight: 1.52,\n      rootTextSize: '17.01px',\n    },\n    lg: {\n      query: '(min-width: 114.29em)',\n      querySize: 1600,\n      rootLineHeight: 1.62,\n      rootTextSize: '18.15px',\n    },\n    xl: {\n      query: '(min-width: 137.14em)',\n      querySize: 1920,\n      rootLineHeight: 1.73,\n      rootTextSize: '19.36px',\n    },\n  },\n  heading: {\n    l1: {\n      letterSpacing: '0.25px',\n      lineHeight: 1.5,\n      size: '1.14rem', // 16px\n    },\n    l2: {\n      letterSpacing: '0.33px',\n      lineHeight: 1.69,\n      size: '1.43rem', // 20px\n    },\n    l3: {\n      letterSpacing: '0.44px',\n      lineHeight: 1.9,\n      size: '1.79rem', // 25px\n    },\n    l4: {\n      letterSpacing: '0.59px',\n      lineHeight: 2.14,\n      size: '2.23rem', // 31.25px\n    },\n    l5: {\n      letterSpacing: '0.79px',\n      lineHeight: 2.4,\n      size: '2.79rem', // 39px\n    },\n    l6: {\n      letterSpacing: '1.05px',\n      lineHeight: 2.7,\n      size: '3.49rem', // 48.80px\n    },\n  },\n  shadow: {\n    xs: {\n      x: '0rem', // 0px\n      y: '0.14rem', // 2px\n      blur: '0.14rem', // 2px\n      spread: '0rem', // 0px\n    },\n    sm: {\n      x: '0rem', // 0px\n      y: '0.23rem', // 3.24px\n      blur: '0.27rem', // 3.75px\n      spread: '0rem', // 0px\n    },\n    md: {\n      x: '0rem', // 0px\n      y: '0.37rem', // 5.24px\n      blur: '0.39rem', // 5.50px\n      spread: '0rem', // 0px\n    },\n    lg: {\n      x: '0rem', // 0px\n      y: '0.61rem', // 8.47px\n      blur: '0.52rem', // 7.25px\n      spread: '0rem', // 0px\n    },\n    xl: {\n      x: '0rem', // 0px\n      y: '0.98rem', // 13.71px\n      blur: '0.64rem', // 9px\n      spread: '0rem', // 0px\n    },\n  },\n  spacing: {\n    xs: '0.31rem', // 4.38px\n    sm: '0.63rem', // 8.75px\n    df: '1.25rem', // 17.50px\n    md: '2.50rem', // 35px\n    lg: '3.75rem', // 52.50px\n    xl: '5rem', // 70px\n    type: 'vertical-rhythm',\n    unit: 17.5,\n  },\n  text: {\n    sm: {\n      lineHeight: 1.25,\n      size: '0.89rem', // 12.45px\n    },\n    df: {\n      lineHeight: 1.25,\n      size: '1rem', // 14px\n    },\n    lg: {\n      lineHeight: 1.25,\n      size: '1.13rem', // 15.75px\n    },\n  },\n  typography: {\n    font: {\n      heading: 'Roboto',\n      locale: {},\n      monospace: '\"Lucida Console\", Monaco, monospace',\n      text: 'Roboto',\n      system:\n        'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"',\n    },\n    rootLineHeight: 1.25,\n    rootTextSize: '14px',\n  },\n});\n")),Object(a.b)("p",null,"While the compiled theme files look loosely like this (removed some repetition for brevity):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import design from '..';\n\nexport default design.createTheme(\n  {\n    contrast: 'normal',\n    scheme: 'light',\n  },\n  {\n    palette: {\n      brand: {\n        color: {\n          '00': '#eceff1',\n          '10': '#cfd8dc',\n          '20': '#b0bec5',\n          '30': '#90a4ae',\n          '40': '#78909c',\n          '50': '#607d8b',\n          '60': '#546e7a',\n          '70': '#455a64',\n          '80': '#37474f',\n          '90': '#263238',\n        },\n        bg: {\n          base: '#78909c',\n          disabled: '#90a4ae',\n          focused: '#607d8b',\n          hovered: '#546e7a',\n          selected: '#607d8b',\n        },\n        fg: {\n          base: '#546e7a',\n          disabled: '#607d8b',\n          focused: '#455a64',\n          hovered: '#37474f',\n          selected: '#455a64',\n        },\n      },\n      primary: {\n        // ...\n      },\n      secondary: {\n        // ...\n      },\n      tertiary: {\n        // ...\n      },\n      neutral: {\n        // ...\n      },\n      muted: {\n        // ...\n      },\n      info: {\n        // ...\n      },\n      danger: {\n        // ...\n      },\n      warning: {\n        // ...\n      },\n      failure: {\n        // ...\n      },\n      success: {\n        // ...\n      },\n    },\n  },\n);\n")),Object(a.b)("h2",{id:"mixins"},"Mixins"),Object(a.b)("p",null,"Coming soon..."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Variables can be accessed from both ",Object(a.b)("inlineCode",{parentName:"p"},"Design")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Theme")," instances using the ",Object(a.b)("inlineCode",{parentName:"p"},"tokens")," class\nproperty, which is a multidimensional object."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import theme from './styles/<target>/themes/day';\n\nconst tokens = theme.toTokens();\n\ntokens.heading.l3.size; // 1.79rem\ntokens.palette.brand.color['30']; // #90a4ae\n")),Object(a.b)("p",null,"There are far more advanced ways of utilizing design tokens. We suggest reading the documentation on\nthe ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/packages/system"}),"design system package")," itself for more examples."))}c.isMDXComponent=!0}}]);