function setup() {
  createCanvas(640, 480);
  background(400);

}

function draw() {
  // the-computer.
  quad(260, 300, 400, 305, 390, 200, 250, 200)
  quad(262, 300, 350, 320, 490, 320, 400, 300)

  // left-arm.
  arc(290, 198, 50, 60, PI, PI + QUARTER_PI);
  arc(295, 180, 50, 10, PI, PI + QUARTER_PI);

  // right-arm.
  arc(400, 190, 40, 20, PI + QUARTER_PI, TWO_PI);
  arc(413, 190, 15, 120, 0, HALF_PI, PI);
  // bottom-right-arm.
  arc(408, 252, 20, 20, PI + QUARTER_PI, TWO_PI);
  arc(398, 250, 40, 40, 0, HALF_PI, PI);

  // top-face.
  arc(340, 175, 90, 82, PI, PI + HALF_PI);
  arc(340, 175, 90, 82, PI + QUARTER_PI, TWO_PI);
  // bottom-face.
  arc(310, 175, 30, 50, HALF_PI, PI);
  arc(375, 175, 20, 50, 0, HALF_PI);
}
