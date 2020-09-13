(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||h[d]||i;return n?a.a.createElement(b,c(c({ref:t},m),{},{components:n})):a.a.createElement(b,c({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(114)),o={title:"Using themes"},c={unversionedId:"integrations/react/themes",id:"integrations/react/themes",isDocsHomePage:!1,title:"Using themes",description:"Knowledge of themes is required.",source:"@site/docs/integrations/react/themes.md",slug:"/integrations/react/themes",permalink:"/docs/integrations/react/themes",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react/themes.md",version:"current",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/integrations/react/setup"},next:{title:"Styling components",permalink:"/docs/integrations/react/styles"}},s=[{value:"Changing themes",id:"changing-themes",children:[]},{value:"Contextual themeing",id:"contextual-themeing",children:[]},{value:"Accessing the theme",id:"accessing-the-theme",children:[]}],m={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Knowledge of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/dev/css-in-js/themes"}),"themes")," is required.")),Object(i.b)("p",null,"To provide the active theme to all React components, we'll need to render a ",Object(i.b)("inlineCode",{parentName:"p"},"ThemeProvider")," at the\nroot of your application. By default, the active theme will automatically be detected based on a\nuser's preference, like preferred color scheme, contrast levels, and more!"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="index.ts" {3,8-10}',title:'"index.ts"',"{3,8-10}":!0}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { ThemeProvider } from '@aesthetic/react';\nimport './setup';\nimport App from './App';\n\nReactDOM.render(\n  <ThemeProvider>\n    <App />\n  </ThemeProvider>,\n  document.getElementById('app'),\n);\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Only 1 ",Object(i.b)("inlineCode",{parentName:"p"},"ThemeProvider")," may be rendered in an application.")),Object(i.b)("h2",{id:"changing-themes"},"Changing themes"),Object(i.b)("p",null,"As mentioned in the primary themes documentation, a theme can be changed with the ",Object(i.b)("inlineCode",{parentName:"p"},"changeTheme()"),"\nmethod. When called, this method will trigger a re-render on the root ",Object(i.b)("inlineCode",{parentName:"p"},"ThemeProvider"),"."),Object(i.b)("p",null,"However, there is a secondary approach for changing themes, and that is through the ",Object(i.b)("inlineCode",{parentName:"p"},"name")," prop.\nThis approach is a bit cumbersome, as it requires re-rendering the provider near the root of the\napplication, which requires some form of state at that layer."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { ThemeProvider } from '@aesthetic/react';\n\n<ThemeProvider name=\"twilight\">\n  <App />\n</ThemeProvider>;\n")),Object(i.b)("h2",{id:"contextual-themeing"},"Contextual themeing"),Object(i.b)("p",null,"A root ",Object(i.b)("inlineCode",{parentName:"p"},"ThemeProvider")," provides design tokens to the entire application by declaring ",Object(i.b)("inlineCode",{parentName:"p"},":root")," level\nCSS variables and applying a ",Object(i.b)("inlineCode",{parentName:"p"},"<body />")," class name. Because of this architectural decision, themes\nand styles can be dynamically changed with ease."),Object(i.b)("p",null,"Because we utilize CSS variables, we implicitly support nested themes by taking advantage of\nelement-level CSS variable cascading. To integrate nested themes, use the ",Object(i.b)("inlineCode",{parentName:"p"},"ContextualThemeProvider"),"\nwith an explicit theme name."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import { ThemeProvider, ContextualThemeProvider } from \'@aesthetic/react\';\n\n<ThemeProvider name="day">\n  <div>Inherits styles from the day theme.</div>\n\n  <ContextualThemeProvider name="night">\n    <div>Inherits styles from the night theme.</div>\n  </ContextualThemeProvider>\n</ThemeProvider>;\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"ContextualThemeProvider"),"s can be infinitely nested, but not recommended.")),Object(i.b)("h2",{id:"accessing-the-theme"},"Accessing the theme"),Object(i.b)("p",null,"To manually access the provided ",Object(i.b)("inlineCode",{parentName:"p"},"Theme")," object, either from the root or contextually, use the\n",Object(i.b)("inlineCode",{parentName:"p"},"useTheme()")," hook."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4,6}","{4,6}":!0}),"import { useTheme } from '@aesthetic/react';\n\nexport default function Component() {\n  const theme = useTheme();\n\n  if (theme.scheme === 'dark') {\n    // Do something\n  }\n\n  return <div />;\n}\n")),Object(i.b)("p",null,"Or use the ",Object(i.b)("inlineCode",{parentName:"p"},"withTheme()")," HOC, which passes the theme as a ",Object(i.b)("inlineCode",{parentName:"p"},"theme")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,4,11}","{3,4,11}":!0}),"import { withTheme, WithThemeWrappedProps } from '@aesthetic/react';\n\nfunction Component({ theme }: WithThemeWrappedProps) {\n  if (theme.contrast === 'high') {\n    // Do something\n  }\n\n  return <div />;\n}\n\nexport default withTheme()(Component);\n")))}l.isMDXComponent=!0}}]);