// var xoff1 = 0;
// var xoff2 = 10000;
// var xoff = 0;
var inc = 0.02;
var start = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // var x = random(width);
  var xoff = start;
  noFill();
  beginShape();
  for(var x = 0; x<width; x++) {
    // var y = random(height)
    // var y = noise(xoff)*height;
    // var y = noise(xoff) *250 + height/2 + sin(xoff)*height/2;
    var n = map(noise(xoff), 0, 1, -50, 50);
    var s = map(sin(xoff), -1, 1, 0, height)
    y = s + n;
    vertex(x,y);
    xoff += inc
  }
  endShape()
  // noLoop()
  start += inc
  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2),0 ,1, 0, height);
  // xoff1 += 0.02;
  // xoff2 += 0.02;
  // ellipse(x, y, 24, 24);
}