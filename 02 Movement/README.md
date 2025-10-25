# **Movement**
**MA1805-portfolio**




**Design choices**
- sharp edges = emotions



## Debrief
The objective was to find a more efficient way to code or avoid repetitive code.

- Using an array to store coordinates reduces repetitive code, such as line-drawing. However, figuring out how to unpack the array proved a bit challenging because it required creating new functions.  

- I couldn't figure out how to simplify shape coordinates (rects, quads, circles, etc.) without creating a new set of arrays, so I decided to do them manually. I would like to work on this next time or find a way to combine multiple data types into a single array. Maybe an ‘if’ statement might be the way to do this.

- I usually sketch out my plan on paper, but I don't think about the placement of computerised shapes and lines. This could be important to consider next time I am planning.  

- I found that if I avoid using short names for code, I limit the amount of comments —the downside is that it takes longer to write, and I kept messing up the names.

- I need to learn more about the push() and pop(), which could fix the ‘Here for order’ issue I have in my code.


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

### Noise Function

    function drawLines(points) 
     stroke(colours.outline);
     for (let i = 0; i < points.length - 1; i++)
      let [p1, p2] = [points[i], points[i+1]];
      let n1 = noise(p1[0]*nScale, p1[1]*nScale, frameCount*0.01);
      let n2 = noise(p2[0]*nScale, p2[1]*nScale, frameCount*0.01);
      line
       p1[0] + map(n1,0,1,-ns,ns), p1[1] + map(n1,0,1,-ns,ns),
       p2[0] + map(n2,0,1,-ns,ns), p2[1] + map(n2,0,1,-ns,ns)

### Shape Colour Function

     function ShapeColour(points, baseColor, noiseFactor = 20) 
      let disableNoise = baseColor === colours.land;

**Creates a bridge**
Naming a variable can avoid mutating the original data e.g:
// Keeps baseColor intact and only applies the noise to temporary variables r, g, b.
// Using local copies (r, g, b) keeps your base color safe and produces predictable, smooth noise effects.

     points.forEach([x, y]) => 
      let r = baseColor[0];
      let g = baseColor[1];
      let b = baseColor[2];


// map() is a function that remaps a number from one range to another range
//map(value, start1, stop1, start2, stop2)

     if (!disableNoise) {
       r += map(noise(x * 0.01, y * 0.01, frameCount * 0.01), 0, 1, -noiseFactor, noiseFactor);
       g += map(noise(x * 0.01 + 100, y * 0.01 + 100, frameCount * 0.01), 0, 1, -noiseFactor, noiseFactor);
       b += map(noise(x * 0.01 + 200, y * 0.01 + 200, frameCount * 0.01), 0, 1, -noiseFactor, noiseFactor);
     }
    fill(constrain(r, 0, 255), constrain(g, 0, 255), constrain(b, 0, 255));
     

### Cloud Function

      clouds.forEach(cloud => 
      push();
       translate(cloud.x, cloud.y);
       let wobble = map(noise(frameCount*0.001 + cloud.offset), 0, 1, -5, 5);
       fill(255, 255, 255, 180);
       noStroke();
       ellipse(0 + wobble, 0, cloud.w*0.6, cloud.h*0.6);
       ellipse(-cloud.w*0.2 + wobble, 0, cloud.w*0.5, cloud.h*0.5);
       ellipse(cloud.w*0.2 + wobble, 0, cloud.w*0.5, cloud.h*0.5);
      pop();
      cloud.x -= 0.2;
      if(cloud.x + cloud.w < 0) cloud.x = width + cloud.w;

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