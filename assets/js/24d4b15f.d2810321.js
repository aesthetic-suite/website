(self.webpackChunkaesthetic_website=self.webpackChunkaesthetic_website||[]).push([[1178],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9370:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],l={title:"Rendering concepts"},i={unversionedId:"packages/style/concepts",id:"packages/style/concepts",isDocsHomePage:!1,title:"Rendering concepts",description:"To understand Aesthetic and the rendering process, there are a few key concepts around styling and",source:"@site/docs/packages/style/concepts.md",sourceDirName:"packages/style",slug:"/packages/style/concepts",permalink:"/docs/packages/style/concepts",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/concepts.md",version:"current",frontMatter:{title:"Rendering concepts"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/packages/style/setup"},next:{title:"Render options",permalink:"/docs/packages/style/options"}},p=[{value:"Styles",id:"styles",children:[{value:"Rules",id:"rules",children:[]},{value:"Media queries",id:"media-queries",children:[]},{value:"Feature queries",id:"feature-queries",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Font faces",id:"font-faces",children:[]},{value:"Imports",id:"imports",children:[]},{value:"Keyframes",id:"keyframes",children:[]}]},{value:"Caveats",id:"caveats",children:[{value:"Properly quoted values",id:"properly-quoted-values",children:[]},{value:"Mixing of shorthand and longhand properties",id:"mixing-of-shorthand-and-longhand-properties",children:[]}]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To understand Aesthetic and the rendering process, there are a few key concepts around styling and\nits structure. All of the concepts below assume a web based CSS-in-JS integration is being used."),(0,o.kt)("h2",{id:"styles"},"Styles"),(0,o.kt)("p",null,"All styling is defined through ",(0,o.kt)("em",{parentName:"p"},"style objects"),", which are plain JavaScript objects that map CSS\nproperties to values, also known as a\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_declarations"},"CSS declaration"),".\nProperties can be defined in either camel-case or kebab-case."),(0,o.kt)("p",null,"There are multiple subtypes of style objects that provide additional functionality, and can be found\nbelow."),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_rulesets"},"rule (or ruleset)")," is a\ncollection of multiple CSS declarations, with optional support for infinitely nested rules and\nselectors, and are known as ",(0,o.kt)("em",{parentName:"p"},"rule objects"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n    color: 'white',\n    display: 'block',\n    textAlign: 'left',\n    fontSize: 16,\n    padding: 0,\n    margin: 0,\n};\n")),(0,o.kt)("p",null,"Rules can be rendered with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/style/api#renderrule"},"renderRule()")," method, while individual\ndeclarations can be rendered with ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/style/api#renderdeclaration"},"renderDeclaration()"),"."),(0,o.kt)("h4",{id:"pseudo-selectors"},"Pseudo selectors"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"},"Pseudo classes and pseudo elements"),"\nare a highly important features of CSS, and as such, are supported in ",(0,o.kt)("em",{parentName:"p"},"rule objects")," by defining\nnested ",(0,o.kt)("em",{parentName:"p"},"rule objects"),", where the key is the selector in question."),(0,o.kt)("p",null,"For pseudos to be recognized, they must start with ",(0,o.kt)("inlineCode",{parentName:"p"},":")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"::"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n    color: 'white',\n\n    // Basic pseudo\n    ':disabled': {\n        color: 'gray',\n    },\n\n    // Advanced pseudo\n    '@selectors': {\n        ':not(:disabled)': {\n            color: 'black',\n        },\n    },\n\n    // Element\n    '::before': {\n        content: '\" \"',\n    },\n};\n")),(0,o.kt)("h4",{id:"attribute-selectors"},"Attribute selectors"),(0,o.kt)("p",null,"Like pseudos,\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors"},"attribute selectors"),"\nare an important feature and are defined in a similar fashion, but must start with ",(0,o.kt)("inlineCode",{parentName:"p"},"["),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n    color: 'white',\n\n    // Basic attribute\n    '[disabled]': {\n        color: 'gray',\n    },\n\n    // Advanced attribute\n    '@selectors': {\n        '[href~=\"special\"]': {\n            color: 'red',\n        },\n    },\n};\n")),(0,o.kt)("h4",{id:"combinator-selectors"},"Combinator selectors"),(0,o.kt)("p",null,"And finally, all\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"combinator selectors"),", excluding\ndescendent, are supported in ",(0,o.kt)("inlineCode",{parentName:"p"},"@selectors"),". Nested rules must start with ",(0,o.kt)("inlineCode",{parentName:"p"},">"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"~"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"|"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n    margin: 0,\n\n    '@selectors': {\n        // Child\n        '> li': {\n            listStyle: 'none',\n        },\n\n        // Sibling\n        '~ ul': {\n            marginTop: 10,\n        },\n\n        // Adjacent\n        '+ p': {\n            margin: 0,\n        },\n\n        // Column\n        '|| td': {\n            textAlign: 'center',\n        },\n    },\n};\n")),(0,o.kt)("h3",{id:"media-queries"},"Media queries"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"},"Media queries"),"\nare useful when you want to render styles based on device viewport. They are represented by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@media")," at-rule and can be defined using nested rules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n    display: 'block',\n\n    '@media': {\n        '(max-width: 720px)': {\n            display: 'inline-block',\n        },\n\n        print: {\n            border: 'none',\n            background: 'transparent',\n        },\n    },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Media queries can nest itself and other selectors.")),(0,o.kt)("h3",{id:"feature-queries"},"Feature queries"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries"},"Feature queries"),"\nare useful when you want to render styles based on features that are currently supported by the\nbrowser. They are represented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@supports")," at-rule and can be defined using nested rules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n    display: 'block',\n\n    '@supports': {\n        '(display: flex)': {\n            display: 'flex',\n        },\n    },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Feature queries can nest itself and other selectors.")),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("p",null,"Variables, also known as\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"custom properties"),",\nare a feature that allows for specific values to be reused throughout the CSS document. CSS\nvariables defined within a rule are scoped to the element in which the class is applied to, not the\ndocument root."),(0,o.kt)("p",null,"Variables can be defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"@variables"),", with or without the leading ",(0,o.kt)("inlineCode",{parentName:"p"},"--"),". Furthermore, values ",(0,o.kt)("em",{parentName:"p"},"are\nnot")," processed like properties are, so any suffixes (like ",(0,o.kt)("inlineCode",{parentName:"p"},"px"),") will need to be explicitly defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n    fontSize: 'var(--font-size)',\n\n    '@variables': {\n        '--font-size': '16px',\n    },\n};\n")),(0,o.kt)("p",null,"Root level variables can be defined with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/style/api#setrootvariables"},"setRootVariables()")," method."),(0,o.kt)("h3",{id:"font-faces"},"Font faces"),(0,o.kt)("p",null,"Font faces allow for ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"},"custom fonts")," to\nbe used, are represented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@font-face")," at-rule, and are defined using a ",(0,o.kt)("em",{parentName:"p"},"font face object"),".\nFont face objects only support a subset of properties, primarily font related ones, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),"\nproperty, which points to a source font file (relative or absolute to the document root)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FontFace } from '@aesthetic/style';\n\nconst fontFace: FontFace = {\n    fontFamily: '\"Open Sans\"',\n    fontStyle: 'normal',\n    fontWeight: 800,\n    src: 'url(\"fonts/OpenSans-Bold.woff2\")',\n};\n")),(0,o.kt)("p",null,"Font faces can be rendered with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/style/api#renderfontface"},"renderFontFace()")," method."),(0,o.kt)("h3",{id:"imports"},"Imports"),(0,o.kt)("p",null,"Imports are used to include external\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@import"},"CSS style sheets"),", not CSS-in-JS, with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"@import")," at-rule. Aesthetic abstracts all the complexity away, so only the URL should be\nprovided."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const path = 'path/to/test.css';\n")),(0,o.kt)("p",null,"Imports can be rendered with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/style/api#renderimport"},"renderImport()")," method."),(0,o.kt)("h3",{id:"keyframes"},"Keyframes"),(0,o.kt)("p",null,"Keyframes are ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"},"CSS animation sequences"),"\nthat are represented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@keyframes")," at-rule, and are defined using a ",(0,o.kt)("em",{parentName:"p"},"keyframes object"),". A\nkeyframes object maps frames to ",(0,o.kt)("a",{parentName:"p",href:"#rules"},"rules"),", where each frame is one of ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),", or a\npercentage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Keyframes } from '@aesthetic/style';\n\nconst keyframes: Keyframes = {\n    from: { marginTop: 50 },\n    '50%': { marginTop: 150 },\n    to: { marginTop: 100 },\n};\n")),(0,o.kt)("p",null,"Keyframes can be rendered with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/style/api#renderkeyframes"},"renderKeyframes()")," method."),(0,o.kt)("h2",{id:"caveats"},"Caveats"),(0,o.kt)("p",null,"Because both atomic CSS ",(0,o.kt)("em",{parentName:"p"},"and")," CSS-in-JS is utilized, there are a few caveats to be aware of while\nusing this library."),(0,o.kt)("h3",{id:"properly-quoted-values"},"Properly quoted values"),(0,o.kt)("p",null,"Any property value that requires quotes must be properly quoted or escaped on the JavaScript side.\nThis primarily applies to the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," property and ",(0,o.kt)("inlineCode",{parentName:"p"},"@import")," at-rule, but is useful in other\ncontexts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Invalid\nconst rule: Rule = {\n    content: 'Hello',\n};\n\n// Valid\nconst rule: Rule = {\n    content: '\"Hello\"',\n};\n")),(0,o.kt)("h3",{id:"mixing-of-shorthand-and-longhand-properties"},"Mixing of shorthand and longhand properties"),(0,o.kt)("p",null,"One of the biggest disadvantages to atomic CSS is that\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"},"shorthand properties")," make\nit incredibly difficult to apply styles correctly. Since a shorthand property is the combination of\nmultiple properties, but is represented as a single class name, how can we ensure the correct\nspecificity order? Take the following for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const rule: Rule = {\n    border: '1px solid black',\n    borderColor: 'white',\n};\n")),(0,o.kt)("p",null,"If this example was rendered as-is, the border color would be white, since ",(0,o.kt)("inlineCode",{parentName:"p"},"borderColor")," is ordered\nafter ",(0,o.kt)("inlineCode",{parentName:"p"},"border"),". However, when used in an application with hundreds of rules, we can't ensure this\norder, as ",(0,o.kt)("inlineCode",{parentName:"p"},"borderColor")," may have been rendered much earlier than ",(0,o.kt)("inlineCode",{parentName:"p"},"border"),", or vice-versa. Now\ncompound this problem with the other properties involved, like ",(0,o.kt)("inlineCode",{parentName:"p"},"borderStyle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"borderWidth"),".\nWhich should take precedence? And how?"),(0,o.kt)("p",null,"To work around this, we suggest ",(0,o.kt)("em",{parentName:"p"},"always")," using the longhand properties, since it's far more\nexplicit. This suggestion does require more code and overhead, but is better in the long-term for\nmaintainability."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const rule: Rule = {\n    borderWidth: 1,\n    borderStyle: 'solid',\n    borderColor: 'white',\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the future, we will provide an ESLint rule to help mitigate this issue.")))}c.isMDXComponent=!0}}]);