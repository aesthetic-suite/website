(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[7443],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7749:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={title:"Compile design tokens"},l={unversionedId:"design-tokens/compile",id:"design-tokens/compile",isDocsHomePage:!1,title:"Compile design tokens",description:"Once your design system has been created and",source:"@site/docs/design-tokens/compile.md",sourceDirName:"design-tokens",slug:"/design-tokens/compile",permalink:"/docs/design-tokens/compile",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-tokens/compile.md",version:"current",frontMatter:{title:"Compile design tokens"},sidebar:"docs",previous:{title:"What are design tokens?",permalink:"/docs/design-tokens"},next:{title:"Android",permalink:"/docs/design-tokens/android"}},p=[{value:"Formats",id:"formats",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once your design system has been ",(0,i.kt)("a",{parentName:"p",href:"/docs/design-system/create"},"created")," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/design-system/config"},"configured"),", you may compile the configuration into the tokens\nmentioned above by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/prerequisites#command-line"},"command"),". This command\nrequires a name (a folder within ",(0,i.kt)("inlineCode",{parentName:"p"},".aesthetic"),"), an ",(0,i.kt)("a",{parentName:"p",href:"#formats"},"output format"),", and a target folder to\nwrite files to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aesthetic compile <name> ./styles/system --format web-css\n")),(0,i.kt)("h2",{id:"formats"},"Formats"),(0,i.kt)("p",null,"Formats are the combination of a device platform and target language, and represent the compiled\noutput of a design system configuration. Pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"--format")," option to choose one of the following."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"(Coming soon)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"iOS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"(Coming soon)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"React Native"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/native/ts"},"native-ts")," - TypeScript variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/native/tsx"},"native-tsx")," - TypeScript for CSS-in-TS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/native/ts"},"native-js")," - JavaScript variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/native/tsx"},"native-jsx")," - JavaScript for CSS-in-JS."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Web"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/ts"},"web-ts")," - TypeScript variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/tsx"},"web-tsx")," - TypeScript for CSS-in-TS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/ts"},"web-js")," - JavaScript variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/tsx"},"web-jsx")," - JavaScript for CSS-in-JS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/css"},"web-css")," - CSS variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/scss"},"web-scss")," - SCSS variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/sass"},"web-sass")," - Sass variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-tokens/web/less"},"web-less")," - Less variables.")))))}m.isMDXComponent=!0}}]);