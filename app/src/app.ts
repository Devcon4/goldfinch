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
    return html`<div class="app gld-flex">
      <router-slot class="gld-flex"></router-slot>
    </div>`;
  }

  static get styles() {
    return [globalStyles, flexHostStyles, css``];
  }
}
