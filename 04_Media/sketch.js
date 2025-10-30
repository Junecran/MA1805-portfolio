
// -- Settings -- //
let sensitivity = 1; 
let mic;
let raindrops = [];
let splashes = [];
let lightningAlpha = 0;
let rainVariant = 0;
let micStarted = false;
let keyX, keyY, spacing;


// -- Setup -- //
function setup() {
  createCanvas(windowWidth, windowHeight);
  updateKeyPositions();  
  fill(255);
  textAlign(CENTER);
}


   // -- Functions -- //
 // Window Resize //
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateKeyPositions();  
}
// key positions and spacing dynamical.
function updateKeyPositions() {
  keyX = width * 0.02;          
  keyY = height * 0.02;             
  let fontSize = min(width, height) * 0.025; 
  spacing = fontSize * 1.2;          
}

 // Raindrop Function //
function createDrop() {
  let r = random(0, 20);
  return {
    x: random(width),
    y: random(-400, 0),
    r: r,
    len: map(r, 0, 20, 10, 20),
    yspeed: map(r, 0, 20, 4, 10),
    xspeed: rainVariant * r * 0.2 + random(-0.5, 0.5)
  };
}

 // Splash Function //
function createSplash(x, y) {
  return {
    particles: Array.from({ length: 5 }, () => ({
      x,
      y,
      vx: random(-1, 1),
      vy: random(-3, -1),
      alpha: 100
    }))
  };
}

 // Toggle Mic //
function mousePressed() {
  if (!micStarted) {
    mic = new p5.AudioIn();
    mic.start();
    micStarted = true;
  } else {
    mic.stop();
    micStarted = false;
    raindrops = [];
    splashes = [];
  }
}

 // Sensitivity Key //
function keyPressed() {
  if (keyCode === UP_ARROW) sensitivity = min(sensitivity + 0.1, 3);
  if (keyCode === DOWN_ARROW) sensitivity = max(sensitivity - 0.1, 0.2);
}

 // Controls Key //
function ControlsKey() {
  let fontSize = min(width, height) * 0.025;
  textSize(fontSize);
  textAlign(LEFT, CENTER);
  fill(255);
  noStroke();

  text("Noise = Rain Strength & Lightning", keyX, keyY);
  text("↑ : Increase Mic Sensitivity", keyX, keyY + spacing);
  text("↓ : Decrease Mic Sensitivity", keyX, keyY + spacing * 2);
  text("Sensitivity: " + nf(sensitivity, 1, 1), keyX, keyY + spacing * 3);
  text("Click to Start/Stop Mic", keyX, keyY + spacing * 4);
}

   // -- Canvas -- //
function draw() {
  background(20, 30, 60);
  let fontSize = min(width, height) * 0.025;
  textSize(fontSize);
  textAlign(LEFT, CENTER);
  fill(255);

  // Mic Status //
  if (!micStarted) {
    text('Off', keyX, keyY + spacing * 5.5);
  } else {
    text('On', keyX, keyY + spacing * 5.5);
  }

  // Mic //
  if (!micStarted) {
    ControlsKey();
    return;
  }

    // Volume & rain //
  let vol = mic.getLevel() * sensitivity;
  let rainIntensity = vol > 0.1 ? 200 : vol > 0.05 ? 50 : 0;
  rainVariant = map(noise(frameCount * 0.01), 0, 1, -1, 1);

    // Raindrops //
  for (let i = 0; i < rainIntensity / 3; i++) {
    raindrops.push(createDrop());
  }
  for (let i = raindrops.length - 1; i >= 0; i--) {
    let rd = raindrops[i];
    rd.y += rd.yspeed;
    rd.x += rd.xspeed;
    stroke(173, 216, 230, 140); // Rain colour and alpha.
    line(rd.x, rd.y, rd.x, rd.y + rd.len);

    if (rd.y > height) {
      if (random() < 0.3) splashes.push(createSplash(rd.x, height));
      raindrops.splice(i, 1);
    }
  }

    // Splashes //
  for (let i = splashes.length - 1; i >= 0; i--) {
    let sp = splashes[i];
    for (let p of sp.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.alpha -= 10; // Alpha speed rate.
    }
    noStroke();
    for (let p of sp.particles) {
      fill(173, 216, 230, p.alpha); // Splashes colours.
      ellipse(p.x, p.y, 2, 2);
    }
    if (sp.particles.every(p => p.alpha <= 0)) {
      splashes.splice(i, 1);
    }
  }

    // Lightning //
  if (vol > 0.15) lightningAlpha = 255;
  if (lightningAlpha > 0) {
    fill(255, 255, 255, lightningAlpha);
    rect(0, 0, width, height);
    lightningAlpha -= 1;
  }

  ControlsKey(); // Here to stop interference.
}
