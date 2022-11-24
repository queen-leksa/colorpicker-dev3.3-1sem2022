import Tmp from "./template.js";
import {hsvToRgb} from "../functions.js";

export default class Slider extends HTMLElement {
    static get observedAttributes() {
        return ["bg", "x", "type"]
    }
    attributeChangedCallback(name, oldV, newV) {
        switch (name) {
            case "bg":
                break;
            case "x":
                if (this.dom && this.dom.thumb) {
                    this.setPosition();
                }
        }
    }
    set x(v) {
        this.setAttribute("x", v);
    }
    get x() {
        return this.getAttribute("x");
    }
    set bg(v) {
        this.setAttribute("bg", v);
    }
    get bg() {
        return this.getAttribute("bg");
    }
    get type() {
        return this.getAttribute("type");
    }
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.content = this.shadowRoot;
    }
    connectedCallback() {
        this.content.innerHTML = Tmp.render({bg: this.getAttribute("bg"), type: this.getAttribute("type")});
        this.addEventListener("mousedown", this.handler);
        this.addEventListener("mouseup", this.handler);
        this.addEventListener("mousemove", this.handler);
        this.dom = Tmp.setDOM(this.content);
        this.tHalf = this.dom.thumb.offsetWidth / 2;
    }
    handler(e) {
        const bounds = this.getBoundingClientRect();
        const coords = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        }
        switch(e.type) {
            case "mousedown":
                this.isDragging = true;
                this.update(coords.x, coords.y);
                this.setPosition();
                break;
            case "mouseup":
                this.isDragging = false;
                break;
            case "mousemove":
                if (this.isDragging) {
                    this.update(coords.x, coords.y);
                    this.setPosition();
                }
                break;
        }
    }
    update(x) {
        let left = x - this.tHalf;
        if (left > this.offsetWidth) {
            left = this.offsetWidth;
        }
        if (left < 0) {
            left = 0;
        }
        this.x = (left / this.offsetWidth) * 100;
    }
    setPosition() {
        this.dom.thumb.style.left = this.offsetWidth * +this.x / 100 +"px";
        if (this.type === "color") {
            let color = hsvToRgb(this.x * 360 / 100, 100, 100);
            document.body.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`;
        }
    }
}