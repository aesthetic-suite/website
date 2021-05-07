export const TS_FORMAT = `import {
  BorderTokens,
  BreakpointTokens,
  DepthTokens,
  HeadingTokens,
  ShadowTokens,
  SpacingTokens,
  TextTokens,
  TypographyToken,
} from '@aesthetic/system';

export const border: BorderTokens = {
  sm: {
    radius: '0.11rem', // 1.50px
    width: '0rem', // 0px
  },
  df: {
    radius: '0.21rem', // 3px
    width: '0.07rem', // 1px
  },
  lg: {
    radius: '0.32rem', // 4.50px
    width: '0.14rem', // 2px
  },
};

export const breakpoint: BreakpointTokens = {
  xs: {
    query: 'screen and (min-width: 45.71em)',
    querySize: 640,
    rootLineHeight: 1.33,
    rootTextSize: '14.94px',
  },
  sm: {
    query: 'screen and (min-width: 68.57em)',
    querySize: 960,
    rootLineHeight: 1.42,
    rootTextSize: '15.94px',
  },
  md: {
    query: 'screen and (min-width: 91.43em)',
    querySize: 1280,
    rootLineHeight: 1.52,
    rootTextSize: '17.01px',
  },
  lg: {
    query: 'screen and (min-width: 114.29em)',
    querySize: 1600,
    rootLineHeight: 1.62,
    rootTextSize: '18.15px',
  },
  xl: {
    query: 'screen and (min-width: 137.14em)',
    querySize: 1920,
    rootLineHeight: 1.73,
    rootTextSize: '19.36px',
  },
};

export const depth: DepthTokens = {
  content: 100,
  navigation: 1000,
  sheet: 1100,
  overlay: 1200,
  modal: 1300,
  toast: 1400,
  dialog: 1500,
  menu: 1600,
  tooltip: 1700,
};

export const heading: HeadingTokens = {
  l1: {
    letterSpacing: '0.25px',
    lineHeight: 1.5,
    size: '1.14rem', // 16px
  },
  l2: {
    letterSpacing: '0.33px',
    lineHeight: 1.69,
    size: '1.43rem', // 20px
  },
  l3: {
    letterSpacing: '0.44px',
    lineHeight: 1.9,
    size: '1.79rem', // 25px
  },
  l4: {
    letterSpacing: '0.59px',
    lineHeight: 2.14,
    size: '2.23rem', // 31.25px
  },
  l5: {
    letterSpacing: '0.79px',
    lineHeight: 2.4,
    size: '2.79rem', // 39px
  },
  l6: {
    letterSpacing: '1.05px',
    lineHeight: 2.7,
    size: '3.49rem', // 48.80px
  },
};

export const shadow: ShadowTokens = {
  xs: {
    x: '0rem', // 0px
    y: '0.14rem', // 2px
    blur: '0.14rem', // 2px
    spread: '0rem', // 0px
  },
  sm: {
    x: '0rem', // 0px
    y: '0.23rem', // 3.24px
    blur: '0.27rem', // 3.75px
    spread: '0rem', // 0px
  },
  md: {
    x: '0rem', // 0px
    y: '0.37rem', // 5.24px
    blur: '0.39rem', // 5.50px
    spread: '0rem', // 0px
  },
  lg: {
    x: '0rem', // 0px
    y: '0.61rem', // 8.47px
    blur: '0.52rem', // 7.25px
    spread: '0rem', // 0px
  },
  xl: {
    x: '0rem', // 0px
    y: '0.98rem', // 13.71px
    blur: '0.64rem', // 9px
    spread: '0rem', // 0px
  },
};

export const spacing: SpacingTokens = {
  xs: '0.31rem', // 4.38px
  sm: '0.63rem', // 8.75px
  df: '1.25rem', // 17.50px
  md: '2.50rem', // 35px
  lg: '3.75rem', // 52.50px
  xl: '5rem', // 70px
  type: 'vertical-rhythm',
  unit: 17.5,
};

export const text: TextTokens = {
  sm: {
    lineHeight: 1.25,
    size: '0.89rem', // 12.45px
  },
  df: {
    lineHeight: 1.25,
    size: '1rem', // 14px
  },
  lg: {
    lineHeight: 1.25,
    size: '1.13rem', // 15.75px
  },
};

export const typography: TypographyToken = {
  font: {
    heading: 'Roboto',
    locale: {},
    monospace: '"Lucida Console", Monaco, monospace',
    text: '"Lucida Console", Monaco, monospace',
    system:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  rootLineHeight: 1.25,
  rootTextSize: '14px',
};`;

