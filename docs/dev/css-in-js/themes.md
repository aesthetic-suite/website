---
title: Themes
---

Themes are an encapsulation of reusable variables for consistent styling, represented as a `Theme`
class.

## Registering themes

Themes can _only_ be accessed within a style sheet when registered into Aesthetic. We can achieve
this using the `registerTheme()` and `registerDefaultTheme()` methods, both of which require a
unique name and an optional [theme style sheet](./style-sheets/themes.md). A default theme can only
be defined twice, once for a light color scheme, the other for a dark color scheme.

```ts title="setup.ts"
import { registerTheme, registerDefaultTheme } from '@aesthetic/<integration>';
import dayTheme from './system/themes/day';
import nightTheme from './system/themes/night';
import twilightTheme from './system/themes/twilight';

registerDefaultTheme('day', dayTheme);
registerDefaultTheme('night', nightTheme);
registerTheme('twilight', twilightTheme);
```

> Registration should happen near the root of the application, _before_ any Aesthetic styled React
> component is imported or rendered.

## Changing themes

The currently active theme can be changed programmatically by calling the `changeTheme()` method
within in your application.

```ts
import { changeTheme } from '@aesthetic/<integration>';

changeTheme('twilight');
```
