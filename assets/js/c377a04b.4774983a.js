(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),s=(n(0),n(129)),o={title:"Introduction",slug:"/"},i={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"Aesthetic is an end-to-end design and development framework for declaring consistent visual styles",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/index.md",version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Prerequisites",permalink:"/docs/prerequisites"}},l=[{value:"For designers",id:"for-designers",children:[]},{value:"For developers",id:"for-developers",children:[]},{value:"Motivation and goals",id:"motivation-and-goals",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Aesthetic is an end-to-end design and development framework for declaring consistent visual styles\nacross platforms, languages, projects, and teams."),Object(s.b)("p",null,"The entry point to Aesthetic is a fixed design system, created and configured in YAML. This design\nsystem is then compiled to design tokens for a target platform (Android, iOS, and Web) and format\n(CSS, SCSS, etc). With this, all platforms are supported, across many languages and technologies,\nwith the design system configuration being the single shared source of truth."),Object(s.b)("p",null,"Furthermore, the design system isn't the only feature that Aesthetic provides. It also provides a\nframework-agnostic CSS-in-JS solution, built around the design system itself. This solution provides\na highly performant and ergonomic API for styling web components."),Object(s.b)("h2",{id:"for-designers"},"For designers"),Object(s.b)("p",null,"As a designer, you own the design system, its aspects, and its themes, by managing the YAML\nconfiguration file. In the future, this YAML file will be automatically exported from a Figma file,\nor additional upstream sources."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/design-system"},"What is a design system?")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/design-system/create"},"Create a design system")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/design-system/config"},"Configure the design system"))),Object(s.b)("h2",{id:"for-developers"},"For developers"),Object(s.b)("p",null,"As a developer, you compile the design system configuration into design tokens for one or many\nplatform targets. These design tokens can then be used to style your website or components."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/design-tokens"},"What are design tokens?")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/design-tokens/compile"},"Compile design tokens"))),Object(s.b)("h2",{id:"motivation-and-goals"},"Motivation and goals"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Designers must be able to contribute.")," To support this, the design system is configured in\nYAML, which is easy to learn, read, and write, and works across all operating systems and\nlanguages.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Configuration ",Object(s.b)("em",{parentName:"strong"},"and")," convention.")," YAML configuration will allow for explicit customization if\nneeded, otherwise the automated settings will suffice as the common denominator. Ultimately,\nregardless of which approach is chosen, it will be compiled down to the same design tokens.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Mobile first ",Object(s.b)("em",{parentName:"strong"},"or")," desktop first.")," Regardless of what device is being targeted, responsive and\nadaptive support will be baked into the system, with utilities to effortlessly integrate it.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Multiple design systems can be used in parallel.")," Through themes, this allows for a migration\nbetween old and new designs (2019 vs 2020), without having to modify components or style sheets.\nFor this to work, the theme needs to be fixed and strict.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Compatibility with third-party libraries must be seamless.")," If a library is written in\nAesthetic, and they use our utilities and theme structure, they immediately gain all the benefits\nof the design system.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Support all platforms.")," Why only support web? Let's support Android and iOS as well, so that\nthe design system is truly universal, and is the single source of truth.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Support all styling patterns.")," Use Sass? Or maybe Less? Or you on the CSS-in-JS train? Either\nway, no matter what pattern your application uses (or maybe multiple patterns), the design system\ncan target all of them.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Performance is top priority.")," Regardless of what platform and target is chosen, performance\noverhead should be almost non-existent. Aim for zero or low runtime overhead.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Developer experience must be enjoyable.")," Ideally, all Aesthetic APIs and systems are easy to\nuse, easy to learn, and ultimately enjoyable to integrate.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Testing is an after-thought.")," When testing styled components, it will just work. No extra\noverhead or DOM requirements are necessary. Will also be easy to test class name and style changes\nbased on props.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"User preference matters.")," Does the user prefer dark color schemes? Low contrast colors? Reduced\nmotion? The framework will take all this into account, throughout all aspects of the framework."))))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||s;return n?a.a.createElement(u,i(i({ref:t},c),{},{components:n})):a.a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);