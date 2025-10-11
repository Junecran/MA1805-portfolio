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
arc(276, 284, 43, 5, PI, PI + QUARTER_PI); // pink line



    // right_arm //
arc(402, 190, 40, 20, PI + QUARTER_PI, TWO_PI);
arc(415, 191, 15, 105, 0, HALF_PI, PI);   
// forearm.                     
arc(410, 252, 20, 20, PI + QUARTER_PI, TWO_PI); 
arc(400, 250, 40, 40, 0, HALF_PI, PI); 
// first_fingers.
arc(385, 260, 40, 20, PI + QUARTER_PI, TWO_PI); 
arc(388, 262, 32, 32, PI, PI + QUARTER_PI); // tip_line.
arc(400, 261, 11, 15, 0, HALF_PI, PI); // knuckle_line.
arc(398, 266, 50, 5, HALF_PI, PI); 
// other_fingers.
arc(389, 267, 30, 21, HALF_PI, PI); // tip_line.
arc(398, 270, 7, 15, 0, HALF_PI, PI); // knuckle_line.
arc(398, 276, 29, 4, HALF_PI, PI); 




  // computer //
line(390, 200, 250, 200);
// left_side.
line(250, 200, 257, 256);
line(264, 290, 265, 300);
// right_side.
line(390, 200, 395, 251); 
line(397, 278, 400, 300); 
// bottom.
quad(265, 300, 320, 330, 470, 334, 400, 300) 

noFill();
}
