---
title: Server-side rendering
---

Aesthetic supports server-side rendering _and_ client-side hydration (this happens automatically).
However, it does require a bit of setup.

## Server

On the server, we'll need to import and call `createServerEngine()` from `@aesthetic/style/server`
to extract critical CSS with `extractStyles()`. We can do this as part of the React DOM server
rendering process. In the example below, we'll use [Express](https://expressjs.com/) as our server.

```tsx {3,10,13,16}
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { createServerEngine, extractStyles, renderToStyleMarkup } from '@aesthetic/style/server';
import App from './path/to/client/App';

const server = express();

server.get('/', (req, res) => {
  // Instantiate an engine for the server
  const engine = createServerEngine();

  // Render the application and extract critical CSS with the engine
  const content = ReactDOMServer.renderToString(extractStyles(<App />, engine));

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

Since our CSS extraction results in multiple `<style />` tags, they'll need to be injected into a
layout HTML file _without_ being escaped. Something like the following.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <title>{{title}}</title>
    {{styles}}
  </head>
  <body>
    <div id="root">{{content}}</div>
  </body>
</html>
```

Because of this architecture, the React application _cannot_ include and render the full HTML
document. To work around this, a double render will need to be executed, where the application is
rendered 1st with `renderToString()`, and the document that includes the content and styles is
rendered 2nd with `renderToStaticMarkup()`.

```tsx
server.get('/', (req, res) => {
  // Instantiate an engine for the server
  const engine = createServerEngine();

  // Render the application and extract critical CSS with the engine
  const content = ReactDOMServer.renderToString(extractStyles(<App />, engine));

  // Convert the extracted styles to HTML `style` tags
  const styles = renderToStyleMarkup(engine);

  // Render using a layout HTML component
  res.send(ReactDOMServer.renderToStaticMarkup(<Layout content={content} styles={styles} />));
});
```
