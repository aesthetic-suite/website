(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[1925],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8455:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={title:"Configuration"},s={unversionedId:"dev/css-in-js/configure",id:"dev/css-in-js/configure",isDocsHomePage:!1,title:"Configuration",description:"Aesthetic provides a handful of options for customization through the configure() method. If you",source:"@site/docs/dev/css-in-js/configure.md",sourceDirName:"dev/css-in-js",slug:"/dev/css-in-js/configure",permalink:"/docs/dev/css-in-js/configure",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/dev/css-in-js/configure.md",version:"current",frontMatter:{title:"Configuration"},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/dev/css-in-js/setup"},next:{title:"Themes",permalink:"/docs/dev/css-in-js/themes"}},p=[{value:"Options",id:"options",children:[]},{value:"Addons",id:"addons",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aesthetic provides a handful of options for customization through the ",(0,a.kt)("inlineCode",{parentName:"p"},"configure()")," method. If you\nwould like to customize these options, import and call the method with an options object. This\ncustomization should happen near the root of the application, ",(0,a.kt)("em",{parentName:"p"},"before")," any Aesthetic styled React\ncomponent is imported or rendered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="setup.ts"',title:'"setup.ts"'},"import { configure } from '@aesthetic/<integration>';\n\nconfigure({\n    defaultUnit: 'px',\n});\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"The following options are currently supported. These options are based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"@aesthetic/style"),"\npackage. Jump over to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/style/options"},"official documentation")," for expanded\ninformation on them."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"customProperties")," (",(0,a.kt)("inlineCode",{parentName:"li"},"PropertyHandlerMap"),") - Mapping of property handlers to provide custom formats\nand functionality. Supported by\n",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-properties"},"@aesthetic/addon-properties"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultUnit")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Unit | (prop: string) => Unit"),") - A unit to append to numerical values. Can be a\nstring or a function that returns a string. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"px"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deterministicClasses")," (",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),") - Generate class names using a deterministic hash (",(0,a.kt)("inlineCode",{parentName:"li"},"c1sjakp"),")\ninstead of an auto-incremented value (",(0,a.kt)("inlineCode",{parentName:"li"},"a1"),"). Useful for scenarios like unit tests. Defaults to\n",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"directionConverter")," - (",(0,a.kt)("inlineCode",{parentName:"li"},"DirectionConverter"),") - Function that converts a property or value to\ntheir opposite direction. Supported by\n",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-direction"},"@aesthetic/addon-direction"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"injectStrategy")," (",(0,a.kt)("inlineCode",{parentName:"li"},"create | create-async | render"),") - The strategy to use for style injection\n(when applicable). Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"create-async"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create")," - Styles are injected during style sheet creation (",(0,a.kt)("inlineCode",{parentName:"li"},"createComponentStyles"),", etc)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create-async")," - Like ",(0,a.kt)("inlineCode",{parentName:"li"},"create")," but injects them asynchronously."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"render")," - Styles are injected during an integration's render path or during an explicit render\n(",(0,a.kt)("inlineCode",{parentName:"li"},"renderComponentStyles"),", etc)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rootVariables")," (",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),") - Apply CSS variables derived from the current theme to the body\n",(0,a.kt)("inlineCode",{parentName:"li"},":root"),". Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vendorPrefixer")," (",(0,a.kt)("inlineCode",{parentName:"li"},"VendorPrefixer"),") - Apply vendor prefixes to properties and values that require\nit. We prefix features for browsers with >= 1% market share. Supported by\n",(0,a.kt)("a",{parentName:"li",href:"../../packages/addon-vendor"},"@aesthetic/addon-vendor"),".")),(0,a.kt)("h2",{id:"addons"},"Addons"),(0,a.kt)("p",null,"These addons are typically used in conjuction with options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-direction"},"@aesthetic/addon-direction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@aesthetic/addon-properties"},"@aesthetic/addon-properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../packages/addon-vendor"},"@aesthetic/addon-vendor"))))}d.isMDXComponent=!0}}]);