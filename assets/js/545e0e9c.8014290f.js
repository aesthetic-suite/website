(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[2153],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9804:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Packages"},c={unversionedId:"packages",id:"packages",isDocsHomePage:!1,title:"Packages",description:"Aesthetic is an end-to-end, multi-platform styling and design suite, that is powered by multiple NPM",source:"@site/docs/packages.md",sourceDirName:".",slug:"/packages",permalink:"/docs/packages",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages.md",version:"current",frontMatter:{title:"Packages"}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aesthetic is an end-to-end, multi-platform styling and design suite, that is powered by multiple NPM\npackages. Most of these packages can be used stand-alone, while others are built around and require\nother Aesthetic packages."),(0,o.kt)("p",null,"We're a big fan of composition and interoperability, so we're offering documentation for each\npackage as if it's being used stand-alone. The following packages are available."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/packages/system"},"Design system")," - JavaScript implementation of the design system\nconfiguration, with theme and user preference support (color schemes, contrast levels, etc)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/packages/style"},"CSS-in-JS engine")," - Low-level API that renders CSS declarations into the DOM\nusing atomic class names and CSS variables for high performance, low filesize, and efficient\ncaching. Also supports server-side rendering and client-side hydration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Core")," - Core API the combines the previous packages into a single but powerful CSS-in-JS\nsolution. Is the foundation for framework integrations below.")),(0,o.kt)("p",null,"Aesthetic was designed to be framework agnostic, and as such, provides integrations for the\nfollowing popular view/template based libraries."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/react"},"React")," - React integration that is built on top of the core API. Provides hook and\nHOC based patterns, with support for contextual themes, directionality, and SSR.")))}u.isMDXComponent=!0}}]);