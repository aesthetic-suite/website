(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{123:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(125),s=t(141),l=t(129),i=t(130),p=t(152),d=t(134),c=t(22),m=t(133),u=t(76),h=t.n(u);n.default=function(){var e=Object(c.default)().siteConfig;return r.a.createElement(s.a,{title:"A design system and styling solution",description:e.tagline},r.a.createElement("header",{className:Object(o.a)("hero hero--primary",h.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},e.title),r.a.createElement("p",{className:"hero__subtitle"},e.tagline),r.a.createElement("div",{className:h.a.buttons},r.a.createElement(d.a,{className:Object(o.a)("button button--secondary button--lg",h.a.getStarted),to:Object(m.a)("docs/")},"Get started"),r.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=aesthetic-suite&repo=framework&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",title:"GitHub"})))),r.a.createElement("main",null,r.a.createElement("section",{className:h.a.section},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8"},r.a.createElement("h2",null,"Fluent design system"),r.a.createElement("p",null,"With everything from typography to elevation, spacing, motion, and more! Create and manage a thorough design system with a strict and centralized YAML configuration \u2014 easy for both designers and developers to maintain."),r.a.createElement("p",{className:h.a.muted},"Figma support coming soon!")),r.a.createElement("div",{className:"col col--4"})),r.a.createElement("div",{className:Object(o.a)("row",h.a.sectionSpacer)},r.a.createElement("div",{className:"col col--4"}),r.a.createElement("div",{className:"col col--8 text--right"},r.a.createElement("h2",null,"Expressive themes"),r.a.createElement("p",null,"Whether for brand or accessibility purposes, compose your design system around multiple themes that express unique colors, palettes, and interactive states."))))),r.a.createElement("section",{className:Object(o.a)(h.a.section,h.a.sectionAltColor)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6"},r.a.createElement("h2",null,"Scalable design tokens"),r.a.createElement("p",null,"Compile your design system configuration to consistent, reusable, and scalable design tokens for Android*, iOS*, and Web platforms, and popular technologies such as JavaScript, TypeScript, CSS-in-JS, CSS, SCSS, and many more."),r.a.createElement("p",null,"Design tokens are engineered for optimal developer ergonomics by providing type safety, autocompletion, and documentation."),r.a.createElement("p",{className:h.a.muted},"* Mobile platforms coming soon!")),r.a.createElement("div",{className:"col col--6 code-block--condensed"},r.a.createElement(l.a,{defaultValue:"ts",values:[{label:"JS/TS",value:"ts"},{label:"CSS-in-JS/TS",value:"tsx"},{label:"CSS",value:"css"},{label:"SCSS",value:"scss"},{label:"Less",value:"less"},{label:"...",value:"other"}]},r.a.createElement(i.a,{value:"ts"},r.a.createElement(p.a,{className:"language-ts"},"import {\n  BorderTokens,\n  BreakpointTokens,\n  DepthTokens,\n  HeadingTokens,\n  ShadowTokens,\n  SpacingTokens,\n  TextTokens,\n  TypographyToken,\n} from '@aesthetic/system';\n\nexport const border: BorderTokens = {\n  sm: {\n    radius: '0.11rem', // 1.50px\n    width: '0rem', // 0px\n  },\n  df: {\n    radius: '0.21rem', // 3px\n    width: '0.07rem', // 1px\n  },\n  lg: {\n    radius: '0.32rem', // 4.50px\n    width: '0.14rem', // 2px\n  },\n};\n\nexport const breakpoint: BreakpointTokens = {\n  xs: {\n    query: 'screen and (min-width: 45.71em)',\n    querySize: 640,\n    rootLineHeight: 1.33,\n    rootTextSize: '14.94px',\n  },\n  sm: {\n    query: 'screen and (min-width: 68.57em)',\n    querySize: 960,\n    rootLineHeight: 1.42,\n    rootTextSize: '15.94px',\n  },\n  md: {\n    query: 'screen and (min-width: 91.43em)',\n    querySize: 1280,\n    rootLineHeight: 1.52,\n    rootTextSize: '17.01px',\n  },\n  lg: {\n    query: 'screen and (min-width: 114.29em)',\n    querySize: 1600,\n    rootLineHeight: 1.62,\n    rootTextSize: '18.15px',\n  },\n  xl: {\n    query: 'screen and (min-width: 137.14em)',\n    querySize: 1920,\n    rootLineHeight: 1.73,\n    rootTextSize: '19.36px',\n  },\n};\n\nexport const depth: DepthTokens = {\n  content: 100,\n  navigation: 1000,\n  sheet: 1100,\n  overlay: 1200,\n  modal: 1300,\n  toast: 1400,\n  dialog: 1500,\n  menu: 1600,\n  tooltip: 1700,\n};\n\nexport const heading: HeadingTokens = {\n  l1: {\n    letterSpacing: '0.25px',\n    lineHeight: 1.5,\n    size: '1.14rem', // 16px\n  },\n  l2: {\n    letterSpacing: '0.33px',\n    lineHeight: 1.69,\n    size: '1.43rem', // 20px\n  },\n  l3: {\n    letterSpacing: '0.44px',\n    lineHeight: 1.9,\n    size: '1.79rem', // 25px\n  },\n  l4: {\n    letterSpacing: '0.59px',\n    lineHeight: 2.14,\n    size: '2.23rem', // 31.25px\n  },\n  l5: {\n    letterSpacing: '0.79px',\n    lineHeight: 2.4,\n    size: '2.79rem', // 39px\n  },\n  l6: {\n    letterSpacing: '1.05px',\n    lineHeight: 2.7,\n    size: '3.49rem', // 48.80px\n  },\n};\n\nexport const shadow: ShadowTokens = {\n  xs: {\n    x: '0rem', // 0px\n    y: '0.14rem', // 2px\n    blur: '0.14rem', // 2px\n    spread: '0rem', // 0px\n  },\n  sm: {\n    x: '0rem', // 0px\n    y: '0.23rem', // 3.24px\n    blur: '0.27rem', // 3.75px\n    spread: '0rem', // 0px\n  },\n  md: {\n    x: '0rem', // 0px\n    y: '0.37rem', // 5.24px\n    blur: '0.39rem', // 5.50px\n    spread: '0rem', // 0px\n  },\n  lg: {\n    x: '0rem', // 0px\n    y: '0.61rem', // 8.47px\n    blur: '0.52rem', // 7.25px\n    spread: '0rem', // 0px\n  },\n  xl: {\n    x: '0rem', // 0px\n    y: '0.98rem', // 13.71px\n    blur: '0.64rem', // 9px\n    spread: '0rem', // 0px\n  },\n};\n\nexport const spacing: SpacingTokens = {\n  xs: '0.31rem', // 4.38px\n  sm: '0.63rem', // 8.75px\n  df: '1.25rem', // 17.50px\n  md: '2.50rem', // 35px\n  lg: '3.75rem', // 52.50px\n  xl: '5rem', // 70px\n  type: 'vertical-rhythm',\n  unit: 17.5,\n};\n\nexport const text: TextTokens = {\n  sm: {\n    lineHeight: 1.25,\n    size: '0.89rem', // 12.45px\n  },\n  df: {\n    lineHeight: 1.25,\n    size: '1rem', // 14px\n  },\n  lg: {\n    lineHeight: 1.25,\n    size: '1.13rem', // 15.75px\n  },\n};\n\nexport const typography: TypographyToken = {\n  font: {\n    heading: 'Roboto',\n    locale: {},\n    monospace: '\"Lucida Console\", Monaco, monospace',\n    text: '\"Lucida Console\", Monaco, monospace',\n    system:\n      'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"',\n  },\n  rootLineHeight: 1.25,\n  rootTextSize: '14px',\n};")),r.a.createElement(i.a,{value:"tsx"},r.a.createElement(p.a,{className:"language-ts"},"import { Design } from '@aesthetic/system';\n\nexport default new Design('example', {\n  border: {\n    sm: {\n      radius: '0.11rem', // 1.50px\n      width: '0rem', // 0px\n    },\n    df: {\n      radius: '0.21rem', // 3px\n      width: '0.07rem', // 1px\n    },\n    lg: {\n      radius: '0.32rem', // 4.50px\n      width: '0.14rem', // 2px\n    },\n  },\n  breakpoint: {\n    xs: {\n      query: 'screen and (min-width: 45.71em)',\n      querySize: 640,\n      rootLineHeight: 1.33,\n      rootTextSize: '14.94px',\n    },\n    sm: {\n      query: 'screen and (min-width: 68.57em)',\n      querySize: 960,\n      rootLineHeight: 1.42,\n      rootTextSize: '15.94px',\n    },\n    md: {\n      query: 'screen and (min-width: 91.43em)',\n      querySize: 1280,\n      rootLineHeight: 1.52,\n      rootTextSize: '17.01px',\n    },\n    lg: {\n      query: 'screen and (min-width: 114.29em)',\n      querySize: 1600,\n      rootLineHeight: 1.62,\n      rootTextSize: '18.15px',\n    },\n    xl: {\n      query: 'screen and (min-width: 137.14em)',\n      querySize: 1920,\n      rootLineHeight: 1.73,\n      rootTextSize: '19.36px',\n    },\n  },\n  heading: {\n    l1: {\n      letterSpacing: '0.25px',\n      lineHeight: 1.5,\n      size: '1.14rem', // 16px\n    },\n    l2: {\n      letterSpacing: '0.33px',\n      lineHeight: 1.69,\n      size: '1.43rem', // 20px\n    },\n    l3: {\n      letterSpacing: '0.44px',\n      lineHeight: 1.9,\n      size: '1.79rem', // 25px\n    },\n    l4: {\n      letterSpacing: '0.59px',\n      lineHeight: 2.14,\n      size: '2.23rem', // 31.25px\n    },\n    l5: {\n      letterSpacing: '0.79px',\n      lineHeight: 2.4,\n      size: '2.79rem', // 39px\n    },\n    l6: {\n      letterSpacing: '1.05px',\n      lineHeight: 2.7,\n      size: '3.49rem', // 48.80px\n    },\n  },\n  shadow: {\n    xs: {\n      x: '0rem', // 0px\n      y: '0.14rem', // 2px\n      blur: '0.14rem', // 2px\n      spread: '0rem', // 0px\n    },\n    sm: {\n      x: '0rem', // 0px\n      y: '0.23rem', // 3.24px\n      blur: '0.27rem', // 3.75px\n      spread: '0rem', // 0px\n    },\n    md: {\n      x: '0rem', // 0px\n      y: '0.37rem', // 5.24px\n      blur: '0.39rem', // 5.50px\n      spread: '0rem', // 0px\n    },\n    lg: {\n      x: '0rem', // 0px\n      y: '0.61rem', // 8.47px\n      blur: '0.52rem', // 7.25px\n      spread: '0rem', // 0px\n    },\n    xl: {\n      x: '0rem', // 0px\n      y: '0.98rem', // 13.71px\n      blur: '0.64rem', // 9px\n      spread: '0rem', // 0px\n    },\n  },\n  spacing: {\n    xs: '0.31rem', // 4.38px\n    sm: '0.63rem', // 8.75px\n    df: '1.25rem', // 17.50px\n    md: '2.50rem', // 35px\n    lg: '3.75rem', // 52.50px\n    xl: '5rem', // 70px\n    type: 'vertical-rhythm',\n    unit: 17.5,\n  },\n  text: {\n    sm: {\n      lineHeight: 1.25,\n      size: '0.89rem', // 12.45px\n    },\n    df: {\n      lineHeight: 1.25,\n      size: '1rem', // 14px\n    },\n    lg: {\n      lineHeight: 1.25,\n      size: '1.13rem', // 15.75px\n    },\n  },\n  typography: {\n    font: {\n      heading: 'Roboto',\n      locale: {},\n      monospace: '\"Lucida Console\", Monaco, monospace',\n      text: 'Roboto',\n      system:\n        'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"',\n    },\n    rootLineHeight: 1.25,\n    rootTextSize: '14px',\n  },\n});")),r.a.createElement(i.a,{value:"css"},r.a.createElement(p.a,{className:"language-css"},":root {\n  --border-sm-radius: 0.11rem; /* 1.50px */\n  --border-sm-width: 0rem; /* 0px */\n  --border-df-radius: 0.21rem; /* 3px */\n  --border-df-width: 0.07rem; /* 1px */\n  --border-lg-radius: 0.32rem; /* 4.50px */\n  --border-lg-width: 0.14rem; /* 2px */\n\n  --breakpoint-xs-query: 'screen and (min-width: 45.71em)';\n  --breakpoint-xs-query-size: 640;\n  --breakpoint-xs-root-line-height: 1.33;\n  --breakpoint-xs-root-text-size: 14.94px;\n  --breakpoint-sm-query: 'screen and (min-width: 68.57em)';\n  --breakpoint-sm-query-size: 960;\n  --breakpoint-sm-root-line-height: 1.42;\n  --breakpoint-sm-root-text-size: 15.94px;\n  --breakpoint-md-query: 'screen and (min-width: 91.43em)';\n  --breakpoint-md-query-size: 1280;\n  --breakpoint-md-root-line-height: 1.52;\n  --breakpoint-md-root-text-size: 17.01px;\n  --breakpoint-lg-query: 'screen and (min-width: 114.29em)';\n  --breakpoint-lg-query-size: 1600;\n  --breakpoint-lg-root-line-height: 1.62;\n  --breakpoint-lg-root-text-size: 18.15px;\n  --breakpoint-xl-query: 'screen and (min-width: 137.14em)';\n  --breakpoint-xl-query-size: 1920;\n  --breakpoint-xl-root-line-height: 1.73;\n  --breakpoint-xl-root-text-size: 19.36px;\n\n  --depth-content: 100;\n  --depth-navigation: 1000;\n  --depth-sheet: 1100;\n  --depth-overlay: 1200;\n  --depth-modal: 1300;\n  --depth-toast: 1400;\n  --depth-dialog: 1500;\n  --depth-menu: 1600;\n  --depth-tooltip: 1700;\n\n  --heading-l1-letter-spacing: 0.25px;\n  --heading-l1-line-height: 1.5;\n  --heading-l1-size: 1.14rem; /* 16px */\n  --heading-l2-letter-spacing: 0.33px;\n  --heading-l2-line-height: 1.69;\n  --heading-l2-size: 1.43rem; /* 20px */\n  --heading-l3-letter-spacing: 0.44px;\n  --heading-l3-line-height: 1.9;\n  --heading-l3-size: 1.79rem; /* 25px */\n  --heading-l4-letter-spacing: 0.59px;\n  --heading-l4-line-height: 2.14;\n  --heading-l4-size: 2.23rem; /* 31.25px */\n  --heading-l5-letter-spacing: 0.79px;\n  --heading-l5-line-height: 2.4;\n  --heading-l5-size: 2.79rem; /* 39px */\n  --heading-l6-letter-spacing: 1.05px;\n  --heading-l6-line-height: 2.7;\n  --heading-l6-size: 3.49rem; /* 48.80px */\n\n  --shadow-xs-x: 0rem; /* 0px */\n  --shadow-xs-y: 0.14rem; /* 2px */\n  --shadow-xs-blur: 0.14rem; /* 2px */\n  --shadow-xs-spread: 0rem; /* 0px */\n  --shadow-sm-x: 0rem; /* 0px */\n  --shadow-sm-y: 0.23rem; /* 3.24px */\n  --shadow-sm-blur: 0.27rem; /* 3.75px */\n  --shadow-sm-spread: 0rem; /* 0px */\n  --shadow-md-x: 0rem; /* 0px */\n  --shadow-md-y: 0.37rem; /* 5.24px */\n  --shadow-md-blur: 0.39rem; /* 5.50px */\n  --shadow-md-spread: 0rem; /* 0px */\n  --shadow-lg-x: 0rem; /* 0px */\n  --shadow-lg-y: 0.61rem; /* 8.47px */\n  --shadow-lg-blur: 0.52rem; /* 7.25px */\n  --shadow-lg-spread: 0rem; /* 0px */\n  --shadow-xl-x: 0rem; /* 0px */\n  --shadow-xl-y: 0.98rem; /* 13.71px */\n  --shadow-xl-blur: 0.64rem; /* 9px */\n  --shadow-xl-spread: 0rem; /* 0px */\n\n  --spacing-xs: 0.31rem; /* 4.38px */\n  --spacing-sm: 0.63rem; /* 8.75px */\n  --spacing-df: 1.25rem; /* 17.50px */\n  --spacing-md: 2.5rem; /* 35px */\n  --spacing-lg: 3.75rem; /* 52.50px */\n  --spacing-xl: 5rem; /* 70px */\n  --spacing-unit: 17.5;\n\n  --text-sm-line-height: 1.25;\n  --text-sm-size: 0.89rem; /* 12.45px */\n  --text-df-line-height: 1.25;\n  --text-df-size: 1rem; /* 14px */\n  --text-lg-line-height: 1.25;\n  --text-lg-size: 1.13rem; /* 15.75px */\n\n  --typography-font-heading: 'Roboto';\n  --typography-font-monospace: '\"Lucida Console\", Monaco, monospace';\n  --typography-font-text: 'Roboto';\n  --typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"';\n  --typography-root-line-height: 1.25;\n  --typography-root-text-size: 14px;\n}")),r.a.createElement(i.a,{value:"scss"},r.a.createElement(p.a,{className:"language-scss"},"$border-sm-radius: 0.11rem !default; // 1.50px\n$border-sm-width: 0rem !default; // 0px\n$border-df-radius: 0.21rem !default; // 3px\n$border-df-width: 0.07rem !default; // 1px\n$border-lg-radius: 0.32rem !default; // 4.50px\n$border-lg-width: 0.14rem !default; // 2px\n\n$breakpoint-xs-query: 'screen and (min-width: 45.71em)' !default;\n$breakpoint-xs-query-size: 640 !default;\n$breakpoint-xs-root-line-height: 1.33 !default;\n$breakpoint-xs-root-text-size: 14.94px !default;\n$breakpoint-sm-query: 'screen and (min-width: 68.57em)' !default;\n$breakpoint-sm-query-size: 960 !default;\n$breakpoint-sm-root-line-height: 1.42 !default;\n$breakpoint-sm-root-text-size: 15.94px !default;\n$breakpoint-md-query: 'screen and (min-width: 91.43em)' !default;\n$breakpoint-md-query-size: 1280 !default;\n$breakpoint-md-root-line-height: 1.52 !default;\n$breakpoint-md-root-text-size: 17.01px !default;\n$breakpoint-lg-query: 'screen and (min-width: 114.29em)' !default;\n$breakpoint-lg-query-size: 1600 !default;\n$breakpoint-lg-root-line-height: 1.62 !default;\n$breakpoint-lg-root-text-size: 18.15px !default;\n$breakpoint-xl-query: 'screen and (min-width: 137.14em)' !default;\n$breakpoint-xl-query-size: 1920 !default;\n$breakpoint-xl-root-line-height: 1.73 !default;\n$breakpoint-xl-root-text-size: 19.36px !default;\n\n$depth-content: 100 !default;\n$depth-navigation: 1000 !default;\n$depth-sheet: 1100 !default;\n$depth-overlay: 1200 !default;\n$depth-modal: 1300 !default;\n$depth-toast: 1400 !default;\n$depth-dialog: 1500 !default;\n$depth-menu: 1600 !default;\n$depth-tooltip: 1700 !default;\n\n$heading-l1-letter-spacing: 0.25px !default;\n$heading-l1-line-height: 1.5 !default;\n$heading-l1-size: 1.14rem !default; // 16px\n$heading-l2-letter-spacing: 0.33px !default;\n$heading-l2-line-height: 1.69 !default;\n$heading-l2-size: 1.43rem !default; // 20px\n$heading-l3-letter-spacing: 0.44px !default;\n$heading-l3-line-height: 1.9 !default;\n$heading-l3-size: 1.79rem !default; // 25px\n$heading-l4-letter-spacing: 0.59px !default;\n$heading-l4-line-height: 2.14 !default;\n$heading-l4-size: 2.23rem !default; // 31.25px\n$heading-l5-letter-spacing: 0.79px !default;\n$heading-l5-line-height: 2.4 !default;\n$heading-l5-size: 2.79rem !default; // 39px\n$heading-l6-letter-spacing: 1.05px !default;\n$heading-l6-line-height: 2.7 !default;\n$heading-l6-size: 3.49rem !default; // 48.80px\n\n$shadow-xs-x: 0rem !default; // 0px\n$shadow-xs-y: 0.14rem !default; // 2px\n$shadow-xs-blur: 0.14rem !default; // 2px\n$shadow-xs-spread: 0rem !default; // 0px\n$shadow-sm-x: 0rem !default; // 0px\n$shadow-sm-y: 0.23rem !default; // 3.24px\n$shadow-sm-blur: 0.27rem !default; // 3.75px\n$shadow-sm-spread: 0rem !default; // 0px\n$shadow-md-x: 0rem !default; // 0px\n$shadow-md-y: 0.37rem !default; // 5.24px\n$shadow-md-blur: 0.39rem !default; // 5.50px\n$shadow-md-spread: 0rem !default; // 0px\n$shadow-lg-x: 0rem !default; // 0px\n$shadow-lg-y: 0.61rem !default; // 8.47px\n$shadow-lg-blur: 0.52rem !default; // 7.25px\n$shadow-lg-spread: 0rem !default; // 0px\n$shadow-xl-x: 0rem !default; // 0px\n$shadow-xl-y: 0.98rem !default; // 13.71px\n$shadow-xl-blur: 0.64rem !default; // 9px\n$shadow-xl-spread: 0rem !default; // 0px\n\n$spacing-xs: 0.31rem !default; // 4.38px\n$spacing-sm: 0.63rem !default; // 8.75px\n$spacing-df: 1.25rem !default; // 17.50px\n$spacing-md: 2.5rem !default; // 35px\n$spacing-lg: 3.75rem !default; // 52.50px\n$spacing-xl: 5rem !default; // 70px\n$spacing-unit: 17.5 !default;\n\n$text-sm-line-height: 1.25 !default;\n$text-sm-size: 0.89rem !default; // 12.45px\n$text-df-line-height: 1.25 !default;\n$text-df-size: 1rem !default; // 14px\n$text-lg-line-height: 1.25 !default;\n$text-lg-size: 1.13rem !default; // 15.75px\n\n$typography-font-heading: 'Roboto' !default;\n$typography-font-monospace: '\"Lucida Console\", Monaco, monospace' !default;\n$typography-font-text: 'Roboto' !default;\n$typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"' !default;\n$typography-root-line-height: 1.25 !default;\n$typography-root-text-size: 14px !default;")),r.a.createElement(i.a,{value:"less"},r.a.createElement(p.a,{className:"language-less"},"@border-sm-radius: 0.11rem; // 1.50px\n@border-sm-width: 0rem; // 0px\n@border-df-radius: 0.21rem; // 3px\n@border-df-width: 0.07rem; // 1px\n@border-lg-radius: 0.32rem; // 4.50px\n@border-lg-width: 0.14rem; // 2px\n\n@breakpoint-xs-query: 'screen and (min-width: 45.71em)';\n@breakpoint-xs-query-size: 640;\n@breakpoint-xs-root-line-height: 1.33;\n@breakpoint-xs-root-text-size: 14.94px;\n@breakpoint-sm-query: 'screen and (min-width: 68.57em)';\n@breakpoint-sm-query-size: 960;\n@breakpoint-sm-root-line-height: 1.42;\n@breakpoint-sm-root-text-size: 15.94px;\n@breakpoint-md-query: 'screen and (min-width: 91.43em)';\n@breakpoint-md-query-size: 1280;\n@breakpoint-md-root-line-height: 1.52;\n@breakpoint-md-root-text-size: 17.01px;\n@breakpoint-lg-query: 'screen and (min-width: 114.29em)';\n@breakpoint-lg-query-size: 1600;\n@breakpoint-lg-root-line-height: 1.62;\n@breakpoint-lg-root-text-size: 18.15px;\n@breakpoint-xl-query: 'screen and (min-width: 137.14em)';\n@breakpoint-xl-query-size: 1920;\n@breakpoint-xl-root-line-height: 1.73;\n@breakpoint-xl-root-text-size: 19.36px;\n\n@depth-content: 100;\n@depth-navigation: 1000;\n@depth-sheet: 1100;\n@depth-overlay: 1200;\n@depth-modal: 1300;\n@depth-toast: 1400;\n@depth-dialog: 1500;\n@depth-menu: 1600;\n@depth-tooltip: 1700;\n\n@heading-l1-letter-spacing: 0.25px;\n@heading-l1-line-height: 1.5;\n@heading-l1-size: 1.14rem; // 16px\n@heading-l2-letter-spacing: 0.33px;\n@heading-l2-line-height: 1.69;\n@heading-l2-size: 1.43rem; // 20px\n@heading-l3-letter-spacing: 0.44px;\n@heading-l3-line-height: 1.9;\n@heading-l3-size: 1.79rem; // 25px\n@heading-l4-letter-spacing: 0.59px;\n@heading-l4-line-height: 2.14;\n@heading-l4-size: 2.23rem; // 31.25px\n@heading-l5-letter-spacing: 0.79px;\n@heading-l5-line-height: 2.4;\n@heading-l5-size: 2.79rem; // 39px\n@heading-l6-letter-spacing: 1.05px;\n@heading-l6-line-height: 2.7;\n@heading-l6-size: 3.49rem; // 48.80px\n\n@shadow-xs-x: 0rem; // 0px\n@shadow-xs-y: 0.14rem; // 2px\n@shadow-xs-blur: 0.14rem; // 2px\n@shadow-xs-spread: 0rem; // 0px\n@shadow-sm-x: 0rem; // 0px\n@shadow-sm-y: 0.23rem; // 3.24px\n@shadow-sm-blur: 0.27rem; // 3.75px\n@shadow-sm-spread: 0rem; // 0px\n@shadow-md-x: 0rem; // 0px\n@shadow-md-y: 0.37rem; // 5.24px\n@shadow-md-blur: 0.39rem; // 5.50px\n@shadow-md-spread: 0rem; // 0px\n@shadow-lg-x: 0rem; // 0px\n@shadow-lg-y: 0.61rem; // 8.47px\n@shadow-lg-blur: 0.52rem; // 7.25px\n@shadow-lg-spread: 0rem; // 0px\n@shadow-xl-x: 0rem; // 0px\n@shadow-xl-y: 0.98rem; // 13.71px\n@shadow-xl-blur: 0.64rem; // 9px\n@shadow-xl-spread: 0rem; // 0px\n\n@spacing-xs: 0.31rem; // 4.38px\n@spacing-sm: 0.63rem; // 8.75px\n@spacing-df: 1.25rem; // 17.50px\n@spacing-md: 2.5rem; // 35px\n@spacing-lg: 3.75rem; // 52.50px\n@spacing-xl: 5rem; // 70px\n@spacing-unit: 17.5;\n\n@text-sm-line-height: 1.25;\n@text-sm-size: 0.89rem; // 12.45px\n@text-df-line-height: 1.25;\n@text-df-size: 1rem; // 14px\n@text-lg-line-height: 1.25;\n@text-lg-size: 1.13rem; // 15.75px\n\n@typography-font-heading: 'Roboto';\n@typography-font-monospace: '\"Lucida Console\", Monaco, monospace';\n@typography-font-text: 'Roboto';\n@typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"';\n@typography-root-line-height: 1.25;\n@typography-root-text-size: 14px;")),r.a.createElement(i.a,{value:"other"},r.a.createElement("div",{className:"alert alert--secondary",role:"alert"},"And many more supported formats to come in the future!"))))))),r.a.createElement("section",{className:h.a.section},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 code-block--condensed"},r.a.createElement(l.a,{defaultValue:"react-styled",values:[{label:"React Styled",value:"react-styled"},{label:"React Hooks",value:"react-hooks"},{label:"...",value:"other"}]},r.a.createElement(i.a,{value:"react-styled"},r.a.createElement(p.a,{className:"language-ts"},"import React from 'react';\nimport { createdStyled, CommonSize, PaletteType } from '@aesthetic/react';\n\nexport interface ButtonVariants {\n  palette?: PaletteType;\n  size?: CommonSize;\n}\n\nconst Button = createdStyled<'button', ButtonVariants>('button', (css) =>\n  css.mixin('reset-button', {\n    padding: css.var('spacing-df'),\n\n    '@variants': {\n      palette: {\n        primary: { backgroundColor: css.var('palette-primary-bg-base') },\n        success: { backgroundColor: css.var('palette-success-bg-base') },\n        warning: { backgroundColor: css.var('palette-warning-bg-base') },\n      },\n      size: {\n        sm: { fontSize: css.var('text-sm-size') },\n        df: { fontSize: css.var('text-df-size') },\n        lg: { fontSize: css.var('text-lg-size') },\n      },\n    },\n  })\n);\n\nButton.defaultProps = {\n  palette: 'primary',\n  size: 'df',\n};\n\nexport default Button;")),r.a.createElement(i.a,{value:"react-hooks"},r.a.createElement(p.a,{className:"language-ts"},"import React from 'react';\nimport { useStyles, createComponentStyles, CommonSize, PaletteType } from '@aesthetic/react';\n\nexport const styleSheet = createComponentStyles((css) => ({\n  button: css.mixin('reset-button', {\n    padding: css.var('spacing-df'),\n\n    '@variants': {\n      palette: {\n        primary: { backgroundColor: css.var('palette-primary-bg-base') },\n        success: { backgroundColor: css.var('palette-success-bg-base') },\n        warning: { backgroundColor: css.var('palette-warning-bg-base') },\n      },\n      size: {\n        sm: { fontSize: css.var('text-sm-size') },\n        df: { fontSize: css.var('text-df-size') },\n        lg: { fontSize: css.var('text-lg-size') },\n      },\n    },\n  }),\n  button_selected: {},\n  button_disabled: {},\n  // ...\n}));\n\nexport interface ButtonProps {\n  children: NonNullable<React.ReactNode>;\n  disabled?: boolean;\n  palette?: PaletteType;\n  selected?: boolean;\n  size?: CommonSize;\n}\n\nexport default function Button({\n  children,\n  size = 'df',\n  palette = 'primary',\n  selected = false,\n  disabled = false,\n}: ButtonProps) {\n  const cx = useStyles(styleSheet);\n\n  return (\n    <button\n      type=\"button\"\n      className={cx(\n        { size, palette },\n        'button',\n        selected && 'button_selected',\n        disabled && 'button_disabled',\n      )}\n    >\n      {children}\n    </button>\n  );\n}")),r.a.createElement(i.a,{value:"other"},r.a.createElement("div",{className:"alert alert--secondary",role:"alert"},"And many more supported integrations and APIs to come in the future!")))),r.a.createElement("div",{className:"col col--6"},r.a.createElement("h2",null,"Powerful APIs"),r.a.createElement("p",null,"Easily and succinctly style your components with our powerful battle-tested and high-performant APIs. We handle the heavy lifting, you focus on features that matter.")))))))}},129:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(127),s=t(125),l=t(53),i=t.n(l),p=37,d=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.children,c=e.defaultValue,m=e.values,u=e.groupId,h=e.className,g=Object(o.a)(),x=g.tabGroupChoices,y=g.setTabGroupChoices,f=Object(a.useState)(c),b=f[0],v=f[1];if(null!=u){var k=x[u];null!=k&&k!==b&&m.some((function(e){return e.value===k}))&&v(k)}var w=function(e){v(e),null!=u&&y(u,e)},z=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},h)},m.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":b===n,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":b===n}),key:n,ref:function(e){return z.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case p:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(z,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(a.cloneElement)(l.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},130:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}},150:function(e,n,t){"use strict";const a=(e,{target:n=document.body}={})=>{const t=document.createElement("textarea"),a=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),n.append(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(l){}return t.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),s};e.exports=a,e.exports.default=a},151:function(e,n){function t(e){let n,t=[];for(let a of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(a))t.push(parseInt(a,10));else if(n=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=n;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let n=a;n!==o;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},152:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r),s=t(125),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:t(23).a,theme:l};function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,n){var t=e.length;return t>0&&e[t-1]===n?e:e.concat(n)},h=function(e,n){var t=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,t){var a=t.languages,r=t.style;return a&&!a.includes(n)||t.types.forEach((function(n){var t=d({},e[n],r);e[n]=t})),e}),a);return r.root=t,r.plain=d({},t,{backgroundColor:null}),r};function g(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}var x=function(e){function n(){for(var n=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];e.apply(this,t),p(this,"getThemeDict",(function(e){if(void 0!==n.themeDict&&e.theme===n.prevTheme&&e.language===n.prevLanguage)return n.themeDict;n.prevTheme=e.theme,n.prevLanguage=e.language;var t=e.theme?h(e.theme,e.language):void 0;return n.themeDict=t})),p(this,"getLineProps",(function(e){var t=e.key,a=e.className,r=e.style,o=d({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=n.getThemeDict(n.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?d({},o.style,r):r),void 0!==t&&(o.key=t),a&&(o.className+=" "+a),o})),p(this,"getStyleForToken",(function(e){var t=e.types,a=e.empty,r=t.length,o=n.getThemeDict(n.props);if(void 0!==o){if(1===r&&"plain"===t[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[t[0]];var s=a?{display:"inline-block"}:{},l=t.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),p(this,"getTokenProps",(function(e){var t=e.key,a=e.className,r=e.style,o=e.token,s=d({},g(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:n.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?d({},s.style,r):r),void 0!==t&&(s.key=t),a&&(s.className+=" "+a),s}))}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){var e=this.props,n=e.Prism,t=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=n.languages[t];return r({tokens:function(e){for(var n=[[]],t=[e],a=[0],r=[e.length],o=0,s=0,l=[],i=[l];s>-1;){for(;(o=a[s]++)<r[s];){var p=void 0,d=n[s],h=t[s][o];if("string"==typeof h?(d=s>0?d:["plain"],p=h):(d=u(d,h.type),h.alias&&(d=u(d,h.alias)),p=h.content),"string"==typeof p){var g=p.split(c),x=g.length;l.push({types:d,content:g[0]});for(var y=1;y<x;y++)m(l),i.push(l=[]),l.push({types:d,content:g[y]})}else s++,n.push(d),t.push(p),a.push(0),r.push(p.length)}s--,n.pop(),t.pop(),a.pop(),r.pop()}return m(l),i}(void 0!==s?n.tokenize(a,s,t):[a]),className:"prism-code language-"+t,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},n}(r.Component),y=t(150),f=t.n(y),b=t(151),v=t.n(b),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},w=t(139),z=t(126),S=function(){var e=Object(z.useThemeConfig)().prism,n=Object(w.a)().isDarkTheme,t=e.theme||k,a=e.darkTheme||t;return n?a:t},$=t(54),E=t.n($),j=/{([\d,-]+)}/,N=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var n={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},t=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+n[e].start+"\\s*("+t+")\\s*"+n[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},T=/(?:title=")(.*)(?:")/;n.a=function(e){var n=e.children,t=e.className,l=e.metastring,p=Object(z.useThemeConfig)().prism,d=Object(r.useState)(!1),c=d[0],m=d[1],u=Object(r.useState)(!1),h=u[0],g=u[1];Object(r.useEffect)((function(){g(!0)}),[]);var y=Object(r.useRef)(null),b=[],k="",w=S();if(Array.isArray(n)&&(n=n.join("")),l&&j.test(l)){var $=l.match(j)[1];b=v()($).filter((function(e){return e>0}))}l&&T.test(l)&&(k=l.match(T)[1]);var q=t&&t.replace(/language-/,"");!q&&p.defaultLanguage&&(q=p.defaultLanguage);var C=n.replace(/\n$/,"");if(0===b.length&&void 0!==q){for(var H,O="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"]);case"jsx":case"tsx":return N(["js","jsBlock","jsx"]);case"html":return N(["js","jsBlock","html"]);case"python":case"py":return N(["python"]);default:return N()}}(q),B=n.replace(/\n$/,"").split("\n"),I=0;I<B.length;){var R=I+1,A=B[I].match(L);if(null!==A){switch(A.slice(1).reduce((function(e,n){return e||n}),void 0)){case"highlight-next-line":O+=R+",";break;case"highlight-start":H=R;break;case"highlight-end":O+=H+"-"+(R-1)+","}B.splice(I,1)}else I+=1}b=v()(O),C=B.join("\n")}var P=function(){f()(C),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(x,Object(a.a)({},i,{key:String(h),theme:w,code:C,language:q}),(function(e){var n,t=e.className,r=e.style,l=e.tokens,i=e.getLineProps,p=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,k&&o.a.createElement("div",{style:r,className:E.a.codeBlockTitle},k),o.a.createElement("div",{className:E.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(t,E.a.codeBlock,"thin-scrollbar",(n={},n[E.a.codeBlockWithTitle]=k,n))},o.a.createElement("div",{className:E.a.codeBlockLines,style:r},l.map((function(e,n){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=i({line:e,key:n});return b.includes(n+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:n},t),e.map((function(e,n){return o.a.createElement("span",Object(a.a)({key:n},p({token:e,key:n})))})))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(E.a.copyButton),onClick:P},c?"Copied":"Copy")))}))}}}]);