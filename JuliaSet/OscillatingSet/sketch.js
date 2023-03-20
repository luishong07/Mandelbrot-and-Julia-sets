let angle = 0;
let maxIteration = 100;
const reds = [];
const greens = [];
const blues = [];

function setup() {
    pixelDensity(1);
    createCanvas(800, 800);
    colorMode(HSB, 1);
    for (let n = 0; n < maxIteration; n++) {
        let hu = sqrt(n / maxIteration);
        let col = color(hu, 255, 150);

        reds[n] = red(col);
        greens[n] = green(col);
        blues[n] = blue(col);
    }
}

function draw() {
    // frameRate(5)
    //mouse control
    // let ca = map(mouseX, 0, width, -1,1)
    // let cb = map(mouseY, 0, height, -1,1)

    //oscilation for  z^2 + 0.7885e^(i*a); a ranges 0 to 2pi
    // let ca = 0.7885*cos(angle * 1);
    // let cb = 0.7885*sin(angle);

    //particular complex constants

    //golden ration
    let ca = -0.618003
    let cb =  0

    // let ca =-0.4
    // let cb = 0.6

    // let ca = 0.285
    // let cb = 0.01

    // let ca = -0.70176
    // let cb = -0.3842

    // let ca = -0.835
    // let cb =-0.2321

    // let ca = -0.8
    // let cb =0.156

    // let ca = -0.7269
    // let cb = 0.1889

    // let ca =0
    // let cb = -0.8

    angle += 0.02;

    background(255);

    let w = 5;
    let h = (w * height) / width;

    let xMin = -w / 2;
    let yMin = -h / 2;

    loadPixels();

    let xMax = xMin + w;
    let yMax = yMin + h;

    let dx = (xMax - xMin) / width;
    let dy = (yMax - yMin) / height;

    let y = yMin;

    for (let j = 0; j < height; j++) {
        let x = xMin;
        for (let i = 0; i < width; i++) {
            let a = x;
            let b = y;
            let n = 0;
            while (n < maxIteration) {
                let aa = a * a;
                let bb = b * b;
                if (aa + bb > 4) {
                    break;
                }
                let twoab = 2 * a * b;
                a = aa - bb + ca;
                b = twoab + cb;
                n++;
            }
            let pix = (i + j * width) * 4;
            if (n == maxIteration) {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = 0;
                pixels[pix + 2] = 0;
            } else {
                pixels[pix + 0] = reds[n]
                pixels[pix + 1] = greens[n]
                pixels[pix + 2] = blues[n]
            }
            x += dx
        }
        y += dy
    }
    updatePixels()
}
