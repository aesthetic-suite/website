---
title: Vendor prefixes
sidebar_label: Overview
---

The `@aesthetic/addon-vendor` package provides a custom runtime for
[vendor prefixing](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) properties,
values, value functions, and selectors. With this approach, we have full control of the
implementation and browser targets.

## Examples

Without the vendor prefixing addon, the properties are rendered as-is.

```ts
engine.renderRule({
	appearance: 'none',
	minWidth: 'fit-content',
});
```

```css
.a {
	appearance: none;
}
.b {
	min-width: fit-content;
}
```

With the vendor prefixing addon [installed and configured](./addon-vendor/setup.mdx), the properties
are rendered with any applicable prefixes.

```ts
engine.renderRule(
	{
		appearance: 'none',
		minWidth: 'fit-content',
	},
	{ vendor: true },
);
```

```css
.a {
	-ms-appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
}
.b {
	min-width: -webkit-fit-content;
	min-width: fit-content;
}
```

> What if prefixes are missing for a feature I would expect them to, like CSS flexbox? In most
> cases, the feature in question is actually fully supported by our browser targets, so vendor
> prefixes are not necessary! When in doubt, verify on
> [caniuse.com](https://caniuse.com/#search=flexbox).

## Minimum browser support

Currently, features and browsers that are _not dead_ and have _>= 1% market share_ will apply vendor
prefixes. This list is as follows.

- Chrome v77
- Chrome for Android v78
- Edge v18
- Firefox v70
- Internet Explorer v11
- Safari v13
- Safari for iOS v12.4
- Samsung Internet v10.1
- UC Browser for Android v12.12
