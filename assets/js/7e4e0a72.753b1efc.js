(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[5044],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),i=n(944),o=n(6010),a="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,l=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,i.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,r.useState)(u),b=g[0],y=g[1],k=r.Children.toArray(e.children),w=[];if(null!=p){var C=v[p];null!=C&&C!==b&&d.some((function(e){return e.value===C}))&&y(C)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;y(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,i,o,a,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,o=e.right,a=window,s=a.innerHeight,l=a.innerWidth,n>=0&&o<=l&&i<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case l:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",a,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),i=n(9443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2115:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(1395),c=n(8215),s={title:"Directionality"},l={unversionedId:"integrations/react/direction",id:"integrations/react/direction",isDocsHomePage:!1,title:"Directionality",description:"Knowledge of directionality is required.",source:"@site/docs/integrations/react/direction.mdx",sourceDirName:"integrations/react",slug:"/integrations/react/direction",permalink:"/docs/integrations/react/direction",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react/direction.mdx",version:"current",frontMatter:{title:"Directionality"},sidebar:"docs",previous:{title:"Styled components",permalink:"/docs/integrations/react/styled"},next:{title:"Server-side rendering",permalink:"/docs/integrations/react/ssr"}},u=[{value:"Contextual direction",id:"contextual-direction",children:[]},{value:"Accessing the direction",id:"accessing-the-direction",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Knowledge of ",(0,o.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/direction"},"directionality")," is required.")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"DirectionProvider")," is available for controlling the direction of a target React component tree.\nWhile not necessary to render at the root, since the default direction is inferred from the\ndocument's ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," attribute, it can be used to explicitly enforce a direction, like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { DirectionProvider } from '@aesthetic/react';\nimport Component from './Component';\n\n<DirectionProvider direction=\"rtl\" wrapper={<div />}>\n  <Component />\n</DirectionProvider>;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper")," prop above is required and must be passed a React element. The element is then\npassed a ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," attribute and implicitly supports other environments like React Native.")),(0,o.kt)("h2",{id:"contextual-direction"},"Contextual direction"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," prop can be used to dynamically change the direction of a provider based on a user\nprovided string. For example, say we have a message thread, and we want to swap between LTR and RTL\ndepending on what's being entered in an input field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\nimport { DirectionProvider } from '@aesthetic/react';\nimport MessageThread from './MessageThread';\nimport MessageInput from './MessageInput';\n\nexport default function MessageContainer() {\n  const [value, setValue] = useState('');\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <DirectionProvider value={value} wrapper={<div />}>\n      <MessageThread />\n      <MessageInput value={value} onChange={handleChange} />\n    </DirectionProvider>\n  );\n}\n")),(0,o.kt)("p",null,"As demonstrated above, if the user is typing in English, the direction would be ",(0,o.kt)("inlineCode",{parentName:"p"},"ltr"),", otherwise, if\nthe user is typing in Arabic, the direction would be ",(0,o.kt)("inlineCode",{parentName:"p"},"rtl"),", so on and so forth."),(0,o.kt)("h2",{id:"accessing-the-direction"},"Accessing the direction"),(0,o.kt)("p",null,"To manually access the current direction, either from the document or a provider, use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"useDirection()")," hook or ",(0,o.kt)("inlineCode",{parentName:"p"},"withDirection()")," HOC."),(0,o.kt)(a.Z,{groupId:"api-type",defaultValue:"hook",values:[{label:"Hook",value:"hook"},{label:"HOC",value:"hoc"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"hook",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4,6}","{4,6}":!0},"import { useDirection } from '@aesthetic/react';\n\nexport default function Component() {\n  const direction = useDirection();\n\n  if (direction === 'rtl') {\n    // Do something\n  }\n\n  return <div />;\n}\n"))),(0,o.kt)(c.Z,{value:"hoc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3,4,11}","{3,4,11}":!0},"import { withDirection, WithDirectionWrappedProps } from '@aesthetic/react';\n\nfunction Component({ direction }: WithDirectionWrappedProps) {\n  if (direction === 'ltr') {\n    // Do something\n  }\n\n  return <div />;\n}\n\nexport default withDirection()(Component);\n")))))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);