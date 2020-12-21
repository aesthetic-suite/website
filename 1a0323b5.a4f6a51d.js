(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),h=a,p=d["".concat(i,".").concat(h)]||d[h]||m[h]||l;return n?r.a.createElement(p,o(o({ref:t},c),{},{components:n})):r.a.createElement(p,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(124)),i={title:"themes.yaml"},o={unversionedId:"design-system/config/themes",id:"design-system/config/themes",isDocsHomePage:!1,title:"themes.yaml",description:"Platforms: Android, iOS, Web",source:"@site/docs/design-system/config/themes.md",slug:"/design-system/config/themes",permalink:"/docs/design-system/config/themes",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-system/config/themes.md",version:"current",sidebar:"docs",previous:{title:"language.yaml",permalink:"/docs/design-system/config/language"},next:{title:"What are design tokens?",permalink:"/docs/design-tokens"}},s=[{value:"Color scheme",id:"color-scheme",children:[]},{value:"Color shades",id:"color-shades",children:[]},{value:"Palettes and states",id:"palettes-and-states",children:[]},{value:"Contrast levels",id:"contrast-levels",children:[]},{value:"Extending themes",id:"extending-themes",children:[]},{value:"Constraints",id:"constraints",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Platforms: Android, iOS, Web")),Object(l.b)("p",null,"Themes are configured with a ",Object(l.b)("inlineCode",{parentName:"p"},"themes")," map in the ",Object(l.b)("inlineCode",{parentName:"p"},".aesthetic/<name>/themes.yaml")," file, where the key\nis the theme name, and the value is a configuration object of colors, palettes, and additional\nsettings."),Object(l.b)("h2",{id:"color-scheme"},"Color scheme"),Object(l.b)("p",null,"One such setting is ",Object(l.b)("inlineCode",{parentName:"p"},"scheme"),', which requires either "light" or "dark", and is utilized in color\nscheme preference detection. This allows for the automatic detection of light or dark modes for a\nuser.'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'}),"themes:\n  default:\n    scheme: light\n")),Object(l.b)("h2",{id:"color-shades"},"Color shades"),Object(l.b)("p",null,"For every ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/design-system/config/language#colors"}),"color")," that's been defined in the design language, an associated\nentry must exist within each theme under ",Object(l.b)("inlineCode",{parentName:"p"},"colors.<name>"),". A color supports a range of 10 hexcode\nvalues (",Object(l.b)("inlineCode",{parentName:"p"},"00")," - ",Object(l.b)("inlineCode",{parentName:"p"},"90"),") known as ",Object(l.b)("em",{parentName:"p"},"shades"),"."),Object(l.b)("p",null,"In a light color scheme, the ",Object(l.b)("inlineCode",{parentName:"p"},"00")," shade is the lightest color, while ",Object(l.b)("inlineCode",{parentName:"p"},"90")," is the darkest. This is\nreversed for dark color schemes, where ",Object(l.b)("inlineCode",{parentName:"p"},"00")," is darkest, and ",Object(l.b)("inlineCode",{parentName:"p"},"90")," is lightest. In both schemes, the\n",Object(l.b)("inlineCode",{parentName:"p"},"40"),' shade is the base "common" shade.'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'}),"themes:\n  default:\n    scheme: light\n    colors:\n      blue:\n        00: '#E3F2FD' # Lightest\n        10: '#BBDEFB'\n        20: '#90CAF9'\n        30: '#64B5F6'\n        40: '#42A5F5' # Base\n        50: '#2196F3'\n        60: '#1E88E5'\n        70: '#1976D2'\n        80: '#1565C0'\n        90: '#0D47A1' # Darkest\n")),Object(l.b)("h2",{id:"palettes-and-states"},"Palettes and states"),Object(l.b)("p",null,"Palettes are the defining feature of Aesthetic, as they enable true interoperability and backwards\ncompatibility with other Aestheic powered design systems. In Aesthetic, colors ",Object(l.b)("em",{parentName:"p"},"are not")," directly\naccessible to consumers, as colors are not deterministic between systems, but palettes are!"),Object(l.b)("p",null,"A palette is a collection of color references for both text, foreground (text on background) and\nbackground colors, grouped by states and interactions. The available palettes are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"brand")," - Organization or company brand color."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"primary")," - Primary color. Typically buttons, links, bars, active states, etc."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"secondary")," - Accent color. Provides emphasis and contrast to the primary color."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tertiary")," - Additional complementary color for more variation."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"neutral")," - Whites, grays, blacks, etc that make up background, border, shadow, and other layout\nrelated pieces."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"muted")," - Disabled and empty like states."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"info")," - State that denotes something as informational."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"warning")," - State that warns the user of something minor."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"danger")," - State that indicates a destructive, atomic, or irreversible action."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"failure")," - State when something errors or fails."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"success")," - State when something succeeds or passes.")),Object(l.b)("p",null,"Hopefully you have a better understanding of all the palettes, so let's dive into the configuration.\nEach palette contains the following settings, each of which requires a color + shade combination\nvalue."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"color")," - The color range this palette is based on. Will make the color range available downstream\nunder this palette."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"text")," - Text color when displayed on the document background (typically the ",Object(l.b)("inlineCode",{parentName:"li"},"neutral")," palette)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"bg")," - Background color that maps shades to 5 different states."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fg")," - Text color that maps shades to 5 different states when displayed ",Object(l.b)("em",{parentName:"li"},"on")," the background color\n(",Object(l.b)("inlineCode",{parentName:"li"},"bg"),").")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'}),"themes:\n  default:\n    scheme: light\n    colors:\n      blue: # 00-90 ...\n      white: # 00-90 ...\n    palettes:\n      primary:\n        color: blue\n        text: blue.80\n        bg:\n          base: blue.40\n          focused: blue.50\n          hovered: blue.60\n          selected: blue.50\n          disabled: blue.30\n        fg:\n          base: white.50\n          focused: white.60\n          hovered: white.70\n          selected: white.60\n          disabled: white.40\n      secondary:\n        color: # ...\n        text: # ...\n        bg: # ...\n        fg: # ...\n      tertiary:\n        # ...\n")),Object(l.b)("p",null,"In the example above, we mentioned 5 different states. In order of priority and specificity, they\nare:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"base")," - The base palette color. Defaults to shade ",Object(l.b)("inlineCode",{parentName:"li"},"40"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"focused")," - State when a target is focused through user interaction. Defaults to shade ",Object(l.b)("inlineCode",{parentName:"li"},"50"),".\n",Object(l.b)("em",{parentName:"li"},"(optional)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hovered")," - State when a target is being hovered. Defaults to shade ",Object(l.b)("inlineCode",{parentName:"li"},"60"),". ",Object(l.b)("em",{parentName:"li"},"(optional)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"selected")," - State when a target is selected, active, expanded, etc. Defaults to shade ",Object(l.b)("inlineCode",{parentName:"li"},"50"),".\n",Object(l.b)("em",{parentName:"li"},"(optional)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"disabled")," - State when a target is disabled. Should override all previous states. Defaults to\nshade ",Object(l.b)("inlineCode",{parentName:"li"},"30"),". ",Object(l.b)("em",{parentName:"li"},"(optional)"))),Object(l.b)("p",null,"All of the states are optional, and will default to the shade references above. If you prefer to\nalways use the defaults, a shorthand configuration is available, where the setting value can simply\nbe set to the color name. The above example can now be written as:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'}),"themes:\n  default:\n    scheme: light\n    colors:\n      # ...\n    palettes:\n      # Shorthand for `color`, `text`, `bg` as blue, and `fg` as yellow.\n      primary:\n        color: blue\n        fg: yellow\n      # Super shorthand for `color`, `text`, `bg` as red, and `fg` as white (implicit).\n      secondary: red\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This may seem like a lot to configure, and it is, but it's thorough and covers many common and\nindustry standard use cases. It also mitigates problems between light and dark themes.")),Object(l.b)("h2",{id:"contrast-levels"},"Contrast levels"),Object(l.b)("p",null,"While ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#color-scheme"}),"color schemes")," offer a light or dark option, what about preferences for low or\nhigh contrast colors? With the ",Object(l.b)("inlineCode",{parentName:"p"},"contrast"),' setting, a theme can be marked as "low" or "high"\ncontrast, and will be utilized during the detection phase.'),Object(l.b)("p",null,'A contrast variant usually extends a base theme, as we want to use the same palette, but adjust the\ncolors. For example, say we have a "night" dark theme, and want to provide a vibrant high contrast\nvariant.'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'}),"themes:\n  night:\n    scheme: dark\n    colors:\n      blue:\n        # ...\n        40: '#0984e3'\n        # ...\n    palettes:\n      # ...\n  nightHighContrast:\n    extends: night\n    contrast: high\n    colors:\n      blue:\n        # ...\n        40: '#0652DD'\n        # ...\n")),Object(l.b)("h2",{id:"extending-themes"},"Extending themes"),Object(l.b)("p",null,"Aesthetic also supports the concept of extending themes, where a theme (the child) can extend\nanother theme (the parent), to inherit all its colors, palettes, and settings. The child theme can\nthen define individual settings, instead of having to define them all."),Object(l.b)("p",null,"To extend another theme, use the ",Object(l.b)("inlineCode",{parentName:"p"},"extends")," setting, which requires the parent theme's name. The\nchild theme object will deep merge with the parent theme object."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'}),"themes:\n  day:\n    scheme: light\n    colors: # ...\n    palettes: # ...\n  # Only change a single setting\n  dawn:\n    extends: day\n    palettes:\n      primary:\n        bg:\n          hovered: red.50\n")),Object(l.b)("h2",{id:"constraints"},"Constraints"),Object(l.b)("p",null,"Like the design language, themes also enforce the following constraints as the system currently\nrelies on fixed settings."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"10 color shades (00, 10, 20, 30, 40 (default), 50, 60, 70, 80, 90)"),Object(l.b)("li",{parentName:"ul"},"11 palettes (brand, primary, secondary, tertiary, neutral/layout, muted, info, success, warning,\ndanger, failure)"),Object(l.b)("li",{parentName:"ul"},"5 palette states (base, hovered, selected, disabled, focused)"),Object(l.b)("li",{parentName:"ul"},"Light scheme OR dark scheme"),Object(l.b)("li",{parentName:"ul"},"High, low, OR normal contrast")))}b.isMDXComponent=!0}}]);