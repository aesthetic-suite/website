(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(7),a=(n(0),n(127)),s={title:"Themes"},o={unversionedId:"dev/css-in-js/themes",id:"dev/css-in-js/themes",isDocsHomePage:!1,title:"Themes",description:"Themes are an encapsulation of reusable variables and mixins for consistent styling, represented as",source:"@site/docs/dev/css-in-js/themes.md",slug:"/dev/css-in-js/themes",permalink:"/docs/dev/css-in-js/themes",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/dev/css-in-js/themes.md",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/dev/css-in-js/configure"},next:{title:"Style sheets",permalink:"/docs/dev/css-in-js/style-sheets"}},c=[{value:"Registering themes",id:"registering-themes",children:[]},{value:"Changing themes",id:"changing-themes",children:[]}],l={toc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Themes are an encapsulation of reusable variables and mixins for consistent styling, represented as\na ",Object(a.b)("inlineCode",{parentName:"p"},"Theme")," class."),Object(a.b)("h2",{id:"registering-themes"},"Registering themes"),Object(a.b)("p",null,"Themes can ",Object(a.b)("em",{parentName:"p"},"only")," be accessed within a style sheet when registered into Aesthetic. We can achieve\nthis using the ",Object(a.b)("inlineCode",{parentName:"p"},"registerTheme()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"registerDefaultTheme()")," methods, both of which require a\nunique name and an optional ",Object(a.b)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/themes"},"theme style sheet"),". A default theme can only\nbe defined twice, once for a light color scheme, the other for a dark color scheme."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="setup.ts"',title:'"setup.ts"'},"import { registerTheme, registerDefaultTheme } from '@aesthetic/<integration>';\nimport dayTheme from './system/themes/day';\nimport nightTheme from './system/themes/night';\nimport twilightTheme from './system/themes/twilight';\n\nregisterDefaultTheme('day', dayTheme);\nregisterDefaultTheme('night', nightTheme);\nregisterTheme('twilight', twilightTheme);\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Registration should happen near the root of the application, ",Object(a.b)("em",{parentName:"p"},"before")," any Aesthetic styled React\ncomponent is imported or rendered.")),Object(a.b)("h2",{id:"changing-themes"},"Changing themes"),Object(a.b)("p",null,"The currently active theme can be changed programmatically by calling the ",Object(a.b)("inlineCode",{parentName:"p"},"changeTheme()")," method\nwithin in your application."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { changeTheme } from '@aesthetic/<integration>';\n\nchangeTheme('twilight');\n")))}m.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=m(n),u=r,d=h["".concat(s,".").concat(u)]||h[u]||p[u]||a;return n?i.a.createElement(d,o(o({ref:t},l),{},{components:n})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);