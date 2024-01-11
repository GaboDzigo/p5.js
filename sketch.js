let kitten;
let x = 0;

function preload() {
  kitten = loadImage('Cat6.webp')
}

 function setup() {
  createCanvas(600,600)
 }

 function draw() {
  background(220)
  image(kitten, x, 0, mouseX, mouseY)
 }