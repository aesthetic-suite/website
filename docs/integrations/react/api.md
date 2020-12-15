---
title: API
---

## Providers

### `DirectionProvider`

Provides a direction to all children using context. Accepts the following optional props.

- `direction` (`ltr | rtl`) - Explicit direction to use. Should not be used with `value`.
- `inline` (`boolean`) - Render an inline element instead of block.
- `value` (`string`) - Locale aware string to deduce the direction from. Should not be used with
  `direction`.
- `wrapper` (`ReactElement`) - Element to wrap the children in. _(Required)_

```tsx
import { DirectionProvider } from '@aesthetic/react';

<DirectionProvider direction="rtl" wrapper={<div />}>
  <Component />
</DirectionProvider>;
```

### `ThemeProvider`

Provides the current theme to the entire application and must be rendered at the root. Accepts the
following optional props.

- `name` (`string`) - Explicit name of a theme to provide. If undefined, will automatically
  determine the best theme.

```tsx
import { ThemeProvider } from '@aesthetic/react';

<ThemeProvider>
  <App />
</ThemeProvider>;
```

### `ContextualThemeProvider`

Provides a theme to a target component tree and will override the root theme. Requires the following
prop.

- `name` (`string`) - Explicit name of a theme to provide.
- `wrapper` (`ReactElement`) - Element to wrap the children in. _(Required)_

```tsx
import { ThemeProvider, ContextualThemeProvider } from '@aesthetic/react';

<ThemeProvider>
  <Component />

  <ContextualThemeProvider name="night" wrapper={<div />}>
    <Component />
  </ContextualThemeProvider>
</ThemeProvider>;
```

## Hooks

### `useDirection`

> useDirection(): Direction

Returns the current direction, either `ltr` or `rtl`.

```tsx
import { useDirection } from '@aesthetic/react';

export default function Component() {
  const direction = useDirection();

  return <div />;
}
```

### `useStyles`

> useStyles(styleSheet: LocalSheet): ClassNameGenerator

Requires a local style sheet and returns a function to use for class name generation.

```tsx
import { useStyles } from '@aesthetic/react';
import styleSheet from './styles';

export default function Component() {
  const cx = useStyles(styleSheet);

  return <div className={cx('element')} />;
}
```

### `useTheme`

> useTheme(): Theme

Returns the current theme or throws an error.

```tsx
import { useTheme } from '@aesthetic/react';

export default function Component() {
  const theme = useTheme();

  return <div />;
}
```

## HOCs

### `withDirection`

> withDirection()(component: React.ComponentType): React.FunctionComponent

Wraps a component to pass the current direction as a `direction` prop.

```tsx
import { withDirection, WithDirectionWrappedProps } from '@aesthetic/react';

function Component({ direction }: WithDirectionWrappedProps) {
  return <div />;
}

export default withDirection()(Component);
```

### `withStyles`

> withStyles(styleSheet: LocalSheet)(component: React.ComponentType): React.FunctionComponent

Wraps a component with a local style sheet to pass a `cx` prop to use for class name generation.

```tsx
import { withStyles, WithStylesWrappedProps } from '@aesthetic/react';
import styleSheet from './styles';

function Component({ cx }: WithStylesWrappedProps) {
  return <div className={cx('element')} />;
}

export default withStyles(styleSheet)(Component);
```

### `withTheme`

> withTheme()(component: React.ComponentType): React.FunctionComponent

Wraps a component to pass the current theme as a `theme` prop.

```tsx
import { withTheme, WithThemeWrappedProps } from '@aesthetic/react';

function Component({ theme }: WithThemeWrappedProps) {
  return <div />;
}

export default withTheme()(Component);
```

## Other

### `createStyled`

> createStyled(type: React.ElementType | React.ComponentType, styleSheet: LocalBlock |
> LocalSheetFactory): StyledComponent

Creates and returns a styled component using the provided style sheet.

```tsx
import { createStyled } from '@aesthetic/react';

const Button = createStyled('button', (css) => ({
  display: 'inline-flex',
  textAlign: 'center',
  padding: css.var('spacing-md'),
}));

const BlockButton = createStyled(Button, {
  display: 'flex',
  width: '100%',
});
```
