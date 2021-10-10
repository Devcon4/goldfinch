import {
  css,
  customElement,
  html,
  LitElement,
  PropertyValues,
  query,
} from 'lit-element';
import { IRoute, queryParentRouterSlot, RouterSlot } from 'router-slot';
import { flexHostStyles, globalStyles } from './globalStyles';
import fleck from 'iife-str:./workers/background-paint.js';

const fleckBlob = new Blob([fleck], { type: 'text/javascript' });
const fleckUrl = URL.createObjectURL(fleckBlob);
CSS.paintWorklet.addModule(fleckUrl);

const routes: Array<IRoute> = [
  {
    path: 'login',
    component: async () =>
      (await import('./components/login.component')).LoginElement,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@customElement('gld-app')
export class AppElement extends LitElement {
  @query('router-slot') $routerSlot: RouterSlot;

  get data() {
    return queryParentRouterSlot(this);
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);
    this.$routerSlot.add(routes);
  }

  render() {
    return html`<div class="app density gld-flex">
      <router-slot class="gld-flex"></router-slot>
    </div>`;
  }

  static get styles() {
    return [
      globalStyles,
      flexHostStyles,
      css`
        .app {
          /* background-image: url(https://media.giphy.com/media/r660FSI6nkvGBr7k3M/giphy.gif); */
          background-image: paint(fleck);
          resize: both;
          overflow: hidden;
          animation: 2s fadeIn infinite;

          --clr1: var(--light, #0193c1) var(--dark, #a74444);
          --clr2: var(--light, #74d8e6) var(--dark, #e6c474);
          --clr3: var(--light, #0bc0e0) var(--dark, #e0360b);
          --clr4: var(--light, #3ddaf5) var(--dark, #f5a53d);
          --clr5: var(--light, #e2f9fe) var(--dark, #f6f6f6);
          --clr6: var(--light, #02313f) var(--dark, #3f1f02);

          --fleck-colors: var(--clr1) var(--clr2) var(--clr3) var(--clr4)
            var(--clr5) var(--clr6);
          --fleck-seed: 124;
          --fleck-cell-size: 75;
          --fleck-size-base: 3;
          --fleck-density: 15;
          /* background-image: url(https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fill=crop&w=774&q=80); */
        }
      `,
    ];
  }
}
