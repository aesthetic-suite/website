---
title: API
---

## Engine

### `RenderOptions`

Most render methods support the following options. Read the documentation on [options](./options.md)
for more information.

- `deterministic` (`boolean`) - Generate class names using a deterministic hash (`c1sjakp`) instead
  of an auto-incremented value (`a1`). Useful for scenarios like unit tests. Defaults to `false`.
- `direction` (`ltr | rtl`) - Convert and swap LTR (left-to-right) based declarations to RTL
  (right-to-left).
- `conditions` (`string[]`) - List of media and feature queries to wrap the declaration with.
- `rankings` (`object`) - An empty object to use for specificity ranking cache lookups. Useful for
  ensuring the correct specificity when order of declarations change.
- `selectors` (`string[]`) - List of CSS selector to scope the declaration(s) within. This is
  handled automatically when using [rules](#renderrule).
- `unit` (`string`) - A unit to append to numerical values. Defaults to `px`.
- `vendor` (`boolean`) - Apply vendor prefixes to properties and values that require it. We prefix
  features for browsers with >= 1% market share. Defaults to `false`.

### `setRootVariables`

> Engine#setRootVariables(vars: CSSVariables): void

Applies CSS variables to the document `:root`. Variable names can be defined in camel-case or
standard variable format (leading `--`).

```ts
engine.setRootVariables({
  '--font-color': 'black',
  backgroundColor: 'white',
});
```

### `renderDeclaration`

> Engine#renderDeclaration\<K extends Property\>(property: K, value: Properties[K], options?:
> RenderOptions): ClassName

Renders a property-value pair, known as a CSS declaration, and returns a CSS class name. Will return
the same class name for the same property-value pair.

```ts
const className = engine.renderDeclaration('display', 'block'); // -> a
```

```css
.a {
  display: block;
}
```

Declarations can also be scoped within a selector (pseudo, attribute, etc) by using the `selectors`
option.

```ts
const className = engine.renderDeclaration('display', 'block', { selectors: [':hover'] }); // -> b
```

```css
.b:hover {
  display: block;
}
```

### `renderRule`

> Engine#renderRule(properties: Rule, options?: RenderOptions): ClassName

Renders a collection of property-value pairs, known as a CSS rule (or ruleset), and returns a CSS
class name for each declaration. A collection of declarations is known as a _style object_.

```ts
const className = engine.renderRule({
  display: 'block',
  textAlign: 'center',
  background: 'transparent',
}); // -> a b c
```

```css
.a {
  display: block;
}
.b {
  text-align: center;
}
.c {
  background: transparent;
}
```

Rules can also infinitely render nested `@media` queries, `@supports` queries, pseudo classes and
elements, attributes, combinators, and other selectors, by declaring nested _style objects_.

```ts
const className = engine.renderRule({
  display: 'block',
  background: 'gray',

  ':hover': {
    background: 'black',
  },

  '@media (max-width: 300px)': {
    display: 'inline-block',
  },
}); // -> a b c d
```

### `renderRuleGrouped`

> Engine#renderRuleGrouped(properties: Rule, options?: RenderOptions): ClassName

Grouped rules work in a similar fashion to [rules](#renderrule), but instead of creating a unique
class per declaration (atomic), they group all declarations within a single class (non-atomic). This
exists for situations where all styles need to be encapsulated under a single class name, for
example, themes.

```ts
const className = engine.renderRuleGrouped({
  display: 'block',
  textAlign: 'center',
  background: 'transparent',
}); // -> a
```

```css
.a {
  display: block;
  text-align: center;
  background: transparent;
}
```

> This method should rarely be used, as it circumvents the performance and filesize gains that the
> atomic cache provides.

### `renderFontFace`

> Engine#renderFontFace(fontFace: FontFace, options?: RenderOptions): string

Renders a _font face object_ as a `@font-face` at-rule and returns the font family name. If the
`fontFamily` property is not defined, a unique collision-free one will be generated.

```ts
const fontFamily = engine.renderFontFace({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 800,
  src: 'url("fonts/Roboto.woff2")',
}); // -> Roboto
```

```css
@font-face {
  /* ... */
}
```

### `renderImport`

> Engine#renderImport(url: string, options?: RenderOptions): void

Renders a CSS file path as an `@import` at-rule. Only accepts the URL. Use the `conditions` option
to apply media queries.

```ts
engine.renderImport('./path/to/file.css');
```

```css
@import url('./path/to/file.css');
```

### `renderKeyframes`

> Engine#renderKeyframes(keyframes: Keyframes, name?: string, options?: RenderOptions): string

Renders a _keyframes object_ as a `@keyframes` at-rule and returns the animation name. A custom
animation name may be provided as the 2rd argument (does not account for collision), otherwise a
unique collision-free one will be generated.

```ts
const animationName = engine.renderKeyframes({
  from: {
    transform: 'translateX(0%)',
  },
  to: {
    transform: 'translateX(100%)',
  },
}); // -> kf18jh28d
```

```css
@keyframes kf18jh28d {
  /* ... */
}
```

## Server-side

Read the documentation on [server-side rendering](./ssr.md) to utilize this correctly.

### `extractStyles`

> extractStyles(app: React.ReactElement, engine: Engine): React.ReactElement

Extracts critical CSS from the application being rendered (without layout HTML) by injecting the
current server engine. CSS must then be [rendered to style tags](#rendertostylemarkup).

```tsx
const app = extractStyles(<App />, engine);
```

### `renderToStyleMarkup`

> renderToStyleMarkup(engine: Engine): string

Renders [extracted styles](#extractstyles) into a collection of `style` tags for
[hydration](#hydratestyles). Tags must be included in the HTML response.

```ts
const markup = renderToStyleMarkup(engine);
```

## Testing

### `createTestStyleEngine`

> createTestStyleEngine(options?: EngineOptions): Engine

Create a style engine pre-configured for testing.

```ts
const engine = createTestStyleEngine();
```

### `getRenderedStyles`

> getRenderedStyles(type: 'global' | 'standard' | 'conditions'): string

Returns all rendered styles as a CSS string for the target `<style />` type.

```ts
expect(getRenderedStyles('standard')).toMatchSnapshot();
```

### `purgeStyles`

> purgeStyles(type: 'global' | 'standard' | 'conditions'): void

Removes all rendered styles from the target `<style />` type. If the type is not provided, it will
purge all 3 types.

```ts
purgeStyles(); // all
purgeStyles('global');
```
