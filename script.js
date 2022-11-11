import CoordPicker from "./components/coordpicker/index.js";
import Slider from "./components/slider/index.js";

if (!customElements.get("coord-picker")) {
    customElements.define("coord-picker", CoordPicker);
}
if (!customElements.get("color-slider")) {
    customElements.define("color-slider", Slider);
}