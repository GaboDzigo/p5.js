function setup() {
  var km = milesTokm(26.3)
  println(km);
  var km2 = milesTokm(100);
  println(km2)
}

function draw() {

}

function milesTokm(miles) {
  var km = miles *  1.6
  return km;
}