import CoordPicker from "./components/coordpicker";

if (!customElements.get("coord-picker")) {
    customElements.define("coord-picker", CoordPicker);
}