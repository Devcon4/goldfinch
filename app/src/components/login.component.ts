import { css, customElement, html, LitElement } from 'lit-element';
import { flexHostStyles, globalStyles } from '../globalStyles';

@customElement('gld-login')
export class LoginElement extends LitElement {
  render() {
    return html`<div class="login gld-flex"><h2>Login!</h2></div>`;
  }

  static styles = [globalStyles, flexHostStyles, css``];
}
