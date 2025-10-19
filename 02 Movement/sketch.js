function setup() {
 createCanvas(600, 500);
 noFill();

}


   // Functions and Variables //

let nScale = 0.05; // Noise scale
let ns = 8; // Noise strength 

//Noise arc function
function noisyArc(cx, cy, w, h, startAngle, endAngle) {
  beginShape();
  for (let a = startAngle; a < endAngle; a += 0.05) {
    let x = cx + cos(a) * (w / 2);
    let y = cy + sin(a) * (h / 2);

    let n = noise(x * nScale, y * nScale, frameCount * 0.01);
    let offset = map(n, 0, 1, -ns, ns);
    
    // Offset perpendicular to the arc direction
    let nx = x + cos(a + HALF_PI) * offset;
    let ny = y + sin(a + HALF_PI) * offset;

    vertex(nx, ny);
  }
  endShape();
}


  // Trees //

function draw() {
 background(255);
  
// Fornt right tree
noisyArc(501, 247, 200, 280, PI, PI + QUARTER_PI),
noisyArc(383, 248, 35, 20, 0, HALF_PI),
noisyArc(387, 263, 25, 10, PI, PI + QUARTER_PI),
noisyArc(405, 284, 10, 15, PI + QUARTER_PI, TWO_PI),
noisyArc(400, 265, 50, 30, HALF_PI, PI),
noisyArc(388, 288, 40, 70, 0, HALF_PI),
noisyArc(420, 332, 70, 40, HALF_PI, PI);
}

