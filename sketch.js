
function setup() {
  createCanvas(955, 900);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for(var x = 0; x <= width; x += 50) {
    for(var y = 0; y <= width; y += 50){
    fill(random(255), 0, random(255))
    ellipse(x, y, 25, 25);
    }
  }
}