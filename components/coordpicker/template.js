export default {
    render({bg}) {
        return `
            ${this.css({bg})}
            ${this.html()}
        `
    },
    setDOM(self) {
        return {
            thumb: self.querySelector(".thumb")
        }
    },
    html() {
        return `
            <div class="bg-overlay bg-overlay-a"></div>
            <div class="bg-overlay bg-overlay-b"></div>
            <div class="thumb"></div>
        `
    },
    css({bg}) {
        return `
            <style>
                :host {
                    position: relative;
                    display: block;
                    grid-row: 1 / 3;
                }
                .bg-overlay {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }
                .bg-overlay-a {
                    background-image: linear-gradient(to right, #fff, ${bg});
                }
                .bg-overlay-b {
                    background-image: linear-gradient(to top, transparent, #000);
                }
                .thumb {
                    width: 6px;
                    height: 6px;
                    position: absolute;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    top: calc(50% - 8px);
                    left: calc(50% - 8px);
                }
            </style>
        `
    }
}