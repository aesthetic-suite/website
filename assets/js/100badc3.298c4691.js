(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[1936],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1665:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),o=["components"],i={title:"API"},s={unversionedId:"packages/style/api",id:"packages/style/api",isDocsHomePage:!1,title:"API",description:"Engine",source:"@site/docs/packages/style/api.md",sourceDirName:"packages/style",slug:"/packages/style/api",permalink:"/docs/packages/style/api",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/api.md",version:"current",frontMatter:{title:"API"},sidebar:"docs",previous:{title:"Test utilities",permalink:"/docs/packages/style/testing"},next:{title:"Design system",permalink:"/docs/packages/system"}},p=[{value:"Engine",id:"engine",children:[{value:"<code>RenderOptions</code>",id:"renderoptions",children:[]},{value:"<code>setRootVariables</code>",id:"setrootvariables",children:[]},{value:"<code>renderDeclaration</code>",id:"renderdeclaration",children:[]},{value:"<code>renderRule</code>",id:"renderrule",children:[]},{value:"<code>renderRuleGrouped</code>",id:"renderrulegrouped",children:[]},{value:"<code>renderFontFace</code>",id:"renderfontface",children:[]},{value:"<code>renderImport</code>",id:"renderimport",children:[]},{value:"<code>renderKeyframes</code>",id:"renderkeyframes",children:[]}]},{value:"ServerEngine",id:"serverengine",children:[{value:"<code>extractStyles</code>",id:"extractstyles",children:[]}]},{value:"Server-side",id:"server-side",children:[{value:"<code>renderToStyleMarkup</code>",id:"rendertostylemarkup",children:[]}]},{value:"Testing",id:"testing",children:[{value:"<code>createTestStyleEngine</code>",id:"createteststyleengine",children:[]},{value:"<code>getRenderedStyles</code>",id:"getrenderedstyles",children:[]},{value:"<code>purgeStyles</code>",id:"purgestyles",children:[]}]}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"engine"},"Engine"),(0,l.kt)("h3",{id:"renderoptions"},(0,l.kt)("inlineCode",{parentName:"h3"},"RenderOptions")),(0,l.kt)("p",null,"Most render methods support the following options. Read the documentation on ",(0,l.kt)("a",{parentName:"p",href:"/docs/packages/style/options"},"options"),"\nfor more information."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deterministic")," (",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),") - Generate class names using a deterministic hash (",(0,l.kt)("inlineCode",{parentName:"li"},"c1sjakp"),") instead\nof an auto-incremented value (",(0,l.kt)("inlineCode",{parentName:"li"},"a1"),"). Useful for scenarios like unit tests. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"direction")," (",(0,l.kt)("inlineCode",{parentName:"li"},"ltr | rtl"),") - Convert and swap LTR (left-to-right) based declarations to RTL\n(right-to-left)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"media")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") - A media query to wrap the declaration with (without ",(0,l.kt)("inlineCode",{parentName:"li"},"@media"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rankings")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),") - An empty object to use for specificity ranking cache lookups. Useful for\nensuring the correct specificity when order of declarations change."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") - A CSS selector to scope the declaration within. This is handled\nautomatically when using ",(0,l.kt)("a",{parentName:"li",href:"#renderrule"},"rules"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"supports")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") - A feature query to wrap the declaration with (without ",(0,l.kt)("inlineCode",{parentName:"li"},"@supports"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unit")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") - A unit to append to numerical values. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"px"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vendor")," (",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),") - Apply vendor prefixes to properties and values that require it. We prefix\nfeatures for browsers with >= 1% market share. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h3",{id:"setrootvariables"},(0,l.kt)("inlineCode",{parentName:"h3"},"setRootVariables")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Engine#setRootVariables(vars: CSSVariables): void")),(0,l.kt)("p",null,"Applies CSS variables to the document ",(0,l.kt)("inlineCode",{parentName:"p"},":root"),". Variable names can be defined in camel-case or\nstandard variable format (leading ",(0,l.kt)("inlineCode",{parentName:"p"},"--"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"engine.setRootVariables({\n    '--font-color': 'black',\n    backgroundColor: 'white',\n});\n")),(0,l.kt)("h3",{id:"renderdeclaration"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderDeclaration")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Engine#renderDeclaration\\<K extends Property",">","(property: K, value: Properties","[K]",", options?:\nRenderOptions): ClassName")),(0,l.kt)("p",null,"Renders a property-value pair, known as a CSS declaration, and returns a CSS class name. Will return\nthe same class name for the same property-value pair."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const className = engine.renderDeclaration('display', 'block'); // -> a\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".a {\n    display: block;\n}\n")),(0,l.kt)("p",null,"Declarations can also be scoped within a selector (pseudo, attribute, etc) by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"selector"),"\noption."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const className = engine.renderDeclaration('display', 'block', { selector: ':hover' }); // -> b\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".b:hover {\n    display: block;\n}\n")),(0,l.kt)("h3",{id:"renderrule"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderRule")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Engine#renderRule(properties: Rule, options?: RenderOptions): ClassName")),(0,l.kt)("p",null,"Renders a collection of property-value pairs, known as a CSS rule (or ruleset), and returns a CSS\nclass name for each declaration. A collection of declarations is known as a ",(0,l.kt)("em",{parentName:"p"},"style object"),". It\nreturns an object with a ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," (the class name), and ",(0,l.kt)("inlineCode",{parentName:"p"},"variants")," (array of class names)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const className = engine.renderRule({\n    display: 'block',\n    textAlign: 'center',\n    background: 'transparent',\n});\n\nclassName.result; // -> a b c\nclassName.variants; // []\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".a {\n    display: block;\n}\n.b {\n    text-align: center;\n}\n.c {\n    background: transparent;\n}\n")),(0,l.kt)("p",null,"Rules can also infinitely render nested ",(0,l.kt)("inlineCode",{parentName:"p"},"@media")," queries, ",(0,l.kt)("inlineCode",{parentName:"p"},"@supports")," queries, pseudo classes and\nelements, attributes, combinators, and other selectors, by declaring nested ",(0,l.kt)("em",{parentName:"p"},"style objects"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const className = engine.renderRule({\n    display: 'block',\n    background: 'gray',\n\n    ':hover': {\n        background: 'black',\n    },\n\n    '@media': {\n        '(max-width: 300px)': {\n            display: 'inline-block',\n        },\n    },\n});\n")),(0,l.kt)("h3",{id:"renderrulegrouped"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderRuleGrouped")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Engine#renderRuleGrouped(properties: Rule, options?: RenderOptions): ClassName")),(0,l.kt)("p",null,"Grouped rules work in a similar fashion to ",(0,l.kt)("a",{parentName:"p",href:"#renderrule"},"rules"),", but instead of creating a unique\nclass per declaration (atomic), they group all declarations within a single class (non-atomic). This\nexists for situations where all styles need to be encapsulated under a single class name, for\nexample, themes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const className = engine.renderRuleGrouped({\n    display: 'block',\n    textAlign: 'center',\n    background: 'transparent',\n});\n\nclassName.result; // -> a\nclassName.variants; // []\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".a {\n    display: block;\n    text-align: center;\n    background: transparent;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This method should rarely be used, as it circumvents the performance and filesize gains that the\natomic cache provides.")),(0,l.kt)("h3",{id:"renderfontface"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderFontFace")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Engine#renderFontFace(fontFace: FontFace, options?: RenderOptions): string")),(0,l.kt)("p",null,"Renders a ",(0,l.kt)("em",{parentName:"p"},"font face object")," as a ",(0,l.kt)("inlineCode",{parentName:"p"},"@font-face")," at-rule and returns the font family name. If the\n",(0,l.kt)("inlineCode",{parentName:"p"},"fontFamily")," property is not defined, a unique collision-free one will be generated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const fontFamily = engine.renderFontFace({\n    fontFamily: 'Roboto',\n    fontStyle: 'normal',\n    fontWeight: 800,\n    src: 'url(\"fonts/Roboto.woff2\")',\n}); // -> Roboto\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"@font-face {\n    /* ... */\n}\n")),(0,l.kt)("h3",{id:"renderimport"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderImport")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Engine#renderImport(url: string, options?: RenderOptions): void")),(0,l.kt)("p",null,"Renders a CSS file path as an ",(0,l.kt)("inlineCode",{parentName:"p"},"@import")," at-rule. Only accepts the URL. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"conditions")," option\nto apply media queries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"engine.renderImport({ path: './path/to/file.css', url: true });\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"@import url('./path/to/file.css');\n")),(0,l.kt)("h3",{id:"renderkeyframes"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderKeyframes")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Engine#renderKeyframes(keyframes: Keyframes, name?: string, options?: RenderOptions): string")),(0,l.kt)("p",null,"Renders a ",(0,l.kt)("em",{parentName:"p"},"keyframes object")," as a ",(0,l.kt)("inlineCode",{parentName:"p"},"@keyframes")," at-rule and returns the animation name. A custom\nanimation name may be provided as the 2rd argument (does not account for collision), otherwise a\nunique collision-free one will be generated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const animationName = engine.renderKeyframes({\n    from: {\n        transform: 'translateX(0%)',\n    },\n    to: {\n        transform: 'translateX(100%)',\n    },\n}); // -> kf18jh28d\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes kf18jh28d {\n    /* ... */\n}\n")),(0,l.kt)("h2",{id:"serverengine"},"ServerEngine"),(0,l.kt)("h3",{id:"extractstyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"extractStyles")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"extractStyles<T",">","(app: T): T")),(0,l.kt)("p",null,"Extracts critical CSS from the application being rendered (without layout HTML) by injecting the\ncurrent server engine. CSS must then be ",(0,l.kt)("a",{parentName:"p",href:"#rendertostylemarkup"},"rendered to style tags"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const app = engine.extractStyles(<App />);\n")),(0,l.kt)("p",null,"Read the documentation on ",(0,l.kt)("a",{parentName:"p",href:"/docs/packages/style/ssr"},"server-side rendering")," to utilize this correctly."),(0,l.kt)("h2",{id:"server-side"},"Server-side"),(0,l.kt)("h3",{id:"rendertostylemarkup"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderToStyleMarkup")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"renderToStyleMarkup(engine: Engine): string")),(0,l.kt)("p",null,"Renders ",(0,l.kt)("a",{parentName:"p",href:"#extractstyles"},"extracted styles")," into a collection of ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," tags for\n",(0,l.kt)("a",{parentName:"p",href:"#hydratestyles"},"hydration"),". Tags must be included in the HTML response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const markup = renderToStyleMarkup(engine);\n")),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("h3",{id:"createteststyleengine"},(0,l.kt)("inlineCode",{parentName:"h3"},"createTestStyleEngine")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"createTestStyleEngine(options?: EngineOptions): Engine")),(0,l.kt)("p",null,"Create a style engine pre-configured for testing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const engine = createTestStyleEngine();\n")),(0,l.kt)("h3",{id:"getrenderedstyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"getRenderedStyles")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getRenderedStyles(type: 'global' | 'standard' | 'conditions'): string")),(0,l.kt)("p",null,"Returns all rendered styles as a CSS string for the target ",(0,l.kt)("inlineCode",{parentName:"p"},"<style />")," type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"expect(getRenderedStyles('standard')).toMatchSnapshot();\n")),(0,l.kt)("h3",{id:"purgestyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"purgeStyles")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"purgeStyles(type: 'global' | 'standard' | 'conditions'): void")),(0,l.kt)("p",null,"Removes all rendered styles from the target ",(0,l.kt)("inlineCode",{parentName:"p"},"<style />")," type. If the type is not provided, it will\npurge all 3 types."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"purgeStyles(); // all\npurgeStyles('global');\n")))}d.isMDXComponent=!0}}]);