import { css } from 'lit';

export const flexHostStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0px;
  }
`;

export const glassStyles = css`
  .transparent-fields {
    --mdc-text-field-fill-color: none;
    --mdc-text-field-label-ink-color: none;
    --mdc-text-field-ink-color: none;
  }

  .glass-box {
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

  mwc-textfield {
    padding-bottom: 12px;
  }
`;

export const globalStyles = css`
  a {
    color: var(--cara-on-surface);
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    transition: all 150ms linear;
  }

  a:hover {
    transform: translateY(-1px);
    filter: brightness(10%);
    filter: drop-shadow(0 2px 4px rgba(0,0,0,.1));
    color: var(--cara-primary);
  }

  .flex {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0px;
  }

  .fill {
    flex: 1;
  }

  h1,h2 {
    font-weight: 300;
    font-size: 42px;
    margin: 0px;
    padding-bottom: 42px;
  }

  mwc-button {
    --mdc-theme-on-primary: var(--cara-on-primary);
  }
`;

export const fadeinAnimation = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;