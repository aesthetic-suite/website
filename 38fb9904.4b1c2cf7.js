(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(127)),a={title:"Configuration"},c={unversionedId:"dev/css-in-js/configure",id:"dev/css-in-js/configure",isDocsHomePage:!1,title:"Configuration",description:"Aesthetic provides a handful of options for customization through the configure() method. If you",source:"@site/docs/dev/css-in-js/configure.md",slug:"/dev/css-in-js/configure",permalink:"/docs/dev/css-in-js/configure",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/dev/css-in-js/configure.md",version:"current",sidebar:"docs",previous:{title:"Setup",permalink:"/docs/dev/css-in-js/setup"},next:{title:"Themes",permalink:"/docs/dev/css-in-js/themes"}},s=[{value:"Options",id:"options",children:[]},{value:"Addons",id:"addons",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aesthetic provides a handful of options for customization through the ",Object(o.b)("inlineCode",{parentName:"p"},"configure()")," method. If you\nwould like to customize these options, import and call the method with an options object. This\ncustomization should happen near the root of the application, ",Object(o.b)("em",{parentName:"p"},"before")," any Aesthetic styled React\ncomponent is imported or rendered."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="setup.ts"',title:'"setup.ts"'},"import { configure } from '@aesthetic/<integration>';\n\nconfigure({\n  defaultUnit: 'px',\n});\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"The following options are currently supported. These options are based on the ",Object(o.b)("inlineCode",{parentName:"p"},"@aesthetic/style"),"\npackage. Jump over to the ",Object(o.b)("a",{parentName:"p",href:"/docs/packages/style/options"},"official documentation")," for expanded\ninformation on them."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"customProperties")," (",Object(o.b)("inlineCode",{parentName:"li"},"PropertyHandlerMap"),") - Mapping of property handlers to provide custom formats\nand functionality. Supported by\n",Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-properties"},"@aesthetic/addon-properties"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultUnit")," (",Object(o.b)("inlineCode",{parentName:"li"},"string | (prop: string) => string"),") - A unit to append to numerical values. Can be\na string or a function that returns a string. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"px"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"deterministicClasses")," (",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),") - Generate class names using a deterministic hash (",Object(o.b)("inlineCode",{parentName:"li"},"c1sjakp"),")\ninstead of an auto-incremented value (",Object(o.b)("inlineCode",{parentName:"li"},"a1"),"). Useful for scenarios like unit tests. Defaults to\n",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"directionConverter")," - (",Object(o.b)("inlineCode",{parentName:"li"},"DirectionConverter"),") - Function that converts a property or value to\ntheir opposite direction. Supported by\n",Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-direction"},"@aesthetic/addon-direction"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vendorPrefixer")," (",Object(o.b)("inlineCode",{parentName:"li"},"VendorPrefixer"),") - Apply vendor prefixes to properties and values that require\nit. We prefix features for browsers with >= 1% market share. Supported by\n",Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-vendor"},"@aesthetic/addon-vendor"),".")),Object(o.b)("h2",{id:"addons"},"Addons"),Object(o.b)("p",null,"These addons are typically used in conjuction with options."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-direction"},"@aesthetic/addon-direction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-mixins"},"@aesthetic/addon-mixins")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-properties"},"@aesthetic/addon-properties")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-vendor"},"@aesthetic/addon-vendor"))))}l.isMDXComponent=!0}}]);