---
title: Compile design tokens
---

Once your design system has been [created](../design-system/create.md) and
[configured](../design-system/config.md), you may compile the configuration into the tokens
mentioned above by running the `compile` [command](../prerequisites.mdx#command-line). This command
requires a name (a folder within `.aesthetic`), an [output format](#formats), and a target folder to
write files to.

```bash
aesthetic compile <name> ./styles/system --format web-css
```

## Formats

Formats are the combination of a device platform and target language, and represent the compiled
output of a design system configuration. Pass the `--format` option to choose one of the following.

- **Android**
  - _(Coming soon)_
- **iOS**
  - _(Coming soon)_
- **React Native**
  - [native-ts](./native/ts.md) - TypeScript variables.
  - [native-tsx](./native/tsx.md) - TypeScript for CSS-in-TS.
  - [native-js](./native/ts.md) - JavaScript variables.
  - [native-jsx](./native/tsx.md) - JavaScript for CSS-in-JS.
- **Web**
  - [web-ts](./web/ts.md) - TypeScript variables.
  - [web-tsx](./web/tsx.md) - TypeScript for CSS-in-TS.
  - [web-js](./web/ts.md) - JavaScript variables.
  - [web-jsx](./web/tsx.md) - JavaScript for CSS-in-JS.
  - [web-css](./web/css.md) - CSS variables.
  - [web-scss](./web/scss.md) - SCSS variables.
  - [web-sass](./web/sass.md) - Sass variables.
  - [web-less](./web/less.md) - Less variables.