export const TSX_FORMAT = `import { Design } from '@aesthetic/system';

export default new Design('example', {
  border: {
    sm: {
      radius: '0.11rem', // 1.50px
      width: '0rem', // 0px
    },
    df: {
      radius: '0.21rem', // 3px
      width: '0.07rem', // 1px
    },
    lg: {
      radius: '0.32rem', // 4.50px
      width: '0.14rem', // 2px
    },
  },
  breakpoint: {
    xs: {
      query: 'screen and (min-width: 45.71em)',
      querySize: 640,
      rootLineHeight: 1.33,
      rootTextSize: '14.94px',
    },
    sm: {
      query: 'screen and (min-width: 68.57em)',
      querySize: 960,
      rootLineHeight: 1.42,
      rootTextSize: '15.94px',
    },
    md: {
      query: 'screen and (min-width: 91.43em)',
      querySize: 1280,
      rootLineHeight: 1.52,
      rootTextSize: '17.01px',
    },
    lg: {
      query: 'screen and (min-width: 114.29em)',
      querySize: 1600,
      rootLineHeight: 1.62,
      rootTextSize: '18.15px',
    },
    xl: {
      query: 'screen and (min-width: 137.14em)',
      querySize: 1920,
      rootLineHeight: 1.73,
      rootTextSize: '19.36px',
    },
  },
  heading: {
    l1: {
      letterSpacing: '0.25px',
      lineHeight: 1.5,
      size: '1.14rem', // 16px
    },
    l2: {
      letterSpacing: '0.33px',
      lineHeight: 1.69,
      size: '1.43rem', // 20px
    },
    l3: {
      letterSpacing: '0.44px',
      lineHeight: 1.9,
      size: '1.79rem', // 25px
    },
    l4: {
      letterSpacing: '0.59px',
      lineHeight: 2.14,
      size: '2.23rem', // 31.25px
    },
    l5: {
      letterSpacing: '0.79px',
      lineHeight: 2.4,
      size: '2.79rem', // 39px
    },
    l6: {
      letterSpacing: '1.05px',
      lineHeight: 2.7,
      size: '3.49rem', // 48.80px
    },
  },
  shadow: {
    xs: {
      x: '0rem', // 0px
      y: '0.14rem', // 2px
      blur: '0.14rem', // 2px
      spread: '0rem', // 0px
    },
    sm: {
      x: '0rem', // 0px
      y: '0.23rem', // 3.24px
      blur: '0.27rem', // 3.75px
      spread: '0rem', // 0px
    },
    md: {
      x: '0rem', // 0px
      y: '0.37rem', // 5.24px
      blur: '0.39rem', // 5.50px
      spread: '0rem', // 0px
    },
    lg: {
      x: '0rem', // 0px
      y: '0.61rem', // 8.47px
      blur: '0.52rem', // 7.25px
      spread: '0rem', // 0px
    },
    xl: {
      x: '0rem', // 0px
      y: '0.98rem', // 13.71px
      blur: '0.64rem', // 9px
      spread: '0rem', // 0px
    },
  },
  spacing: {
    xs: '0.31rem', // 4.38px
    sm: '0.63rem', // 8.75px
    df: '1.25rem', // 17.50px
    md: '2.50rem', // 35px
    lg: '3.75rem', // 52.50px
    xl: '5rem', // 70px
    type: 'vertical-rhythm',
    unit: 17.5,
  },
  text: {
    sm: {
      lineHeight: 1.25,
      size: '0.89rem', // 12.45px
    },
    df: {
      lineHeight: 1.25,
      size: '1rem', // 14px
    },
    lg: {
      lineHeight: 1.25,
      size: '1.13rem', // 15.75px
    },
  },
  typography: {
    font: {
      heading: 'Roboto',
      locale: {},
      monospace: '"Lucida Console", Monaco, monospace',
      text: 'Roboto',
      system:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    rootLineHeight: 1.25,
    rootTextSize: '14px',
  },
});`;

