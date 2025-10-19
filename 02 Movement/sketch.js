function setup() {
  createCanvas(500, 500);
  background(400);

}

function draw() {
// get rid of after //
background(250);
text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
stroke(1); 


   // Trees Outline //

// Tree far right
noFill()

line(410, 80, 420, 165);
arc(501, 247, 200, 280, PI, PI + QUARTER_PI);
arc(383, 248, 35, 20, 0, HALF_PI);
arc(387, 263, 25, 10, PI, PI + QUARTER_PI);
arc(405, 284, 10, 15, PI + QUARTER_PI, TWO_PI);
arc(400, 265, 50, 30, HALF_PI, PI);
arc(388, 288, 40, 70, 0, HALF_PI);
arc(420, 332, 70, 40, HALF_PI, PI);
line(421, 351, 492, 355);




// Background trees


}

// Tree Base Colour //
//quad(410, 82, 500, 82, 500, 105, 420, 164, );
