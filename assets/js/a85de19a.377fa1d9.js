(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[9565],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),s=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var i=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,r.Z)(),b=f.tabGroupChoices,h=f.setTabGroupChoices,y=(0,a.useState)(u),g=y[0],k=y[1],v=a.Children.toArray(e.children),N=[];if(null!=d){var x=b[d];null!=x&&x!==g&&p.some((function(e){return e.value===x}))&&k(x)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;k(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,r,s,o,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,o=window,i=o.innerHeight,c=o.innerWidth,n>=0&&s<=c&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case i:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},455:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=n(1395),l=n(8215),i={title:"Styling components"},c={unversionedId:"integrations/react/styles",id:"integrations/react/styles",isDocsHomePage:!1,title:"Styling components",description:"Knowledge of style sheets is required.",source:"@site/docs/integrations/react/styles.mdx",sourceDirName:"integrations/react",slug:"/integrations/react/styles",permalink:"/docs/integrations/react/styles",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react/styles.mdx",version:"current",frontMatter:{title:"Styling components"},sidebar:"docs",previous:{title:"Using themes",permalink:"/docs/integrations/react/themes"},next:{title:"Styled components",permalink:"/docs/integrations/react/styled"}},u=[{value:"Generating class names",id:"generating-class-names",children:[]},{value:"Alternative styling",id:"alternative-styling",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Knowledge of ",(0,s.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets"},"style sheets")," is required.")),(0,s.kt)("p",null,"Components are styled with the ",(0,s.kt)("inlineCode",{parentName:"p"},"useStyles()")," hook (preferred) or the ",(0,s.kt)("inlineCode",{parentName:"p"},"withStyles()"),"\nhigher-order-component. Both APIs require a\n",(0,s.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/components"},"style sheet")," that is conditionally rendered to CSS\nto generate atomic class names."),(0,s.kt)("p",null,"To continue with the example found in the style sheet documentation, let's design and style a button\ncomponent. The button file would look something like the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4}","{4}":!0},"import React from 'react';\nimport { createComponentStyles, CommonSize, PaletteType } from '@aesthetic/react';\n\nexport const styleSheet = createComponentStyles((css) => ({\n  button: css.mixin('reset-button', {\n    display: 'inline-flex',\n    padding: css.var('spacing-df'),\n    textAlign: 'center',\n\n    '@variants': {\n      'size:sm': { fontSize: css.var('text-sm-size') },\n      'size:df': { fontSize: css.var('text-df-size') },\n      'size:lg': { fontSize: css.var('text-lg-size') },\n\n      'palette:brand': { backgroundColor: css.var('palette-brand-bg-base') },\n      'palette:positive': { backgroundColor: css.var('palette-positive-bg-base') },\n      'palette:warning': { backgroundColor: css.var('palette-warning-bg-base') },\n    },\n  }),\n  button_selected: {},\n  button_disabled: {},\n  before: {},\n  after: {},\n  // ...\n}));\n\nexport interface ButtonProps {\n  afterIcon?: React.ReactNode;\n  beforeIcon?: React.ReactNode;\n  children: NonNullable<React.ReactNode>;\n  disabled?: boolean;\n  palette?: PaletteType;\n  selected?: boolean;\n  size?: CommonSize;\n}\n")),(0,s.kt)(o.Z,{groupId:"api-type",defaultValue:"hook",values:[{label:"Hook",value:"hook"},{label:"HOC",value:"hoc"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"hook",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4}","{4}":!0},"import { useStyles } from '@aesthetic/react';\n\nexport default function Button({ children, beforeIcon, afterIcon }: ButtonProps) {\n  const cx = useStyles(styleSheet);\n\n  return (\n    <button type=\"button\" className={cx('button')}>\n      {beforeIcon && <span className={cx('before')}>{beforeIcon}</span>}\n      {children}\n      {afterIcon && <span className={cx('after')}>{afterIcon}</span>}\n    </button>\n  );\n}\n"))),(0,s.kt)(l.Z,{value:"hoc",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{7,19}","{7,19}":!0},"import { withStyles, WithStylesWrappedProps } from '@aesthetic/react';\n\nclass Button extends React.Component<\n  ButtonProps & WithStylesWrappedProps<'button' | 'before' | 'after', string>\n> {\n  render() {\n    const { cx, children, beforeIcon, afterIcon } = this.props;\n\n    return (\n      <button type=\"button\" className={cx('button')}>\n        {beforeIcon && <span className={cx('before')}>{beforeIcon}</span>}\n        {children}\n        {afterIcon && <span className={cx('after')}>{afterIcon}</span>}\n      </button>\n    );\n  }\n}\n\nexport default withStyles(styleSheet)(Button);\n")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you're designing components for a library that'll be consumed externally, we suggest exporting\nthe style sheet so that consumers may customize variants.")),(0,s.kt)("h2",{id:"generating-class-names"},"Generating class names"),(0,s.kt)("p",null,"Both the hook and HOC APIs provide a class name generation function that we aptly name ",(0,s.kt)("inlineCode",{parentName:"p"},"cx"),". This\nfunction requires a list of selector names (keys from the style sheet object) in which to render CSS\nand apply a class name with, for example."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{2,7,10,12}","{2,7,10,12}":!0},"function Button({ children, selected, disabled }: ButtonProps) {\n  const cx = useStyles(styleSheet);\n\n  return (\n    <button\n      type=\"button\"\n      className={cx('button', selected && 'button_selected', disabled && 'button_disabled')}\n      disabled={disabled}\n    >\n      {beforeIcon && <span className={cx('before')}>{beforeIcon}</span>}\n      {children}\n      {afterIcon && <span className={cx('after')}>{afterIcon}</span>}\n    </button>\n  );\n}\n")),(0,s.kt)("p",null,"As demonstrated above, the ",(0,s.kt)("inlineCode",{parentName:"p"},"button")," selector will always be rendered. However, the ",(0,s.kt)("inlineCode",{parentName:"p"},"button_selected"),"\nand ",(0,s.kt)("inlineCode",{parentName:"p"},"button_disabled")," selectors will only be rendered when the button is conditionally updated via\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"selected")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"disabled")," props respectively."),(0,s.kt)("p",null,"We can take this a step further by supporting\n",(0,s.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/components#variants"},"variants"),". All that's required is to pass\nan object as the ",(0,s.kt)("em",{parentName:"p"},"1st argument")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"cx()")," with the name of every variant, and the variant to\nactivate."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{2,7-12,15,17}","{2,7-12,15,17}":!0},"function Button({ children, selected, disabled, size = 'df', palette = 'primary' }: ButtonProps) {\n  const cx = useStyles(styleSheet);\n\n  return (\n    <button\n      type=\"button\"\n      className={cx(\n        { size, palette },\n        'button',\n        selected && 'button_selected',\n        disabled && 'button_disabled',\n      )}\n      disabled={disabled}\n    >\n      {beforeIcon && <span className={cx('before')}>{beforeIcon}</span>}\n      {children}\n      {afterIcon && <span className={cx('after')}>{afterIcon}</span>}\n    </button>\n  );\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"NOTE: The order of selectors passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"cx()")," does not determine the specificity. The order they\nare defined in the style sheet does! Be aware of this when developing.")),(0,s.kt)("h2",{id:"alternative-styling"},"Alternative styling"),(0,s.kt)("p",null,"Besides the ",(0,s.kt)("inlineCode",{parentName:"p"},"useStyles")," hook, there is a special ",(0,s.kt)("inlineCode",{parentName:"p"},"useCss")," hook, which is a low-level alternative for\nrendering a basic ",(0,s.kt)("a",{parentName:"p",href:"/docs/packages/style/concepts#styles"},"rule object")," and returning a class name."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useMemo } from 'react';\nimport { useCss } from '@aesthetic/react';\n\nfunction Button({ children }: ButtonProps) {\n  // Memoize the styles to avoid unnecessary renders\n  const styles = useMemo(\n    () => ({\n      display: 'inline-flex',\n      padding: 8,\n      textAlign: 'center',\n    }),\n    [],\n  );\n\n  // Immediately render and return a class name\n  const className = useCss(styles);\n\n  return (\n    <button type=\"button\" className={className}>\n      {children}\n    </button>\n  );\n}\n")),(0,s.kt)("p",null,"Be aware that this hook ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"does not"))," use the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/components"},"component style sheet")," format and instead uses\nplain ",(0,s.kt)("a",{parentName:"p",href:"/docs/packages/style/concepts#styles"},"style objects"),"! Because of this, the following\nfeatures are no longer available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Theme object and utility functions"),(0,s.kt)("li",{parentName:"ul"},"Structured style blocks"),(0,s.kt)("li",{parentName:"ul"},"Variant styles"),(0,s.kt)("li",{parentName:"ul"},"Styling multiple elements"),(0,s.kt)("li",{parentName:"ul"},"Re-rendering when theme or direction change"),(0,s.kt)("li",{parentName:"ul"},"Class name composition"),(0,s.kt)("li",{parentName:"ul"},"High-performance and caching"),(0,s.kt)("li",{parentName:"ul"},"And other design system related features...")))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);