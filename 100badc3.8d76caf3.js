(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),l=(n(0),n(155)),c={title:"API"},o={id:"packages/style/api",isDocsHomePage:!1,title:"API",description:"Renderer",source:"@site/docs/packages/style/api.md",permalink:"/website/docs/packages/style/api",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/api.md",sidebar:"docs",previous:{title:"Test utilities",permalink:"/website/docs/packages/style/testing"},next:{title:"Design system",permalink:"/website/docs/packages/system"}},i=[{value:"<code>Renderer</code>",id:"renderer",children:[{value:"<code>RenderOptions</code>",id:"renderoptions",children:[]},{value:"<code>applyRootVariables</code>",id:"applyrootvariables",children:[]},{value:"<code>renderDeclaration</code>",id:"renderdeclaration",children:[]},{value:"<code>renderRule</code>",id:"renderrule",children:[]},{value:"<code>renderRuleGrouped</code>",id:"renderrulegrouped",children:[]},{value:"<code>renderFontFace</code>",id:"renderfontface",children:[]},{value:"<code>renderImport</code>",id:"renderimport",children:[]},{value:"<code>renderKeyframes</code>",id:"renderkeyframes",children:[]}]},{value:"<code>ClientRenderer</code>",id:"clientrenderer",children:[{value:"<code>hydrateStyles</code>",id:"hydratestyles",children:[]}]},{value:"<code>ServerRenderer</code>",id:"serverrenderer",children:[{value:"<code>extractStyles</code>",id:"extractstyles",children:[]},{value:"<code>renderToStyleMarkup</code>",id:"rendertostylemarkup",children:[]}]},{value:"Testing",id:"testing",children:[{value:"<code>getRenderedStyles</code>",id:"getrenderedstyles",children:[]},{value:"<code>purgeStyles</code>",id:"purgestyles",children:[]}]}],s={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"renderer"},Object(l.b)("inlineCode",{parentName:"h2"},"Renderer")),Object(l.b)("h3",{id:"renderoptions"},Object(l.b)("inlineCode",{parentName:"h3"},"RenderOptions")),Object(l.b)("p",null,"Most render methods support the following options. Read the documentation on ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/website/docs/packages/style/options"}),"options"),"\nfor more information."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"deterministic")," (",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),") - Generate class names using a deterministic hash (",Object(l.b)("inlineCode",{parentName:"li"},"c1sjakp"),") instead\nof an auto-incremented value (",Object(l.b)("inlineCode",{parentName:"li"},"a1"),"). Useful for scenarios like unit tests. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rankings")," (",Object(l.b)("inlineCode",{parentName:"li"},"object"),") - An empty object to use for specificity ranking cache lookups. Useful for\nensuring the correct specificity when order of declarations change."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rtl")," (",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),") - Convert and swap LTR (left-to-right) based declarations to RTL\n(right-to-left). Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"selector")," (",Object(l.b)("inlineCode",{parentName:"li"},"string"),") - A CSS selector to scope the declaration(s) within. This is handled\nautomatically when using ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"#renderrule"}),"rules"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"unit")," (",Object(l.b)("inlineCode",{parentName:"li"},"string | (prop: string) => string"),") - A unit to append to numerical values. Can be a\nstring or a function that returns a string. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"px"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vendor")," (",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),") - Apply vendor prefixes to properties and values that require it. We prefix\nfeatures for browsers with >= 1% market share. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),".")),Object(l.b)("h3",{id:"applyrootvariables"},Object(l.b)("inlineCode",{parentName:"h3"},"applyRootVariables")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Renderer#applyRootVariables(vars: CSSVariables): void")),Object(l.b)("p",null,"Applies CSS variables to the document ",Object(l.b)("inlineCode",{parentName:"p"},":root"),". Variable names can be defined in camel-case or\nstandard variable format (leading ",Object(l.b)("inlineCode",{parentName:"p"},"--"),")."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"renderer.applyRootVariables({\n  '--font-color': 'black',\n  backgroundColor: 'white',\n});\n")),Object(l.b)("h3",{id:"renderdeclaration"},Object(l.b)("inlineCode",{parentName:"h3"},"renderDeclaration")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Renderer#renderDeclaration\\<K extends Property",">","(property: K, value: Properties","[K]",", options?:\nRenderOptions): ClassName")),Object(l.b)("p",null,"Renders a property-value pair, known as a CSS declaration, and returns a CSS class name. Will return\nthe same class name for the same property-value pair."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const className = renderer.renderDeclaration('display', 'block'); // -> a\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".a {\n  display: block;\n}\n")),Object(l.b)("p",null,"Declarations can also be scoped within a selector (pseudo, attribute, etc) by using the ",Object(l.b)("inlineCode",{parentName:"p"},"selector"),"\noption."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const className = renderer.renderDeclaration('display', 'block', { selector: ':hover' }); // -> b\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".b:hover {\n  display: block;\n}\n")),Object(l.b)("h3",{id:"renderrule"},Object(l.b)("inlineCode",{parentName:"h3"},"renderRule")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Renderer#renderRule(properties: Rule, options?: RenderOptions): ClassName")),Object(l.b)("p",null,"Renders a collection of property-value pairs, known as a CSS rule (or ruleset), and returns a CSS\nclass name for each declaration. A collection of declarations is known as a ",Object(l.b)("em",{parentName:"p"},"style object"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const className = renderer.renderRule({\n  display: 'block',\n  textAlign: 'center',\n  background: 'transparent',\n}); // -> a b c\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".a {\n  display: block;\n}\n.b {\n  text-align: center;\n}\n.c {\n  background: transparent;\n}\n")),Object(l.b)("p",null,"Rules can also infinitely render nested ",Object(l.b)("inlineCode",{parentName:"p"},"@media")," queries, ",Object(l.b)("inlineCode",{parentName:"p"},"@supports")," queries, pseudo classes and\nelements, attributes, combinators, and other selectors, by declaring nested ",Object(l.b)("em",{parentName:"p"},"style objects"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const className = renderer.renderRule({\n  display: 'block',\n  background: 'gray',\n\n  ':hover': {\n    background: 'black',\n  },\n\n  '@media (max-width: 300px)': {\n    display: 'inline-block',\n  },\n}); // -> a b c d\n")),Object(l.b)("h3",{id:"renderrulegrouped"},Object(l.b)("inlineCode",{parentName:"h3"},"renderRuleGrouped")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Renderer#renderRuleGrouped(properties: Rule, options?: RenderOptions): ClassName")),Object(l.b)("p",null,"Grouped rules work in a similar fashion to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"#renderrule"}),"rules"),", but instead of creating a unique\nclass per declaration (atomic), they group all declarations within a single class (non-atomic). This\nexists for situations where all styles need to be encapsulated under a single class name, for\nexample, themes."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const className = renderer.renderRuleGrouped({\n  display: 'block',\n  textAlign: 'center',\n  background: 'transparent',\n}); // -> a\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".a {\n  display: block;\n  text-align: center;\n  background: transparent;\n}\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This method should rarely be used, as it circumvents the performance and filesize gains that the\natomic cache provides.")),Object(l.b)("h3",{id:"renderfontface"},Object(l.b)("inlineCode",{parentName:"h3"},"renderFontFace")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Renderer#renderFontFace(fontFace: FontFace, options?: RenderOptions): string")),Object(l.b)("p",null,"Renders a ",Object(l.b)("em",{parentName:"p"},"font face object")," as a ",Object(l.b)("inlineCode",{parentName:"p"},"@font-face")," at-rule and returns the font family name. If the\n",Object(l.b)("inlineCode",{parentName:"p"},"fontFamily")," property is not defined, a unique collision-free one will be generated."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const fontFamily = renderer.renderFontFace({\n  fontFamily: 'Roboto',\n  fontStyle: 'normal',\n  fontWeight: 800,\n  src: 'url(\"fonts/Roboto.woff2\")',\n}); // -> Roboto\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"@font-face {\n  /* ... */\n}\n")),Object(l.b)("h3",{id:"renderimport"},Object(l.b)("inlineCode",{parentName:"h3"},"renderImport")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Renderer#renderImport(path: string): void")),Object(l.b)("p",null,"Renders a CSS file path as an ",Object(l.b)("inlineCode",{parentName:"p"},"@import")," at-rule. Does not format the path, so proper quotes and\nsyntax are required."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"renderer.renderImport(`url('./path/to/file.css')`);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"@import url('./path/to/file.css');\n")),Object(l.b)("h3",{id:"renderkeyframes"},Object(l.b)("inlineCode",{parentName:"h3"},"renderKeyframes")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Renderer#renderKeyframes(keyframes: Keyframes, name?: string, options?: RenderOptions): string")),Object(l.b)("p",null,"Renders a ",Object(l.b)("em",{parentName:"p"},"keyframes object")," as a ",Object(l.b)("inlineCode",{parentName:"p"},"@keyframes")," at-rule and returns the animation name. A custom\nanimation name may be provided as the 2rd argument (does not account for collision), otherwise a\nunique collision-free one will be generated."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const animationName = renderer.renderKeyframes({\n  from: {\n    transform: 'translateX(0%)',\n  },\n  to: {\n    transform: 'translateX(100%)',\n  },\n}); // -> kf18jh28d\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"@keyframes kf18jh28d {\n  /* ... */\n}\n")),Object(l.b)("h2",{id:"clientrenderer"},Object(l.b)("inlineCode",{parentName:"h2"},"ClientRenderer")),Object(l.b)("h3",{id:"hydratestyles"},Object(l.b)("inlineCode",{parentName:"h3"},"hydrateStyles")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"ClientRenderer#hydrateStyles(): void")),Object(l.b)("p",null,"Queries the document for all Aesthetic owned ",Object(l.b)("inlineCode",{parentName:"p"},"style")," tags (rendered by the server) and hydrates the\nrenderer's cache with applicable CSS information -- everything from class names to at-rules. ",Object(l.b)("em",{parentName:"p"},"Must\nbe")," run in the browser."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"renderer.hydrateStyles();\n")),Object(l.b)("h2",{id:"serverrenderer"},Object(l.b)("inlineCode",{parentName:"h2"},"ServerRenderer")),Object(l.b)("p",null,"Read the documentation on ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/website/docs/packages/style/ssr"}),"server-side rendering")," to utilize this correctly."),Object(l.b)("h3",{id:"extractstyles"},Object(l.b)("inlineCode",{parentName:"h3"},"extractStyles")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"ServerRenderer#extractStyles(app: React.ReactElement): React.ReactElement")),Object(l.b)("p",null,"Extracts critical CSS from the application being rendered (without layout HTML) by injecting the\ncurrent server renderer. CSS must then be ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"#rendertostylemarkup"}),"rendered to style tags"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const app = renderer.extractStyles(<App />);\n")),Object(l.b)("h3",{id:"rendertostylemarkup"},Object(l.b)("inlineCode",{parentName:"h3"},"renderToStyleMarkup")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"ServerRenderer#renderToStyleMarkup(): string")),Object(l.b)("p",null,"Renders ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"#extractstyles"}),"extracted styles")," into a collection of ",Object(l.b)("inlineCode",{parentName:"p"},"style")," tags for\n",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"#hydratestyles"}),"hydration"),". Tags must be included in the HTML response."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const markup = renderer.renderToStyleMarkup();\n")),Object(l.b)("h2",{id:"testing"},"Testing"),Object(l.b)("h3",{id:"getrenderedstyles"},Object(l.b)("inlineCode",{parentName:"h3"},"getRenderedStyles")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getRenderedStyles(type: 'global' | 'standard' | 'conditions'): string")),Object(l.b)("p",null,"Returns all rendered styles as a CSS string for the target ",Object(l.b)("inlineCode",{parentName:"p"},"<style />")," type."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"expect(getRenderedStyles('standard')).toMatchSnapshot();\n")),Object(l.b)("h3",{id:"purgestyles"},Object(l.b)("inlineCode",{parentName:"h3"},"purgeStyles")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"purgeStyles(type: 'global' | 'standard' | 'conditions'): void")),Object(l.b)("p",null,"Removes all rendered styles from the target ",Object(l.b)("inlineCode",{parentName:"p"},"<style />")," type. If the type is not provided, it will\npurge all 3 types."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"purgeStyles(); // all\npurgeStyles('global');\n")))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);