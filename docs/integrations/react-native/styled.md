---
title: Styled components
---

An alternative to [styling components](./styles.mdx) manually is to use the `createStyled()` API,
which creates a reusable component at the lowest level. This approach was made popular by the
[styled-components](https://styled-components.com) library.

The `createStyled()` function requires a standard `View`, `Text`, etc, and a partial
[style sheet](../../dev/css-in-js/style-sheets/components.md) (either an object or function), in
which a single element is styled, instead of multiple elements.

```tsx
import React from 'react';
import { View } from 'react-native';
import { createStyled } from '@aesthetic/react-native';

const Box = createStyled(View, (theme) => ({
  flex: 1,
  justifyContent: 'space-between',
  padding: theme.tokens.spacing.df,
}));

export default Box;
```

Because this API is based on existing native components, all props for that specific component are
automatically supported and are typed correctly if using TypeScript.

```tsx
<Box renderToHardwareTextureAndroid accessibilityLabel="Descriptive label">
  Content
</Box>
```

## Variant styles

Styled components can support any number of customizable variations out of the box.

```tsx
const Box = createStyled(View, (theme) => ({
  flex: 1,
  justifyContent: 'space-between',
  padding: theme.tokens.spacing.df,

  '@variants': {
    'size:sm': { fontSize: theme.tokens.text.sm.size },
    'size:df': { fontSize: theme.tokens.text.df.size },
    'size:lg': { fontSize: theme.tokens.text.lg.size },

    'palette:brand': { backgroundColor: theme.tokens.palette.brand.bg.base },
    'palette:positive': { backgroundColor: theme.tokens.palette.positive.bg.base },
    'palette:warning': { backgroundColor: theme.tokens.palette.warning.bg.base },
  },
});

// Set default props to define default variants
Box.defaultProps = {
  palette: 'brand',
};
```

You can then enable a variant by passing a prop with the name of a variant, and a value of one of
its types.

```tsx
<Box palette="brand" size="lg">
  Large branded box
</Box>
```

If using TypeScript, you'll need to type the variant props manually using the 2nd generic.

```tsx
interface BoxVariants {
  size?: 'sm' | 'df' | 'lg';
  palette?: 'brand' | 'positive' | 'warning';
}

const Box = createStyled<typeof View, BoxVariants>(View, {
  // ...
});
```

## Composing components

Styled components can also extend and compose around other styled components. When using this
approach, all styles and their variants are inherited.

```tsx
const Button = createStyled(View, (theme) => ({
  flex: 1,
  alignItems: 'center',
  padding: theme.tokens.spacing.df,
}));

const BlockButton = createStyled(Button, {
  width: '100%',
});

const PillBlockButton = createStyled(BlockButton, {
  borderRadius: 100,
});
```
