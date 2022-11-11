import CoordPicker from "./components/coordpicker/index.js";
import Slider from "./components/slider/index.js";
import ColorPicker from "./components/colorpicker/index.js"

if (!customElements.get("coord-picker")) {
    customElements.define("coord-picker", CoordPicker);
}
if (!customElements.get("color-slider")) {
    customElements.define("color-slider", Slider);
}
if (!customElements.get("color-picker")) {
    customElements.define("color-picker", ColorPicker);
}