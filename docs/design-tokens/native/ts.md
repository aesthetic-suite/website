---
title: JavaScript/TypeScript
sidebar_label: JS/TS
---

The following [React Native](https://reactnative.dev/) format is provided when compiling design
tokens to JavaScript using `native-js`, or TypeScript using `native-ts`. It utilizes exported
constant variables for reusability. This format is based on the [web-js/ts](../web/ts) format, with
the following differences:

- Unit based values are literal numbers instead of being suffixed with `px` (or another unit). This
  matches how React Native handles
  [unit based props](https://reactnative.dev/docs/view-style-props). For example:

```ts
export const border: BorderTokens = {
  sm: {
    radius: 1.5,
    width: 0,
  },
  df: {
    radius: 3,
    width: 1,
  },
  lg: {
    radius: 4.5,
    width: 2,
  },
};
```

- Since React Native supports both iOS and Android, we inject some platform conditionals within the
  generated system to support both platforms. For example:

```ts
const systemFont = Platform.OS === 'ios' ? 'SF Pro' : 'sans-serif';

const monospaceFont = Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace';
```

> Please refer to the [web based format](../web/ts) for more information on how to use this format.
