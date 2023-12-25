// Code example
// by Daniel Shiffman
// The coding train
// http://thecodingtrain.com
// this code is based on everything i learned from
// Lauren McCarthy and Cassie Tarakajan (creator of)

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(100);

  rectMode(CENTER);

  // this is the green rectangle in the center
  fill(0, 255, 0);
  stroke(0, 0, 255);
  strokeWeight(4);
  rect(200, 150, 150, 150);

  // red circle
  // later i want to make this circle animate
  fill(255, 0, 0, 175);
  noStroke();
  ellipse(150, 250, 100, 75);
}
