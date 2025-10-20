/* AUTOMATICALLY GENERATED GRID */

// Initialise variables 
let row = 19;     // Number of shapes in a row
let col = 19;     // Number of shapes in a col
let pad = 5;      // Padding between shapes 
let sWidth, sHeight;  
let rgba = [87, 163, 221, 255];     

function setup() {
    createCanvas(windowWidth, windowHeight); // canvas width/height
    sWidth = (width/col)-(pad+(pad/col));
    sHeight = (height/row)-(pad+(pad/row));
    rectMode(CENTER); // Rectangle coords from the center
    noStroke();
}

function draw(){
  background(200); 
  // Loop through Y values
  for(let i=0; i<row; i++){
    // Loop through X values
    for(let ii=0; ii<col; ii++){
      let x = pad+(ii*sWidth)+(pad*ii)+(sWidth/2);
      let y = pad+(i*sHeight)+(pad*i)+(sHeight/2);
      fill(rgba); 
      rect(x, y, sWidth, sHeight); 
    //Rotate the rects
    push();
    angleMode(DEGREES)
    translate(x, y);
    rotate(i*5); 
    rotate(millis() / 20 * PI / 2);
    rect(0, 0, sWidth, sHeight); 
    pop(); 
    }
  }
}