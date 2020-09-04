(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{111:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),c=(r(0),r(111)),i={title:"React",sidebar_label:"Overview"},o={unversionedId:"packages/react",id:"packages/react",isDocsHomePage:!1,title:"React",description:"The React integration provides a bridge between Aesthetic core and React",source:"@site/docs/packages/react.md",slug:"/packages/react",permalink:"/docs/packages/react",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/react.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Directionality",permalink:"/docs/development/direction"},next:{title:"Getting started",permalink:"/docs/packages/react/setup"}},l=[{value:"Features",id:"features",children:[]},{value:"Requirements",id:"requirements",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The React integration provides a bridge between Aesthetic core and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),"\nitself. It enables components to easily and fluently style themselves with design tokens compiled by\na design system."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/packages/react/setup"}),"Getting started")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/packages/react/themes"}),"Using themes")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/packages/react/styles"}),"Styling components")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/packages/react/direction"}),"Directionality")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/packages/react/api"}),"API"))),Object(c.b)("h2",{id:"features"},"Features"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Hook and HOC based APIs for styling components, accessing themes, and handling directionality."),Object(c.b)("li",{parentName:"ul"},"Global, document, and element level themes powered through context."),Object(c.b)("li",{parentName:"ul"},"Nested themes that avoid polluting the global scope."),Object(c.b)("li",{parentName:"ul"},"First-class directionality support (RTL, LTR).")),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"React 16.6+")))}p.isMDXComponent=!0}}]);