export const CSS_FORMAT = `:root {
  --border-sm-radius: 0.11rem; /* 1.50px */
  --border-sm-width: 0rem; /* 0px */
  --border-df-radius: 0.21rem; /* 3px */
  --border-df-width: 0.07rem; /* 1px */
  --border-lg-radius: 0.32rem; /* 4.50px */
  --border-lg-width: 0.14rem; /* 2px */

  --breakpoint-xs-query: 'screen and (min-width: 45.71em)';
  --breakpoint-xs-query-size: 640;
  --breakpoint-xs-root-line-height: 1.33;
  --breakpoint-xs-root-text-size: 14.94px;
  --breakpoint-sm-query: 'screen and (min-width: 68.57em)';
  --breakpoint-sm-query-size: 960;
  --breakpoint-sm-root-line-height: 1.42;
  --breakpoint-sm-root-text-size: 15.94px;
  --breakpoint-md-query: 'screen and (min-width: 91.43em)';
  --breakpoint-md-query-size: 1280;
  --breakpoint-md-root-line-height: 1.52;
  --breakpoint-md-root-text-size: 17.01px;
  --breakpoint-lg-query: 'screen and (min-width: 114.29em)';
  --breakpoint-lg-query-size: 1600;
  --breakpoint-lg-root-line-height: 1.62;
  --breakpoint-lg-root-text-size: 18.15px;
  --breakpoint-xl-query: 'screen and (min-width: 137.14em)';
  --breakpoint-xl-query-size: 1920;
  --breakpoint-xl-root-line-height: 1.73;
  --breakpoint-xl-root-text-size: 19.36px;

  --depth-content: 100;
  --depth-navigation: 1000;
  --depth-sheet: 1100;
  --depth-overlay: 1200;
  --depth-modal: 1300;
  --depth-toast: 1400;
  --depth-dialog: 1500;
  --depth-menu: 1600;
  --depth-tooltip: 1700;

  --heading-l1-letter-spacing: 0.25px;
  --heading-l1-line-height: 1.5;
  --heading-l1-size: 1.14rem; /* 16px */
  --heading-l2-letter-spacing: 0.33px;
  --heading-l2-line-height: 1.69;
  --heading-l2-size: 1.43rem; /* 20px */
  --heading-l3-letter-spacing: 0.44px;
  --heading-l3-line-height: 1.9;
  --heading-l3-size: 1.79rem; /* 25px */
  --heading-l4-letter-spacing: 0.59px;
  --heading-l4-line-height: 2.14;
  --heading-l4-size: 2.23rem; /* 31.25px */
  --heading-l5-letter-spacing: 0.79px;
  --heading-l5-line-height: 2.4;
  --heading-l5-size: 2.79rem; /* 39px */
  --heading-l6-letter-spacing: 1.05px;
  --heading-l6-line-height: 2.7;
  --heading-l6-size: 3.49rem; /* 48.80px */

  --shadow-xs-x: 0rem; /* 0px */
  --shadow-xs-y: 0.14rem; /* 2px */
  --shadow-xs-blur: 0.14rem; /* 2px */
  --shadow-xs-spread: 0rem; /* 0px */
  --shadow-sm-x: 0rem; /* 0px */
  --shadow-sm-y: 0.23rem; /* 3.24px */
  --shadow-sm-blur: 0.27rem; /* 3.75px */
  --shadow-sm-spread: 0rem; /* 0px */
  --shadow-md-x: 0rem; /* 0px */
  --shadow-md-y: 0.37rem; /* 5.24px */
  --shadow-md-blur: 0.39rem; /* 5.50px */
  --shadow-md-spread: 0rem; /* 0px */
  --shadow-lg-x: 0rem; /* 0px */
  --shadow-lg-y: 0.61rem; /* 8.47px */
  --shadow-lg-blur: 0.52rem; /* 7.25px */
  --shadow-lg-spread: 0rem; /* 0px */
  --shadow-xl-x: 0rem; /* 0px */
  --shadow-xl-y: 0.98rem; /* 13.71px */
  --shadow-xl-blur: 0.64rem; /* 9px */
  --shadow-xl-spread: 0rem; /* 0px */

  --spacing-xs: 0.31rem; /* 4.38px */
  --spacing-sm: 0.63rem; /* 8.75px */
  --spacing-df: 1.25rem; /* 17.50px */
  --spacing-md: 2.5rem; /* 35px */
  --spacing-lg: 3.75rem; /* 52.50px */
  --spacing-xl: 5rem; /* 70px */
  --spacing-unit: 17.5;

  --text-sm-line-height: 1.25;
  --text-sm-size: 0.89rem; /* 12.45px */
  --text-df-line-height: 1.25;
  --text-df-size: 1rem; /* 14px */
  --text-lg-line-height: 1.25;
  --text-lg-size: 1.13rem; /* 15.75px */

  --typography-font-heading: 'Roboto';
  --typography-font-monospace: '"Lucida Console", Monaco, monospace';
  --typography-font-text: 'Roboto';
  --typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  --typography-root-line-height: 1.25;
  --typography-root-text-size: 14px;
}`;

