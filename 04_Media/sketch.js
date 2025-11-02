  
   // -- Settings -- //
let sensitivity = 1; 
let mic;
let raindrops = [];
let splashes = [];
let lightningAlpha = 0;
let rainVariant = 0;
let micStarted = false;
let keyX, keyY, spacing;
let walkFrames = [];
let frameSpeed = 15; // Speed animaton
let walkers = [];
let numWalkers = 5; // Number of walking people


   // -- Image preload -- //
function preload() {
  for (let i = 1; i <= 4; i++) {
    walkFrames.push(loadImage(`walking${i}.png`));
  }
}


   // -- Setup -- //
function setup() {
  createCanvas(windowWidth, windowHeight);
  updateKeyPositions();  
  fill(255);
  textAlign(CENTER);

// Initialize multiple walkers
  for (let i = 0; i < numWalkers; i++) {
    walkers.push({
      x: random(width),
      y: height - 100,
      w: 50,
      h: 100,
      speed: random(1, 3),
      frameOffset: floor(random(walkFrames.length)) 
    });
  }
}


   // -- Functions -- //
  // Window Resize //
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateKeyPositions();  
}

  // Controls Display //
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

  // Dynamic Key //
function updateKeyPositions() {
  keyX = width * 0.02;          
  keyY = height * 0.02;             
  let fontSize = min(width, height) * 0.025; 
  spacing = fontSize * 1.2;          
}

// Sensitivity Key //
function keyPressed() {
  if (keyCode === UP_ARROW) sensitivity = min(sensitivity + 0.1, 3);
  if (keyCode === DOWN_ARROW) sensitivity = max(sensitivity - 0.1, 0.2);
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

  
   // -- Canvas -- //
function draw() {
  background(20, 30, 60);

  // Mic Status 
  let fontSize = min(width, height) * 0.025;
  textSize(fontSize);
  textAlign(LEFT, CENTER);
  fill(255);
  text(micStarted ? 'On' : 'Off', keyX, keyY + spacing * 5.5);

  if (!micStarted) {
    ControlsKey();
    return;
  }

    // Volume to rain //
  let vol = mic.getLevel() * sensitivity;
  let rainIntensity = vol > 0.1 ? 200 : vol > 0.05 ? 50 : 0;
  rainVariant = map(noise(frameCount * 0.01), 0, 1, -1, 1);

    // Raindrops //
  for (let i = 0; i < rainIntensity / 3; i++) {
    raindrops.push(createDrop());
  }

  // Raindrop logic
  for (let i = raindrops.length - 1; i >= 0; i--) {
    let rd = raindrops[i];
    rd.y += rd.yspeed;
    rd.x += rd.xspeed;
    stroke(173, 216, 230, 140); // Rain colour and alpha levels
    line(rd.x, rd.y, rd.x, rd.y + rd.len);

    // Collision with any walker
    let hit = false;
    for (let w of walkers) {
      if (rd.x > w.x - w.w / 2 &&
          rd.x < w.x + w.w / 2 &&
          rd.y + rd.len > w.y - w.h / 2 &&
          rd.y < w.y + w.h / 2) {
        splashes.push(createSplash(rd.x, w.y + w.h / 2));
        hit = true;
        break;
      }
    }
    if (hit) {
      raindrops.splice(i, 1);
      continue;
    }

    if (rd.y > height) {
      if (random() < 0.3) splashes.push(createSplash(rd.x, height));
      raindrops.splice(i, 1);
    }
  }

  // Splashes
  for (let i = splashes.length - 1; i >= 0; i--) {
    let sp = splashes[i];
    for (let p of sp.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.alpha -= 10;
    }
    noStroke();
    for (let p of sp.particles) {
      fill(173, 216, 230, p.alpha);
      ellipse(p.x, p.y, 2, 2);
    }
    if (sp.particles.every(p => p.alpha <= 0)) {
      splashes.splice(i, 1);
    }
  }

  // Lightning
  if (vol > 0.15) lightningAlpha = 255;
  if (lightningAlpha > 0) {
    fill(255, 255, 255, lightningAlpha); // Colour of lighting with alpha levels below.
    rect(0, 0, width, height);
    lightningAlpha -= 1;
  }

    // Walker Movement //
  for (let w of walkers) {
    let frameIndex = (floor(frameCount / frameSpeed) + w.frameOffset) % walkFrames.length;
    imageMode(CENTER);
    image(walkFrames[frameIndex], w.x, w.y, 100, 100);

    // Walker position
    w.x += w.speed;
    if (w.x > width + 50) w.x = -50;

    // Hitbox size
    w.w = 50;
    w.h = 100;
  }

  ControlsKey();
}
