---
title: themes.yaml
---

> Platforms: Android, iOS, Web

Themes are configured with a `themes` map in the `.aesthetic/<name>/themes.yaml` file, where the key
is the theme name, and the value is a configuration object of colors, palettes, and additional
settings.

## Color scheme

One such setting is `scheme`, which requires either "light" or "dark", and is utilized in color
scheme preference detection. This allows for the automatic detection of light or dark modes for a
user.

```yaml title="themes.yaml"
themes:
  default:
    scheme: light
```

## Color shades

For every [color](./language.md#colors) that's been defined in the design language, an associated
entry must exist within each theme under `colors.<name>`. A color supports a range of 10 hexcode
values (`00` - `90`) known as _shades_.

In a light color scheme, the `00` shade is the lightest color, while `90` is the darkest. This is
reversed for dark color schemes, where `00` is darkest, and `90` is lightest. In both schemes, the
`40` shade is the base "common" shade.

```yaml title="themes.yaml"
themes:
  default:
    scheme: light
    colors:
      blue:
        00: '#E3F2FD' # Lightest
        10: '#BBDEFB'
        20: '#90CAF9'
        30: '#64B5F6'
        40: '#42A5F5' # Base
        50: '#2196F3'
        60: '#1E88E5'
        70: '#1976D2'
        80: '#1565C0'
        90: '#0D47A1' # Darkest
```

## Palettes and states

Palettes are the defining feature of Aesthetic, as they enable true interoperability and backwards
compatibility with other Aestheic powered design systems. In Aesthetic, colors _are not_ directly
accessible to consumers, as colors are not deterministic between systems, but palettes are!

A palette is a collection of color references for both text, foreground (text on background) and
background colors, grouped by states and interactions. The available palettes are:

- `brand` - Organization or company brand color.
- `primary` - Primary color. Typically buttons, links, bars, active states, etc.
- `secondary` - Accent color. Provides emphasis and contrast to the primary color.
- `tertiary` - Additional complementary color for more variation.
- `neutral` - Whites, grays, blacks, etc that make up background, border, shadow, and other layout
  related pieces.
- `muted` - Disabled and empty like states.
- `warning` - State that warns the user of something minor.
- `danger` - State that indicates a destructive, atomic, or irreversible action.
- `negative` - State when something negative occurs, like errors or failures.
- `positive` - State when something positive occurs, like successful operations.

Hopefully you have a better understanding of all the palettes, so let's dive into the configuration.
Each palette contains the following settings, each of which requires a color + shade combination
value.

- `color` - The color range this palette is based on. Will make the color range available downstream
  under this palette.
- `text` - Text color when displayed on the document background (typically the `neutral` palette).
- `bg` - Background color that maps shades to 5 different states.
- `fg` - Text color that maps shades to 5 different states when displayed _on_ the background color
  (`bg`).

```yaml title="themes.yaml"
themes:
  default:
    scheme: light
    colors:
      blue: # 00-90 ...
      white: # 00-90 ...
    palettes:
      primary:
        color: blue
        text: blue.80
        bg:
          base: blue.40
          focused: blue.50
          hovered: blue.60
          selected: blue.50
          disabled: blue.30
        fg:
          base: white.50
          focused: white.60
          hovered: white.70
          selected: white.60
          disabled: white.40
      secondary:
        color: # ...
        text: # ...
        bg: # ...
        fg: # ...
      tertiary:
        # ...
```

In the example above, we mentioned 5 different states. In order of priority and specificity, they
are:

- `base` - The base palette color. Defaults to shade `40`.
- `focused` - State when a target is focused through user interaction. Defaults to shade `50`.
  _(optional)_
- `hovered` - State when a target is being hovered. Defaults to shade `60`. _(optional)_
- `selected` - State when a target is selected, active, expanded, etc. Defaults to shade `50`.
  _(optional)_
- `disabled` - State when a target is disabled. Should override all previous states. Defaults to
  shade `30`. _(optional)_

All of the states are optional, and will default to the shade references above. If you prefer to
always use the defaults, a shorthand configuration is available, where the setting value can simply
be set to the color name. The above example can now be written as:

```yaml title="themes.yaml"
themes:
  default:
    scheme: light
    colors:
      # ...
    palettes:
      # Shorthand for `color`, `text`, `bg` as blue, and `fg` as yellow.
      primary:
        color: blue
        fg: yellow
      # Super shorthand for `color`, `text`, `bg` as red, and `fg` as white (implicit).
      secondary: red
```

> This may seem like a lot to configure, and it is, but it's thorough and covers many common and
> industry standard use cases. It also mitigates problems between light and dark themes.

## Contrast levels

While [color schemes](#color-scheme) offer a light or dark option, what about preferences for low or
high contrast colors? With the `contrast` setting, a theme can be marked as "low" or "high"
contrast, and will be utilized during the detection phase.

A contrast variant usually extends a base theme, as we want to use the same palette, but adjust the
colors. For example, say we have a "night" dark theme, and want to provide a vibrant high contrast
variant.

```yaml title="themes.yaml"
themes:
  night:
    scheme: dark
    colors:
      blue:
        # ...
        40: '#0984e3'
        # ...
    palettes:
      # ...
  nightHighContrast:
    extends: night
    contrast: high
    colors:
      blue:
        # ...
        40: '#0652DD'
        # ...
```

## Extending themes

Aesthetic also supports the concept of extending themes, where a theme (the child) can extend
another theme (the parent), to inherit all its colors, palettes, and settings. The child theme can
then define individual settings, instead of having to define them all.

To extend another theme, use the `extends` setting, which requires the parent theme's name. The
child theme object will deep merge with the parent theme object.

```yaml title="themes.yaml"
themes:
  day:
    scheme: light
    colors: # ...
    palettes: # ...
  # Only change a single setting
  dawn:
    extends: day
    palettes:
      primary:
        bg:
          hovered: red.50
```

## Constraints

Like the design language, themes also enforce the following constraints as the system currently
relies on fixed settings.

- 10 color shades (00, 10, 20, 30, 40 (default), 50, 60, 70, 80, 90)
- 10 palettes (brand, primary, secondary, tertiary, neutral/layout, muted, positive, warning,
  danger, negative)
- 5 palette states (base, hovered, selected, disabled, focused)
- Light scheme OR dark scheme
- High, low, OR normal contrast
