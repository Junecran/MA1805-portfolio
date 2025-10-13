function setup() {
  createCanvas(640, 480);
  background(400);

}

function draw() {
// Image / To move the emoji around the canvas.
push();
translate(-140, -30);

// Customize Key / For easy access.
let bc = color(79, 15, 15); // Body
let eyew = color(250, 250, 250); // Eye whites
let eyei = color(0, 0, 0); // Eye iris
let mc = color(48, 10, 10); // Mouth
let tc = color(250, 250, 250); // Teeth
let cct = color(53, 51, 82); // Computer top
let ccb = color(28, 27, 46); // Computer bottom
let sc = color(122, 33, 33); // Shading 
let lc = color(10, 3, 28); // Main outline 
let dsc = color(31, 6, 6); // Second outline 
let o = 2; // Outline weight


    // Colours //
push(); // Computer shading here for order.
  fill(ccb);
  noStroke();
  triangle(400, 306.2, 416, 271, 375, 271);
pop();
// Body colour
fill(bc);
noStroke();
rect(375, 181, 47, 19, 0, 15, 0, 0);
quad(422, 196, 390, 200, 394, 244, 420, 230);
quad(270, 179, 294, 175, 307, 200, 265, 200);
quad(394, 236, 420, 226, 417, 242, 399, 276);
push();
  translate(407, 255);
  rotate(0.5);
  ellipse(0, 0, 24, 30);
pop();
// Body shading
push();
  fill(sc);
  rect(280, 188, 130, 53, 10);
pop();
push();
  fill(bc);
  noStroke();
  rect(310, 170, 65, 30);
pop();
// Computer colour
push();
  fill(cct);
  noStroke();
  quad(249, 200, 390, 200, 400, 300, 265, 300);
  fill(ccb);
  noStroke();
  quad(264, 300, 265, 305, 401, 305, 401, 300);
pop();
// Left hand colour
rect(249, 256, 25, 9, 50, 50, 50, 0);
rect(252, 261, 26, 23, 0, 5, 10, 5);
rect(255, 281, 17, 9, 5);
// Right hand colour
rect(376, 251, 25, 23, 50, 50, 5, 5);
rect(381, 273.5, 20, 9, 0, 0, 50, 5);
// Head colour + outline
stroke(dsc);
strokeWeight(o);
arc(340, 175, 90, 82, PI, PI + HALF_PI);
arc(340, 175, 90, 82, PI + QUARTER_PI, TWO_PI);
arc(310, 175, 30, 50, HALF_PI, PI);
arc(375, 175, 20, 50, 0, HALF_PI);
// Face shading needs to be here for the order.
push();
  noStroke();
  fill(sc);
  ellipse(340, 166, 70, 60);
pop();
// Mouth colour
push();
  fill(mc);
  noStroke();
  translate(339, 210);
  rotate(5.9);
  arc(0, 0, 50, 59, PI + QUARTER_PI, TWO_PI, CHORD);
  arc(7, 1, 47, 58, PI + QUARTER_PI, TWO_PI, CHORD);
pop();
// Teeth colour
noStroke();
fill(tc);
triangle(318, 190, 322, 186, 323, 194);
triangle(325, 184, 334, 181, 333, 190);
triangle(344, 180, 353, 182, 347, 189);
triangle(360, 189, 367, 196, 354, 194);


    // Face outlines //
stroke(dsc);
strokeWeight(o);
// Left eye
fill(eyew); 
push();
  stroke(lc);
  translate(315, 155);
  rotate(9);
  ellipse(0, 0, 43, 35);
pop();
// Right eye
push(); 
  stroke(lc);
  translate(367, 154);
  rotate(7);
  ellipse(0, 0, 50, 30);
pop();
// Left iris
push();
  fill(eyei);
  stroke(lc);
  translate(310, 154);
  rotate(3.4);
  ellipse(0, 0, 8, 11);
pop();
// Right iris
push();
  fill(eyei);
  stroke(lc);
  translate(370,151);
  rotate(3);
  ellipse(0, 0, 8, 12);
pop();
// Eye bags
noFill();
arc(320, 163, 27, 25.8, 13, HALF_PI, PI);
arc(378, 172, 38, 13,  HALF_PI, PI); 
// Mouth
arc(340, 200, 52, 39, PI, PI + HALF_PI);
push();
  translate(348, 207);
  rotate(1.2);
  arc(0, 0, 55, 42, PI, PI + HALF_PI);
pop();
// Teeth
stroke(lc);
line(323, 195, 319, 191);
line(323, 195, 323, 187.6);
line(333, 190, 326, 186);
line(333, 190, 334, 183);
line(347, 190, 344, 182);
line(347, 190, 353, 184);
line(352, 194, 360, 189);
line(353, 194, 365, 196);


    // Left arm outline //
noFill();
stroke(dsc);
arc(294.6, 181, 50, 10, PI, PI + QUARTER_PI);
arc(286, 198, 40, 60, PI, PI + QUARTER_PI);
// First finger
arc(274, 260, 50, 10, PI, PI + QUARTER_PI); 
arc(269, 257.8, 10, 5, PI + QUARTER_PI, TWO_PI); // tip
arc(255, 265, 14, 20, PI, PI + QUARTER_PI); // knuckle
arc(249, 259, 50, 14, 0, HALF_PI, PI);
// Other fingers
arc(274, 265, 9, 7, PI + QUARTER_PI, TWO_PI); // tip
arc(273, 265, 11, 33, 0, HALF_PI, PI); // tip
arc(257, 266, 10, 49, HALF_PI, PI); // knuckle
arc(257, 287, 30, 7, 0, HALF_PI, PI);
// Pinkie
arc(270, 283, 5, 11, 0, HALF_PI, PI); // tip
arc(276, 284, 43, 5, PI, PI + QUARTER_PI); 


   // Right arm outline //
arc(402.5, 190.2, 40, 20, PI + QUARTER_PI, TWO_PI);
arc(415, 191, 15, 105, 0, HALF_PI, PI);   
// Forearm                  
arc(410, 252, 20, 20, PI + QUARTER_PI, TWO_PI); 
arc(403, 250, 34, 40, 0, HALF_PI, PI); 
// First fingers
arc(389, 261, 34, 20, PI + QUARTER_PI, TWO_PI); 
arc(393, 263, 35, 30, PI, PI + QUARTER_PI); // tip
arc(401, 260, 10, 12, 0, HALF_PI, PI); // knuckle
arc(399, 264, 47, 5, HALF_PI, PI); 
// Other finger
arc(382, 265, 13, 17, HALF_PI, PI); // tip
arc(387, 274, 13, 17, HALF_PI, PI); // tip
arc(399, 266, 7, 18, 0, HALF_PI, PI); // knuckle
arc(400, 272.7, 41, 5, HALF_PI, PI); 
arc(397.8, 282, 24, 3, HALF_PI, PI);
arc(398, 275, 5, 17, 0, HALF_PI, PI); // knuckle

   // Details //
stroke(lc);
arc(250, 260, 30, 40, 2, PI, PI + QUARTER_PI);
arc(240, 277, 5, 20, 0, HALF_PI, PI); 
arc(253, 290, 14, 13, HALF_PI, PI); 
arc(413, 279, 7, 20, 0, HALF_PI, PI);
arc(417, 274, 7, 10, 0, HALF_PI, PI); 
line(337, 200, 336, 232);
line(337, 220, 351, 225);
line(350, 225, 353, 235);
line(335, 226, 318, 248);
line(321, 242, 307, 234);

   // Computer //
line(390, 200, 250, 200);
// Left side
line(250, 200, 257, 254.5);
line(264, 292, 265, 300);
// Right side
line(390, 200, 395, 249.8); 
line(398, 286, 400, 300); 
// Bottom
line(265, 300, 399, 300);
line(266, 305, 399, 305);
pop();

}