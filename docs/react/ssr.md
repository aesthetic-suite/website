---
title: Server-side rendering
---

To support SSR, we'll need to import from `@aesthetic/react/server` and instantiate a server-based
style engine with `createServerEngine()` to extract critical CSS with `extractStyles()`. From there,
we can utilize the ReactDOM server, and the following functions to render styles.

- `renderToStyleMarkup` - Converts extracted styles to a static HTML string that contains `style`
  tags.
- `renderToStyleElements` - Converts extracted styles to a list of React `style` elements.

## Express

In the example below, we'll use [Express](https://expressjs.com/) as our server.

```tsx {3,10,13,16}
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { createServerEngine, renderToStyleMarkup } from '@aesthetic/react/server';
import App from './path/to/client/App';

const server = express();

server.get('/', (req, res) => {
	// Instantiate an engine for the server
	const engine = createServerEngine();

	// Render the application and extract critical CSS with the engine
	const content = ReactDOMServer.renderToString(engine.extractStyles(<App />));

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
	const content = ReactDOMServer.renderToString(engine.extractStyles(<App />));

	// Convert the extracted styles to HTML `style` tags
	const styles = renderToStyleMarkup(engine);

	// Render using a layout HTML component
	res.send(ReactDOMServer.renderToStaticMarkup(<Layout content={content} styles={styles} />));
});
```

## Next.js

Support Aesthetic in Next.js requires using a
[custom document](https://nextjs.org/docs/advanced-features/custom-document). Begin by creating a
file at `pages/_document.ts` with the following contents.

```tsx {5,8,18}
import NextDocument, { DocumentContext } from 'next/document';
import { createServerEngine, renderToStyleElements } from '@aesthetic/react/server';

// Instantiate an engine for the server
const engine = createServerEngine();

// Start extracting styles *before* the document is ready
engine.extractStyles();

export default class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
		const props = await NextDocument.getInitialProps(ctx);

		// Convert the extracted styles to React `style` elements
		props.styles = (
			<>
				{props.styles}
				{renderToStyleElements(engine)}
			</>
		);

		return props;
	}
}
```
