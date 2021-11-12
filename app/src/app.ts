import '@material/mwc-icon-button';
import fleck from 'iife-str:../workers/background-paint.js';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { RouterSlot } from 'router-slot';
import 'router-slot/router-slot';
import { async } from './services/decoratorUtils';
import { routes } from './services/routes';
import themeState, { ThemeType } from './services/themeState';
import { flexHostStyles, globalStyles } from './styles/globalStyles';

const fleckBlob = new Blob([fleck], { type: 'text/javascript' });
const fleckUrl = URL.createObjectURL(fleckBlob);
CSS.paintWorklet.addModule(fleckUrl);

@customElement('cara-app')
export default class AppElement extends LitElement {
  @state()
  @async(themeState.theme)
  colorTheme: ThemeType;

  @query('router-slot')
  $routerSlot!: RouterSlot;

  toggleThemeAction = () => themeState.toggleTheme();

  firstUpdated() {
    this.$routerSlot.add(routes);
  }

  render() {
    return html`<div class="app flex">
      <div class="header">
        <h1>🐦 App Works!</h1>
        <mwc-icon-button
          id="theme-btn"
          @click=${this.toggleThemeAction}
          .icon="${this.colorTheme === 'dark' ? 'light_mode' : 'nights_stay'}"
        ></mwc-icon-button>
      </div>
      <router-slot class="flex"></router-slot>
    </div>`;
  }

  static get styles() {
    return [
      globalStyles,
      flexHostStyles,
      css`
        .app {
          display: flex;

          /* background-image: url(https://media.giphy.com/media/r660FSI6nkvGBr7k3M/giphy.gif); */
          background-image: paint(fleck);
          resize: both;
          overflow: hidden;

          --clr1: var(--light, #03a2d3) var(--dark, #f8f412);
          --clr2: var(--light, #74d8e6) var(--dark, #ee1669);
          --clr3: var(--light, #f5f846) var(--dark, #7639a0);
          --clr4: var(--light, #77ebff) var(--dark, #edf11c);
          --clr5: var(--light, #e2f9fe) var(--dark, #f8ecec);
          --clr6: var(--light, #1d2f35) var(--dark, #222222);

          --clr1: var(--light, #03a2d3) var(--dark, #f8f412);
          --clr2: var(--light, #74d8e6) var(--dark, #ee1669);
          --clr3: var(--light, #f5f846) var(--dark, #7639a0);
          --clr4: var(--light, #77ebff) var(--dark, #edf11c);
          --clr5: var(--light, #e2f9fe) var(--dark, #f8ecec);
          --clr6: var(--light, #1d2f35) var(--dark, #222222);
          /* --fleck-colors: #231F20,#4b4949 #dadada,#bbbbbb #006738,#094d2e #2B9D46,#24532f #39B649,#59e76c; */
          --fleck-colors: var(--clr1) var(--clr2) var(--clr3) var(--clr4)
            var(--clr5) var(--clr6);
          --fleck-seed: 124;
          --fleck-cell-size: 75;
          --fleck-size-base: 6;
          --fleck-density: 15;
          /* --fleck-seed: 124;
          --fleck-cell-size: 150;
          --fleck-size-base: 700;
          --fleck-density: 4; */
          /* background-image: url(https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fill=crop&w=774&q=80); */
        }

        .header {
          display: flex;
          justify-content: space-between;
          padding: 12px;
        }

        h1 {
          width: fit-content;
          background-color: var(--light, rgba(255, 255, 255, 0.5))
            var(--dark, rgba(0, 0, 0, 0.3));
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          margin: 12px;
          border-radius: 5px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
        }
      `,
    ];
  }
}
