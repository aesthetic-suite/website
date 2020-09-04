(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(112)),a={title:"Directionality"},c={unversionedId:"integrations/react/direction",id:"integrations/react/direction",isDocsHomePage:!1,title:"Directionality",description:"Knowledge of directionality is required.",source:"@site/docs/integrations/react/direction.md",slug:"/integrations/react/direction",permalink:"/docs/integrations/react/direction",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react/direction.md",version:"current",sidebar:"docs",previous:{title:"Styling components",permalink:"/docs/integrations/react/styles"},next:{title:"UI toolkit",permalink:"/docs/integrations/react/ui"}},s=[{value:"Contextual direction",id:"contextual-direction",children:[]},{value:"Accessing the direction",id:"accessing-the-direction",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Knowledge of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/direction"}),"directionality")," is required.")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"DirectionProvider")," is available for controlling the direction of a target React component tree.\nWhile not necessary to render at the root, since the default direction is inferred from the\ndocument's ",Object(o.b)("inlineCode",{parentName:"p"},"dir")," attribute, it can be used to explicitly enforce a direction, like so."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { DirectionProvider } from '@aesthetic/react';\nimport Component from './Component';\n\n<DirectionProvider direction=\"rtl\">\n  <Component />\n</DirectionProvider>;\n")),Object(o.b)("h2",{id:"contextual-direction"},"Contextual direction"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"value")," prop can be used to dynamically change the direction of a provider based on a user\nprovided string. For example, say we have a message thread, and we want to swap between LTR and RTL\ndepending on what's being entered in an input field."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport { DirectionProvider } from '@aesthetic/react';\nimport MessageThread from './MessageThread';\nimport MessageInput from './MessageInput';\n\nexport default function MessageContainer() {\n  const [value, setValue] = useState('');\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <DirectionProvider value={value}>\n      <MessageThread />\n      <MessageInput value={value} onChange={handleChange} />\n    </DirectionProvider>\n  );\n}\n")),Object(o.b)("p",null,"As demonstrated above, if the user is typing in English, the direction would be ",Object(o.b)("inlineCode",{parentName:"p"},"ltr"),", otherwise, if\nthe user is typing in Arabic, the direction would be ",Object(o.b)("inlineCode",{parentName:"p"},"rtl"),", so on and so forth."),Object(o.b)("h2",{id:"accessing-the-direction"},"Accessing the direction"),Object(o.b)("p",null,"To manually access the current direction, either from the document or a provider, use the\n",Object(o.b)("inlineCode",{parentName:"p"},"useDirection()")," hook."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4,6}","{4,6}":!0}),"import { useDirection } from '@aesthetic/react';\n\nexport default function Component() {\n  const direction = useDirection();\n\n  if (direction === 'rtl') {\n    // Do something\n  }\n\n  return <div />;\n}\n")),Object(o.b)("p",null,"Or use the ",Object(o.b)("inlineCode",{parentName:"p"},"withDirection()")," HOC, which passes the direction as a ",Object(o.b)("inlineCode",{parentName:"p"},"direction")," prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,4,11}","{3,4,11}":!0}),"import { withDirection, WithDirectionWrappedProps } from '@aesthetic/react';\n\nfunction Component({ direction }: WithDirectionWrappedProps) {\n  if (direction === 'ltr') {\n    // Do something\n  }\n\n  return <div />;\n}\n\nexport default withDirection()(Component);\n")))}p.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);