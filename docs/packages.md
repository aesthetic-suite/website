---
title: Packages
---

Aesthetic is an end-to-end, multi-platform styling and design suite, that is powered by multiple NPM
packages. Most of these packages can be used stand-alone, while others are built around and require
other Aesthetic packages.

We're a big fan of composition and interoperability, so we're offering documentation for each
package as if it's being used stand-alone. The following packages are available.

- [Design system](./packages/system.md) - JavaScript implementation of the design system
  configuration, with theme and user preference support (color schemes, contrast levels, etc).
- [CSS-in-JS engine](./packages/style.md) - Low-level API that renders CSS declarations into the DOM
  using atomic class names and CSS variables for high performance, low filesize, and efficient
  caching. Also supports server-side rendering and client-side hydration.
- **Core** - Core API the combines the previous packages into a single but powerful CSS-in-JS
  solution. Is the foundation for framework integrations below.

Aesthetic was designed to be framework agnostic, and as such, provides integrations for the
following popular view/template based libraries.

- [React](./react.md) - React integration that is built on top of the core API. Provides hook and
  HOC based patterns, with support for contextual themes, directionality, and SSR.
