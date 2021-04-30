(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),r=(n(0),n(129)),s={title:"Sass"},i={unversionedId:"design-tokens/web/sass",id:"design-tokens/web/sass",isDocsHomePage:!1,title:"Sass",description:"The following format is provided when compiling design tokens to Sass using",source:"@site/docs/design-tokens/web/sass.md",sourceDirName:"design-tokens/web",slug:"/design-tokens/web/sass",permalink:"/docs/design-tokens/web/sass",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-tokens/web/sass.md",version:"current",frontMatter:{title:"Sass"},sidebar:"docs",previous:{title:"SCSS",permalink:"/docs/design-tokens/web/scss"},next:{title:"Less",permalink:"/docs/design-tokens/web/less"}},o=[{value:"File structure",id:"file-structure",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Integration",id:"integration",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:o};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following format is provided when compiling design tokens to ",Object(r.b)("a",{parentName:"p",href:"https://sass-lang.com"},"Sass")," using\n",Object(r.b)("inlineCode",{parentName:"p"},"web-sass"),"."),Object(r.b)("h2",{id:"file-structure"},"File structure"),Object(r.b)("p",null,"During compilation, an ",Object(r.b)("inlineCode",{parentName:"p"},"_index.sass")," file will be created based on the design system YAML\nconfiguration file. Additional ",Object(r.b)("inlineCode",{parentName:"p"},"themes/_<name>.sass")," files will be created for each theme configured\nin the YAML file."),Object(r.b)("p",null,"This would look something like the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"styles/<target>/\n\u251c\u2500\u2500 themes/\n\u2502   \u251c\u2500\u2500 _day.sass\n\u2502   \u2514\u2500\u2500 _night.sass\n\u251c\u2500\u2500 _index.sass\n")),Object(r.b)("h2",{id:"variables"},"Variables"),Object(r.b)("p",null,"As mentioned above, a design system and multiple theme files are created. The design system file\ndefines primitive variables, while each theme file defines color and palette variables, both of\nwhich rely on Sass variables."),Object(r.b)("p",null,"The compiled design system file looks something like the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sass"},"$border-sm-radius: 0.11rem !default // 1.50px\n$border-sm-width: 0rem !default // 0px\n$border-df-radius: 0.21rem !default // 3px\n$border-df-width: 0.07rem !default // 1px\n$border-lg-radius: 0.32rem !default // 4.50px\n$border-lg-width: 0.14rem !default // 2px\n\n$breakpoint-xs-query: 'screen and (min-width: 45.71em)' !default\n$breakpoint-xs-query-size: 640 !default\n$breakpoint-xs-root-line-height: 1.33 !default\n$breakpoint-xs-root-text-size: 14.94px !default\n$breakpoint-sm-query: 'screen and (min-width: 68.57em)' !default\n$breakpoint-sm-query-size: 960 !default\n$breakpoint-sm-root-line-height: 1.42 !default\n$breakpoint-sm-root-text-size: 15.94px !default\n$breakpoint-md-query: 'screen and (min-width: 91.43em)' !default\n$breakpoint-md-query-size: 1280 !default\n$breakpoint-md-root-line-height: 1.52 !default\n$breakpoint-md-root-text-size: 17.01px !default\n$breakpoint-lg-query: 'screen and (min-width: 114.29em)' !default\n$breakpoint-lg-query-size: 1600 !default\n$breakpoint-lg-root-line-height: 1.62 !default\n$breakpoint-lg-root-text-size: 18.15px !default\n$breakpoint-xl-query: 'screen and (min-width: 137.14em)' !default\n$breakpoint-xl-query-size: 1920 !default\n$breakpoint-xl-root-line-height: 1.73 !default\n$breakpoint-xl-root-text-size: 19.36px !default\n\n$depth-content: 100 !default\n$depth-navigation: 1000 !default\n$depth-sheet: 1100 !default\n$depth-overlay: 1200 !default\n$depth-modal: 1300 !default\n$depth-toast: 1400 !default\n$depth-dialog: 1500 !default\n$depth-menu: 1600 !default\n$depth-tooltip: 1700 !default\n\n$heading-l1-letter-spacing: 0.25px !default\n$heading-l1-line-height: 1.5 !default\n$heading-l1-size: 1.14rem !default // 16px\n$heading-l2-letter-spacing: 0.33px !default\n$heading-l2-line-height: 1.69 !default\n$heading-l2-size: 1.43rem !default // 20px\n$heading-l3-letter-spacing: 0.44px !default\n$heading-l3-line-height: 1.9 !default\n$heading-l3-size: 1.79rem !default // 25px\n$heading-l4-letter-spacing: 0.59px !default\n$heading-l4-line-height: 2.14 !default\n$heading-l4-size: 2.23rem !default // 31.25px\n$heading-l5-letter-spacing: 0.79px !default\n$heading-l5-line-height: 2.4 !default\n$heading-l5-size: 2.79rem !default // 39px\n$heading-l6-letter-spacing: 1.05px !default\n$heading-l6-line-height: 2.7 !default\n$heading-l6-size: 3.49rem !default // 48.80px\n\n$shadow-xs-x: 0rem !default // 0px\n$shadow-xs-y: 0.14rem !default // 2px\n$shadow-xs-blur: 0.14rem !default // 2px\n$shadow-xs-spread: 0rem !default // 0px\n$shadow-sm-x: 0rem !default // 0px\n$shadow-sm-y: 0.23rem !default // 3.24px\n$shadow-sm-blur: 0.27rem !default // 3.75px\n$shadow-sm-spread: 0rem !default // 0px\n$shadow-md-x: 0rem !default // 0px\n$shadow-md-y: 0.37rem !default // 5.24px\n$shadow-md-blur: 0.39rem !default // 5.50px\n$shadow-md-spread: 0rem !default // 0px\n$shadow-lg-x: 0rem !default // 0px\n$shadow-lg-y: 0.61rem !default // 8.47px\n$shadow-lg-blur: 0.52rem !default // 7.25px\n$shadow-lg-spread: 0rem !default // 0px\n$shadow-xl-x: 0rem !default // 0px\n$shadow-xl-y: 0.98rem !default // 13.71px\n$shadow-xl-blur: 0.64rem !default // 9px\n$shadow-xl-spread: 0rem !default // 0px\n\n$spacing-xs: 0.31rem !default // 4.38px\n$spacing-sm: 0.63rem !default // 8.75px\n$spacing-df: 1.25rem !default // 17.50px\n$spacing-md: 2.5rem !default // 35px\n$spacing-lg: 3.75rem !default // 52.50px\n$spacing-xl: 5rem !default // 70px\n$spacing-unit: 17.5 !default\n\n$text-sm-line-height: 1.25 !default\n$text-sm-size: 0.89rem !default // 12.45px\n$text-df-line-height: 1.25 !default\n$text-df-size: 1rem !default // 14px\n$text-lg-line-height: 1.25 !default\n$text-lg-size: 1.13rem !default // 15.75px\n\n$typography-font-heading: 'Roboto' !default\n$typography-font-monospace: '\"Lucida Console\", Monaco, monospace' !default\n$typography-font-text: 'Roboto' !default\n$typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"' !default\n$typography-root-line-height: 1.25 !default\n$typography-root-text-size: 14px !default\n")),Object(r.b)("p",null,"While the compiled theme files look loosely like the below (removed some repetition for brevity)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sass"},"@import '..';\n\n$palette-brand-color-00: #eceff1 !default\n$palette-brand-color-10: #cfd8dc !default\n$palette-brand-color-20: #b0bec5 !default\n$palette-brand-color-30: #90a4ae !default\n$palette-brand-color-40: #78909c !default\n$palette-brand-color-50: #607d8b !default\n$palette-brand-color-60: #546e7a !default\n$palette-brand-color-70: #455a64 !default\n$palette-brand-color-80: #37474f !default\n$palette-brand-color-90: #263238 !default\n$palette-brand-bg-base: #78909c !default\n$palette-brand-bg-focused: #607d8b !default\n$palette-brand-bg-hovered: #546e7a !default\n$palette-brand-bg-selected: #607d8b !default\n$palette-brand-bg-disabled: #90a4ae !default\n$palette-brand-fg-base: #546e7a !default\n$palette-brand-fg-focused: #455a64 !default\n$palette-brand-fg-hovered: #37474f !default\n$palette-brand-fg-selected: #455a64 !default\n$palette-brand-fg-disabled: #607d8b !default\n$palette-brand-text: #37474f !default\n\n// $palette-primary-...\n// $palette-secondary-...\n// $palette-tertiary-...\n// $palette-neutral-...\n// $palette-muted-...\n// $palette-danger-...\n// $palette-warning-...\n// $palette-negative-...\n// $palette-positive-...\n")),Object(r.b)("h2",{id:"integration"},"Integration"),Object(r.b)("p",null,"The compiled Sass variables can be imported with the\n",Object(r.b)("a",{parentName:"p",href:"https://sass-lang.com/documentation/at-rules/use"},"@use")," at-rule. Only the theme files need to be\nimported, as the design system file is pre-imported within each theme."),Object(r.b)("p",null,"Begin by importing the theme into scope using a namespace."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sass"},'@use "styles/<target>/themes/day" as token\n\n.button\n  font-size: token.$text-df-size\n')),Object(r.b)("p",null,"While namespacing is great to avoid collision, it can be a bit verbose. If you prefer to import into\nthe global scope, use ",Object(r.b)("inlineCode",{parentName:"p"},"*"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sass"},'@use "styles/<target>/themes/day" as *\n\n.button\n  font-size: $text-df-size\n')),Object(r.b)("p",null,"Variables support ",Object(r.b)("a",{parentName:"p",href:"https://sass-lang.com/documentation/variables"},"!default")," so that their value may\nbe customized during import -- outside the context of the compiler. This is useful for migration\npurposes, but we suggest the patterns above and using the variables as-is."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sass"},'@use "styles/<target>/themes/day" with (\n  $text-df-size: 16px,\n)\n')),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"We can utilize the compiled Sass variables for reusability."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sass"},".button\n  display: inline-block\n  text-align: center\n  font-size: $text-df-size\n  line-height: $text-df-line-height\n  padding: $spacing-sm $spacing-df\n  color: $palette-brand-fg-base\n  background-color: $palette-brand-bg-base\n\n  &:hover\n    color: $palette-brand-fg-hovered\n    background-color: $palette-brand-bg-hovered\n")),Object(r.b)("p",null,"And apply the classes to HTML as normal."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<button type="button" class="button">Continue</button>\n')))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=l.a.createContext({}),p=function(e){var t=l.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,f=u["".concat(s,".").concat(b)]||u[b]||c[b]||r;return n?l.a.createElement(f,i(i({ref:t},d),{},{components:n})):l.a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return l.a.createElement.apply(null,s)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);