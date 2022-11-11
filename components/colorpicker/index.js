import Tmp from "./template.js";

export default class ColorPicker extends HTMLElement {
    static get observedAttributes() {
        return []
    }
    attributeChangedCallback(name, oldV, newV) {
    }
    connectedCallback() {
        this.innerHTML = Tmp.render({});
    }
}