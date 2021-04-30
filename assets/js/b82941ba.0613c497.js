(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(129)),c={title:"React",sidebar_label:"Overview"},o={unversionedId:"integrations/react",id:"integrations/react",isDocsHomePage:!1,title:"React",description:"The React integration provides a bridge between Aesthetic core and React",source:"@site/docs/integrations/react.md",sourceDirName:"integrations",slug:"/integrations/react",permalink:"/docs/integrations/react",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react.md",version:"current",sidebar_label:"Overview",frontMatter:{title:"React",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Directionality",permalink:"/docs/dev/css-in-js/direction"},next:{title:"Getting started",permalink:"/docs/integrations/react/setup"}},l=[{value:"Features",id:"features",children:[]},{value:"Requirements",id:"requirements",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The React integration provides a bridge between Aesthetic core and ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"\nitself. It enables components to easily and fluently style themselves with design tokens compiled by\na design system."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/integrations/react/setup"},"Getting started")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/integrations/react/themes"},"Using themes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/integrations/react/styles"},"Styling components")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/integrations/react/direction"},"Directionality")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/integrations/react/api"},"API"))),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Styled component, Hook, and HOC based APIs for styling, accessing themes, and handling\ndirectionality."),Object(i.b)("li",{parentName:"ul"},"Global, document, and element level themes powered through context."),Object(i.b)("li",{parentName:"ul"},"Nested themes that avoid polluting the global scope."),Object(i.b)("li",{parentName:"ul"},"First-class directionality support (RTL, LTR).")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"React 16.6+ / 17+")))}u.isMDXComponent=!0},129:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);