(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(u,s(s({ref:t},b),{},{components:n})):a.a.createElement(u,s({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(129)),i={title:"Compile design tokens"},s={unversionedId:"design-tokens/compile",id:"design-tokens/compile",isDocsHomePage:!1,title:"Compile design tokens",description:"Once your design system has been created and",source:"@site/docs/design-tokens/compile.md",sourceDirName:"design-tokens",slug:"/design-tokens/compile",permalink:"/docs/design-tokens/compile",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-tokens/compile.md",version:"current",frontMatter:{title:"Compile design tokens"},sidebar:"docs",previous:{title:"What are design tokens?",permalink:"/docs/design-tokens"},next:{title:"Android",permalink:"/docs/design-tokens/android"}},c=[{value:"Formats",id:"formats",children:[]}],b={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once your design system has been ",Object(o.b)("a",{parentName:"p",href:"/docs/design-system/create"},"created")," and\n",Object(o.b)("a",{parentName:"p",href:"/docs/design-system/config"},"configured"),", you may compile the configuration into the tokens\nmentioned above by running the ",Object(o.b)("inlineCode",{parentName:"p"},"compile")," ",Object(o.b)("a",{parentName:"p",href:"/docs/prerequisites#command-line"},"command"),". This command\nrequires a name (a folder within ",Object(o.b)("inlineCode",{parentName:"p"},".aesthetic"),"), an ",Object(o.b)("a",{parentName:"p",href:"#formats"},"output format"),", and a target folder to\nwrite files to."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"aesthetic compile <name> ./styles/system --format web-css\n")),Object(o.b)("h2",{id:"formats"},"Formats"),Object(o.b)("p",null,"Formats are the combination of a device platform and target language, and represent the compiled\noutput of a design system configuration. Pass the ",Object(o.b)("inlineCode",{parentName:"p"},"--format")," option to choose one of the following."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Android"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"(Coming soon)")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"iOS"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"(Coming soon)")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Web"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/ts"},"web-ts")," - TypeScript variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/tsx"},"web-tsx")," - TypeScript for CSS-in-JS."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/ts"},"web-js")," - JavaScript variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/tsx"},"web-jsx")," - JavaScript for CSS-in-JS."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/css"},"web-css")," - CSS variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/scss"},"web-scss")," - SCSS variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/sass"},"web-sass")," - Sass variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/design-tokens/web/less"},"web-less")," - Less variables.")))))}l.isMDXComponent=!0}}]);