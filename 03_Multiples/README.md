# **Multiples**
**MA1805-portfolio**
- blinking meaning




**Design choices**
-pattern follow widow size - eyes will always follow




## Debrief

- make the mouse increase blinking speed 
- colour of eye changes each blink, show more emotions 
- add the resize canvsa to other projects






## References Used

- Used Throughout the code focused on atan2() and millis() - https://p5js.org/reference

- put referecne for study notes


## Study Notes 
*This section is my study notes. I added explanations to the code to help me remember how and why it works. I wanted to keep my notes attached to the project without making a mess of the code. Please ignore this section…. unless it will help getting a better grade.*
The code Will **not** be finished/ able to copy.

         let t = millis() * timeFactor; 
   let wobbleX1 = sin(t + x * 0.1 + y * 0.1) * wobbleAmount;
   let wobbleY1 = cos(t + y * 0.1 + x * 0.1) * wobbleAmount;
   let wobbleX2 = cos(t + x * 0.2) * wobbleAmount;
   let wobbleY2 = sin(t + y * 0.2) * wobbleAmount;
  colourCircle(x - 11 + wobbleX1, y + 7 + wobbleY1, 7, color(240, 240, 240));
  colourCircle(x + 11 + wobbleX2, y - 7 + wobbleY2, 14, color(240, 240, 240));
  // Eyelids
  fill(color(colours.main));
  noStroke();
   let lidHeight = 200 * blink;
  arc(x, y - 30, 100, lidHeight, 0, PI, CHORD);


  for (let x = 0; x < cols; x++) 
    for (let y = 0; y < rows; y++) 
     let xpos = x * spacing + spacing / 2;
     let ypos = y * spacing + spacing / 2;

      let blinkOffset = (x + y) * 100;

  // Eye Array //
      eyes.push
        x: xpos,
        y: ypos,
        blinkOffset: blinkOffset,
        blinkDuration: 200



    for (let eye of eyes) 
    let blinkPhase = (time + eye.blinkOffset) %2000;
    let blinkAmount = 0;

    if (blinkPhase < eye.blinkDuration) {
      blinkAmount = map(blinkPhase, 0, eye.blinkDuration, 0, 1);
    } else if (blinkPhase < eye.blinkDuration * 2) {
      blinkAmount = map(blinkPhase, eye.blinkDuration, eye.blinkDuration * 2, 1, 0);
    }

  ## Extra code comments 