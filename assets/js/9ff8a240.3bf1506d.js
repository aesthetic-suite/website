(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[1867],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||c;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(944),c=r(6010),o="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,s=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=(0,a.Z)(),v=d.tabGroupChoices,y=d.setTabGroupChoices,b=(0,n.useState)(u),g=b[0],h=b[1],k=n.Children.toArray(e.children),O=[];if(null!=m){var w=v[m];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&h(w)}var x=function(e){var t=e.currentTarget,r=O.indexOf(t),n=p[r].value;h(n),null!=m&&(y(m,n),setTimeout((function(){var e,r,n,a,c,o,l,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,c=e.right,o=window,l=o.innerHeight,s=o.innerWidth,r>=0&&c<=s&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},T=function(e){var t,r;switch(e.keyCode){case s:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case l:var a=O.indexOf(e.target)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,c.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:x,onClick:x},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9604:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(2122),a=r(9756),c=(r(7294),r(3905)),o=r(1395),i=r(8215),l={title:"Getting started"},s={unversionedId:"react/setup",id:"react/setup",isDocsHomePage:!1,title:"Getting started",description:"Begin by installing Aesthetic, React, and React DOM.",source:"@site/docs/react/setup.mdx",sourceDirName:"react",slug:"/react/setup",permalink:"/docs/react/setup",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/react/setup.mdx",version:"current",frontMatter:{title:"Getting started"},sidebar:"react",previous:{title:"React",permalink:"/docs/react"},next:{title:"Using themes",permalink:"/docs/react/themes"}},u=[],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Begin by installing Aesthetic, React, and React DOM."),(0,c.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},(0,c.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @aesthetic/react react react-dom\n"))),(0,c.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @aesthetic/react react react-dom\n")))),(0,c.kt)("p",null,"If you're using TypeScript, also install required types."),(0,c.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},(0,c.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @types/react @types/react-dom\n"))),(0,c.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @types/react @types/react-dom\n")))),(0,c.kt)("p",null,"Once installed, we suggest ",(0,c.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/configure"},"configuring Aesthetic")," itself."))}m.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);