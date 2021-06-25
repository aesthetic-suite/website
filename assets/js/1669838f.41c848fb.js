(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[5620],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),h=a,g=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6462:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],s={title:"Less"},l={unversionedId:"design-tokens/web/less",id:"design-tokens/web/less",isDocsHomePage:!1,title:"Less",description:"The following web format is provided when compiling design tokens to Less",source:"@site/docs/design-tokens/web/less.md",sourceDirName:"design-tokens/web",slug:"/design-tokens/web/less",permalink:"/docs/design-tokens/web/less",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-tokens/web/less.md",version:"current",frontMatter:{title:"Less"},sidebar:"docs",previous:{title:"Sass",permalink:"/docs/design-tokens/web/sass"},next:{title:"Setup",permalink:"/docs/dev/css-in-js/setup"}},p=[{value:"File structure",id:"file-structure",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Integration",id:"integration",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following web format is provided when compiling design tokens to ",(0,i.kt)("a",{parentName:"p",href:"http://lesscss.org/"},"Less"),"\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"web-less"),"."),(0,i.kt)("h2",{id:"file-structure"},"File structure"),(0,i.kt)("p",null,"During compilation, an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.less")," file will be created based on the design system YAML\nconfiguration file. Additional ",(0,i.kt)("inlineCode",{parentName:"p"},"themes/<name>.less")," files will be created for each theme configured\nin the YAML file."),(0,i.kt)("p",null,"This would look something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"styles/<target>/\n\u251c\u2500\u2500 themes/\n\u2502   \u251c\u2500\u2500 day.less\n\u2502   \u2514\u2500\u2500 night.less\n\u251c\u2500\u2500 index.less\n")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("p",null,"As mentioned above, a design system and multiple theme files are created. The design system file\ndefines primitive variables, while each theme file defines color and palette variables, both of\nwhich rely on Less variables."),(0,i.kt)("p",null,"The compiled design system file looks something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less"},"@border-sm-radius: 0.11rem; // 1.50px\n@border-sm-width: 0rem; // 0px\n@border-df-radius: 0.21rem; // 3px\n@border-df-width: 0.07rem; // 1px\n@border-lg-radius: 0.32rem; // 4.50px\n@border-lg-width: 0.14rem; // 2px\n\n@breakpoint-xs-query: 'screen and (min-width: 45.71em)';\n@breakpoint-xs-query-size: 640;\n@breakpoint-xs-root-line-height: 1.33;\n@breakpoint-xs-root-text-size: 14.94px;\n@breakpoint-sm-query: 'screen and (min-width: 68.57em)';\n@breakpoint-sm-query-size: 960;\n@breakpoint-sm-root-line-height: 1.42;\n@breakpoint-sm-root-text-size: 15.94px;\n@breakpoint-md-query: 'screen and (min-width: 91.43em)';\n@breakpoint-md-query-size: 1280;\n@breakpoint-md-root-line-height: 1.52;\n@breakpoint-md-root-text-size: 17.01px;\n@breakpoint-lg-query: 'screen and (min-width: 114.29em)';\n@breakpoint-lg-query-size: 1600;\n@breakpoint-lg-root-line-height: 1.62;\n@breakpoint-lg-root-text-size: 18.15px;\n@breakpoint-xl-query: 'screen and (min-width: 137.14em)';\n@breakpoint-xl-query-size: 1920;\n@breakpoint-xl-root-line-height: 1.73;\n@breakpoint-xl-root-text-size: 19.36px;\n\n@depth-content: 100;\n@depth-navigation: 1000;\n@depth-sheet: 1100;\n@depth-overlay: 1200;\n@depth-modal: 1300;\n@depth-toast: 1400;\n@depth-dialog: 1500;\n@depth-menu: 1600;\n@depth-tooltip: 1700;\n\n@heading-l1-letter-spacing: 0.25px;\n@heading-l1-line-height: 1.5;\n@heading-l1-size: 1.14rem; // 16px\n@heading-l2-letter-spacing: 0.33px;\n@heading-l2-line-height: 1.69;\n@heading-l2-size: 1.43rem; // 20px\n@heading-l3-letter-spacing: 0.44px;\n@heading-l3-line-height: 1.9;\n@heading-l3-size: 1.79rem; // 25px\n@heading-l4-letter-spacing: 0.59px;\n@heading-l4-line-height: 2.14;\n@heading-l4-size: 2.23rem; // 31.25px\n@heading-l5-letter-spacing: 0.79px;\n@heading-l5-line-height: 2.4;\n@heading-l5-size: 2.79rem; // 39px\n@heading-l6-letter-spacing: 1.05px;\n@heading-l6-line-height: 2.7;\n@heading-l6-size: 3.49rem; // 48.80px\n\n@shadow-xs-x: 0rem; // 0px\n@shadow-xs-y: 0.14rem; // 2px\n@shadow-xs-blur: 0.14rem; // 2px\n@shadow-xs-spread: 0rem; // 0px\n@shadow-sm-x: 0rem; // 0px\n@shadow-sm-y: 0.23rem; // 3.24px\n@shadow-sm-blur: 0.27rem; // 3.75px\n@shadow-sm-spread: 0rem; // 0px\n@shadow-md-x: 0rem; // 0px\n@shadow-md-y: 0.37rem; // 5.24px\n@shadow-md-blur: 0.39rem; // 5.50px\n@shadow-md-spread: 0rem; // 0px\n@shadow-lg-x: 0rem; // 0px\n@shadow-lg-y: 0.61rem; // 8.47px\n@shadow-lg-blur: 0.52rem; // 7.25px\n@shadow-lg-spread: 0rem; // 0px\n@shadow-xl-x: 0rem; // 0px\n@shadow-xl-y: 0.98rem; // 13.71px\n@shadow-xl-blur: 0.64rem; // 9px\n@shadow-xl-spread: 0rem; // 0px\n\n@spacing-xs: 0.31rem; // 4.38px\n@spacing-sm: 0.63rem; // 8.75px\n@spacing-df: 1.25rem; // 17.50px\n@spacing-lg: 2.5rem; // 35px\n@spacing-xl: 3.75rem; // 52.50px\n@spacing-unit: 17.5;\n\n@text-sm-line-height: 1.25;\n@text-sm-size: 0.89rem; // 12.45px\n@text-df-line-height: 1.25;\n@text-df-size: 1rem; // 14px\n@text-lg-line-height: 1.25;\n@text-lg-size: 1.13rem; // 15.75px\n\n@typography-font-heading: 'Roboto';\n@typography-font-monospace: '\"Lucida Console\", Monaco, monospace';\n@typography-font-text: 'Roboto';\n@typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"';\n@typography-root-line-height: 1.25;\n@typography-root-text-size: 14px;\n")),(0,i.kt)("p",null,"While the compiled theme files look loosely like the below (removed some repetition for brevity)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less"},"@import '..';\n\n@palette-brand-color-00: #eceff1;\n@palette-brand-color-10: #cfd8dc;\n@palette-brand-color-20: #b0bec5;\n@palette-brand-color-30: #90a4ae;\n@palette-brand-color-40: #78909c;\n@palette-brand-color-50: #607d8b;\n@palette-brand-color-60: #546e7a;\n@palette-brand-color-70: #455a64;\n@palette-brand-color-80: #37474f;\n@palette-brand-color-90: #263238;\n@palette-brand-bg-base: #78909c;\n@palette-brand-bg-focused: #607d8b;\n@palette-brand-bg-hovered: #546e7a;\n@palette-brand-bg-selected: #607d8b;\n@palette-brand-bg-disabled: #90a4ae;\n@palette-brand-fg-base: #546e7a;\n@palette-brand-fg-focused: #455a64;\n@palette-brand-fg-hovered: #37474f;\n@palette-brand-fg-selected: #455a64;\n@palette-brand-fg-disabled: #607d8b;\n@palette-brand-text: #37474f;\n\n// @palette-primary-...\n// @palette-secondary-...\n// @palette-tertiary-...\n// @palette-neutral-...\n// @palette-muted-...\n// @palette-danger-...\n// @palette-warning-...\n// @palette-negative-...\n// @palette-positive-...\n")),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"The compiled Less variables can be imported with the\n",(0,i.kt)("a",{parentName:"p",href:"http://lesscss.org/features/#import-atrules-feature"},"@import")," at-rule. Only the theme files need to\nbe imported, as the design system file is pre-imported within each theme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less"},"@import (once, reference) 'styles/<target>/themes/day.less';\n\n.button {\n    font-size: @text-df-size;\n}\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"We can utilize the compiled Less variables for reusability."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less"},".button {\n    display: inline-block;\n    text-align: center;\n    font-size: @text-df-size;\n    line-height: @text-df-line-height;\n    padding: @spacing-sm @spacing-df;\n    color: @palette-brand-fg-base;\n    background-color: @palette-brand-bg-base;\n\n    &:hover {\n        color: @palette-brand-fg-hovered;\n        background-color: @palette-brand-bg-hovered;\n    }\n}\n")),(0,i.kt)("p",null,"And apply the classes to HTML as normal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button type="button" class="button">Continue</button>\n')))}c.isMDXComponent=!0}}]);