---
title: CSS-in-JS engine
sidebar_label: Overview
---

The `@aesthetic/style` package is a low-level, high-performance, atomic-based CSS-in-JS styling
engine. It can be used stand-alone but has been designed to power additional abstractions or APIs.

- [Getting started](./style/setup.mdx)
- [Rendering concepts](./style/concepts.md)
- [Features & options](./style/options.md)
- [Server-side rendering](./style/ssr.md)
- [Test utilities](./style/testing.md)
- [API](./style/api.md)

```ts
import { createClientEngine } from '@aesthetic/style';

// Instantiate a client side (DOM) engine
const engine = createClientEngine();

// Render a style decleration into individual atomic class names
const className = engine.renderRule({
	margin: 0,
	textAlign: 'center',
	color: 'var(--color)',
	backgroundColor: 'transparent',
	border: '2px solid #eee',

	':hover': {
		borderColor: '#fff',
	},

	'@media': {
		'(max-width: 600px)': {
			display: 'block',
		},
	},

	'@variants': {
		'size:small': {
			fontSize: 14,
			padding: '4px 10px',
		},
		'size:default': {
			fontSize: 16,
			padding: '6px 12px',
		},
		'size:large': {
			fontSize: 18,
			padding: '8px 14px',
		},
	},
});

className.result; // -> a b c d e f g
className.variants; // -> [h i, j k, l m]
```

## What it provides

- Atomic based CSS. One declaration per class name.
- Variants and compound variants for complex styling.
- Specificity ranking so the intended property is always rendered.
- Font faces, keyframes, imports, and other globals are rendered before normal declarations.
- Media and support queries are grouped and rendered after normal declarations.
- Media queries are sorted mobile-first or desktop-first.
- Injection buffering for increased performance and reduced paints.
- Style declarations support pseudos, attributes, conditional at-rules, and nested declarations.
- Deterministic or atomic incremental CSS class names.
- Right-to-left (RTL) integration.
- Vendor prefixing for browsers with >= 1% market share.
- Unit suffixing for numerical values.
- First-class CSS variables support.
- Server-side rendering _and_ client-side hydration.
- Framework and library agnostic. Can be used stand-alone.

## What it _does not_ provide

- A plugin system, as such a system would degrade performance.
- Rendering of styles in the global scope: `div`, `a`, etc.
- Rendering of uncommon at-rules: `@namespace`, `@document`, `@page`, `@viewport`.
