(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[6971],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||s;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3874:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o=["components"],i={title:"Introduction",slug:"/"},l={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"Aesthetic is an end-to-end design and development framework for declaring consistent visual styles",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/index.md",version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Prerequisites",permalink:"/docs/prerequisites"}},p=[{value:"For designers",id:"for-designers",children:[]},{value:"For developers",id:"for-developers",children:[]},{value:"Motivation and goals",id:"motivation-and-goals",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Aesthetic is an end-to-end design and development framework for declaring consistent visual styles\nacross platforms, languages, projects, and teams."),(0,s.kt)("p",null,"The entry point to Aesthetic is a fixed design system, created and configured in YAML. This design\nsystem is then compiled to design tokens for a target platform (Android, iOS, and Web) and format\n(CSS, SCSS, etc). With this, all platforms are supported, across many languages and technologies,\nwith the design system configuration being the single shared source of truth."),(0,s.kt)("p",null,"Furthermore, the design system isn't the only feature that Aesthetic provides. It also provides a\nframework-agnostic CSS-in-JS solution, built around the design system itself. This solution provides\na highly performant and ergonomic API for styling web components."),(0,s.kt)("h2",{id:"for-designers"},"For designers"),(0,s.kt)("p",null,"As a designer, you own the design system, its aspects, and its themes, by managing the YAML\nconfiguration file. In the future, this YAML file will be automatically exported from a Figma file,\nor additional upstream sources."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/design-system"},"What is a design system?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/design-system/create"},"Create a design system")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/design-system/config"},"Configure the design system"))),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("p",null,"As a developer, you compile the design system configuration into design tokens for one or many\nplatform targets. These design tokens can then be used to style your website or components."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/design-tokens"},"What are design tokens?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/design-tokens/compile"},"Compile design tokens"))),(0,s.kt)("h2",{id:"motivation-and-goals"},"Motivation and goals"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Designers must be able to contribute.")," To support this, the design system is configured in\nYAML, which is easy to learn, read, and write, and works across all operating systems and\nlanguages.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Configuration ",(0,s.kt)("em",{parentName:"strong"},"and")," convention.")," YAML configuration will allow for explicit customization if\nneeded, otherwise the automated settings will suffice as the common denominator. Ultimately,\nregardless of which approach is chosen, it will be compiled down to the same design tokens.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Mobile first ",(0,s.kt)("em",{parentName:"strong"},"or")," desktop first.")," Regardless of what device is being targeted, responsive and\nadaptive support will be baked into the system, with utilities to effortlessly integrate it.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Multiple design systems can be used in parallel.")," Through themes, this allows for a migration\nbetween old and new designs (2019 vs 2020), without having to modify components or style sheets.\nFor this to work, the theme needs to be fixed and strict.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Compatibility with third-party libraries must be seamless.")," If a library is written in\nAesthetic, and they use our utilities and theme structure, they immediately gain all the benefits\nof the design system.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Support all platforms.")," Why only support web? Let's support Android and iOS as well, so that\nthe design system is truly universal, and is the single source of truth.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Support all styling patterns.")," Use Sass? Or maybe Less? Or you on the CSS-in-JS train? Either\nway, no matter what pattern your application uses (or maybe multiple patterns), the design system\ncan target all of them.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Performance is top priority.")," Regardless of what platform and target is chosen, performance\noverhead should be almost non-existent. Aim for zero or low runtime overhead.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Developer experience must be enjoyable.")," Ideally, all Aesthetic APIs and systems are easy to\nuse, easy to learn, and ultimately enjoyable to integrate.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Testing is an after-thought.")," When testing styled components, it will just work. No extra\noverhead or DOM requirements are necessary. Will also be easy to test class name and style changes\nbased on props.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"User preference matters.")," Does the user prefer dark color schemes? Low contrast colors? Reduced\nmotion? The framework will take all this into account, throughout all aspects of the framework."))))}u.isMDXComponent=!0}}]);