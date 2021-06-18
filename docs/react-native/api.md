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

```tsx
import { DirectionProvider } from '@aesthetic/react-native';

<DirectionProvider direction="rtl">
  <Component />
</DirectionProvider>;
```

### `ThemeProvider`

Provides the current theme to the entire application and must be rendered at the root. Accepts the
following optional props.

- `name` (`string`) - Explicit name of a theme to provide. If undefined, will automatically
  determine the best theme.

```tsx
import { ThemeProvider } from '@aesthetic/react-native';

<ThemeProvider>
  <App />
</ThemeProvider>;
```

### `ContextualThemeProvider`

Provides a theme to a target component tree and will override the root theme. Requires the following
prop.

- `name` (`string`) - Explicit name of a theme to provide.

```tsx
import { ThemeProvider, ContextualThemeProvider } from '@aesthetic/react-native';

<ThemeProvider>
  <Component />

  <ContextualThemeProvider name="night">
    <Component />
  </ContextualThemeProvider>
</ThemeProvider>;
```

> Renders a wrapping `View` under the hood.

## Hooks

### `useDirection`

> useDirection(): Direction

Returns the current direction, either `ltr` or `rtl`.

```tsx
import { View } from 'react-native';
import { useDirection } from '@aesthetic/react-native';

export default function Component() {
  const direction = useDirection();

  return <View />;
}
```

### `useStyles`

> useStyles(styleSheet: LocalSheet): StyleResultGenerator

Requires a local style sheet and returns a function to use for style sheet generation.

```tsx
import { View } from 'react-native';
import { useStyles } from '@aesthetic/react-native';
import styleSheet from './styles';

export default function Component() {
  const sx = useStyles(styleSheet);

  return <View style={sx('element')} />;
}
```

### `useTheme`

> useTheme(): Theme<NativeStyles\>

Returns the current theme or throws an error.

```tsx
import { View } from 'react-native';
import { useTheme } from '@aesthetic/react-native';

export default function Component() {
  const theme = useTheme();

  return <View />;
}
```

## HOCs

### `withDirection`

> withDirection()(component: React.ComponentType): React.FunctionComponent

Wraps a component to pass the current direction as a `direction` prop.

```tsx
import { withDirection, WithDirectionWrappedProps } from '@aesthetic/react-native';

function Component({ direction }: WithDirectionWrappedProps) {
  return <div />;
}

export default withDirection()(Component);
```

### `withStyles`

> withStyles(styleSheet: LocalSheet)(component: React.ComponentType): React.FunctionComponent

Wraps a component with a local style sheet to pass a `compose` prop (renamed to `sx`) to use for
style sheet composition.

```tsx
import { View, StyleProp } from 'react-native';
import { withStyles, WithStylesWrappedProps } from '@aesthetic/react-native';
import styleSheet from './styles';

function Component({ compose: sx }: WithStylesWrappedProps<'element'>) {
  return <View style={sx('element')} />;
}

export default withStyles(styleSheet)(Component);
```

### `withTheme`

> withTheme()(component: React.ComponentType): React.FunctionComponent

Wraps a component to pass the current theme as a `theme` prop.

```tsx
import { View } from 'react-native';
import { withTheme, WithThemeWrappedProps } from '@aesthetic/react-native';

function Component({ theme }: WithThemeWrappedProps) {
  return <View />;
}

export default withTheme()(Component);
```

## Other

### `createStyled`

> createStyled(type: React.ComponentType, styleSheet: NativeStyles | LocalSheetFactory):
> StyledComponent

Creates and returns a styled component using the provided style sheet.

```tsx
import { View } from 'react-native';
import { createStyled } from '@aesthetic/react-native';

const Button = createStyled(View, (css) => ({
  flex: 1,
  textAlign: 'center',
  padding: css.tokens.spacing.md,
}));

const BlockButton = createStyled(Button, {
  width: '100%',
});
```

### `style`

An alias for [createElementStyles](../dev/css-in-js/style-sheets/components).

### `styles`

An alias for [createComponentStyles](../dev/css-in-js/style-sheets/components).

### `styled`

An alias for [createStyled](#createStyled).

### `themeStyle`

An alias for [createThemeStyles](../dev/css-in-js/style-sheets/themes).