export const SCSS_FORMAT = `$border-sm-radius: 0.11rem !default; // 1.50px
$border-sm-width: 0rem !default; // 0px
$border-df-radius: 0.21rem !default; // 3px
$border-df-width: 0.07rem !default; // 1px
$border-lg-radius: 0.32rem !default; // 4.50px
$border-lg-width: 0.14rem !default; // 2px

$breakpoint-xs-query: 'screen and (min-width: 45.71em)' !default;
$breakpoint-xs-query-size: 640 !default;
$breakpoint-xs-root-line-height: 1.33 !default;
$breakpoint-xs-root-text-size: 14.94px !default;
$breakpoint-sm-query: 'screen and (min-width: 68.57em)' !default;
$breakpoint-sm-query-size: 960 !default;
$breakpoint-sm-root-line-height: 1.42 !default;
$breakpoint-sm-root-text-size: 15.94px !default;
$breakpoint-md-query: 'screen and (min-width: 91.43em)' !default;
$breakpoint-md-query-size: 1280 !default;
$breakpoint-md-root-line-height: 1.52 !default;
$breakpoint-md-root-text-size: 17.01px !default;
$breakpoint-lg-query: 'screen and (min-width: 114.29em)' !default;
$breakpoint-lg-query-size: 1600 !default;
$breakpoint-lg-root-line-height: 1.62 !default;
$breakpoint-lg-root-text-size: 18.15px !default;
$breakpoint-xl-query: 'screen and (min-width: 137.14em)' !default;
$breakpoint-xl-query-size: 1920 !default;
$breakpoint-xl-root-line-height: 1.73 !default;
$breakpoint-xl-root-text-size: 19.36px !default;

$depth-content: 100 !default;
$depth-navigation: 1000 !default;
$depth-sheet: 1100 !default;
$depth-overlay: 1200 !default;
$depth-modal: 1300 !default;
$depth-toast: 1400 !default;
$depth-dialog: 1500 !default;
$depth-menu: 1600 !default;
$depth-tooltip: 1700 !default;

$heading-l1-letter-spacing: 0.25px !default;
$heading-l1-line-height: 1.5 !default;
$heading-l1-size: 1.14rem !default; // 16px
$heading-l2-letter-spacing: 0.33px !default;
$heading-l2-line-height: 1.69 !default;
$heading-l2-size: 1.43rem !default; // 20px
$heading-l3-letter-spacing: 0.44px !default;
$heading-l3-line-height: 1.9 !default;
$heading-l3-size: 1.79rem !default; // 25px
$heading-l4-letter-spacing: 0.59px !default;
$heading-l4-line-height: 2.14 !default;
$heading-l4-size: 2.23rem !default; // 31.25px
$heading-l5-letter-spacing: 0.79px !default;
$heading-l5-line-height: 2.4 !default;
$heading-l5-size: 2.79rem !default; // 39px
$heading-l6-letter-spacing: 1.05px !default;
$heading-l6-line-height: 2.7 !default;
$heading-l6-size: 3.49rem !default; // 48.80px

$shadow-xs-x: 0rem !default; // 0px
$shadow-xs-y: 0.14rem !default; // 2px
$shadow-xs-blur: 0.14rem !default; // 2px
$shadow-xs-spread: 0rem !default; // 0px
$shadow-sm-x: 0rem !default; // 0px
$shadow-sm-y: 0.23rem !default; // 3.24px
$shadow-sm-blur: 0.27rem !default; // 3.75px
$shadow-sm-spread: 0rem !default; // 0px
$shadow-md-x: 0rem !default; // 0px
$shadow-md-y: 0.37rem !default; // 5.24px
$shadow-md-blur: 0.39rem !default; // 5.50px
$shadow-md-spread: 0rem !default; // 0px
$shadow-lg-x: 0rem !default; // 0px
$shadow-lg-y: 0.61rem !default; // 8.47px
$shadow-lg-blur: 0.52rem !default; // 7.25px
$shadow-lg-spread: 0rem !default; // 0px
$shadow-xl-x: 0rem !default; // 0px
$shadow-xl-y: 0.98rem !default; // 13.71px
$shadow-xl-blur: 0.64rem !default; // 9px
$shadow-xl-spread: 0rem !default; // 0px

$spacing-xs: 0.31rem !default; // 4.38px
$spacing-sm: 0.63rem !default; // 8.75px
$spacing-df: 1.25rem !default; // 17.50px
$spacing-md: 2.5rem !default; // 35px
$spacing-lg: 3.75rem !default; // 52.50px
$spacing-xl: 5rem !default; // 70px
$spacing-unit: 17.5 !default;

$text-sm-line-height: 1.25 !default;
$text-sm-size: 0.89rem !default; // 12.45px
$text-df-line-height: 1.25 !default;
$text-df-size: 1rem !default; // 14px
$text-lg-line-height: 1.25 !default;
$text-lg-size: 1.13rem !default; // 15.75px

$typography-font-heading: 'Roboto' !default;
$typography-font-monospace: '"Lucida Console", Monaco, monospace' !default;
$typography-font-text: 'Roboto' !default;
$typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' !default;
$typography-root-line-height: 1.25 !default;
$typography-root-text-size: 14px !default;`;

