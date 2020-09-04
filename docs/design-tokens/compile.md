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
- **Web**
  - [web-ts](./web/js.md) - TypeScript variables.
  - [web-js](./web/js.md) - JavaScript variables.
  - [web-css-in-ts](./web/css-in-js.md) - CSS-in-JS with TypeScript.
  - [web-css-in-js](./web/css-in-js.md) - CSS-in-JS with JavaScript.
  - [web-css](./web/css.md) - CSS variables and classes.
  - [web-scss](./web/scss.md) - SCSS variables and mixins.
  - [web-sass](./web/sass.md) - Sass variables and mixins.
  - [web-less](./web/less.md) - Less variables and mixins.
