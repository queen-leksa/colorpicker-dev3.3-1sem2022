const hsvToRgb = (h, s, v, alpha) => { // h (0-360), s (0-1), v (0-1)
    let hi = h / 60,
        c = v * s,
        x = c * (1 - Math.abs((hi % 2) - 1))
    const color = {
        r: 0,
        g: 0,
        b: 0,
        a: alpha
    }
    switch(Math.floor(hi)) {
        case 0:
            color.r = c * 255;
            color.g = x * 255;
            color.b = 0;
            break;
        case 1:
            color.r = x * 255;
            color.g = c * 255;
            color.b = 0;
            break;
        case 2:
            color.r = 0;
            color.g = c * 255;
            color.b = x * 255;
            break;
        case 3:
            color.r = 0;
            color.g = x * 255;
            color.b = c * 255;
            break;
        case 4:
            color.r = x * 255;
            color.g = 0;
            color.b = c * 255;
            break;
        case 5:
            color.r = c * 255;
            color.g = 0;
            color.b = x * 255;
            break;
    }
    return color;
}

export {hsvToRgb}