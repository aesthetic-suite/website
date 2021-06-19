---
title: Render options
---

The following features can be enabled on case-by-case basis using render options.

## Deterministic classes

Since the style engine generates atomic CSS, the amount of class names required grows rather
quickly, as we need 1 class name for every 1 declaration. Class names use an autoincremented
approach, where we combine an alphabet character and a counter, to return names like `a`, `j4`, and
`z8`. However, the class name returned for a declaration cannot be guaranteed, as the order of
insertion may change, or the autoincremented value may differ, as shown below.

```ts
engine.renderDeclaration('margin', 0); // -> a
engine.renderDeclaration('display', 'flex'); // -> b

// Page refreshed and order changes
engine.renderDeclaration('display', 'flex'); // -> a
engine.renderDeclaration('margin', 0); // -> b
```

That being said, Aesthetic does support the concept of deterministic classes, where the same class
name will always be returned for the same declaration, regardless of insertion order or other
factors. Perfect for scenarios like unit testing. It does this by hashing the CSS rule itself, and
generating a unique class name based on the hash.

Deterministic classes can be enabled when [rendering](./api.md) by using the `deterministic` option.

```ts
engine.renderDeclaration('margin', 0, { deterministic: true }); // -> c1cpw2zw
engine.renderDeclaration('display', 'flex', { deterministic: true }); // -> cu4ygwf

// Page refreshed and order changes
engine.renderDeclaration('display', 'flex', { deterministic: true }); // -> cu4ygwf
engine.renderDeclaration('margin', 0, { deterministic: true }); // -> c1cpw2zw
```

## Directionality

Directionality is the concept of localizing the direction of styles to support
[RTL (right-to-left)](https://developer.mozilla.org/en-US/docs/Glossary/rtl) languages. By default,
Aesthetic assumes and requires all styles to be
[LTR (left-to-right)](https://developer.mozilla.org/en-US/docs/Glossary/LTR).

```ts
// Left-to-right
engine.renderRule({
	marginLeft: '10px',
	paddingRight: 0,
	textAlign: 'left',
}); // -> a b c
```

```css
.a {
	margin-left: 10px;
}
.b {
	padding-right: 0;
}
.c {
	text-align: left;
}
```

RTL can be enabled when [rendering](./api.md) by configuring the
[@aesthetic/addon-direction](https://www.npmjs.com/package/@aesthetic/addon-direction) package and
using the `direction` option.

```ts
// Right-to-left
engine.renderRule(
	{
		marginLeft: '10px',
		paddingRight: 0,
		textAlign: 'left',
	},
	{
		direction: 'rtl',
	},
); // -> d e f
```

```css
.d {
	margin-right: 10px;
}
.e {
	padding-left: 0;
}
.f {
	text-align: right;
}
```

> Many CSS properties and values that use the words "left" or "right" have been replaced by
> direction agnostic equivalents. Read the
> [RTL guidelines](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/RTL_Guidelines)
> for more information on these and how to properly mirror content.

## Unit suffixes

Defining a property value using a number (`10`) instead of a unit suffixed number (`10px`) is easier
to read and write, and as such, Aesthetic supports this pattern. By default, all numerical values
are automatically suffixed with `px`, unless the property in question requires no unit.

```ts
engine.renderRule({
	marginLeft: 10,
	lineHeight: 1.25,
}); // -> a b
```

```css
.a {
	margin-left: 10px;
}
.b {
	line-height: 1.25;
}
```

Units can be customized when [rendering](./api.md) by using the `unit` option. This option accepts a
string.

```ts
// All units as "rem"
engine.renderRule(
	{
		marginLeft: 10,
		paddingBottom: 15,
	},
	{
		unit: 'rem',
	},
); // -> a b
```

```css
.a {
	margin-left: 10rem;
}
.b {
	padding-bottom: 15rem;
}
```

## Vendor prefixes

If the engine was configured with a `vendorPrefixer` option, a rendered rule will include vendor
prefixes if the `vendor` option is true. View the [@aesthetic/addon-style](../addon-vendor.md)
package for more information.

```ts
engine.renderRule(
	{
		appearance: 'none',
		minWidth: 'fit-content',
	},
	{ vendor: true },
); // -> a b
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

## Specificity rankings

When an application and its CSS grows, the chance for specificity issues gradually arise. For
example, if class `a` was rendered first, but we need it to override class `b`, which was rendered
later, this wouldn't be possible with the default atomic cache. To work around this, Aesthetic
supports the concept of specificity rankings, where each class name is given a rank based on
insertion order.

```ts
const a = engine.renderDeclaration('color', 'red'); // -> a (rank 1)
const b = engine.renderDeclaration('color', 'blue'); // -> b (rank 2)

// Will be blue, even though a comes after b
const className = `${b} ${a}`;
```

This ranking is not enabled by default, as it does insert duplicate properties to solve specificity
issues, which results in larger CSS. For example, for `a` to override `b` above, we would simply
insert a new class with the same declaration as `a`, which would result in a new class of `c` that
has a higher specificity.

To enable specificity rankings, pass an empty object to the `rankings` option. This object acts a
cache and lookup for rank resolutions.

```ts
const rankings = {};
const a = engine.renderDeclaration('color', 'red', { rankings }); // -> a (rank 1)
const b = engine.renderDeclaration('color', 'blue', { rankings }); // -> b (rank 2)
const c = engine.renderDeclaration('color', 'red', { rankings }); // -> c (rank 3)

// Will be red since c overrides all
const className = `${b} ${a} ${c}`;
```
