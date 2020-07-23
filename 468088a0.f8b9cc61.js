(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(155)),c={title:"Configure the design system"},l={id:"design-system/config",isDocsHomePage:!1,title:"Configure the design system",description:"The design system is configured in a human and machine readable format known as",source:"@site/docs/design-system/config.md",permalink:"/website/docs/design-system/config",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-system/config.md",sidebar:"docs",previous:{title:"Create a design system",permalink:"/website/docs/design-system/create"},next:{title:"brand.yaml",permalink:"/website/docs/design-system/config/brand"}},o=[{value:"Unitless values",id:"unitless-values",children:[]},{value:"Scaled patterns",id:"scaled-patterns",children:[]},{value:"Extending configs",id:"extending-configs",children:[]}],s={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The design system is configured in a human and machine readable format known as\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/YAML"}),"YAML"),". This format works across all operating systems,\nplatforms, programming languages, and is easily accessible for both designers and developers."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/design-system/config/brand"}),"Brand")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/design-system/config/language"}),"Language")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/website/docs/design-system/config/themes"}),"Themes"))),Object(i.b)("p",null,"Before we dive into all configurable settings, a few must know concepts are described below."),Object(i.b)("h2",{id:"unitless-values"},"Unitless values"),Object(i.b)("p",null,"All configuration settings that require a unit based value (",Object(i.b)("inlineCode",{parentName:"p"},"px"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pt"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sp"),", etc) must be defined\nusing a unitless number. During the compilation phase, this unitless value will be calculated\naccording to the platform target, and output with the required unit suffix."),Object(i.b)("p",null,"When configuring, assume a unit based on the following table."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Spacing"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Typography"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dp")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sp"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"pt")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"pt"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Web"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"px")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"px"))))),Object(i.b)("h2",{id:"scaled-patterns"},"Scaled patterns"),Object(i.b)("p",null,"A good portion of the configuration provides an automatic scaling alternative, based on\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.modularscale.com"}),"modular scale"),"\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://alistapart.com/article/more-meaningful-typography/"}),"more info"),"). This alternative\ncalculates, measures, and provides optimal proportions and density automatically, which alleviates\nthe burden from designers and developers."),Object(i.b)("p",null,"Settings that support scaling will always have a sibling setting of the same name, suffixed with\n",Object(i.b)("inlineCode",{parentName:"p"},"Scale"),". Scale values are either a float that defines an explicit ratio, or a kebab-cased string\nthat maps to a common ratio name, like ",Object(i.b)("inlineCode",{parentName:"p"},"golden-ratio"),"\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aesthetic-suite/framework/blob/master/packages/compiler/src/types.ts#L38"}),"view all scale types"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Floats\nsizeScale: 1.25\n\n# Strings\nsizeScale: major-fourth\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you want to use scaling for a specific group of settings, but not an individual setting, pass\n",Object(i.b)("inlineCode",{parentName:"p"},"0")," as the scale ratio.")),Object(i.b)("h2",{id:"extending-configs"},"Extending configs"),Object(i.b)("p",null,"Instead of duplicating entire configurations, you can extend an existing configuration (of the same\ntype) by providing a design system name, or a relative file path."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Design system name\nextends: other-config\n\n# Relative config file\nextends: ../some/other/config/language.yaml\n")),Object(i.b)("p",null,"Works for all ",Object(i.b)("inlineCode",{parentName:"p"},"brand.yaml"),", ",Object(i.b)("inlineCode",{parentName:"p"},"language.yaml"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"themes.yaml")," files."))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);