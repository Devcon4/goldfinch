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
        <meta charset="utf-8">
        <link rel="shortcut icon">
        <base href="/">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
        ${metas}
        <title>${title}</title>
        ${links}
        <style>
          html, body {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin: 0;
            min-height: 100%;
          }
          
          body {  
            --on: inherit;
            --off: ;
            
            --light: var(--on);
            --dark: var(--off);
            
            --gldLightShade: var(--light, var(--gld4)) var(--dark, var(--gld2));
            --gldLightAccent: var(--light, var(--gld5)) var(--dark, var(--gld1));
            --gldMain: var(--light, var(--gld9)) var(--dark, var(--gld9));
            --gldDarkAccent: var(--light, var(--gld2)) var(--dark, var(--gld4));
            --gldDarkShade: var(--light, var(--gld1)) var(--dark, var(--gld5));
            --gldText: var(--light, var(--gld2)) var(--dark, var(--gld4));

            --mdc-theme-primary: var(--gldMain);
            --mdc-theme-secondary: var(--gldDarkAccent);
            --mdc-theme-surface: var(--gldLightAccent);
            --mdc-theme-background: var(--gldLightShade);

            /* Raw are RGB versions. Useful to compose more complex colors ex: rgba(var(--gld0-raw), .2) */
            --gld0-raw: 74, 75, 81;
            --gld1-raw: 86, 87, 94;
            --gld2-raw: 51, 52, 56;
            --gld3-raw: 32, 34, 36;
            --gld4-raw: 240, 247, 252;
            --gld5-raw: 218, 226, 232;
            --gld6-raw: 170, 181, 191;
            --gld7-raw: 242, 79, 19;
            --gld8-raw: 242, 190, 34;
            --gld9-raw: 242, 79, 19;
            --gld10-raw: 242, 79, 19;
            --gld11-raw: 230, 197, 103;
            --gld12-raw: 68, 126, 179;
            --gld13-raw: 161, 205, 68;
            --gld14-raw: 217, 56, 48;
            --gld15-raw: 245, 133, 127;

            /* Duplicated for better ergonomics in devtools */
            /* Dark colors. */
            --gld0: rgb(74, 75, 81);
            --gld1: rgb(86, 87, 94);
            --gld2: rgb(51, 52, 56);
            --gld3: rgb(32, 34, 36);

            /* Light colors. */
            --gld4: rgb(240, 247, 252);
            --gld5: rgb(218, 226, 232);
            --gld6: rgb(170, 181, 191);

            /* Primary colors. */
            --gld7: rgb(242, 79, 19);
            --gld8: rgb(242, 190, 34);
            --gld9: rgb(242, 79, 19);
            --gld10: rgb(242, 79, 19);
            
            /* Action colors. */
            --gld11: rgb(230, 197, 103);
            --gld12: rgb(68, 126, 179);
            --gld13: rgb(161, 205, 68);
            --gld14: rgb(217, 56, 48);
            --gld15: rgb(245, 133, 127);
            
            background-color: var(--gldLightShade);
            color: var(--gldText);

            font-family: roboto;

          }
          
          @media (prefers-color-scheme: dark) {
            body {
              --light: var(--off);
              --dark: var(--on);
            }
          }
        </style>
      </head>
      <body>
        <gld-app></gld-app>
        ${scripts}
      </body>
    </html>`;
};
