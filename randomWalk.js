
var xoff = 0;
function setup() {
    createCanvas(400, 400);
    x = 200;
    y = 200;
    background(51);
    frameRate(120);
}

function draw() {
    stroke(255);
    strokeWeight(2);
    // point(x,y);
    // ellipse(x,y,24,24)
    noFill();
    circle(x,y,100)
    var r = floor(random(4));
    // var r = floor(noise(xoff)*4);
    switch (r) {
        case 0:
            x = x+1;
            break;
        case 1:
            x = x-1;
            break;
        case 2:
            y = y+1;
            break;
        case 3:
            y = y-1;
            break;
    }
    xoff += 0.02;
    // if (y>windowHeight|| y<0) {y = 0}
    // if (x> windowWidth||x<0) {x = windowWidth}
}