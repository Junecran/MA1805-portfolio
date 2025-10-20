# **Movement**
**MA1805-portfolio**




**Design choices**




## Debrief
- learning array to store information helped shorten repeatable code but sometimes it was easier to write the code manally (when code coordanise where too differnet)






## References Used

- Used Throughout the code - https://p5js.org/reference
- To help create the 'noisyVertex' and 'drawShape' fucnction - https://happycoding.io/tutorials/processing/creating-functions
- information on operators - https://www.w3schools.com/jsref/jsref_operators.asp
- helped me understand (...) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


## Study Notes 
*This section is my study notes. I added explanations to the code to help me remember how and why it works. I wanted to keep my notes attached to the project without making a mess of the code. Please ignore this section…. unless it will help getting a better grade.*

The code Will **not** be finished/ able to copy

# Coordinates to Lines

**This is grabing the coordinates from the list[] and assinging them to managable phases.** 
     for (let i = 0; i < trees.length; i++)          
     let coords = trees[i];                                
     let points = [];

**turning the flat numbers into (x, y) points**
     for (let j = 0; j < coords.length; j += 2)          
     points.push(createVector(coords[j], coords[j + 1]));
  
**apparently, when you have loops inside loops, it’s common to use 'j':**
- i for the outer loop (the main one),
- j for the inner loop (the secondary one).

**Draws each shape with its own noise offset**
     drawNoisyLine(points, i * 1000);





# Extra code comments  
 **mouse coordinates tool made to limit the trial and error in placing objects.** Made with using p5.js References

     background(250);
     text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
     stroke(0); 

**Differnet code for arcs instead of vertices**

     Arc(501, 247, 200, 280, PI, PI + QUARTER_PI);
     Arc(383, 248, 35, 20, 0, HALF_PI);
     Arc(387, 263, 25, 10, PI, PI + QUARTER_PI);
     Arc(405, 284, 10, 15, PI + QUARTER_PI, TWO_PI);
     Arc(400, 265, 50, 30, HALF_PI, PI);
     Arc(388, 288, 40, 70, 0, HALF_PI);
     Arc(420, 332, 70, 40, HALF_PI, PI);