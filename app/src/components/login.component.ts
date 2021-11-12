import '@material/mwc-button';
import '@material/mwc-textfield';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  flexHostStyles,
  glassStyles,
  globalStyles
} from '../styles/globalStyles';

@customElement('gld-login')
export default class LoginElement extends LitElement {
  render() {
    return html`<div class="login gld-flex">
      <div class="glass-box transparent-fields">
        <h2>Login</h2>
        <mwc-textfield
          required
          label="Email"
          type="email"
          validationMessage="Email is not valid!"
        ></mwc-textfield>
        <mwc-textfield
          required
          label="Password"
          type="password"
          validationMessage="Must enter a password!"
        ></mwc-textfield>
        <mwc-button unelevated label="Login"></mwc-button>
        <a href="./register">Need to register?</a>
      </div>
    </div>`;
  }

  static styles = [
    globalStyles,
    flexHostStyles,
    glassStyles,
    css`
      a {
        padding-top: 12px;
        text-align: center;
      }

      .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
  ];
}
