export default {
    render(props) {
        return `
            ${this.css(props)}
            ${this.html(props)}
        `
    },
    setDOM(self) {
        return {
            hue: self.querySelector("color-slider[type='color']"),
            transparent: self.querySelector("color-slider[type='transparent']"),
            coords: self.querySelector("coord-picker")
        }
    },
    html(props) {
        return `
            <coord-picker x="50" y="50" bg="red"></coord-picker>
            <color-slider type="color" x="0" bg="red"></color-slider>
            <color-slider type="transparent" x="100" bg="red"></color-slider>
        `
    },
    css(props) {
        return `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: 120px auto;
                    grid-template-rows: 50px 50px;
                    gap: 20px;
                }
            </style>
        `
    }
}