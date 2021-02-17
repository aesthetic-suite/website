(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(127)),s={title:"Rendering concepts"},l={unversionedId:"packages/style/concepts",id:"packages/style/concepts",isDocsHomePage:!1,title:"Rendering concepts",description:"To understand Aesthetic and the rendering process, there are a few key concepts around styling and",source:"@site/docs/packages/style/concepts.md",slug:"/packages/style/concepts",permalink:"/docs/packages/style/concepts",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/packages/style/concepts.md",version:"current",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/packages/style/setup"},next:{title:"Render options",permalink:"/docs/packages/style/options"}},i=[{value:"Styles",id:"styles",children:[{value:"Rules",id:"rules",children:[]},{value:"Font faces",id:"font-faces",children:[]},{value:"Imports",id:"imports",children:[]},{value:"Keyframes",id:"keyframes",children:[]}]},{value:"Caveats",id:"caveats",children:[{value:"Properly quoted values",id:"properly-quoted-values",children:[]},{value:"Mixing of shorthand and longhand properties",id:"mixing-of-shorthand-and-longhand-properties",children:[]}]}],c={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To understand Aesthetic and the rendering process, there are a few key concepts around styling and\nits structure. All of the concepts below assume a web based CSS-in-JS integration is being used."),Object(o.b)("h2",{id:"styles"},"Styles"),Object(o.b)("p",null,"All styling is defined through ",Object(o.b)("em",{parentName:"p"},"style objects"),", which are plain JavaScript objects that map CSS\nproperties to values, also known as a\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_declarations"},"CSS declaration"),".\nProperties can be defined in either camel-case or kebab-case."),Object(o.b)("p",null,"There are multiple subtypes of style objects that provide additional functionality, and can be found\nbelow."),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_rulesets"},"rule (or ruleset)")," is a\ncollection of multiple CSS declarations, with optional support for infinitely nested rules and\nselectors, and are known as ",Object(o.b)("em",{parentName:"p"},"rule objects"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n  color: 'white',\n  display: 'block',\n  textAlign: 'left',\n  fontSize: 16,\n  padding: 0,\n  margin: 0,\n};\n")),Object(o.b)("p",null,"Rules can be rendered with the ",Object(o.b)("a",{parentName:"p",href:"/docs/packages/style/api#renderrule"},"renderRule()")," method, while individual\ndeclarations can be rendered with ",Object(o.b)("a",{parentName:"p",href:"/docs/packages/style/api#renderdeclaration"},"renderDeclaration()"),"."),Object(o.b)("h4",{id:"pseudo-selectors"},"Pseudo selectors"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"},"Pseudo classes and pseudo elements"),"\nare a highly important features of CSS, and as such, are supported in ",Object(o.b)("em",{parentName:"p"},"rule objects")," by defining\nnested ",Object(o.b)("em",{parentName:"p"},"rule objects"),", where the key is the selector in question."),Object(o.b)("p",null,"For pseudos to be recognized, they must start with ",Object(o.b)("inlineCode",{parentName:"p"},":")," or ",Object(o.b)("inlineCode",{parentName:"p"},"::"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n  color: 'white',\n\n  // Basic pseudo\n  ':disabled': {\n    color: 'gray',\n  },\n\n  // Advanced pseudo\n  ':not(:disabled)': {\n    color: 'black',\n  },\n\n  // Element\n  '::before': {\n    content: '\" \"',\n  },\n};\n")),Object(o.b)("h4",{id:"attribute-selectors"},"Attribute selectors"),Object(o.b)("p",null,"Like pseudos,\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors"},"attribute selectors"),"\nare an important feature and are defined in a similar fashion, but must start with ",Object(o.b)("inlineCode",{parentName:"p"},"["),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n  color: 'white',\n\n  // Basic attribute\n  '[disabled]': {\n    color: 'gray',\n  },\n\n  // Advanced attribute\n  '[href~=\"special\"]': {\n    color: 'red',\n  },\n};\n")),Object(o.b)("h4",{id:"combinator-selectors"},"Combinator selectors"),Object(o.b)("p",null,"And finally, all\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"combinator selectors"),", excluding\ndescendent, are supported. Nested rules must start with ",Object(o.b)("inlineCode",{parentName:"p"},">"),", ",Object(o.b)("inlineCode",{parentName:"p"},"~"),", ",Object(o.b)("inlineCode",{parentName:"p"},"+"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"|"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n  margin: 0,\n\n  // Child\n  '> li': {\n    listStyle: 'none',\n  },\n\n  // Sibling\n  '~ ul': {\n    marginTop: 10,\n  },\n\n  // Adjacent\n  '+ p': {\n    margin: 0,\n  },\n\n  // Column\n  '|| td': {\n    textAlign: 'center',\n  },\n};\n")),Object(o.b)("h4",{id:"media-queries"},"Media queries"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"},"Media queries"),"\nare useful when you want to render styles based on device viewport. They are represented by the\n",Object(o.b)("inlineCode",{parentName:"p"},"@media")," at-rule and can be defined using nested rules."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n  display: 'block',\n\n  '@media (max-width: 720px)': {\n    display: 'inline-block',\n  },\n\n  '@media print': {\n    border: 'none',\n    background: 'transparent',\n  },\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Media queries can nest itself and other selectors.")),Object(o.b)("h4",{id:"feature-queries"},"Feature queries"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries"},"Feature queries"),"\nare useful when you want to render styles based on features that are currently supported by the\nbrowser. They are represented by the ",Object(o.b)("inlineCode",{parentName:"p"},"@supports")," at-rule and can be defined using nested rules."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n  display: 'block',\n\n  '@supports (display: flex)': {\n    display: 'flex',\n  },\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Feature queries can nest itself and other selectors.")),Object(o.b)("h4",{id:"variables"},"Variables"),Object(o.b)("p",null,"Variables, also known as\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"custom properties"),",\nare a feature that allows for specific values to be reused throughout the CSS document. CSS\nvariables defined within a rule are scoped to the element in which the class is applied to, not the\ndocument root."),Object(o.b)("p",null,"Variables can be defined with standard kebab-case format and leading ",Object(o.b)("inlineCode",{parentName:"p"},"--"),". Furthermore, values ",Object(o.b)("em",{parentName:"p"},"are\nnot")," processed like properties are, so any suffixes (like ",Object(o.b)("inlineCode",{parentName:"p"},"px"),") will need to be explicitly defined."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Rule } from '@aesthetic/style';\n\nconst rule: Rule = {\n  '--font-size': '16px',\n  fontSize: 'var(--font-size)',\n};\n")),Object(o.b)("p",null,"Root level variables can be defined with the ",Object(o.b)("a",{parentName:"p",href:"/docs/packages/style/api#setrootvariables"},"setRootVariables()")," method."),Object(o.b)("h3",{id:"font-faces"},"Font faces"),Object(o.b)("p",null,"Font faces allow for ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"},"custom fonts")," to\nbe used, are represented by the ",Object(o.b)("inlineCode",{parentName:"p"},"@font-face")," at-rule, and are defined using a ",Object(o.b)("em",{parentName:"p"},"font face object"),".\nFont face objects only support a subset of properties, primarily font related ones, and the ",Object(o.b)("inlineCode",{parentName:"p"},"src"),"\nproperty, which points to a source font file (relative or absolute to the document root)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { FontFace } from '@aesthetic/style';\n\nconst fontFace: FontFace = {\n  fontFamily: '\"Open Sans\"',\n  fontStyle: 'normal',\n  fontWeight: 800,\n  src: 'url(\"fonts/OpenSans-Bold.woff2\")',\n};\n")),Object(o.b)("p",null,"Font faces can be rendered with the ",Object(o.b)("a",{parentName:"p",href:"/docs/packages/style/api#renderfontface"},"renderFontFace()")," method."),Object(o.b)("h3",{id:"imports"},"Imports"),Object(o.b)("p",null,"Imports are used to include external\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@import"},"CSS style sheets"),", not CSS-in-JS, with\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"@import")," at-rule. Aesthetic abstracts all the complexity away, so only the URL should be\nprovided."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const path = 'path/to/test.css';\n")),Object(o.b)("p",null,"Imports can be rendered with the ",Object(o.b)("a",{parentName:"p",href:"/docs/packages/style/api#renderimport"},"renderImport()")," method."),Object(o.b)("h3",{id:"keyframes"},"Keyframes"),Object(o.b)("p",null,"Keyframes are ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"},"CSS animation sequences"),"\nthat are represented by the ",Object(o.b)("inlineCode",{parentName:"p"},"@keyframes")," at-rule, and are defined using a ",Object(o.b)("em",{parentName:"p"},"keyframes object"),". A\nkeyframes object maps frames to ",Object(o.b)("a",{parentName:"p",href:"#rules"},"rules"),", where each frame is one of ",Object(o.b)("inlineCode",{parentName:"p"},"to"),", ",Object(o.b)("inlineCode",{parentName:"p"},"from"),", or a\npercentage."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Keyframes } from '@aesthetic/style';\n\nconst keyframes: Keyframes = {\n  from: { marginTop: 50 },\n  '50%': { marginTop: 150 },\n  to: { marginTop: 100 },\n};\n")),Object(o.b)("p",null,"Keyframes can be rendered with the ",Object(o.b)("a",{parentName:"p",href:"/docs/packages/style/api#renderkeyframes"},"renderKeyframes()")," method."),Object(o.b)("h2",{id:"caveats"},"Caveats"),Object(o.b)("p",null,"Because both atomic CSS ",Object(o.b)("em",{parentName:"p"},"and")," CSS-in-JS is utilized, there are a few caveats to be aware of while\nusing this library."),Object(o.b)("h3",{id:"properly-quoted-values"},"Properly quoted values"),Object(o.b)("p",null,"Any property value that requires quotes must be properly quoted or escaped on the JavaScript side.\nThis primarily applies to the ",Object(o.b)("inlineCode",{parentName:"p"},"content")," property and ",Object(o.b)("inlineCode",{parentName:"p"},"@import")," at-rule, but is useful in other\ncontexts."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// Invalid\nconst rule: Rule = {\n  content: 'Hello',\n};\n\n// Valid\nconst rule: Rule = {\n  content: '\"Hello\"',\n};\n")),Object(o.b)("h3",{id:"mixing-of-shorthand-and-longhand-properties"},"Mixing of shorthand and longhand properties"),Object(o.b)("p",null,"One of the biggest disadvantages to atomic CSS is that\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"},"shorthand properties")," make\nit incredibly difficult to apply styles correctly. Since a shorthand property is the combination of\nmultiple properties, but is represented as a single class name, how can we ensure the correct\nspecificity order? Take the following for example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const rule: Rule = {\n  border: '1px solid black',\n  borderColor: 'white',\n};\n")),Object(o.b)("p",null,"If this example was rendered as-is, the border color would be white, since ",Object(o.b)("inlineCode",{parentName:"p"},"borderColor")," is ordered\nafter ",Object(o.b)("inlineCode",{parentName:"p"},"border"),". However, when used in an application with hundreds of rules, we can't ensure this\norder, as ",Object(o.b)("inlineCode",{parentName:"p"},"borderColor")," may have been rendered much earlier than ",Object(o.b)("inlineCode",{parentName:"p"},"border"),", or vice-versa. Now\ncompound this problem with the other properties involved, like ",Object(o.b)("inlineCode",{parentName:"p"},"borderStyle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"borderWidth"),".\nWhich should take precedence? And how?"),Object(o.b)("p",null,"To work around this, we suggest ",Object(o.b)("em",{parentName:"p"},"always")," using the longhand properties, since it's far more\nexplicit. This suggestion does require more code and overhead, but is better in the long-term for\nmaintainability."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const rule: Rule = {\n  borderWidth: 1,\n  borderStyle: 'solid',\n  borderColor: 'white',\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In the future, we will provide an ESLint rule to help mitigate this issue.")))}p.isMDXComponent=!0}}]);