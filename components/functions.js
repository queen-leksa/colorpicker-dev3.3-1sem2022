const hsvToRgb = (h, s, v) => { // h (0-360), s (0-1), v (0-1)
    // console.log("hue", h);
    let hi = Math.floor(h / 60) % 6,
        vm = ((100 - s) * v) / 100,
        a = v - vm * (1 - Math.abs((hi % 2) - 1)),
        vinc = vm + a,
        vdec = v - a;
        // vinc = v * (1 - s * (1 - v / 6 - hi)),
        // vdec = v * (1 - s * (v / 6 - hi));
    const color = {
        r: 0,
        g: 0,
        b: 0
    }
    switch(hi) {
        case 0:
            color.r = v;
            color.g = vinc; // v3
            color.b = vm;
            break;
        case 1:
            color.r = vdec; // v2
            color.g = v;
            color.b = vm;
            break;
        case 2:
            color.r = vm;
            color.g = v;
            color.b = vinc;
            break;
        case 3:
            color.r = vm;
            color.g = vdec;
            color.b = v;
            break;
        case 4:
            color.r = vinc;
            color.g = vm;
            color.b = v;
            break;
        case 5:
            color.r = v;
            color.g = vm;
            color.b = vdec;
            break;
    }
    for (let k in color) {
        color[k] = color[k] * 255 / 100;
    }
    return color;
}

export {hsvToRgb}