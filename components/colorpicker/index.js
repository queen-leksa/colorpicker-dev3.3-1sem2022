import Tmp from "./template.js";
import {hsvToRgb} from "../functions.js";

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
        this.dom = Tmp.setDOM(this.content);
        this.hsv = {
            h: +this.dom.hue.getAttribute("x") * 360 / 100,
            s: +this.dom.coords.getAttribute("y") / 100,
            v: +this.dom.coords.getAttribute("x") / 100,
            a: +this.dom.transparent.getAttribute("x") / 100,
        }
        const observer = new MutationObserver(e => {this.handler(e, this.dom, this.hsv)});
        observer.observe(this.content, {attributes: true, subtree: true})

        // console.log(this.hsv);
    }
    handler(rec, dom, hsv) {
        rec.forEach((r) => {
            if (r.target !== this) {
                switch (r.target) {
                    case dom.hue:
                        hsv.h = r.target.getAttribute("x") * 360 / 100
                        break;
                    case dom.transparent:
                        hsv.a = r.target.getAttribute("x") / 100
                        break;
                    case dom.coords:
                        hsv.s = +r.target.getAttribute("y") / 100
                        hsv.v = +r.target.getAttribute("x") / 100
                        break;
                }
                let color = hsvToRgb(hsv.h, hsv.s, hsv.v, hsv.a)
                document.body.style.backgroundColor = `rgba(${Math.floor(color.r)}, ${color.g}, ${color.b}, ${color.a})`;
            }
        })
        // console.log(this.hsv)

    }
}