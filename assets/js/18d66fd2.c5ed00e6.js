(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||l;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},130:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},132:function(e,t,a){"use strict";var n=a(0),r=a(133);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},133:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},134:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(132),i=a(130),c=a(56),o=a.n(c);var s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(l.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(n.useState)(c),g=v[0],O=v[1],y=n.Children.toArray(e.children),j=[];if(null!=p){var N=f[p];null!=N&&N!==g&&b.some((function(e){return e.value===N}))&&O(N)}var w=function(e){var t=e.currentTarget,a=j.indexOf(t),n=b[a].value;O(n),null!=p&&(h(p,n),setTimeout((function(){var e,a,n,r,l,i,c,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,c=i.innerHeight,s=i.innerWidth,a>=0&&l<=s&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.a.tabItemActive),setTimeout((function(){return t.classList.remove(o.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case u:var n=j.indexOf(e.target)+1;a=j[n]||j[0];break;case s:var r=j.indexOf(e.target)-1;a=j[r]||j[j.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},135:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(129)),i=a(134),c=a(135),o={title:"Prerequisites"},s={unversionedId:"prerequisites",id:"prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"Aesthetic is written in Typescript and compiled to JavaScript. As such, all tooling requires at",source:"@site/docs/prerequisites.mdx",sourceDirName:".",slug:"/prerequisites",permalink:"/docs/prerequisites",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/prerequisites.mdx",version:"current",frontMatter:{title:"Prerequisites"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"What is a design system?",permalink:"/docs/design-system"}},u=[{value:"Command line",id:"command-line",children:[{value:"Global install",id:"global-install",children:[]},{value:"Local install",id:"local-install",children:[]},{value:"NPX",id:"npx",children:[]}]}],b={toc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Aesthetic is written in Typescript and compiled to JavaScript. As such, all tooling requires at\nminimum NodeJS v10.10 to run correctly."),Object(l.b)("p",null,"We highly suggest installing and managing NodeJS with ",Object(l.b)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm"),"."),Object(l.b)("h2",{id:"command-line"},"Command line"),Object(l.b)("p",null,"Aesthetic provides an interactive command line program through the ",Object(l.b)("inlineCode",{parentName:"p"},"@aesthetic/cli")," package. In\nfurthur documentation, we'll use the ",Object(l.b)("inlineCode",{parentName:"p"},"aesthetic")," binary within examples, which should be substituted\nwith 1 of the following patterns."),Object(l.b)("h3",{id:"global-install"},"Global install"),Object(l.b)("p",null,"Install the package globally to make the ",Object(l.b)("inlineCode",{parentName:"p"},"aesthetic")," binary available everywhere."),Object(l.b)(i.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"yarn global add @aesthetic/cli\n"))),Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm install -g @aesthetic/cli\n")))),Object(l.b)("p",null,"Then run the binary as-is."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"aesthetic <cmd>\n")),Object(l.b)("h3",{id:"local-install"},"Local install"),Object(l.b)("p",null,"Install the package locally to the project to make the ",Object(l.b)("inlineCode",{parentName:"p"},"aesthetic")," binary available within scripts."),Object(l.b)(i.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @aesthetic/cli\n"))),Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @aesthetic/cli\n")))),Object(l.b)("p",null,"Update ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," to define the script."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "compile": "aesthetic compile <name> ./build"\n  }\n}\n')),Object(l.b)("p",null,"Then run the script with NPM or Yarn."),Object(l.b)(i.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"yarn run compile\n"))),Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm run compile\n")))),Object(l.b)("h3",{id:"npx"},"NPX"),Object(l.b)("p",null,"Execute a one-off command using ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"NPX"),", which is installed\nalongside Node.js and NPM."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npx @aesthetic/cli <cmd>\n")))}p.isMDXComponent=!0}}]);