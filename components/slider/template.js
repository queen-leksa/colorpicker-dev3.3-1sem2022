export default {
    render(props) {
        return `
            ${this.css(props)}
            ${this.html(props)}
        `
    },
    html(props) {
        return `
            <div class="overlay ${props.type === "color" ? "bg-color" : "bg-transparent"}"></div>
            <div class="slider-thumb"></div>
        `
    },
    css(props) {
        return `
            <style>
                .overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                .slider-thumb {
                    position: absolute;
                    height: 100%;
                    width: 6px;
                    border: 2px solid #fff;
                    box-shadow: 0 0 2px rgba(0, 0, 0, 0.22);
                    top: -2px;
                    left: calc(50% - 5px);
                }
                .bg-color {
                    background-image: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 66%, #f0f 83%, #f00 100%);
                }
                .bg-transparent {
                    background-image: linear-gradient(to right, transparent, ${props.bg}),
                                      linear-gradient(45deg, #ccc 25%, transparent 25%),
                                      linear-gradient(-45deg, #ccc 25%, transparent 25%),
                                      linear-gradient(45deg, transparent 75%, #ccc 75%),
                                      linear-gradient(-45deg, transparent 75%, #ccc 75%);
                    background-size: cover, 10px 10px, 10px 10px, 10px 10px, 10px 10px, 10px 10px;
                    background-position: center, 0 0, 0 5px, 5px -5px, -5px 0;
                }
            </style>
        `
    }
}