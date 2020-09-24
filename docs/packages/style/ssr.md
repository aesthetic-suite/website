---
title: Server-side rendering
---

Aesthetic supports server-side rendering _and_ client-side hydration. However, it does require a bit
of setup on both ends.

## Server

On the server, we'll need to import and instantiate the `ServerRenderer` from
`@aesthetic/style/server` to extract critical CSS with `extractStyles()`. We can do this as part of
the React DOM server rendering process. In the example below, we'll use
[Express](https://expressjs.com/) as our server.

```tsx {3,10,13,16}
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerRenderer } from '@aesthetic/style/server';
import App from './path/to/client/App';

const server = express();

server.get('/', (req, res) => {
  // Instantiate a renderer for the server
  const renderer = new ServerRenderer();

  // Render the application and extract critical CSS with the renderer
  const content = ReactDOMServer.renderToString(renderer.extractStyles(<App />));

  // Convert the extracted styles to HTML `style` tags
  const styles = renderer.renderToStyleMarkup();

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
  // Instantiate a renderer for the server
  const renderer = new ServerRenderer();

  // Render the application and extract critical CSS with the renderer
  const content = ReactDOMServer.renderToString(renderer.extractStyles(<App />));

  // Convert the extracted styles to HTML `style` tags
  const styles = renderer.renderToStyleMarkup();

  // Render using a layout HTML component
  res.send(ReactDOMServer.renderToStaticMarkup(<Layout content={content} styles={styles} />));
});
```

## Client

On the client, we'll need to import and instantiate the `ClientRenderer`, which should already exist
to render CSS styles. The renderer _must_ then hydrate styles _before_ the React application is
mounted to the DOM.

```tsx {2,6,9}
import ReactDOM from 'react-dom';
import { ClientRenderer } from '@aesthetic/style';
import App from './path/to/client/App';

// Instantiate a renderer for the client
const renderer = new ClientRenderer();

// Hydrate CSS styles
renderer.hydrateStyles();

// Render and hydrate the application
ReactDOM.hydrate(<App />, document.getElementById('root'));
```