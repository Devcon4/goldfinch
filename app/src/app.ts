import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IRoute } from 'router-slot';
import { flexHostStyles, globalStyles } from './styles/globalStyles';

const routes: IRoute<any>[] = [];

@customElement('cara-app')
export class AppElement extends LitElement {
  render() {
    return html`<div class="app flex">
      <h1>🐦 App Works! </h1>
      <div class="box-list">
        <div class="box box-1">primary</div>
        <div class="box box-2">primary variant</div>
        <div class="box box-3">secondary</div>
        <div class="box box-4">secondary variant</div>
        <div class="box box-5">background</div>
        <div class="box box-6">surface</div>
        <div class="box box-7">error</div>
      </div>
      <router-slot class="flex" .routes="${routes}"></router-slot>
    </div>`;
  }

  static get styles() {
    return [
      globalStyles,
      flexHostStyles,
      css`

        .app {
          display: flex;
        }
        
        .box-list {
          max-width: 1024px;
          align-self: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        .box {
          width: calc(100% / 4 - 48px);
          aspect-ratio: 1;
          border-radius: 5px;
          padding: 12px;
          margin: 12px;
          filter: drop-shadow(0 3px 3px rgba(0,0,0,.2));
        }

        @media (max-width: 512px) {
          .box {
            width: 100%;
          }
        }

        .box-1 { background-color: var(--cara-primary); color: var(--cara-on-primary); }
        .box-2 { background-color: var(--cara-primary-variant); color: var(--cara-on-primary); }
        .box-3 { background-color: var(--cara-secondary); color: var(--cara-on-secondary); }
        .box-4 { background-color: var(--cara-secondary-variant); color: var(--cara-on-secondary); }
        .box-5 { background-color: var(--cara-background); color: var(--cara-on-background); }
        .box-6 { background-color: var(--cara-surface); color: var(--cara-on-surface); }
        .box-7 { background-color: var(--cara-error); color: var(--cara-on-error); }
      `
    ];
  }
}