export const LESS_FORMAT = `@border-sm-radius: 0.11rem; // 1.50px
@border-sm-width: 0rem; // 0px
@border-df-radius: 0.21rem; // 3px
@border-df-width: 0.07rem; // 1px
@border-lg-radius: 0.32rem; // 4.50px
@border-lg-width: 0.14rem; // 2px

@breakpoint-xs-query: 'screen and (min-width: 45.71em)';
@breakpoint-xs-query-size: 640;
@breakpoint-xs-root-line-height: 1.33;
@breakpoint-xs-root-text-size: 14.94px;
@breakpoint-sm-query: 'screen and (min-width: 68.57em)';
@breakpoint-sm-query-size: 960;
@breakpoint-sm-root-line-height: 1.42;
@breakpoint-sm-root-text-size: 15.94px;
@breakpoint-md-query: 'screen and (min-width: 91.43em)';
@breakpoint-md-query-size: 1280;
@breakpoint-md-root-line-height: 1.52;
@breakpoint-md-root-text-size: 17.01px;
@breakpoint-lg-query: 'screen and (min-width: 114.29em)';
@breakpoint-lg-query-size: 1600;
@breakpoint-lg-root-line-height: 1.62;
@breakpoint-lg-root-text-size: 18.15px;
@breakpoint-xl-query: 'screen and (min-width: 137.14em)';
@breakpoint-xl-query-size: 1920;
@breakpoint-xl-root-line-height: 1.73;
@breakpoint-xl-root-text-size: 19.36px;

@depth-content: 100;
@depth-navigation: 1000;
@depth-sheet: 1100;
@depth-overlay: 1200;
@depth-modal: 1300;
@depth-toast: 1400;
@depth-dialog: 1500;
@depth-menu: 1600;
@depth-tooltip: 1700;

@heading-l1-letter-spacing: 0.25px;
@heading-l1-line-height: 1.5;
@heading-l1-size: 1.14rem; // 16px
@heading-l2-letter-spacing: 0.33px;
@heading-l2-line-height: 1.69;
@heading-l2-size: 1.43rem; // 20px
@heading-l3-letter-spacing: 0.44px;
@heading-l3-line-height: 1.9;
@heading-l3-size: 1.79rem; // 25px
@heading-l4-letter-spacing: 0.59px;
@heading-l4-line-height: 2.14;
@heading-l4-size: 2.23rem; // 31.25px
@heading-l5-letter-spacing: 0.79px;
@heading-l5-line-height: 2.4;
@heading-l5-size: 2.79rem; // 39px
@heading-l6-letter-spacing: 1.05px;
@heading-l6-line-height: 2.7;
@heading-l6-size: 3.49rem; // 48.80px

@shadow-xs-x: 0rem; // 0px
@shadow-xs-y: 0.14rem; // 2px
@shadow-xs-blur: 0.14rem; // 2px
@shadow-xs-spread: 0rem; // 0px
@shadow-sm-x: 0rem; // 0px
@shadow-sm-y: 0.23rem; // 3.24px
@shadow-sm-blur: 0.27rem; // 3.75px
@shadow-sm-spread: 0rem; // 0px
@shadow-md-x: 0rem; // 0px
@shadow-md-y: 0.37rem; // 5.24px
@shadow-md-blur: 0.39rem; // 5.50px
@shadow-md-spread: 0rem; // 0px
@shadow-lg-x: 0rem; // 0px
@shadow-lg-y: 0.61rem; // 8.47px
@shadow-lg-blur: 0.52rem; // 7.25px
@shadow-lg-spread: 0rem; // 0px
@shadow-xl-x: 0rem; // 0px
@shadow-xl-y: 0.98rem; // 13.71px
@shadow-xl-blur: 0.64rem; // 9px
@shadow-xl-spread: 0rem; // 0px

@spacing-xs: 0.31rem; // 4.38px
@spacing-sm: 0.63rem; // 8.75px
@spacing-df: 1.25rem; // 17.50px
@spacing-md: 2.5rem; // 35px
@spacing-lg: 3.75rem; // 52.50px
@spacing-xl: 5rem; // 70px
@spacing-unit: 17.5;

@text-sm-line-height: 1.25;
@text-sm-size: 0.89rem; // 12.45px
@text-df-line-height: 1.25;
@text-df-size: 1rem; // 14px
@text-lg-line-height: 1.25;
@text-lg-size: 1.13rem; // 15.75px

@typography-font-heading: 'Roboto';
@typography-font-monospace: '"Lucida Console", Monaco, monospace';
@typography-font-text: 'Roboto';
@typography-font-system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
@typography-root-line-height: 1.25;
@typography-root-text-size: 14px;`;

