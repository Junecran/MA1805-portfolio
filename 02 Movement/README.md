# **Movement**
**MA1805-portfolio**




**Design choices**
- sharp edges = emotions



## Debrief
- learning array to store information helped shorten repeatable code but sometimes it was easier to write the code manally (when code coordanise where too differnet) / lines didnt work /vertex were better when doing muiltple things to the same coords
- arrays list only worked when the line while contiusous and needed muiltple placement/ action (shapes without junktions )

- wanted to keep a consitent way of drawing my shapes but it seemed easier to keep non- lines object the way there where

- like a way to combine the line and (mulitple different types )shape data into one 

- loneger name = less comments , but to keep the lines short i use breathations

- find way to short code but still keep shapes differnet
- maybe plans lines before coding 
- Work on if statment e.g. combining For/Foreach statement into one

## References Used

- Used Throughout the code - https://p5js.org/reference

- To help create the 'drawLines' and 'drawShape' fucnction - https://happycoding.io/tutorials/processing/creating-functions

- Information on operators - https://www.w3schools.com/jsref/jsref_operators.asp

- Help with understanding noise - https://github.com/processing/p5.js/blob/v1.11.11/src/math/noise.js#L36

- learning its best to use 'for' instead of 'forEach' when it came to animating noise - https://www.geeksforgeeks.org/javascript/difference-between-foreach-and-for-loop-in-javascript

- Helped me figure out how to use certain parts of an arra- https://www.geeksforgeeks.org/javascript/how-to-get-first-n-number-of-elements-from-an-array-in-javascript


## Study Notes 
*This section is my study notes. I added explanations to the code to help me remember how and why it works. I wanted to keep my notes attached to the project without making a mess of the code. Please ignore this section…. unless it will help getting a better grade.*
The code Will **not** be finished/ able to copy


### Coordinates to Lines

// points is a placeholder for the array's name.
  function drawShape(points, colours) { 
   beginShape();
    noStroke();
    fill(...colours);

// For each small array [x, y] inside the main array, it draw a vertex at those coordinates.
    points.forEach(([x, y]) => vertex(x, y));
   endShape();
}

### Unpacking an Array 

// 'treesLines' is already an array of inside an array and needs a spread operator (...) to unpack the array
   [
    frontRightTree, frontRightTree2, backgroundTree, ...treesLines
   ].forEach(drawLines);





### Info
Apparently, when you have loops inside loops, it’s common to use 'j':
- i for the outer loop (the main one),
- j for the inner loop (the secondary one).

Square brackets [] create an array, while parentheses () do not in JavaScript.
- []	Array literal	 - Creates an array
- ()	Grouping / function call / comma operator

Double brackets in the 'Coordinates to Lines' because:
- [ and ] destructure each [x, y] array,
- ( and ) wrap the arrow function parameter.

**'forEach' and 'for'**
- forEach = simplicity / readability  e.g.'points.forEach(([x, y]) => vertex(x, y));'
- for = 'points' control / better for animated code  e.g.'for (let i = 0; i < points.length - 1; i++)'


## Extra code comments  
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

**Adding 'wavey' to 'points' shares properties of Noise function.**

     function drawShape(points, colour) { 
      beginShape();
      noStroke();
      fill(colour);
        for (let i = 0; i < points.length; i++) {
        let p = points[i];
        vertex(p[0], p[1]);
      }
      endShape();
     }


**Personal Coding Style:**
Headings - 3 spaces + // -- on both sides + title capitalization
Subheadings/ list name - 2 space + // on both sides + title capitalization
subsections - no spaces + single // + first word capitalize
comments - no spaces + single // + first word capitalize + full stop.
**2 spaces to break up each Heading**