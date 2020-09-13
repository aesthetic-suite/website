(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(114)),c={title:"React",sidebar_label:"Overview"},o={unversionedId:"integrations/react",id:"integrations/react",isDocsHomePage:!1,title:"React",description:"The React integration provides a bridge between Aesthetic core and React",source:"@site/docs/integrations/react.md",slug:"/integrations/react",permalink:"/docs/integrations/react",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Directionality",permalink:"/docs/dev/css-in-js/direction"},next:{title:"Getting started",permalink:"/docs/integrations/react/setup"}},s=[{value:"Features",id:"features",children:[]},{value:"Requirements",id:"requirements",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The React integration provides a bridge between Aesthetic core and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),"\nitself. It enables components to easily and fluently style themselves with design tokens compiled by\na design system."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/integrations/react/setup"}),"Getting started")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/integrations/react/themes"}),"Using themes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/integrations/react/styles"}),"Styling components")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/integrations/react/direction"}),"Directionality")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/integrations/react/api"}),"API"))),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hook and HOC based APIs for styling components, accessing themes, and handling directionality."),Object(i.b)("li",{parentName:"ul"},"Global, document, and element level themes powered through context."),Object(i.b)("li",{parentName:"ul"},"Nested themes that avoid polluting the global scope."),Object(i.b)("li",{parentName:"ul"},"First-class directionality support (RTL, LTR).")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"React 16.6+")))}u.isMDXComponent=!0}}]);