export default {
    render(props) {
        return `
            ${this.css(props)}
            ${this.html(props)}
        `
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
                coord-picker {
                    position: relative;
                    display: block;
                    grid-row: 1 / 3;
                }
            </style>
        `
    }
}