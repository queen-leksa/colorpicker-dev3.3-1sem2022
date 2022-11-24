import Tmp from "./template.js";

export default class CoordPicker extends HTMLElement {
    static get observedAttributes() {
        return ["bg", "x", "y"]
    }
    attributeChangedCallback(name, oldV, newV) {
        switch (name) {
            case "bg":
                break;
            default:
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
    set y(v) {
        this.setAttribute("y", v);
    }
    get y() {
        return this.getAttribute("y");
    }
    set bg(v) {
        this.setAttribute("bg", v);
    }
    get bg() {
        return this.getAttribute("bg");
    }
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.content = this.shadowRoot;
    }
    connectedCallback() {
        this.content.innerHTML = Tmp.render({bg: this.getAttribute("bg")});
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
    update(x, y) {
        let left = x - this.tHalf;
        let top = y - this.tHalf;
        if (left > this.offsetWidth) {
            left = this.offsetWidth;
        }
        if (left < 0) {
            left = 0;
        }
        if (top > this.offsetHeight) {
            top = this.offsetHeight;
        }
        if (top < 0) {
            top = 0;
        }
        this.x = (left / this.offsetWidth) * 100;
        this.y = (top / this.offsetHeight) * 100;
    }
    setPosition() {
        this.dom.thumb.style.left = this.offsetWidth * +this.x / 100 + "px";
        this.dom.thumb.style.top = this.offsetHeight * +this.y / 100 + "px";
    }
}