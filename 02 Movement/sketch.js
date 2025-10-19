function setup() {
  createCanvas(600, 500);
  noFill();

}


   // Functions and Variables //

let nscale = 0.05; // Noise scale
let ns = 8; // Noise strength 

//Noise arc function
function noisyArc(x1, y1, x2, y2) {





}




function draw() {
  background(255);
  
  // Fornt right tree
noiseboy(410, 80, 420, 165);
noiseboyArc(501, 247, 200, 280, PI, PI + QUARTER_PI);
noiseboyArc(383, 248, 35, 20, 0, HALF_PI);
noiseboyArc(387, 263, 25, 10, PI, PI + QUARTER_PI);
noiseboyArc(405, 284, 10, 15, PI + QUARTER_PI, TWO_PI);
noiseboyArc(400, 265, 50, 30, HALF_PI, PI);
noiseboyArc(388, 288, 40, 70, 0, HALF_PI);
noiseboyArc(420, 332, 70, 40, HALF_PI, PI);
noiseboyLine(421, 351, 492, 355);
}

// -------- Noisy Line Function --------
function noiseboy(x1, y1, x2, y2) {
  beginShape();
  let steps = 100;
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);

    let n = noise(x * nscale, y * nscale, frameCount * 0.01);
    let offsetX = map(n, 0, 1, -ns, ns);
    let offsetY = map(n, 0, 1, -ns, ns);
    
    vertex(x + offsetX, y + offsetY);
  }
  endShape();
}