export const YAML_FIXED_CONFIG = `# TYPOGRAPHY
typography:
  # Font family for all body text and headings. Defaults to the platform "system" font.
  # Can customize text, heading, monospace, and locale fonts individually by using a map.
  font: system

  # Default text sizes and line heights, with "small" and "large" sizes being automatically
  # calculated using modular scale. The default text size is used as the "root font size".
  # Can customize default, small, and large sizes individually by using a map.
  text:
    small:
      size: 12.45
      lineHeight: 1.25
    default:
      size: 14
      lineHeight: 1.25
    large:
      size: 15.75
      lineHeight: 1.25

  # Level 6 heading size, line height, and letter spacing. Levels 5-1 are automatically
  # calculated by incrementing upwards using module scale.
  # Can customize each level individually by using a map.
  heading:
    level1:
      size: 16
      lineHeight: 1.5
      letterSpacing: 0.25
    level2:
      size: 20
      lineHeight: 1.69
      letterSpacing: 0.33
    level3:
      size: 25
      lineHeight: 1.9
      letterSpacing: 0.44
    level4:
      size: 31.25
      lineHeight: 2.14
      letterSpacing: 0.59
    level5:
      size: 39
      lineHeight: 2.4
      letterSpacing: 0.79
    level6:
      size: 48.8
      lineHeight: 2.7
      letterSpacing: 1.05

# RESPONSIVE
responsive:
  # A list of 5 breakpoint units to target for device sizes.
  breakpoints:
    xs: 640
    sm: 960
    md: 1280
    lg: 1600
    xl: 1920

  # Scaling factor to modify the text and line height for each breakpoint.
  textScale: minor-second
  lineHeightScale: minor-second

# SPACING
spacing:
  # The type of algorithm to use when calculating spacing and measurement tokens.
  # Accepts "vertical-rhythm" or "unit".
  type: vertical-rhythm

  # The base unit size when type is "unit".
  unit: 8

  # Multipliers for each spacing size.
  multipliers:
    xs: 0.25
    sm: 0.5
    df: 1 # Default
    md: 2
    lg: 3
    xl: 4

# BORDERS
# Scales from the inside (default) out (small, large). Configure for default.
# Can customize small, default, and large sizes individually by using a map.
borders:
  small:
    radius: 1.5
    width: 0
  default:
    radius: 3
    width: 1
  large:
    radius: 4.5
    width: 2

# SHADOWS
# Scales from extra small to extra large. Configure for extra small.
# Can customize all sizes individually by using a map.
shadows:
  xsmall:
    x: 0
    y: 2
    blur: 2
    spread: 0
  small:
    x: 0
    y: 3.24
    blur: 3.75
    spread: 0
  medium:
    x: 0
    y: 5.24
    blur: 5.5
    spread: 0
  large:
    x: 0
    y: 8.47
    blur: 7.25
    spread: 0
  xlarge:
    x: 0
    y: 13.71
    blur: 9
    spread: 0

# COLORS
# List of color names that each theme must implement.
colors:
  - blue
  - brown
  - gray
  - green
  - pink
  - purple
  - red
  - yellow
`;

