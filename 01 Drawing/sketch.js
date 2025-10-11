function setup() {
  createCanvas(640, 480);
  background(400);

}

function draw() {

    // colour//
let w1 = color(500, 500, 500); 
let bc = color(200, 200, 200); // body_colour.
fill(bc);
noStroke();
rect(310, 170, 65, 30);



    // head //
stroke(1);
// top_face.
arc(340, 175, 90, 82, PI, PI + HALF_PI);
arc(340, 175, 90, 82, PI + QUARTER_PI, TWO_PI);
// bottom_face.
arc(310, 175, 30, 50, HALF_PI, PI);
arc(375, 175, 20, 50, 0, HALF_PI);
// left_eye.
fill(500, 500, 500); 
push();
translate(315, 155);
rotate(radians(147));
ellipse(0, 0, 43, 35);
pop();
// right-eye.
push(); 
translate(367, 154);
rotate(radians(40));
ellipse(0, 0, 50, 30);
pop();
// irises. 
noFill(); 
push();
translate(312, 154);
rotate(radians(26));
ellipse(0, 0, 4, 7);
pop();
push();
translate(365,152);
rotate(radians(178));
ellipse(0, 0, 4, 8);
pop();
// eye_bags.
arc(330, 162, 10, 16, 0, HALF_PI, PI);
arc(358, 164, 14, 13, HALF_PI, PI); 
// mouth.
arc(340, 200, 52, 39, PI, PI + HALF_PI);
arc(345, 185, 23, 10, PI + QUARTER_PI, TWO_PI);
push();
translate(355, 193);
rotate(radians(42));
arc(0, 0, 18, 20, PI + QUARTER_PI, TWO_PI);
pop();
// teeth.
line(324, 196, 317, 190);
line(324, 195, 322, 185);
line(333, 190, 332, 182);
line(333, 190, 339, 181);
line(343, 190, 344, 182);
line(343, 190, 349, 181);
line(352, 193, 362, 185);
line(353, 194, 364, 196);


    // left_arm //
noFill();
arc(295, 180, 50, 10, PI, PI + QUARTER_PI);
arc(286, 198, 40, 60, PI, PI + QUARTER_PI);
// shake.
arc(250, 260, 30, 40, 2, PI, PI + QUARTER_PI);
arc(239, 276, 5, 20, 0, HALF_PI, PI); 
arc(253, 290, 14, 13, HALF_PI, PI); 
arc(407, 278, 7, 20, 0, HALF_PI, PI);
arc(410, 274, 7, 10, 0, HALF_PI, PI); 
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
line(405, 304, 275, 304);
// left_side.
line(250, 200, 257, 256);
line(264, 290, 265, 300);
// right_side.
line(390, 200, 395, 249); 
line(398, 283, 400, 300); 
// bottom.
quad(265, 300, 320, 330, 470, 334, 400, 300);
}
