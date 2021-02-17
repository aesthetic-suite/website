(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(127)),s={title:"Styled components"},c={unversionedId:"integrations/react/styled",id:"integrations/react/styled",isDocsHomePage:!1,title:"Styled components",description:"An alternative to styling components manually is to use the createStyled() API,",source:"@site/docs/integrations/react/styled.md",slug:"/integrations/react/styled",permalink:"/docs/integrations/react/styled",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react/styled.md",version:"current",sidebar:"docs",previous:{title:"Styling components",permalink:"/docs/integrations/react/styles"},next:{title:"Directionality",permalink:"/docs/integrations/react/direction"}},i=[{value:"Variant styles",id:"variant-styles",children:[]},{value:"Composing components",id:"composing-components",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An alternative to ",Object(o.b)("a",{parentName:"p",href:"/docs/integrations/react/styles"},"styling components")," manually is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"createStyled()")," API,\nwhich creates a reusable component at the lowest level -- per element. This approach was made\npopular by the ",Object(o.b)("a",{parentName:"p",href:"https://styled-components.com"},"styled-components")," library."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"createStyled()")," function requires the name of an HTML element to render underneath the hood.\nUsing the example below, it would render a ",Object(o.b)("inlineCode",{parentName:"p"},"<button />"),". It also requires a partial\n",Object(o.b)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/components"},"style sheet")," (either an object or function), in\nwhich a single element is styled, instead of multiple elements."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { createStyled } from '@aesthetic/react';\n\nconst Button = createStyled('button', (css) =>\n  css.mixin.resetButton({\n    display: 'inline-flex',\n    padding: css.var('spacing-df'),\n    textAlign: 'center',\n  }),\n);\n\nexport default Button;\n")),Object(o.b)("p",null,"Because this API is based on existing HTML elements, all props for that specific element are\nautomatically supported and are typed correctly if using TypeScript."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'<Button type="submit" disabled={disabled} onClick={onClick}>\n  Save\n</Button>\n')),Object(o.b)("h2",{id:"variant-styles"},"Variant styles"),Object(o.b)("p",null,"Styled components can support any number of customizable variations out of the box."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"const Button = createStyled('button', {\n  display: 'inline-flex',\n  padding: css.var('spacing-df'),\n  textAlign: 'center',\n\n  '@variants': {\n    size: {\n      sm: { fontSize: css.var('text-sm-size') },\n      df: { fontSize: css.var('text-df-size') },\n      lg: { fontSize: css.var('text-lg-size') },\n    },\n    palette: {\n      brand: { backgroundColor: css.var('palette-brand-bg-base') },\n      success: { backgroundColor: css.var('palette-success-bg-base') },\n      warning: { backgroundColor: css.var('palette-warning-bg-base') },\n    },\n  },\n});\n\n// Set default props to define default variants\nButton.defaultProps = {\n  palette: 'brand',\n};\n")),Object(o.b)("p",null,"You can then enable a variant by passing a prop with the name of a variant, and a value of one of\nits types."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'<Button palette="brand" size="lg">\n  Large branded button\n</Button>\n')),Object(o.b)("p",null,"If using TypeScript, you'll need to type the variant props manually using the 2nd generic."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"interface ButtonVariants {\n  size?: 'sm' | 'df' | 'lg';\n  palette?: 'brand' | 'success' | 'warning';\n}\n\nconst Button = createStyled<'button', ButtonVariants>('button', {\n  // ...\n});\n")),Object(o.b)("h2",{id:"composing-components"},"Composing components"),Object(o.b)("p",null,"Styled components can also extend and compose around other styled components. When using this\napproach, all styles and their variants are inherited."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"const Button = createStyled('button', (css) => ({\n  display: 'inline-flex',\n  textAlign: 'center',\n  padding: css.var('spacing-df'),\n}));\n\nconst BlockButton = createStyled(Button, {\n  display: 'flex',\n  width: '100%',\n});\n\nconst PillBlockButton = createStyled(BlockButton, {\n  borderRadius: '50%',\n});\n")))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);