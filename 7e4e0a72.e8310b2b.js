(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},127:function(e,t,n){"use strict";var r=n(0),i=n(128);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},129:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(127),o=n(125),c=n(53),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,d=e.defaultValue,p=e.values,b=e.groupId,m=e.className,f=Object(a.a)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,g=Object(r.useState)(d),O=g[0],j=g[1];if(null!=b){var y=h[b];null!=y&&y!==O&&p.some((function(e){return e.value===y}))&&j(y)}var w=function(e){j(e),null!=b&&v(b,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(c.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},130:function(e,t,n){"use strict";var r=n(3),i=n(0),a=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(124)),o=n(129),c=n(130),s={title:"Directionality"},l={unversionedId:"integrations/react/direction",id:"integrations/react/direction",isDocsHomePage:!1,title:"Directionality",description:"Knowledge of directionality is required.",source:"@site/docs/integrations/react/direction.mdx",slug:"/integrations/react/direction",permalink:"/docs/integrations/react/direction",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react/direction.mdx",version:"current",sidebar:"docs",previous:{title:"Styled components",permalink:"/docs/integrations/react/styled"},next:{title:"UI toolkit",permalink:"/docs/integrations/react/ui"}},u=[{value:"Contextual direction",id:"contextual-direction",children:[]},{value:"Accessing the direction",id:"accessing-the-direction",children:[]}],d={rightToc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Knowledge of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/dev/css-in-js/direction"}),"directionality")," is required.")),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"DirectionProvider")," is available for controlling the direction of a target React component tree.\nWhile not necessary to render at the root, since the default direction is inferred from the\ndocument's ",Object(a.b)("inlineCode",{parentName:"p"},"dir")," attribute, it can be used to explicitly enforce a direction, like so."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { DirectionProvider } from '@aesthetic/react';\nimport Component from './Component';\n\n<DirectionProvider direction=\"rtl\" wrapper={<div />}>\n  <Component />\n</DirectionProvider>;\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"wrapper")," prop above is required and must be passed a React element. The element is then\npassed a ",Object(a.b)("inlineCode",{parentName:"p"},"dir")," attribute and implicitly supports other environments like React Native.")),Object(a.b)("h2",{id:"contextual-direction"},"Contextual direction"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"value")," prop can be used to dynamically change the direction of a provider based on a user\nprovided string. For example, say we have a message thread, and we want to swap between LTR and RTL\ndepending on what's being entered in an input field."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport { DirectionProvider } from '@aesthetic/react';\nimport MessageThread from './MessageThread';\nimport MessageInput from './MessageInput';\n\nexport default function MessageContainer() {\n  const [value, setValue] = useState('');\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <DirectionProvider value={value} wrapper={<div />}>\n      <MessageThread />\n      <MessageInput value={value} onChange={handleChange} />\n    </DirectionProvider>\n  );\n}\n")),Object(a.b)("p",null,"As demonstrated above, if the user is typing in English, the direction would be ",Object(a.b)("inlineCode",{parentName:"p"},"ltr"),", otherwise, if\nthe user is typing in Arabic, the direction would be ",Object(a.b)("inlineCode",{parentName:"p"},"rtl"),", so on and so forth."),Object(a.b)("h2",{id:"accessing-the-direction"},"Accessing the direction"),Object(a.b)("p",null,"To manually access the current direction, either from the document or a provider, use the\n",Object(a.b)("inlineCode",{parentName:"p"},"useDirection()")," hook or ",Object(a.b)("inlineCode",{parentName:"p"},"withDirection()")," HOC."),Object(a.b)(o.a,{groupId:"api-type",defaultValue:"hook",values:[{label:"Hook",value:"hook"},{label:"HOC",value:"hoc"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"hook",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4,6}","{4,6}":!0}),"import { useDirection } from '@aesthetic/react';\n\nexport default function Component() {\n  const direction = useDirection();\n\n  if (direction === 'rtl') {\n    // Do something\n  }\n\n  return <div />;\n}\n"))),Object(a.b)(c.a,{value:"hoc",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,4,11}","{3,4,11}":!0}),"import { withDirection, WithDirectionWrappedProps } from '@aesthetic/react';\n\nfunction Component({ direction }: WithDirectionWrappedProps) {\n  if (direction === 'ltr') {\n    // Do something\n  }\n\n  return <div />;\n}\n\nexport default withDirection()(Component);\n")))))}p.isMDXComponent=!0}}]);