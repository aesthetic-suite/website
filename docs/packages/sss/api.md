---
title: API
---

## `parse`

> parse(type: 'local' | 'global', styleSheet: LocalStyleSheet | GlobalStyleSheet, options:
> Partial<ParserOptions\>): void

Parsing supports the following options.

- `customProperties` - Mapping of custom property handlers.
- `onAttribute` - Emits for each HTML within a style object.
- `onBlock` - Emits for each style object.
- `onFallback` - Emits for each property within `@fallbacks` within a style object.
- `onFontFace` - Emits for each `@font-face` and each inlined into `fontFamily`.
- `onKeyframes` - Emits for each `@keyframes` and each inlined into `animationName`.
- `onMedia` - Emits for each `@media` within a style object.
- `onProperty` - Emits for each property within a style object.
- `onPseudo` - Emits for each pseudo element/class within a style object.
- `onSelector` - Emits for each selector within `@selectors` within a style object.
- `onSupports` - Emits for each `@supports` within a style object.
- `onVariable` - Emits for each CSS variable within a style object.
- `onVariant` - Emits for each variant within `@variants` within a style object.

### Local

```ts
import { parse } from '@aesthetic/sss';

parse('local', styles, {
  onBlock() {},
  onClass() {},
});
```

Supports the following additional events:

- `onClass` - Emits when a class name is passed instead of a style object.
- `onRule` - Emits when a rule is parsed. A rule represents each key-value pair in the style sheet.

### Global

```ts
import { parse } from '@aesthetic/sss';

parse('global', styles, {
  onBlock() {},
  onRoot() {},
});
```

Supports the following additional events:

- `onImport` - Emits for each `@import`.
- `onRoot` - Emits when `@root` is parsed as a local style sheet.
- `onRootVariables` - Emits for `@variables`.
