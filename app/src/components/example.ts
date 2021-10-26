import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { flexHostStyles, globalStyles } from '../styles/globalStyles';

@customElement('cara-example')
export default class ExampleElement extends LitElement {
  render() {
    return html`<div class="example flex">
      <h2>WOW!</h2>
    </div>`
  }

  static get styles() {
    return [
      globalStyles,
      flexHostStyles,
      css``
    ];
  }
}