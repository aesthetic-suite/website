(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[2293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},585:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={title:"API"},s={unversionedId:"react/api",id:"react/api",isDocsHomePage:!1,title:"API",description:"Providers",source:"@site/docs/react/api.md",sourceDirName:"react",slug:"/react/api",permalink:"/docs/react/api",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/react/api.md",version:"current",frontMatter:{title:"API"},sidebar:"react",previous:{title:"Server-side rendering",permalink:"/docs/react/ssr"}},c=[{value:"Providers",id:"providers",children:[{value:"<code>DirectionProvider</code>",id:"directionprovider",children:[]},{value:"<code>ThemeProvider</code>",id:"themeprovider",children:[]},{value:"<code>ContextualThemeProvider</code>",id:"contextualthemeprovider",children:[]}]},{value:"Hooks",id:"hooks",children:[{value:"<code>useCss</code>",id:"usecss",children:[]},{value:"<code>useDirection</code>",id:"usedirection",children:[]},{value:"<code>useStyles</code>",id:"usestyles",children:[]},{value:"<code>useTheme</code>",id:"usetheme",children:[]}]},{value:"HOCs",id:"hocs",children:[{value:"<code>withDirection</code>",id:"withdirection",children:[]},{value:"<code>withStyles</code>",id:"withstyles",children:[]},{value:"<code>withTheme</code>",id:"withtheme",children:[]}]},{value:"Other",id:"other",children:[{value:"<code>createStyled</code>",id:"createstyled",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>styles</code>",id:"styles",children:[]},{value:"<code>styled</code>",id:"styled",children:[]},{value:"<code>themeStyle</code>",id:"themestyle",children:[]}]},{value:"Server-side",id:"server-side",children:[{value:"<code>renderToStyleElements</code>",id:"rendertostyleelements",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"providers"},"Providers"),(0,i.kt)("h3",{id:"directionprovider"},(0,i.kt)("inlineCode",{parentName:"h3"},"DirectionProvider")),(0,i.kt)("p",null,"Provides a direction to all children using context. Accepts the following optional props."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"direction")," (",(0,i.kt)("inlineCode",{parentName:"li"},"ltr | rtl"),") - Explicit direction to use. Should not be used with ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inline")," (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),") - Render an inline element instead of block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Locale aware string to deduce the direction from. Should not be used with\n",(0,i.kt)("inlineCode",{parentName:"li"},"direction"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { DirectionProvider } from '@aesthetic/react';\n\n<DirectionProvider direction=\"rtl\">\n    <Component />\n</DirectionProvider>;\n")),(0,i.kt)("h3",{id:"themeprovider"},(0,i.kt)("inlineCode",{parentName:"h3"},"ThemeProvider")),(0,i.kt)("p",null,"Provides the current theme to the entire application and must be rendered at the root. Accepts the\nfollowing optional props."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Explicit name of a theme to provide. If undefined, will automatically\ndetermine the best theme.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider } from '@aesthetic/react';\n\n<ThemeProvider>\n    <App />\n</ThemeProvider>;\n")),(0,i.kt)("h3",{id:"contextualthemeprovider"},(0,i.kt)("inlineCode",{parentName:"h3"},"ContextualThemeProvider")),(0,i.kt)("p",null,"Provides a theme to a target component tree and will override the root theme. Requires the following\nprop."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Explicit name of a theme to provide.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, ContextualThemeProvider } from '@aesthetic/react';\n\n<ThemeProvider>\n    <Component />\n\n    <ContextualThemeProvider name=\"night\">\n        <Component />\n    </ContextualThemeProvider>\n</ThemeProvider>;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Renders a wrapping ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," with CSS variables under the hood.")),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"usecss"},(0,i.kt)("inlineCode",{parentName:"h3"},"useCss")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"useCss(rule: Rule, options?: RenderOptions): Rule")),(0,i.kt)("p",null,"Renders a low-level rule object and returns a class name. If passing options, be sure to memoize to\navoid unnecessary renders!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCss } from '@aesthetic/react';\n\nconst styles = { display: 'block' };\n\nexport default function Component() {\n    const options = useMemo(() => ({ deterministic: true }), []);\n    const { className, variants } = useCss(styles, options);\n\n    return <div className={className} />;\n}\n")),(0,i.kt)("h3",{id:"usedirection"},(0,i.kt)("inlineCode",{parentName:"h3"},"useDirection")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"useDirection(): Direction")),(0,i.kt)("p",null,"Returns the current direction, either ",(0,i.kt)("inlineCode",{parentName:"p"},"ltr")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"rtl"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDirection } from '@aesthetic/react';\n\nexport default function Component() {\n    const direction = useDirection();\n\n    return <div />;\n}\n")),(0,i.kt)("h3",{id:"usestyles"},(0,i.kt)("inlineCode",{parentName:"h3"},"useStyles")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"useStyles(styleSheet: LocalSheet): StyleResultGenerator")),(0,i.kt)("p",null,"Requires a local style sheet and returns a function to use for class name generation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStyles } from '@aesthetic/react';\nimport styleSheet from './styles';\n\nexport default function Component() {\n    const cx = useStyles(styleSheet);\n\n    return <div className={cx('element')} />;\n}\n")),(0,i.kt)("h3",{id:"usetheme"},(0,i.kt)("inlineCode",{parentName:"h3"},"useTheme")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"useTheme(): Theme<ElementStyles",">")),(0,i.kt)("p",null,"Returns the current theme or throws an error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTheme } from '@aesthetic/react';\n\nexport default function Component() {\n    const theme = useTheme();\n\n    return <div />;\n}\n")),(0,i.kt)("h2",{id:"hocs"},"HOCs"),(0,i.kt)("h3",{id:"withdirection"},(0,i.kt)("inlineCode",{parentName:"h3"},"withDirection")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"withDirection()(component: React.ComponentType): React.FunctionComponent")),(0,i.kt)("p",null,"Wraps a component to pass the current direction as a ",(0,i.kt)("inlineCode",{parentName:"p"},"direction")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { withDirection, WithDirectionWrappedProps } from '@aesthetic/react';\n\nfunction Component({ direction }: WithDirectionWrappedProps) {\n    return <div />;\n}\n\nexport default withDirection()(Component);\n")),(0,i.kt)("h3",{id:"withstyles"},(0,i.kt)("inlineCode",{parentName:"h3"},"withStyles")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"withStyles(styleSheet: LocalSheet)(component: React.ComponentType): React.FunctionComponent")),(0,i.kt)("p",null,"Wraps a component with a local style sheet to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"compose")," prop (renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"cx"),") to use for\nclass name generation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { withStyles, WithStylesWrappedProps } from '@aesthetic/react';\nimport styleSheet from './styles';\n\nfunction Component({ compose: cx }: WithStylesWrappedProps<'element'>) {\n    return <div className={cx('element')} />;\n}\n\nexport default withStyles(styleSheet)(Component);\n")),(0,i.kt)("h3",{id:"withtheme"},(0,i.kt)("inlineCode",{parentName:"h3"},"withTheme")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"withTheme()(component: React.ComponentType): React.FunctionComponent")),(0,i.kt)("p",null,"Wraps a component to pass the current theme as a ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { withTheme, WithThemeWrappedProps } from '@aesthetic/react';\n\nfunction Component({ theme }: WithThemeWrappedProps) {\n    return <div />;\n}\n\nexport default withTheme()(Component);\n")),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("h3",{id:"createstyled"},(0,i.kt)("inlineCode",{parentName:"h3"},"createStyled")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"createStyled(type: React.ElementType | React.ComponentType, styleSheet: ElementStyles |\nLocalSheetFactory): StyledComponent")),(0,i.kt)("p",null,"Creates and returns a styled component using the provided style sheet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createStyled } from '@aesthetic/react';\n\nconst Button = createStyled('button', (css) => ({\n    display: 'inline-flex',\n    textAlign: 'center',\n    padding: css.var('spacing-md'),\n}));\n\nconst BlockButton = createStyled(Button, {\n    display: 'flex',\n    width: '100%',\n});\n")),(0,i.kt)("h3",{id:"style"},(0,i.kt)("inlineCode",{parentName:"h3"},"style")),(0,i.kt)("p",null,"An alias for ",(0,i.kt)("a",{parentName:"p",href:"../dev/css-in-js/style-sheets/components"},"createElementStyles"),"."),(0,i.kt)("h3",{id:"styles"},(0,i.kt)("inlineCode",{parentName:"h3"},"styles")),(0,i.kt)("p",null,"An alias for ",(0,i.kt)("a",{parentName:"p",href:"../dev/css-in-js/style-sheets/components"},"createComponentStyles"),"."),(0,i.kt)("h3",{id:"styled"},(0,i.kt)("inlineCode",{parentName:"h3"},"styled")),(0,i.kt)("p",null,"An alias for ",(0,i.kt)("a",{parentName:"p",href:"#createStyled"},"createStyled"),"."),(0,i.kt)("h3",{id:"themestyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"themeStyle")),(0,i.kt)("p",null,"An alias for ",(0,i.kt)("a",{parentName:"p",href:"../dev/css-in-js/style-sheets/themes"},"createThemeStyles"),"."),(0,i.kt)("h2",{id:"server-side"},"Server-side"),(0,i.kt)("h3",{id:"rendertostyleelements"},(0,i.kt)("inlineCode",{parentName:"h3"},"renderToStyleElements")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"renderToStyleElements(engine: Engine): React.ReactNode")),(0,i.kt)("p",null,"Renders ",(0,i.kt)("a",{parentName:"p",href:"/docs/react/ssr"},"extracted styles")," into a collection of ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," elements. Elements must be\nrendered in the HTML document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const elements = renderToStyleElements(engine);\n")))}d.isMDXComponent=!0}}]);