export class AdonisReactStateProvider extends HTMLElement {
  constructor() {
    super();

    this.state = this.parseState();
    this.clearInnerHTML();
  }

  parseState() {
    const textState = this.innerHTML;
    let state = null;
    
    try {
      state = JSON.parse(textState);
    } catch(e) {
      state = textState;
    }

    return state;
  }

  getState() {
    return this.state;
  }

  clearInnerHTML() {
    this.innerHTML = '';
  }
}

customElements.define('adonis-react-state-provider', AdonisReactStateProvider);