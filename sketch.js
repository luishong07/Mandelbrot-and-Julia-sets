function setup() {
    createCanvas(800, 800);
    // put setup code here
    pixelDensity(1);
    
}

function draw() {
    // put drawing code here
	let maxIteration = 100
	loadPixels();
	
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, -2, 2);
            let b = map(y, 0, height, -2, 2);
			let ca = a
			let cb = b
            let n = 0;
            let z = 0;
            while (n < maxIteration) {
                let aa = a * a - b * b;
                let bb = 2 * a * b;

                a = aa + ca;
                b = bb + cb;

                if (a + b > 16) {
                    break;
                }

                n++;
            }
            // let bright = map(n, 0, maxIteration, 0, 255)
			let bright = map(n,0 ,maxIteration,0,1)
			bright = map(sqrt(bright),0,1,0,255)
            if (n == 100) {
                bright = 0
            }

            let pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }
	updatePixels()
}
