const makeHtmlAttributes = (attributes) => {
  if (!attributes) {
    return '';
  }
  const keys = Object.keys(attributes);
  // eslint-disable-next-line no-param-reassign
  return keys.reduce(
    (result, key) => (result += ` ${key}="${attributes[key]}"`),
    ''
  );
};

/** @type {(options: import('@rollup/plugin-html').RollupHtmlOptions, entryPointWhitelist: string[]) => string} */
export const indexHtml = (
  { attributes, meta, title, files, publicPath, fileName },
  entryPointWhitelist
) => {
  const scripts = (files.js || [])
    .filter((f) => entryPointWhitelist.some((e) => f.fileName.includes(e)))
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script src="${publicPath}${fileName}"${attrs}></script>`;
    })
    .join('\n');
  const links = (files.css || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.link);
      return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join('\n');
  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join('\n');

  return `
    <!DOCTYPE html>
    <html ${makeHtmlAttributes(attributes.html)}>
      <head>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <link rel="shortcut icon">
        <base href="/">
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
          rel="stylesheet"
        />
        <style>
        html {
          font-family: 'Roboto', sans-serif;
        }

        html,body {
          --on: inherit;
          --off: ;

          --light: var(--on);
          --dark: var(--off);
        }
        </style>
        
        ${metas}
        ${links}
        
      </head>
      <body>
        <cara-head></cara-head>
        <cara-app></cara-app>
        ${scripts}
      </body>
    </html>`;
};
