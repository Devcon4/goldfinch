import { css, customElement, html, LitElement } from 'lit-element';
import { flexHostStyles, globalStyles } from '../globalStyles';

import '@material/mwc-textfield';
import '@material/mwc-button';

@customElement('gld-login')
export class LoginElement extends LitElement {
  render() {
    return html`<div class="login gld-flex">
      <div class="login-box">
        <div class="shadow-box">
          <h2>🐦 Goldfinch</h2>
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
        </div>
      </div>
    </div>`;
  }

  static styles = [
    globalStyles,
    flexHostStyles,
    css`
      .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .login-box {
        display: flex;
        flex-direction: column;
        padding: 48px;
        padding-top: 12px;
        background-color: var(--light, rgba(255, 255, 255, 0.5))
          var(--dark, rgba(0, 0, 0, 0.3));
        backdrop-filter: blur(10px);
        min-width: 300px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }

      .shadow-box {
        display: flex;
        flex-direction: column;
      }

      h2 {
        /* text-align: center; */
        /* text-transform: uppercase; */
        font-weight: 300;
        font-size: 42px;
        margin: 0px;
        padding-bottom: 42px;
      }

      mwc-textfield {
        padding-bottom: 12px;
        --mdc-text-field-fill-color: none;
        --mdc-text-field-label-ink-color: none;
        --mdc-text-field-ink-color: none;
      }
    `,
  ];
}
