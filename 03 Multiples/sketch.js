let img;
function preload() {
  img = loadImage ('Assets\lin move 2 (1).png');

}



function setup() {
  createCanvas(500, 500);
  image(img, 0, 0);
}


function draw() {
  background(220);


  let i = 1;
  while(i<=500) {
    let r = random(30);
    circle(i, i+r, 30+r);
    i = i+3;
  }

  fill(0, 255, 0);
  for(i=0; i<600; i=i+1.4){
    let r = random(70);
    circle(i+100, i, r);
    
  }
}

