export class AdonisReactStateProvider extends HTMLElement {
  constructor() {
    super();
    this.state = JSON.parse(this.innerHTML); //todo try parse
    this.clearInnerHTML();
  }

  connectedCallback() {
    // this.setAttribute('style', 'display:none')
  }

  getState() {
    return this.state;
  }

  clearInnerHTML() {
    this.innerHTML = '';
  }
}


customElements.define('adonis-react-state-provider', AdonisReactStateProvider);