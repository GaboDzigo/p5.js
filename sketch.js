// Flow / variables
// code ! programming withg p5.js
var col = 0;
function setup() {
  createCanvas(400, 300);
}

function draw() {
  col = mouseX / 2;
  background(col);
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}
