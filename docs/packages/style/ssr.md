---
title: Server-side rendering
---

Aesthetic supports server-side rendering _and_ client-side hydration (this happens automatically).
However, it does require a bit of setup.

## Server

On the server, we'll need to import and call `createServerEngine()` from `@aesthetic/style/server`
to extract critical CSS with `extractStyles()`. In the example below, we'll use
[Express](https://expressjs.com/) as our server.

```tsx {2,8,11,14}
import express from 'express';
import { createServerEngine, renderToStyleMarkup } from '@aesthetic/style/server';

const server = express();

server.get('/', (req, res) => {
  // Instantiate an engine for the server
  const engine = createServerEngine();

  // Render the application and extract critical CSS with the engine
  const content = engine.extractStyles(renderApplication());

  // Convert the extracted styles to HTML `style` tags
  const styles = renderToStyleMarkup(engine);

  // Render using your preferred template engine
  res.render('layout', {
    content,
    styles,
  });
});

server.listen(8080);
```
