---
title: JavaScript/TypeScript (expanded)
sidebar_label: CSS-in-JS/TS
---

The following web format is provided when compiling design tokens for advanced solutions, like
CSS-in-JS. It currently supports 2 different targets:

- `web-tsx` for TypeScript.
- `web-jsx` for JavaScript (using ECMA modules).

This format is different from other CSS-like formats, and the base JS/TS format, as it _does not_
generate a standard list of variables (design tokens), but instead generates a design system and
theme hierarchy composed of classes. This layer is powered by the
[@aesthetic/system](../../packages/system.md) package.

For the remainder of this documentation, we'll use TypeScript as our format.

## File structure

During compilation, an `index.ts` file will be created based on the design system YAML configuration
file. Additional `themes/<name>.ts` files will be created for each theme configured in the YAML
file.

This would look something like the following:

```
styles/<target>/
├── themes/
│   ├── day.ts
│   └── night.ts
└── index.ts
```

> JavaScript formats will use `.js` file extensions.

## Variables

As mentioned above, a design system and multiple theme files are created. The design system file
defines primitive variables through an exported `Design` class instance. Each theme file defines
color and palette variables through an exported `Theme` class instance, while also inheriting all
primitive variables from the parent design system.

The compiled design system file looks something like the following:

```ts
import { Design } from '@aesthetic/system';

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
    lg: '2.50rem', // 35px
    xl: '3.75rem', // 52.50px
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
});
```

While the compiled theme files look loosely like this (removed some repetition for brevity):

```ts
import design from '..';

export default design.createTheme(
  {
    contrast: 'normal',
    scheme: 'light',
  },
  {
    palette: {
      brand: {
        color: {
          '00': '#eceff1',
          '10': '#cfd8dc',
          '20': '#b0bec5',
          '30': '#90a4ae',
          '40': '#78909c',
          '50': '#607d8b',
          '60': '#546e7a',
          '70': '#455a64',
          '80': '#37474f',
          '90': '#263238',
        },
        bg: {
          base: '#78909c',
          focused: '#607d8b',
          hovered: '#546e7a',
          selected: '#607d8b',
          disabled: '#90a4ae',
        },
        fg: {
          base: '#546e7a',
          focused: '#455a64',
          hovered: '#37474f',
          selected: '#455a64',
          disabled: '#607d8b',
        },
        text: '#37474f',
      },
      primary: {
        // ...
      },
      secondary: {
        // ...
      },
      tertiary: {
        // ...
      },
      neutral: {
        // ...
      },
      muted: {
        // ...
      },
      danger: {
        // ...
      },
      warning: {
        // ...
      },
      negative: {
        // ...
      },
      positive: {
        // ...
      },
    },
  },
);
```

## Usage

Variables can be accessed from both `Design` and `Theme` instances using the `tokens` class
property, which is a multidimensional object.

```ts
import theme from './styles/<target>/themes/day';

theme.tokens.heading.l3.size; // 1.79rem
theme.tokens.palette.brand.color['30']; // #90a4ae
```

There are far more advanced ways of utilizing design tokens. We suggest reading the documentation on
the [design system package](../../packages/system.md) itself for more examples.
