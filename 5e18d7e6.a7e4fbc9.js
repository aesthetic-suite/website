(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||s;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),s=(n(0),n(111)),i={title:"What is a design system?"},o={unversionedId:"design-system",id:"design-system",isDocsHomePage:!1,title:"What is a design system?",description:"A design system is the single source of truth for a product or company's visual identity. It's more",source:"@site/docs/design-system.md",slug:"/design-system",permalink:"/docs/design-system",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-system.md",version:"current",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/prerequisites"},next:{title:"Create a design system",permalink:"/docs/design-system/create"}},c=[{value:"Brand",id:"brand",children:[]},{value:"Language",id:"language",children:[]},{value:"Themes",id:"themes",children:[]},{value:"Resources",id:"resources",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A design system is the single source of truth for a product or company's visual identity. It's more\nthan just a style guide, pattern library, or raw design files, it's a set of standards that promote\nconsistent, reusable, and scalable components that enable teams to design, develop, and actualize a\nproduct."),Object(s.b)("p",null,"Design systems have grown in popularity over the years, resulting in different and or\ninterchangeable terminology. With Aesthetic, we want to use specific terminology, so our design\nsystem is structured around the following 3 pillars and their offerings."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"+----------------- Design System -------------------+\n| +-------------+ +-------------+ +---------------+ |\n| | Brand       | | Language    | | Themes        | |\n| +-------------+ +-------------+ +---------------+ |\n| | Vision      | | Borders     | | Colors        | |\n| | Principles  | | Elevation   | | Color schemes | |\n| | Guidelines  | | Iconography | | Palettes      | |\n| | Practices   | | Motion      | | States        | |\n| | Terminology | | Responsive  | | Contrast      | |\n| +-------------+ | Spacing     | | Accessibility | |\n|                 | Typography  | +---------------+ |\n|                 +-------------+                   |\n+---------------------------------------------------+\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Jump to the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/design-system/config"}),"configuring a design system")," chapter for more information\non customizing these pillars.")),Object(s.b)("h2",{id:"brand"},"Brand"),Object(s.b)("p",null,'Brand is much more than a name and a logo. It\u2019s the values that define your unique identity and what\nmakes you stand out from others. This is represented by the following that ask the questions of "who\nis our target audience?", "how will they use it?", "how can we improve the experience?", so on and\nso forth.'),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Vision")," - The overarching goal you are aiming for and the reason for creating the product."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Principles")," - List of design principles that guide UI/UX product decisions."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Guidelines")," - A set of recommendations on how to apply principles to provide a positive user\nexperience."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Best practices")," - Rules for correctly utilizing the system for consumers."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Core values")," - The fundamental beliefs of the company or product that guide behavior."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Terminology")," - Definitions and meanings specific to the brand.")),Object(s.b)("h2",{id:"language"},"Language"),Object(s.b)("p",null,"The visual aspects of a design system is known as a design language. This language defines low-level\nprimitives that cascade to all parts of the system. These aspects are divided into the following\ncategories:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Borders")," - Border widths and corner rounding."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Elevation")," - Shadows and depths."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Iconography")," - ",Object(s.b)("em",{parentName:"li"},"(Coming soon)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Motion")," - ",Object(s.b)("em",{parentName:"li"},"(Coming soon)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Responsive/Adaptive")," - Breakpoints, strategies, and dynamic scaling."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Spacing")," - Spacing algorithms and multipliers."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Typography")," - Text/heading fonts, sizing, and letter spacing.")),Object(s.b)("h2",{id:"themes"},"Themes"),Object(s.b)("p",null,"While the language defines aspects and primitives, a theme defines colors, palettes, and states.\nWith this approach, a design system may have multiple visual variations through themes, while\nadhering to and inheriting the same primitives."),Object(s.b)("p",null,"Themes are represented using a tree structure, where the root of the hierarchy is the design\nlanguage/system, with each branch or leaf being a theme. Because this is a tree, themes may extend\nfrom other themes, promoting color and style reusability."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"                        +-----------+\n                        | Design    |\n                        | Language  |\n                        +-+---+---+-+\n                          |   |   |\n         +----------------+   |   +----------------+\n         v                    v                    v\n+--------+--------+  +--------+--------+  +--------+--------+\n| Day             |  | Night           |  | Print           |\n+-----------------+  +-----------------+  +-----------------+\n| Light scheme    |  | Dark scheme     |  | Light scheme    |\n| Normal contrast |  | Normal contrast |  | Normal contrast |\n+-----------------+  +--+-----------+--+  | Reduced motion  |\n                        |           |     +-----------------+\n                    +---+           +--+\n                    v                  v\n             +------+-------+  +-------+-------+\n             | Dusk         |  | Twilight      |\n             +--------------+  +---------------+\n             | Dark scheme  |  | Dark scheme   |\n             | Low contrast |  | High contrast |\n             +--------------+  +---------------+\n")),Object(s.b)("p",null,"Lastly, as seen above, each theme provides first-class accessibility and user preference support for\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"}),"color schemes"),",\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast"}),"contrast levels"),",\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"}),"reduced motion")," and\nmore."),Object(s.b)("h2",{id:"resources"},"Resources"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://designsystemchecklist.com/"}),"Design system checklist")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969"}),"Everything you need to know about design systems")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.invisionapp.com/inside-design/guide-to-design-systems/"}),"A comprehensive guide to design systems"))))}p.isMDXComponent=!0}}]);