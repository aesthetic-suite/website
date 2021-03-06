---
title: Rendering concepts
---

To understand Aesthetic and the rendering process, there are a few key concepts around styling and
its structure. All of the concepts below assume a web based CSS-in-JS integration is being used.

## Styles

All styling is defined through _style objects_, which are plain JavaScript objects that map CSS
properties to values, also known as a
[CSS declaration](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_declarations).
Properties can be defined in either camel-case or kebab-case.

There are multiple subtypes of style objects that provide additional functionality, and can be found
below.

### Rules

A [rule (or ruleset)](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_rulesets) is a
collection of multiple CSS declarations, with optional support for infinitely nested rules and
selectors, and are known as _rule objects_.

```ts
import { Rule } from '@aesthetic/style';

const rule: Rule = {
	color: 'white',
	display: 'block',
	textAlign: 'left',
	fontSize: 16,
	padding: 0,
	margin: 0,
};
```

Rules can be rendered with the [renderRule()](./api.md#renderrule) method, while individual
declarations can be rendered with [renderDeclaration()](./api.md#renderdeclaration).

#### Pseudo selectors

[Pseudo classes and pseudo elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
are a highly important features of CSS, and as such, are supported in _rule objects_ by defining
nested _rule objects_, where the key is the selector in question.

For pseudos to be recognized, they must start with `:` or `::`.

```ts
import { Rule } from '@aesthetic/style';

const rule: Rule = {
	color: 'white',

	// Basic pseudo
	':disabled': {
		color: 'gray',
	},

	// Advanced pseudo
	'@selectors': {
		':not(:disabled)': {
			color: 'black',
		},
	},

	// Element
	'::before': {
		content: '" "',
	},
};
```

#### Attribute selectors

Like pseudos,
[attribute selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
are an important feature and are defined in a similar fashion, but must start with `[`.

```ts
import { Rule } from '@aesthetic/style';

const rule: Rule = {
	color: 'white',

	// Basic attribute
	'[disabled]': {
		color: 'gray',
	},

	// Advanced attribute
	'@selectors': {
		'[href~="special"]': {
			color: 'red',
		},
	},
};
```

#### Combinator selectors

And finally, all
[combinator selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), excluding
descendent, are supported in `@selectors`. Nested rules must start with `>`, `~`, `+`, or `|`.

```ts
import { Rule } from '@aesthetic/style';

const rule: Rule = {
	margin: 0,

	'@selectors': {
		// Child
		'> li': {
			listStyle: 'none',
		},

		// Sibling
		'~ ul': {
			marginTop: 10,
		},

		// Adjacent
		'+ p': {
			margin: 0,
		},

		// Column
		'|| td': {
			textAlign: 'center',
		},
	},
};
```

### Media queries

[Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
are useful when you want to render styles based on device viewport. They are represented by the
`@media` at-rule and can be defined using nested rules.

```ts
import { Rule } from '@aesthetic/style';

const rule: Rule = {
	display: 'block',

	'@media': {
		'(max-width: 720px)': {
			display: 'inline-block',
		},

		print: {
			border: 'none',
			background: 'transparent',
		},
	},
};
```

> Media queries can nest itself and other selectors.

### Feature queries

[Feature queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries)
are useful when you want to render styles based on features that are currently supported by the
browser. They are represented by the `@supports` at-rule and can be defined using nested rules.

```ts
import { Rule } from '@aesthetic/style';

const rule: Rule = {
	display: 'block',

	'@supports': {
		'(display: flex)': {
			display: 'flex',
		},
	},
};
```

> Feature queries can nest itself and other selectors.

### Variables

Variables, also known as
[custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties),
are a feature that allows for specific values to be reused throughout the CSS document. CSS
variables defined within a rule are scoped to the element in which the class is applied to, not the
document root.

Variables can be defined in `@variables`, with or without the leading `--`. Furthermore, values _are
not_ processed like properties are, so any suffixes (like `px`) will need to be explicitly defined.

```ts
import { Rule } from '@aesthetic/style';

const rule: Rule = {
	fontSize: 'var(--font-size)',

	'@variables': {
		'--font-size': '16px',
	},
};
```

Root level variables can be defined with the [setRootVariables()](./api.md#setrootvariables) method.

### Font faces

Font faces allow for [custom fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) to
be used, are represented by the `@font-face` at-rule, and are defined using a _font face object_.
Font face objects only support a subset of properties, primarily font related ones, and the `src`
property, which points to a source font file (relative or absolute to the document root).

```ts
import { FontFace } from '@aesthetic/style';

const fontFace: FontFace = {
	fontFamily: '"Open Sans"',
	fontStyle: 'normal',
	fontWeight: 800,
	src: 'url("fonts/OpenSans-Bold.woff2")',
};
```

Font faces can be rendered with the [renderFontFace()](./api.md#renderfontface) method.

### Imports

Imports are used to include external
[CSS style sheets](https://developer.mozilla.org/en-US/docs/Web/CSS/@import), not CSS-in-JS, with
the `@import` at-rule. Aesthetic abstracts all the complexity away, so only the URL should be
provided.

```ts
const path = 'path/to/test.css';
```

Imports can be rendered with the [renderImport()](./api.md#renderimport) method.

### Keyframes

Keyframes are [CSS animation sequences](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
that are represented by the `@keyframes` at-rule, and are defined using a _keyframes object_. A
keyframes object maps frames to [rules](#rules), where each frame is one of `to`, `from`, or a
percentage.

```ts
import { Keyframes } from '@aesthetic/style';

const keyframes: Keyframes = {
	from: { marginTop: 50 },
	'50%': { marginTop: 150 },
	to: { marginTop: 100 },
};
```

Keyframes can be rendered with the [renderKeyframes()](./api.md#renderkeyframes) method.

## Caveats

Because both atomic CSS _and_ CSS-in-JS is utilized, there are a few caveats to be aware of while
using this library.

### Properly quoted values

Any property value that requires quotes must be properly quoted or escaped on the JavaScript side.
This primarily applies to the `content` property and `@import` at-rule, but is useful in other
contexts.

```ts
// Invalid
const rule: Rule = {
	content: 'Hello',
};

// Valid
const rule: Rule = {
	content: '"Hello"',
};
```

### Mixing of shorthand and longhand properties

One of the biggest disadvantages to atomic CSS is that
[shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) make
it incredibly difficult to apply styles correctly. Since a shorthand property is the combination of
multiple properties, but is represented as a single class name, how can we ensure the correct
specificity order? Take the following for example.

```ts
const rule: Rule = {
	border: '1px solid black',
	borderColor: 'white',
};
```

If this example was rendered as-is, the border color would be white, since `borderColor` is ordered
after `border`. However, when used in an application with hundreds of rules, we can't ensure this
order, as `borderColor` may have been rendered much earlier than `border`, or vice-versa. Now
compound this problem with the other properties involved, like `borderStyle` and `borderWidth`.
Which should take precedence? And how?

To work around this, we suggest _always_ using the longhand properties, since it's far more
explicit. This suggestion does require more code and overhead, but is better in the long-term for
maintainability.

```ts
const rule: Rule = {
	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: 'white',
};
```

> In the future, we will provide an ESLint rule to help mitigate this issue.
