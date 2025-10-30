# **Media**


**Design Choices**




## Debrief
- wanted to explore rain sounds link to mic 
- key resize feature 
- adding image


## References Used
rain
https://editor.p5js.org/Yonathan29/sketches/uDmXvRuOZ
https://editor.p5js.org/monicawen/sketches/HkU-BCJqm

mic ? 
https://editor.p5js.org/weberwong/sketches/wuOW_5eZU
https://github.com/processing/p5.js/blob/v1.11.11/lib/addons/p5.sound.js#L6098

## Study Notes 

This section is my study notes. I added explanations to the code to help me remember how and why it works. Please ignore this section…. unless it will help getting a better grade.


lightningAlpha -= 10; - a subtraction assignment

let rainIntensity = vol < 0.02 ? 0 : vol < 0.1 ? 50 : 200; - condition ? valueIfTrue : valueIfFalse is the ternary syntax.

  // Raindrop Function //
function createDrop() 
  let r = random(0, 20);
  return {
    x: random(width),
    y: random(-400, 0),
    r: r,
    len: map(r, 0, 20, 10, 20),
    yspeed: map(r, 0, 20, 4, 10),
    xspeed: wind * r * 0.2 + random(-0.5, 0.5)
  };


  // Splash Function //
function createSplash(x, y) 
  return {
    particles: Array.from({ length: 5 }, () => ({
      x,
      y,
      vx: random(-1, 1),
      vy: random(-3, -1),
      alpha: 255
    }))
  };

  for (let i = splashes.length - 1; i >= 0; i--) 
  let sp = splashes[i];
  for (let p of sp.particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.1;

    p.alpha -= 10; // Gradually fade out - slower fade.
  }
  noStroke();
  fill(173, 216, 230, 30);
  for (let p of sp.particles) {
    fill(173, 216, 230, p.alpha);
    ellipse(p.x, p.y, 2, 2);
  }

  if (sp.particles.every(p => p.alpha <= 0)) 
    splashes.splice(i, 1);