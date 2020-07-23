(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(155)),o={title:"Test utilities"},s={id:"packages/style/testing",isDocsHomePage:!1,title:"Test utilities",description:"Aesthetic provides a few utilities for testing rendered styles in a streamlined way, all of which",source:"@site/docs/packages/style/testing.md",permalink:"/website/docs/packages/style/testing",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/testing.md",sidebar:"docs",previous:{title:"Server-side rendering",permalink:"/website/docs/packages/style/ssr"},next:{title:"API",permalink:"/website/docs/packages/style/api"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Aesthetic provides a few utilities for testing rendered styles in a streamlined way, all of which\ncan be imported from the ",Object(i.b)("inlineCode",{parentName:"p"},"@aesthetic/style/lib/testing")," module."),Object(i.b)("p",null,"The most important utility is the ",Object(i.b)("inlineCode",{parentName:"p"},"purgeStyles()")," function, which should be called after each test\nso that document CSS is reset. If not called, you may see unexpected results, where the CSS from\ndifferent tests will bleed into each other."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { purgeStyles } from '@aesthetic/style/lib/testing';\n\nafterEach(() => {\n  purgeStyles();\n});\n")),Object(i.b)("p",null,"The other useful utility is ",Object(i.b)("inlineCode",{parentName:"p"},"getRenderedStyles()"),", which returns the rendered CSS as a string.\nUseful for snapshots and visual comparisons. This function requires a type (",Object(i.b)("inlineCode",{parentName:"p"},"global"),", ",Object(i.b)("inlineCode",{parentName:"p"},"conditions"),",\nor ",Object(i.b)("inlineCode",{parentName:"p"},"standard"),") to determine which ",Object(i.b)("inlineCode",{parentName:"p"},"<style />")," element to read CSS from."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { getRenderedStyles } from '@aesthetic/style/lib/testing';\n\nit('renders a component', () => {\n  render(<Example />);\n\n  expect(getRenderedStyles('standard')).toMatchSnapshot();\n});\n")))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);