(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[2967],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),o=n(944),a=n(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=(0,o.Z)(),b=f.tabGroupChoices,y=f.setTabGroupChoices,h=(0,r.useState)(p),v=h[0],g=h[1],k=r.Children.toArray(e.children),w=[];if(null!=d){var x=b[d];null!=x&&x!==v&&u.some((function(e){return e.value===x}))&&g(x)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=u[n].value;g(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,o,a,s,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,s=window,l=s.innerHeight,c=s.innerWidth,n>=0&&a<=c&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,a.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),o=n(9443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8962:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=n(1395),i=n(8215),l=["components"],c={title:"Styling components"},p={unversionedId:"react-native/styles",id:"react-native/styles",isDocsHomePage:!1,title:"Styling components",description:"Knowledge of component style sheets is required.",source:"@site/docs/react-native/styles.mdx",sourceDirName:"react-native",slug:"/react-native/styles",permalink:"/docs/react-native/styles",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/react-native/styles.mdx",version:"current",frontMatter:{title:"Styling components"},sidebar:"reactNative",previous:{title:"Using themes",permalink:"/docs/react-native/themes"},next:{title:"Styled components",permalink:"/docs/react-native/styled"}},u=[{value:"Composing styles",id:"composing-styles",children:[{value:"Custom style objects",id:"custom-style-objects",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Knowledge of ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/components"},"component style sheets")," is required.")),(0,a.kt)("p",null,"Components are styled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useStyles()")," hook (preferred) or the ",(0,a.kt)("inlineCode",{parentName:"p"},"withStyles()"),"\nhigher-order-component. Both APIs require a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/components"},"style sheet")," that is conditionally rendered to\ncompose React Native style sheets."),(0,a.kt)("p",null,"To continue with the example found in the style sheet documentation, let's design and style a button\ncomponent. The button file would look something like the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{5}","{5}":!0},"import React from 'react';\nimport { PressableProps } from 'react-native';\nimport { createComponentStyles, CommonSize, PaletteType } from '@aesthetic/react-native';\n\nexport const styleSheet = createComponentStyles((theme) => ({\n  button: {\n    border: 0,\n    margin: 0,\n    padding: 0,\n    flex: 1,\n    flexDirection: 'column',\n    flexWrap: 'nowrap',\n    verticalAlign: 'middle'\n    padding: theme.tokens.spacing.df,\n\n    '@variants': {\n      'size:sm': { fontSize: theme.tokens.text.sm.size },\n      'size:df': { fontSize: theme.tokens.text.df.size },\n      'size:lg': { fontSize: theme.tokens.text.lg.size },\n\n      'palette:brand': { backgroundColor: theme.tokens.palette.brand.bg.base },\n      'palette:positive': { backgroundColor: theme.tokens.palette.positive.bg.base },\n      'palette:warning': { backgroundColor: theme.tokens.palette.warning.bg.base },\n    },\n  },\n  button_selected: {},\n  button_disabled: {},\n  before: {},\n  after: {},\n  // ...\n}));\n\nexport interface ButtonProps extends PressableProps {\n  afterIcon?: React.ReactNode;\n  beforeIcon?: React.ReactNode;\n  children: NonNullable<React.ReactNode>;\n  disabled?: boolean;\n  palette?: PaletteType;\n  selected?: boolean;\n  size?: CommonSize;\n}\n")),(0,a.kt)(s.Z,{groupId:"api-type",defaultValue:"hook",values:[{label:"Hook",value:"hook"},{label:"HOC",value:"hoc"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"hook",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{14}","{14}":!0},"import { Pressable, View } from 'react-native';\nimport { useStyles } from '@aesthetic/react-native';\n\nexport default function Button({\n    children,\n    beforeIcon,\n    afterIcon,\n    disabled,\n    selected,\n    palette,\n    size,\n    ...props\n}: ButtonProps) {\n    const sx = useStyles(styleSheet);\n\n    return (\n        <Pressable disabled={disabled} {...props}>\n            <View style={sx('button')}>\n                {beforeIcon && <View style={sx('before')}>{beforeIcon}</View>}\n                <View>{children}</View>\n                {afterIcon && <View style={sx('after')}>{afterIcon}</View>}\n            </View>\n        </Pressable>\n    );\n}\n"))),(0,a.kt)(i.Z,{value:"hoc",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{10}","{10}":!0},"import { Pressable, View } from 'react-native';\nimport { withStyles, WithStylesWrappedProps } from '@aesthetic/react-native';\n\nclass Button extends React.Component<\n    ButtonProps &\n        WithStylesWrappedProps<'button' | 'button_disabled' | 'button_selected' | 'before' | 'after'>\n> {\n    render() {\n        const {\n            compose: sx,\n            children,\n            beforeIcon,\n            afterIcon,\n            disabled,\n            selected,\n            palette,\n            size,\n            ...props\n        } = this.props;\n\n        return (\n            <Pressable disabled={disabled} {...props}>\n                <View style={sx('button')}>\n                    {beforeIcon && <View style={sx('before')}>{beforeIcon}</View>}\n                    <View>{children}</View>\n                    {afterIcon && <View style={sx('after')}>{afterIcon}</View>}\n                </View>\n            </Pressable>\n        );\n    }\n}\n\nexport default withStyles(styleSheet)(Button);\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're designing components for a library that'll be consumed externally, we suggest exporting\nthe style sheet so that consumers may customize variants.")),(0,a.kt)("h2",{id:"composing-styles"},"Composing styles"),(0,a.kt)("p",null,"Both the hook and HOC APIs provide a style composer function that we aptly name ",(0,a.kt)("inlineCode",{parentName:"p"},"sx"),". This function\nrequires a list of selector names (keys from the style sheet object) in which to determine a list of\napplicable styles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{11,15,16,18}","{11,15,16,18}":!0},"function Button({\n    children,\n    beforeIcon,\n    afterIcon,\n    disabled,\n    selected,\n    palette,\n    size,\n    ...props\n}: ButtonProps) {\n    const sx = useStyles(styleSheet);\n\n    return (\n        <Pressable disabled={disabled} {...props}>\n            <View style={sx('button', selected && 'button_selected', disabled && 'button_disabled')}>\n                {beforeIcon && <View style={sx('before')}>{beforeIcon}</View>}\n                <View>{children}</View>\n                {afterIcon && <View style={sx('after')}>{afterIcon}</View>}\n            </View>\n        </Pressable>\n    );\n}\n")),(0,a.kt)("p",null,"As demonstrated above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"button")," selector will always be rendered. However, the ",(0,a.kt)("inlineCode",{parentName:"p"},"button_selected"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"button_disabled")," selectors will only be rendered when the button is conditionally updated via\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"selected")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," props respectively."),(0,a.kt)("p",null,"We can take this a step further by supporting\n",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/css-in-js/style-sheets/components#variants"},"variants"),". All that's required is to pass an\nobject as the ",(0,a.kt)("em",{parentName:"p"},"1st argument")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"sx()")," with the name of every variant, and the variant to activate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{7,8,11,16-21}","{7,8,11,16-21}":!0},"function Button({\n    children,\n    beforeIcon,\n    afterIcon,\n    disabled,\n    selected,\n    palette = 'primary',\n    size = 'df',\n    ...props\n}: ButtonProps) {\n    const sx = useStyles(styleSheet);\n\n    return (\n        <Pressable disabled={disabled} {...props}>\n            <View\n                style={sx(\n                    { size, palette },\n                    'button',\n                    selected && 'button_selected',\n                    disabled && 'button_disabled',\n                )}\n            >\n                {beforeIcon && <View style={sx('before')}>{beforeIcon}</View>}\n                <View>{children}</View>\n                {afterIcon && <View style={sx('after')}>{afterIcon}</View>}\n            </View>\n        </Pressable>\n    );\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: The order of selectors passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"sx()")," determines the specificity, as we create an array of\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"TextStyle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageStyle"),") objects. Be aware of this when developing.")),(0,a.kt)("h3",{id:"custom-style-objects"},"Custom style objects"),(0,a.kt)("p",null,"You can pass non-Aesthetic composed style objects to ",(0,a.kt)("inlineCode",{parentName:"p"},"sx()")," by passing an array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sx('button', [\n    {\n        width: 100,\n    },\n]);\n")))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);