let angle =0
let maxIteration = 50;
function setup() {

    createCanvas(800, 800);
    // put setup code here
    pixelDensity(1);
}

function draw() {
    let ca 
    let cb 
    // put drawing code here
    loadPixels();
    // let ca = map(mouseX, 0, width, -2, 2);
    // let cb = map(mouseY, 0, height, -2, 2);
    ca = sin(angle)
    cb = 0;
    angle+= 0.001
    //the above is too much and slows down the whole process
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, -2, 2);
            let b = map(y, 0, height, -2, 2);
            // let a = map(mouseX, 0, width, -1, 1);
            // let b = map(mouseY, 0, height, -1, 1);
            // ca = a;
            // cb = b;
            let n = 0;
            let z = 0;
            while (n < maxIteration) {
                let aa = a * a - b * b;
                let bb = 2 * a * b;

                //general set
                a = aa + ca;
                b = bb + cb;

                // complex constant c = −0.70176 − 0.3842i
                // a = aa + -0.70176;
                // b = bb + -0.3842;

                if (a + b > 16) {
                    break;
                }

                n++;
            }
            // let bright = map(n, 0, maxIteration, 0, 255)
            let bright = map(n, 0, maxIteration, 0, 1);
            bright = map(sqrt(bright), 0, 1, 0, 255);
            if (n == 100) {
                bright = 0;
            }

            let pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}
