(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(124)),s={title:"Server-side rendering"},o={unversionedId:"packages/style/ssr",id:"packages/style/ssr",isDocsHomePage:!1,title:"Server-side rendering",description:"Aesthetic supports server-side rendering and client-side hydration (this happens automatically).",source:"@site/docs/packages/style/ssr.md",slug:"/packages/style/ssr",permalink:"/docs/packages/style/ssr",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/ssr.md",version:"current",sidebar:"docs",previous:{title:"Render options",permalink:"/docs/packages/style/options"},next:{title:"Test utilities",permalink:"/docs/packages/style/testing"}},c=[{value:"Server",id:"server",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Aesthetic supports server-side rendering ",Object(i.b)("em",{parentName:"p"},"and")," client-side hydration (this happens automatically).\nHowever, it does require a bit of setup."),Object(i.b)("h2",{id:"server"},"Server"),Object(i.b)("p",null,"On the server, we'll need to import and call ",Object(i.b)("inlineCode",{parentName:"p"},"createServerEngine()")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@aesthetic/style/server"),"\nto extract critical CSS with ",Object(i.b)("inlineCode",{parentName:"p"},"extractStyles()"),". We can do this as part of the React DOM server\nrendering process. In the example below, we'll use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://expressjs.com/"}),"Express")," as our server."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,10,13,16}","{3,10,13,16}":!0}),"import express from 'express';\nimport ReactDOMServer from 'react-dom/server';\nimport { createServerEngine, extractStyles, renderToStyleMarkup } from '@aesthetic/style/server';\nimport App from './path/to/client/App';\n\nconst server = express();\n\nserver.get('/', (req, res) => {\n  // Instantiate an engine for the server\n  const engine = createServerEngine();\n\n  // Render the application and extract critical CSS with the engine\n  const content = ReactDOMServer.renderToString(extractStyles(<App />, engine));\n\n  // Convert the extracted styles to HTML `style` tags\n  const styles = renderToStyleMarkup(engine);\n\n  // Render using your preferred template engine\n  res.render('layout', {\n    content,\n    styles,\n  });\n});\n\nserver.listen(8080);\n")),Object(i.b)("p",null,"Since our CSS extraction results in multiple ",Object(i.b)("inlineCode",{parentName:"p"},"<style />")," tags, they'll need to be injected into a\nlayout HTML file ",Object(i.b)("em",{parentName:"p"},"without")," being escaped. Something like the following."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en" dir="ltr">\n  <head>\n    <meta charset="UTF-8" />\n    <title>{{title}}</title>\n    {{styles}}\n  </head>\n  <body>\n    <div id="root">{{content}}</div>\n  </body>\n</html>\n')),Object(i.b)("p",null,"Because of this architecture, the React application ",Object(i.b)("em",{parentName:"p"},"cannot")," include and render the full HTML\ndocument. To work around this, a double render will need to be executed, where the application is\nrendered 1st with ",Object(i.b)("inlineCode",{parentName:"p"},"renderToString()"),", and the document that includes the content and styles is\nrendered 2nd with ",Object(i.b)("inlineCode",{parentName:"p"},"renderToStaticMarkup()"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"server.get('/', (req, res) => {\n  // Instantiate an engine for the server\n  const engine = createServerEngine();\n\n  // Render the application and extract critical CSS with the engine\n  const content = ReactDOMServer.renderToString(extractStyles(<App />, engine));\n\n  // Convert the extracted styles to HTML `style` tags\n  const styles = renderToStyleMarkup(engine);\n\n  // Render using a layout HTML component\n  res.send(ReactDOMServer.renderToStaticMarkup(<Layout content={content} styles={styles} />));\n});\n")))}p.isMDXComponent=!0}}]);