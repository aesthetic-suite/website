---
title: Configuration
---

Aesthetic provides a handful of options for customization through the `configure()` method. If you
would like to customize these options, import and call the method with an options object. This
customization should happen near the root of the application, _before_ any Aesthetic styled React
component is imported or rendered.

```ts title="setup.ts"
import { configure } from '@aesthetic/<integration>';

configure({
	defaultUnit: 'px',
});
```

## Options

The following options are currently supported. These options are based on the `@aesthetic/style`
package. Jump over to the [official documentation](../../packages/style/options.md) for expanded
information on them.

- `customProperties` (`PropertyHandlerMap`) - Mapping of property handlers to provide custom formats
  and functionality. Supported by
  [@aesthetic/addon-properties](https://www.npmjs.com/package/@aesthetic/addon-properties).
- `defaultUnit` (`Unit | (prop: string) => Unit`) - A unit to append to numerical values. Can be a
  string or a function that returns a string. Defaults to `px`.
- `deterministicClasses` (`boolean`) - Generate class names using a deterministic hash (`c1sjakp`)
  instead of an auto-incremented value (`a1`). Useful for scenarios like unit tests. Defaults to
  `false`.
- `directionConverter` - (`DirectionConverter`) - Function that converts a property or value to
  their opposite direction. Supported by
  [@aesthetic/addon-direction](https://www.npmjs.com/package/@aesthetic/addon-direction).
- `vendorPrefixer` (`VendorPrefixer`) - Apply vendor prefixes to properties and values that require
  it. We prefix features for browsers with >= 1% market share. Supported by
  [@aesthetic/addon-vendor](../../packages/addon-vendor).

## Addons

These addons are typically used in conjuction with options.

- [@aesthetic/addon-direction](https://www.npmjs.com/package/@aesthetic/addon-direction)
- [@aesthetic/addon-properties](https://www.npmjs.com/package/@aesthetic/addon-properties)
- [@aesthetic/addon-vendor](../../packages/addon-vendor)
