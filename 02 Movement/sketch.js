let x = 0;
let y = 0;
let lines = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //background(255, 0, 100);

  let x1 = random(width)
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  let color = random();
  stroke(color);
  line(x1, y1, x2, y2);

  let myText = "lines" +lines;
  fill(0);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText, width/2, height/2);
  lines++;
}
