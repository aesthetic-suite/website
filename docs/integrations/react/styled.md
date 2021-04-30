---
title: Styled components
---

An alternative to [styling components](./styles.mdx) manually is to use the `createStyled()` API,
which creates a reusable component at the lowest level -- per element. This approach was made
popular by the [styled-components](https://styled-components.com) library.

The `createStyled()` function requires the name of an HTML element to render underneath the hood.
Using the example below, it would render a `<button />`. It also requires a partial
[style sheet](../../dev/css-in-js/style-sheets/components.md) (either an object or function), in
which a single element is styled, instead of multiple elements.

```tsx
import React from 'react';
import { createStyled } from '@aesthetic/react';

const Button = createStyled('button', (css) =>
  css.mixin('reset-button', {
    display: 'inline-flex',
    padding: css.var('spacing-df'),
    textAlign: 'center',
  }),
);

export default Button;
```

Because this API is based on existing HTML elements, all props for that specific element are
automatically supported and are typed correctly if using TypeScript.

```tsx
<Button type="submit" disabled={disabled} onClick={onClick}>
  Save
</Button>
```

## Variant styles

Styled components can support any number of customizable variations out of the box.

```tsx
const Button = createStyled('button', {
  display: 'inline-flex',
  padding: css.var('spacing-df'),
  textAlign: 'center',

  '@variants': {
    size: {
      sm: { fontSize: css.var('text-sm-size') },
      df: { fontSize: css.var('text-df-size') },
      lg: { fontSize: css.var('text-lg-size') },
    },
    palette: {
      brand: { backgroundColor: css.var('palette-brand-bg-base') },
      positive: { backgroundColor: css.var('palette-positive-bg-base') },
      warning: { backgroundColor: css.var('palette-warning-bg-base') },
    },
  },
});

// Set default props to define default variants
Button.defaultProps = {
  palette: 'brand',
};
```

You can then enable a variant by passing a prop with the name of a variant, and a value of one of
its types.

```tsx
<Button palette="brand" size="lg">
  Large branded button
</Button>
```

If using TypeScript, you'll need to type the variant props manually using the 2nd generic.

```tsx
interface ButtonVariants {
  size?: 'sm' | 'df' | 'lg';
  palette?: 'brand' | 'positive' | 'warning';
}

const Button = createStyled<'button', ButtonVariants>('button', {
  // ...
});
```

## Composing components

Styled components can also extend and compose around other styled components. When using this
approach, all styles and their variants are inherited.

```tsx
const Button = createStyled('button', (css) => ({
  display: 'inline-flex',
  textAlign: 'center',
  padding: css.var('spacing-df'),
}));

const BlockButton = createStyled(Button, {
  display: 'flex',
  width: '100%',
});

const PillBlockButton = createStyled(BlockButton, {
  borderRadius: '50%',
});
```
