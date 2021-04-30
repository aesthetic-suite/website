(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),h=a,p=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return n?r.a.createElement(p,o(o({ref:t},c),{},{components:n})):r.a.createElement(p,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(129)),l={title:"themes.yaml"},o={unversionedId:"design-system/config/themes",id:"design-system/config/themes",isDocsHomePage:!1,title:"themes.yaml",description:"Platforms: Android, iOS, Web",source:"@site/docs/design-system/config/themes.md",sourceDirName:"design-system/config",slug:"/design-system/config/themes",permalink:"/docs/design-system/config/themes",editUrl:"https://github.com/aesthetic-suite/website/edit/master/docs/design-system/config/themes.md",version:"current",frontMatter:{title:"themes.yaml"},sidebar:"docs",previous:{title:"language.yaml",permalink:"/docs/design-system/config/language"},next:{title:"What are design tokens?",permalink:"/docs/design-tokens"}},s=[{value:"Color scheme",id:"color-scheme",children:[]},{value:"Color shades",id:"color-shades",children:[]},{value:"Palettes and states",id:"palettes-and-states",children:[]},{value:"Contrast levels",id:"contrast-levels",children:[]},{value:"Extending themes",id:"extending-themes",children:[]},{value:"Constraints",id:"constraints",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Platforms: Android, iOS, Web")),Object(i.b)("p",null,"Themes are configured with a ",Object(i.b)("inlineCode",{parentName:"p"},"themes")," map in the ",Object(i.b)("inlineCode",{parentName:"p"},".aesthetic/<name>/themes.yaml")," file, where the key\nis the theme name, and the value is a configuration object of colors, palettes, and additional\nsettings."),Object(i.b)("h2",{id:"color-scheme"},"Color scheme"),Object(i.b)("p",null,"One such setting is ",Object(i.b)("inlineCode",{parentName:"p"},"scheme"),', which requires either "light" or "dark", and is utilized in color\nscheme preference detection. This allows for the automatic detection of light or dark modes for a\nuser.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'},"themes:\n  default:\n    scheme: light\n")),Object(i.b)("h2",{id:"color-shades"},"Color shades"),Object(i.b)("p",null,"For every ",Object(i.b)("a",{parentName:"p",href:"/docs/design-system/config/language#colors"},"color")," that's been defined in the design language, an associated\nentry must exist within each theme under ",Object(i.b)("inlineCode",{parentName:"p"},"colors.<name>"),". A color supports a range of 10 hexcode\nvalues (",Object(i.b)("inlineCode",{parentName:"p"},"00")," - ",Object(i.b)("inlineCode",{parentName:"p"},"90"),") known as ",Object(i.b)("em",{parentName:"p"},"shades"),"."),Object(i.b)("p",null,"In a light color scheme, the ",Object(i.b)("inlineCode",{parentName:"p"},"00")," shade is the lightest color, while ",Object(i.b)("inlineCode",{parentName:"p"},"90")," is the darkest. This is\nreversed for dark color schemes, where ",Object(i.b)("inlineCode",{parentName:"p"},"00")," is darkest, and ",Object(i.b)("inlineCode",{parentName:"p"},"90")," is lightest. In both schemes, the\n",Object(i.b)("inlineCode",{parentName:"p"},"40"),' shade is the base "common" shade.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'},"themes:\n  default:\n    scheme: light\n    colors:\n      blue:\n        00: '#E3F2FD' # Lightest\n        10: '#BBDEFB'\n        20: '#90CAF9'\n        30: '#64B5F6'\n        40: '#42A5F5' # Base\n        50: '#2196F3'\n        60: '#1E88E5'\n        70: '#1976D2'\n        80: '#1565C0'\n        90: '#0D47A1' # Darkest\n")),Object(i.b)("h2",{id:"palettes-and-states"},"Palettes and states"),Object(i.b)("p",null,"Palettes are the defining feature of Aesthetic, as they enable true interoperability and backwards\ncompatibility with other Aestheic powered design systems. In Aesthetic, colors ",Object(i.b)("em",{parentName:"p"},"are not")," directly\naccessible to consumers, as colors are not deterministic between systems, but palettes are!"),Object(i.b)("p",null,"A palette is a collection of color references for both text, foreground (text on background) and\nbackground colors, grouped by states and interactions. The available palettes are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"brand")," - Organization or company brand color."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"primary")," - Primary color. Typically buttons, links, bars, active states, etc."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"secondary")," - Accent color. Provides emphasis and contrast to the primary color."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tertiary")," - Additional complementary color for more variation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"neutral")," - Whites, grays, blacks, etc that make up background, border, shadow, and other layout\nrelated pieces."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"muted")," - Disabled and empty like states."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"warning")," - State that warns the user of something minor."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"danger")," - State that indicates a destructive, atomic, or irreversible action."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"negative")," - State when something negative occurs, like errors or failures."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"positive")," - State when something positive occurs, like successful operations.")),Object(i.b)("p",null,"Hopefully you have a better understanding of all the palettes, so let's dive into the configuration.\nEach palette contains the following settings, each of which requires a color + shade combination\nvalue."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"color")," - The color range this palette is based on. Will make the color range available downstream\nunder this palette."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"text")," - Text color when displayed on the document background (typically the ",Object(i.b)("inlineCode",{parentName:"li"},"neutral")," palette)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bg")," - Background color that maps shades to 5 different states."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fg")," - Text color that maps shades to 5 different states when displayed ",Object(i.b)("em",{parentName:"li"},"on")," the background color\n(",Object(i.b)("inlineCode",{parentName:"li"},"bg"),").")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'},"themes:\n  default:\n    scheme: light\n    colors:\n      blue: # 00-90 ...\n      white: # 00-90 ...\n    palettes:\n      primary:\n        color: blue\n        text: blue.80\n        bg:\n          base: blue.40\n          focused: blue.50\n          hovered: blue.60\n          selected: blue.50\n          disabled: blue.30\n        fg:\n          base: white.50\n          focused: white.60\n          hovered: white.70\n          selected: white.60\n          disabled: white.40\n      secondary:\n        color: # ...\n        text: # ...\n        bg: # ...\n        fg: # ...\n      tertiary:\n        # ...\n")),Object(i.b)("p",null,"In the example above, we mentioned 5 different states. In order of priority and specificity, they\nare:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"base")," - The base palette color. Defaults to shade ",Object(i.b)("inlineCode",{parentName:"li"},"40"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"focused")," - State when a target is focused through user interaction. Defaults to shade ",Object(i.b)("inlineCode",{parentName:"li"},"50"),".\n",Object(i.b)("em",{parentName:"li"},"(optional)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hovered")," - State when a target is being hovered. Defaults to shade ",Object(i.b)("inlineCode",{parentName:"li"},"60"),". ",Object(i.b)("em",{parentName:"li"},"(optional)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"selected")," - State when a target is selected, active, expanded, etc. Defaults to shade ",Object(i.b)("inlineCode",{parentName:"li"},"50"),".\n",Object(i.b)("em",{parentName:"li"},"(optional)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"disabled")," - State when a target is disabled. Should override all previous states. Defaults to\nshade ",Object(i.b)("inlineCode",{parentName:"li"},"30"),". ",Object(i.b)("em",{parentName:"li"},"(optional)"))),Object(i.b)("p",null,"All of the states are optional, and will default to the shade references above. If you prefer to\nalways use the defaults, a shorthand configuration is available, where the setting value can simply\nbe set to the color name. The above example can now be written as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'},"themes:\n  default:\n    scheme: light\n    colors:\n      # ...\n    palettes:\n      # Shorthand for `color`, `text`, `bg` as blue, and `fg` as yellow.\n      primary:\n        color: blue\n        fg: yellow\n      # Super shorthand for `color`, `text`, `bg` as red, and `fg` as white (implicit).\n      secondary: red\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This may seem like a lot to configure, and it is, but it's thorough and covers many common and\nindustry standard use cases. It also mitigates problems between light and dark themes.")),Object(i.b)("h2",{id:"contrast-levels"},"Contrast levels"),Object(i.b)("p",null,"While ",Object(i.b)("a",{parentName:"p",href:"#color-scheme"},"color schemes")," offer a light or dark option, what about preferences for low or\nhigh contrast colors? With the ",Object(i.b)("inlineCode",{parentName:"p"},"contrast"),' setting, a theme can be marked as "low" or "high"\ncontrast, and will be utilized during the detection phase.'),Object(i.b)("p",null,'A contrast variant usually extends a base theme, as we want to use the same palette, but adjust the\ncolors. For example, say we have a "night" dark theme, and want to provide a vibrant high contrast\nvariant.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'},"themes:\n  night:\n    scheme: dark\n    colors:\n      blue:\n        # ...\n        40: '#0984e3'\n        # ...\n    palettes:\n      # ...\n  nightHighContrast:\n    extends: night\n    contrast: high\n    colors:\n      blue:\n        # ...\n        40: '#0652DD'\n        # ...\n")),Object(i.b)("h2",{id:"extending-themes"},"Extending themes"),Object(i.b)("p",null,"Aesthetic also supports the concept of extending themes, where a theme (the child) can extend\nanother theme (the parent), to inherit all its colors, palettes, and settings. The child theme can\nthen define individual settings, instead of having to define them all."),Object(i.b)("p",null,"To extend another theme, use the ",Object(i.b)("inlineCode",{parentName:"p"},"extends")," setting, which requires the parent theme's name. The\nchild theme object will deep merge with the parent theme object."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="themes.yaml"',title:'"themes.yaml"'},"themes:\n  day:\n    scheme: light\n    colors: # ...\n    palettes: # ...\n  # Only change a single setting\n  dawn:\n    extends: day\n    palettes:\n      primary:\n        bg:\n          hovered: red.50\n")),Object(i.b)("h2",{id:"constraints"},"Constraints"),Object(i.b)("p",null,"Like the design language, themes also enforce the following constraints as the system currently\nrelies on fixed settings."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"10 color shades (00, 10, 20, 30, 40 (default), 50, 60, 70, 80, 90)"),Object(i.b)("li",{parentName:"ul"},"10 palettes (brand, primary, secondary, tertiary, neutral/layout, muted, positive, warning,\ndanger, negative)"),Object(i.b)("li",{parentName:"ul"},"5 palette states (base, hovered, selected, disabled, focused)"),Object(i.b)("li",{parentName:"ul"},"Light scheme OR dark scheme"),Object(i.b)("li",{parentName:"ul"},"High, low, OR normal contrast")))}b.isMDXComponent=!0}}]);