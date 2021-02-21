hr = hour();
min = minute();
sc = second();


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  translate();
  pop();

  minAngle = map(min, 0, 60, 0, 360);
  push();
  rotate(minAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  translate();
  pop();

  hrAngle = map(hr, 0, 60, 0, 360);
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  translate();
  pop();
  drawSprites();
}