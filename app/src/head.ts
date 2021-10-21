import { html, LitElement, render } from 'lit';
import { customElement } from 'lit/decorators.js';

const head = html`

<title>Caracara App!</title>
<style>
  html,
  body {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0;
    min-height: 100%;
  }

  body {
    --cara-primary: var(--light, var(--cara11)) var(--dark, var(--cara7));
    --cara-primary-variant: var(--light, var(--cara12)) var(--dark, var(--cara8));
    --cara-secondary: var(--light, var(--cara13)) var(--dark, var(--cara9));
    --cara-secondary-variant: var(--light, var(--cara14)) var(--dark, var(--cara10));
    --cara-background: var(--light, var(--cara4)) var(--dark, var(--cara3));
    --cara-surface: var(--light, var(--cara5)) var(--dark, var(--cara2));
    --cara-error: var(--light, var(--cara15)) var(--dark, var(--cara15));
    --cara-on-primary: var(--light, var(--cara3)) var(--dark, var(--cara4));
    --cara-on-secondary: var(--light, var(--cara3)) var(--dark, var(--cara3));
    --cara-on-background: var(--light, var(--cara3)) var(--dark, var(--cara4));
    --cara-on-surface: var(--light, var(--cara3)) var(--dark, var(--cara4));
    --cara-on-error: var(--light, var(--cara4)) var(--dark, var(--cara4));
    --mdc-theme-primary: var(--cara-primary);
    --mdc-theme-secondary: var(--cara-secondary);
    --mdc-theme-surface: var(--cara-surface);
    --mdc-theme-background: var(--cara-background);
    --mdc-text-field-fill-color: var(--light, var(--cara4)) var(--dark, var(--cara3));
    --mdc-text-field-label-ink-color: var(--cara-on-surface);
    --mdc-text-field-ink-color: var(--cara-on-surface);
    --cara0: rgb(74, 75, 81);
    --cara1: rgb(86, 87, 94);
    --cara2: rgb(51, 52, 56);
    --cara3: rgb(32, 34, 36);
    --cara4: rgb(229, 244, 255);
    --cara5: rgb(215 227 237);
    --cara6: rgb(189 207 223);
    --cara7: rgb(140 17 248);
    --cara8: rgb(242 34 119);
    --cara9: rgb(17 235 248);
    --cara10: rgb(255 255 255);
    --cara11: rgb(234 235 27);
    --cara12: rgb(235 217 27);
    --cara13: rgb(68 168 205);
    --cara14: rgb(125 210 249);
    --cara15: rgb(169 49 43);

    background-color: var(--cara-background);
    color: var(--cara-on-surface);
  }

  @media (prefers-color-scheme: dark) {
    body {
      --light: var(--off);
      --dark: var(--on);
    }
  }
</style>`;

@customElement('cara-head')
export class HeadElement extends LitElement {
  firstUpdated() {
    render(head, document.head);
  }
}
