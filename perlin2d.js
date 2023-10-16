var inc = 0.01;
var start = 0;
var zoff = 0;
function setup(){
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
}

function draw() {
    loadPixels();
    var yoff = start;
    for (let y = 0; y < height; y++) { 
        var xoff = start;
        for (let x = 0; x < width; x++) {
            var index = (x + y*width) * 4;
            var r = noise(xoff, yoff, zoff)*255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            xoff += inc;
        } 
        yoff += inc;
    }
    start += inc;
    zoff += 0.1;
    updatePixels();
}