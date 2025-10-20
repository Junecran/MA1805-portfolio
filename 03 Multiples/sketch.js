function setup() {
  createCanvas(windowHeight, windowWidth);
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

