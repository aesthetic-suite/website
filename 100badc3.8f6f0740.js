(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(124)),c={title:"API"},o={unversionedId:"packages/style/api",id:"packages/style/api",isDocsHomePage:!1,title:"API",description:"Engine",source:"@site/docs/packages/style/api.md",slug:"/packages/style/api",permalink:"/docs/packages/style/api",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/api.md",version:"current",sidebar:"docs",previous:{title:"Test utilities",permalink:"/docs/packages/style/testing"},next:{title:"Design system",permalink:"/docs/packages/system"}},i=[{value:"Engine",id:"engine",children:[{value:"<code>RenderOptions</code>",id:"renderoptions",children:[]},{value:"<code>setRootVariables</code>",id:"setrootvariables",children:[]},{value:"<code>renderDeclaration</code>",id:"renderdeclaration",children:[]},{value:"<code>renderRule</code>",id:"renderrule",children:[]},{value:"<code>renderRuleGrouped</code>",id:"renderrulegrouped",children:[]},{value:"<code>renderFontFace</code>",id:"renderfontface",children:[]},{value:"<code>renderImport</code>",id:"renderimport",children:[]},{value:"<code>renderKeyframes</code>",id:"renderkeyframes",children:[]}]},{value:"Server-side",id:"server-side",children:[{value:"<code>extractStyles</code>",id:"extractstyles",children:[]},{value:"<code>renderToStyleMarkup</code>",id:"rendertostylemarkup",children:[]}]},{value:"Testing",id:"testing",children:[{value:"<code>createTestStyleEngine</code>",id:"createteststyleengine",children:[]},{value:"<code>getRenderedStyles</code>",id:"getrenderedstyles",children:[]},{value:"<code>purgeStyles</code>",id:"purgestyles",children:[]}]}],s={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"engine"},"Engine"),Object(l.b)("h3",{id:"renderoptions"},Object(l.b)("inlineCode",{parentName:"h3"},"RenderOptions")),Object(l.b)("p",null,"Most render methods support the following options. Read the documentation on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/style/options"}),"options"),"\nfor more information."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"deterministic")," (",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),") - Generate class names using a deterministic hash (",Object(l.b)("inlineCode",{parentName:"li"},"c1sjakp"),") instead\nof an auto-incremented value (",Object(l.b)("inlineCode",{parentName:"li"},"a1"),"). Useful for scenarios like unit tests. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"direction")," (",Object(l.b)("inlineCode",{parentName:"li"},"ltr | rtl"),") - Convert and swap LTR (left-to-right) based declarations to RTL\n(right-to-left)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conditions")," (",Object(l.b)("inlineCode",{parentName:"li"},"string[]"),") - List of media and feature queries to wrap the declaration with."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rankings")," (",Object(l.b)("inlineCode",{parentName:"li"},"object"),") - An empty object to use for specificity ranking cache lookups. Useful for\nensuring the correct specificity when order of declarations change."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"selectors")," (",Object(l.b)("inlineCode",{parentName:"li"},"string[]"),") - List of CSS selector to scope the declaration(s) within. This is\nhandled automatically when using ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#renderrule"}),"rules"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"unit")," (",Object(l.b)("inlineCode",{parentName:"li"},"string"),") - A unit to append to numerical values. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"px"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vendor")," (",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),") - Apply vendor prefixes to properties and values that require it. We prefix\nfeatures for browsers with >= 1% market share. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),".")),Object(l.b)("h3",{id:"setrootvariables"},Object(l.b)("inlineCode",{parentName:"h3"},"setRootVariables")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Engine#setRootVariables(vars: CSSVariables): void")),Object(l.b)("p",null,"Applies CSS variables to the document ",Object(l.b)("inlineCode",{parentName:"p"},":root"),". Variable names can be defined in camel-case or\nstandard variable format (leading ",Object(l.b)("inlineCode",{parentName:"p"},"--"),")."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"engine.setRootVariables({\n  '--font-color': 'black',\n  backgroundColor: 'white',\n});\n")),Object(l.b)("h3",{id:"renderdeclaration"},Object(l.b)("inlineCode",{parentName:"h3"},"renderDeclaration")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Engine#renderDeclaration\\<K extends Property",">","(property: K, value: Properties","[K]",", options?:\nRenderOptions): ClassName")),Object(l.b)("p",null,"Renders a property-value pair, known as a CSS declaration, and returns a CSS class name. Will return\nthe same class name for the same property-value pair."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const className = engine.renderDeclaration('display', 'block'); // -> a\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".a {\n  display: block;\n}\n")),Object(l.b)("p",null,"Declarations can also be scoped within a selector (pseudo, attribute, etc) by using the ",Object(l.b)("inlineCode",{parentName:"p"},"selectors"),"\noption."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const className = engine.renderDeclaration('display', 'block', { selectors: [':hover'] }); // -> b\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".b:hover {\n  display: block;\n}\n")),Object(l.b)("h3",{id:"renderrule"},Object(l.b)("inlineCode",{parentName:"h3"},"renderRule")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Engine#renderRule(properties: Rule, options?: RenderOptions): ClassName")),Object(l.b)("p",null,"Renders a collection of property-value pairs, known as a CSS rule (or ruleset), and returns a CSS\nclass name for each declaration. A collection of declarations is known as a ",Object(l.b)("em",{parentName:"p"},"style object"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const className = engine.renderRule({\n  display: 'block',\n  textAlign: 'center',\n  background: 'transparent',\n}); // -> a b c\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".a {\n  display: block;\n}\n.b {\n  text-align: center;\n}\n.c {\n  background: transparent;\n}\n")),Object(l.b)("p",null,"Rules can also infinitely render nested ",Object(l.b)("inlineCode",{parentName:"p"},"@media")," queries, ",Object(l.b)("inlineCode",{parentName:"p"},"@supports")," queries, pseudo classes and\nelements, attributes, combinators, and other selectors, by declaring nested ",Object(l.b)("em",{parentName:"p"},"style objects"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const className = engine.renderRule({\n  display: 'block',\n  background: 'gray',\n\n  ':hover': {\n    background: 'black',\n  },\n\n  '@media (max-width: 300px)': {\n    display: 'inline-block',\n  },\n}); // -> a b c d\n")),Object(l.b)("h3",{id:"renderrulegrouped"},Object(l.b)("inlineCode",{parentName:"h3"},"renderRuleGrouped")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Engine#renderRuleGrouped(properties: Rule, options?: RenderOptions): ClassName")),Object(l.b)("p",null,"Grouped rules work in a similar fashion to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#renderrule"}),"rules"),", but instead of creating a unique\nclass per declaration (atomic), they group all declarations within a single class (non-atomic). This\nexists for situations where all styles need to be encapsulated under a single class name, for\nexample, themes."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const className = engine.renderRuleGrouped({\n  display: 'block',\n  textAlign: 'center',\n  background: 'transparent',\n}); // -> a\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".a {\n  display: block;\n  text-align: center;\n  background: transparent;\n}\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This method should rarely be used, as it circumvents the performance and filesize gains that the\natomic cache provides.")),Object(l.b)("h3",{id:"renderfontface"},Object(l.b)("inlineCode",{parentName:"h3"},"renderFontFace")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Engine#renderFontFace(fontFace: FontFace, options?: RenderOptions): string")),Object(l.b)("p",null,"Renders a ",Object(l.b)("em",{parentName:"p"},"font face object")," as a ",Object(l.b)("inlineCode",{parentName:"p"},"@font-face")," at-rule and returns the font family name. If the\n",Object(l.b)("inlineCode",{parentName:"p"},"fontFamily")," property is not defined, a unique collision-free one will be generated."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const fontFamily = engine.renderFontFace({\n  fontFamily: 'Roboto',\n  fontStyle: 'normal',\n  fontWeight: 800,\n  src: 'url(\"fonts/Roboto.woff2\")',\n}); // -> Roboto\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"@font-face {\n  /* ... */\n}\n")),Object(l.b)("h3",{id:"renderimport"},Object(l.b)("inlineCode",{parentName:"h3"},"renderImport")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Engine#renderImport(url: string, options?: RenderOptions): void")),Object(l.b)("p",null,"Renders a CSS file path as an ",Object(l.b)("inlineCode",{parentName:"p"},"@import")," at-rule. Only accepts the URL. Use the ",Object(l.b)("inlineCode",{parentName:"p"},"conditions")," option\nto apply media queries."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"engine.renderImport('./path/to/file.css');\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"@import url('./path/to/file.css');\n")),Object(l.b)("h3",{id:"renderkeyframes"},Object(l.b)("inlineCode",{parentName:"h3"},"renderKeyframes")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Engine#renderKeyframes(keyframes: Keyframes, name?: string, options?: RenderOptions): string")),Object(l.b)("p",null,"Renders a ",Object(l.b)("em",{parentName:"p"},"keyframes object")," as a ",Object(l.b)("inlineCode",{parentName:"p"},"@keyframes")," at-rule and returns the animation name. A custom\nanimation name may be provided as the 2rd argument (does not account for collision), otherwise a\nunique collision-free one will be generated."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const animationName = engine.renderKeyframes({\n  from: {\n    transform: 'translateX(0%)',\n  },\n  to: {\n    transform: 'translateX(100%)',\n  },\n}); // -> kf18jh28d\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"@keyframes kf18jh28d {\n  /* ... */\n}\n")),Object(l.b)("h2",{id:"server-side"},"Server-side"),Object(l.b)("p",null,"Read the documentation on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/style/ssr"}),"server-side rendering")," to utilize this correctly."),Object(l.b)("h3",{id:"extractstyles"},Object(l.b)("inlineCode",{parentName:"h3"},"extractStyles")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"extractStyles(app: React.ReactElement, engine: Engine): React.ReactElement")),Object(l.b)("p",null,"Extracts critical CSS from the application being rendered (without layout HTML) by injecting the\ncurrent server engine. CSS must then be ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#rendertostylemarkup"}),"rendered to style tags"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const app = extractStyles(<App />, engine);\n")),Object(l.b)("h3",{id:"rendertostylemarkup"},Object(l.b)("inlineCode",{parentName:"h3"},"renderToStyleMarkup")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"renderToStyleMarkup(engine: Engine): string")),Object(l.b)("p",null,"Renders ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#extractstyles"}),"extracted styles")," into a collection of ",Object(l.b)("inlineCode",{parentName:"p"},"style")," tags for\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#hydratestyles"}),"hydration"),". Tags must be included in the HTML response."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const markup = renderToStyleMarkup(engine);\n")),Object(l.b)("h2",{id:"testing"},"Testing"),Object(l.b)("h3",{id:"createteststyleengine"},Object(l.b)("inlineCode",{parentName:"h3"},"createTestStyleEngine")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"createTestStyleEngine(options?: EngineOptions): Engine")),Object(l.b)("p",null,"Create a style engine pre-configured for testing."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const engine = createTestStyleEngine();\n")),Object(l.b)("h3",{id:"getrenderedstyles"},Object(l.b)("inlineCode",{parentName:"h3"},"getRenderedStyles")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getRenderedStyles(type: 'global' | 'standard' | 'conditions'): string")),Object(l.b)("p",null,"Returns all rendered styles as a CSS string for the target ",Object(l.b)("inlineCode",{parentName:"p"},"<style />")," type."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"expect(getRenderedStyles('standard')).toMatchSnapshot();\n")),Object(l.b)("h3",{id:"purgestyles"},Object(l.b)("inlineCode",{parentName:"h3"},"purgeStyles")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"purgeStyles(type: 'global' | 'standard' | 'conditions'): void")),Object(l.b)("p",null,"Removes all rendered styles from the target ",Object(l.b)("inlineCode",{parentName:"p"},"<style />")," type. If the type is not provided, it will\npurge all 3 types."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"purgeStyles(); // all\npurgeStyles('global');\n")))}b.isMDXComponent=!0}}]);