export const YAML_SCALED_CONFIG = `# TYPOGRAPHY
typography:
  # Font family for all body text and headings. Defaults to the platform "system" font.
  # Can customize text, heading, monospace, and locale fonts individually by using a map.
  font: system

  # Default text sizes and line heights, with "small" and "large" sizes being automatically
  # calculated using modular scale. The default text size is used as the "root font size".
  # Can customize default, small, and large sizes individually by using a map.
  text:
    size: 14
    sizeScale: major-second
    lineHeight: 1.25
    lineHeightScale: 0

  # Level 6 heading size, line height, and letter spacing. Levels 5-1 are automatically
  # calculated by incrementing upwards using module scale.
  # Can customize each level individually by using a map.
  heading:
    size: 16
    sizeScale: major-third
    lineHeight: 1.5
    lineHeightScale: major-second
    letterSpacing: 0.25
    letterSpacingScale: perfect-fourth

# RESPONSIVE
responsive:
  # A list of 5 breakpoint units to target for device sizes.
  breakpoints:
    - 640
    - 960
    - 1280
    - 1600
    - 1920

  # Scaling factor to modify the text and line height for each breakpoint.
  textScale: minor-second
  lineHeightScale: minor-second

# SPACING
spacing:
  # The type of algorithm to use when calculating spacing and measurement tokens.
  # Accepts "vertical-rhythm" or "unit".
  type: vertical-rhythm

  # The base unit size when type is "unit".
  unit: 8

  # Multipliers for each spacing size.
  multipliers:
    xs: 0.25
    sm: 0.5
    df: 1 # Default
    md: 2
    lg: 3
    xl: 4

# BORDERS
# Scales from the inside (default) out (small, large). Configure for default.
# Can customize small, default, and large sizes individually by using a map.
borders:
  # Controls the rounding of corners.
  radius: 3
  radiusScale: 1.5

  # Controls the width or thickness of the border.
  width: 1
  widthScale: 2

# SHADOWS
# Scales from extra small to extra large. Configure for extra small.
# Can customize all sizes individually by using a map.
shadows:
  # Offset the shadow on the X-axis (horizontally).
  x: 0
  xScale: 0

  # Offset the shadow on the Y-axis (vertically).
  y: 2
  yScale: golden-ratio

  # Controls blur and reduces sharpness, which causes it to be bigger and lighter.
  blur: 2
  blurScale: 1.75

  # Controls spread, which causes it to expand, grow, and get thicker.
  spread: 0
  spreadScale: 0

# COLORS
# List of color names that each theme must implement.
colors:
  - blue
  - brown
  - gray
  - green
  - pink
  - purple
  - red
  - yellow
`;
