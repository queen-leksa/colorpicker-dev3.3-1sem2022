import Tmp from "./template.js";

export default class ColorPicker extends HTMLElement {
    static get observedAttributes() {
        return []
    }
    attributeChangedCallback(name, oldV, newV) {
    }
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.content = this.shadowRoot;
    }
    connectedCallback() {
        this.content.innerHTML = Tmp.render({});
    }
}