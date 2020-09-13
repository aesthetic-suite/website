(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||r;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(114)),s={title:"Styling components"},c={unversionedId:"integrations/react/styles",id:"integrations/react/styles",isDocsHomePage:!1,title:"Styling components",description:"Knowledge of style sheets is required.",source:"@site/docs/integrations/react/styles.md",slug:"/integrations/react/styles",permalink:"/docs/integrations/react/styles",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/integrations/react/styles.md",version:"current",sidebar:"docs",previous:{title:"Using themes",permalink:"/docs/integrations/react/themes"},next:{title:"Directionality",permalink:"/docs/integrations/react/direction"}},i=[{value:"Generating class names",id:"generating-class-names",children:[]},{value:"HOC example",id:"hoc-example",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Knowledge of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/dev/css-in-js/style-sheets"}),"style sheets")," is required.")),Object(r.b)("p",null,"Components are styled with the ",Object(r.b)("inlineCode",{parentName:"p"},"useStyles()")," hook (preferred) or the ",Object(r.b)("inlineCode",{parentName:"p"},"withStyles()"),"\nhigher-order-component. Both APIs require a\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/dev/css-in-js/style-sheets/components"}),"style sheet")," that is conditionally rendered to CSS\nto generate atomic class names."),Object(r.b)("p",null,"To continue with the example found in the style sheet documentation, let's design and style a button\ncomponent. The button file would look something like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4,41}","{4,41}":!0}),"import React from 'react';\nimport { useStyles, createComponentStyles, CommonSize, PaletteType } from '@aesthetic/react';\n\nexport const styleSheet = createComponentStyles((css) => ({\n  button: css.mixin('pattern-reset-button', {\n    display: 'inline-flex',\n    padding: css.var('spacing-df'),\n    textAlign: 'center',\n\n    '@variants': {\n      size: {\n        sm: { fontSize: css.var('text-sm-size') },\n        df: { fontSize: css.var('text-df-size') },\n        lg: { fontSize: css.var('text-lg-size') },\n      },\n      palette: {\n        brand: { backgroundColor: css.var('palette-brand-bg-base') },\n        success: { backgroundColor: css.var('palette-success-bg-base') },\n        warning: { backgroundColor: css.var('palette-warning-bg-base') },\n      },\n    },\n  }),\n  button_selected: {},\n  button_disabled: {},\n  before: {},\n  after: {},\n  // ...\n}));\n\nexport interface ButtonProps {\n  afterIcon?: React.ReactNode;\n  beforeIcon?: React.ReactNode;\n  children: NonNullable<React.ReactNode>;\n  disabled?: boolean;\n  palette?: PaletteType;\n  selected?: boolean;\n  size?: CommonSize;\n}\n\nexport default function Button({ children, beforeIcon, afterIcon }: ButtonProps) {\n  const cx = useStyles(styleSheet);\n\n  return (\n    <button type=\"button\">\n      {beforeIcon && <span>{beforeIcon}</span>}\n      {children}\n      {afterIcon && <span>{afterIcon}</span>}\n    </button>\n  );\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you're designing components for a library that'll be consumed externally, we suggest exporting\nthe style sheet so that consumers may customize variants.")),Object(r.b)("h2",{id:"generating-class-names"},"Generating class names"),Object(r.b)("p",null,"Both the hook and HOC provide a class name generation function that we aptly name ",Object(r.b)("inlineCode",{parentName:"p"},"cx"),". This\nfunction requires a list of selector names (keys from the style sheet object) in which to render CSS\nand apply a class name with, for example."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"{2,7,10,12}","{2,7,10,12}":!0}),"function Button({ selected, disabled }: ButtonProps) {\n  const cx = useStyles(styleSheet);\n\n  return (\n    <button\n      type=\"button\"\n      className={cx('button', selected && 'button_selected', disabled && 'button_disabled')}\n      disabled={disabled}\n    >\n      {beforeIcon && <span className={cx('before')}>{beforeIcon}</span>}\n      {children}\n      {afterIcon && <span className={cx('after')}>{afterIcon}</span>}\n    </button>\n  );\n}\n")),Object(r.b)("p",null,"As demonstrated above, the ",Object(r.b)("inlineCode",{parentName:"p"},"button")," selector will always be rendered. However, the ",Object(r.b)("inlineCode",{parentName:"p"},"button_selected"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"button_disabled")," selectors will only be rendered when the button is conditionally updatd via\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"selected")," and ",Object(r.b)("inlineCode",{parentName:"p"},"disabled")," props respectively."),Object(r.b)("p",null,"We can take this a step further by supporting\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/dev/css-in-js/style-sheets/components#variants"}),"variants"),". All that's required is to pass\nan object to ",Object(r.b)("inlineCode",{parentName:"p"},"cx()")," with the name of every variant, and the variation to activate."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"{2,7-12,15,17}","{2,7-12,15,17}":!0}),"function Button({ selected, disabled, size = 'df', palette = 'primary' }: ButtonProps) {\n  const cx = useStyles(styleSheet);\n\n  return (\n    <button\n      type=\"button\"\n      className={cx(\n        'button',\n        { size, palette },\n        selected && 'button_selected',\n        disabled && 'button_disabled',\n      )}\n      disabled={disabled}\n    >\n      {beforeIcon && <span className={cx('before')}>{beforeIcon}</span>}\n      {children}\n      {afterIcon && <span className={cx('after')}>{afterIcon}</span>}\n    </button>\n  );\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NOTE: The order of selectors passed to ",Object(r.b)("inlineCode",{parentName:"p"},"cx()")," does not determine the specificity. The order they\nare defined in the style sheet does! Be aware of this when developing.")),Object(r.b)("h2",{id:"hoc-example"},"HOC example"),Object(r.b)("p",null,"We provide an HOC based API to support legacy and class components. This HOC uses hooks internally,\nso you'll at least need the latest React version to function correctly. Below is what an HOC button\nclass component would look like, using the example from above."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4,14,26}","{4,14,26}":!0}),"import React from 'react';\nimport { withStyles, WithStylesWrappedProps, createComponentStyles } from '@aesthetic/react';\n\nexport const styleSheet = createComponentStyles((css) => ({\n  // ...\n}));\n\nexport interface ButtonProps {\n  // ...\n}\n\nclass Button extends React.Component<ButtonProps & WithStylesWrappedProps> {\n  render() {\n    const { cx } = this.props;\n\n    return (\n      <button type=\"button\">\n        {beforeIcon && <span>{beforeIcon}</span>}\n        {children}\n        {afterIcon && <span>{afterIcon}</span>}\n      </button>\n    );\n  }\n}\n\nexport default withStyles(styleSheet)(Button);\n")))}p.isMDXComponent=!0}}]);