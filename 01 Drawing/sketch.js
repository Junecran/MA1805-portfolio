function setup() {
  createCanvas(640, 480);
  background(400);

}

function draw() {

    // head //
// top_face.
arc(340, 175, 90, 82, PI, PI + HALF_PI);
arc(340, 175, 90, 82, PI + QUARTER_PI, TWO_PI);
// bottom_face.
arc(310, 175, 30, 50, HALF_PI, PI);
arc(375, 175, 20, 50, 0, HALF_PI);
// eyes.
fill(50,60,30)
arc(210, 175, 30, 50, HALF_PI, PI);
//
noFill();





    // left_arm //
arc(295, 180, 50, 10, PI, PI + QUARTER_PI);
arc(286, 198, 40, 60, PI, PI + QUARTER_PI);
// first_finger.
arc(274, 260, 50, 10, PI, PI + QUARTER_PI); 
arc(269, 258, 10, 6, PI + QUARTER_PI, TWO_PI); // tip_line.
arc(255, 265, 15, 20, PI, PI + QUARTER_PI); // knuckle_line.
arc(249, 259, 50, 14, 0, HALF_PI, PI);
// other_fingers.
arc(274, 266, 9, 7, PI + QUARTER_PI, TWO_PI); // tip_line_t.
arc(274, 265, 10, 32, 0, HALF_PI, PI); // tip_line_b.
arc(258, 265, 10, 50, HALF_PI, PI); // knuckle_line.
arc(257, 287, 30, 7, 0, HALF_PI, PI);
// pinkie.
arc(270, 283, 5, 11, 0, HALF_PI, PI); // tip_line.
arc(276, 284, 43, 5, PI, PI + QUARTER_PI); 


    // right_arm //
arc(402, 190, 40, 20, PI + QUARTER_PI, TWO_PI);
arc(415, 191, 15, 105, 0, HALF_PI, PI);   
// forearm.                     
arc(410, 252, 20, 20, PI + QUARTER_PI, TWO_PI); 
arc(403, 250, 34, 40, 0, HALF_PI, PI); 
// first_fingers.
arc(386, 258, 40, 20, PI + QUARTER_PI, TWO_PI); 
arc(390, 261, 40, 30, PI, PI + QUARTER_PI); // tip_line.
arc(401, 258, 10, 12, 0, HALF_PI, PI); // knuckle_line.
arc(398, 264, 50, 5, HALF_PI, PI); 
// other_finger.
arc(385, 267, 14, 30, HALF_PI, PI); // tip_line.
arc(400, 265, 7, 20, 0, HALF_PI, PI); // knuckle_line.
arc(399, 273, 36, 7, HALF_PI, PI); 
arc(400, 282, 29, 4, HALF_PI, PI);
arc(398, 275, 5, 20, 0, HALF_PI, PI); // knuckle_line.


   // computer //
line(390, 200, 250, 200);
// left_side.
line(250, 200, 257, 256);
line(264, 290, 265, 300);
// right_side.
line(390, 200, 395, 249); 
line(398, 283, 400, 300); 
// bottom.
quad(265, 300, 320, 330, 470, 334, 400, 300);
}
