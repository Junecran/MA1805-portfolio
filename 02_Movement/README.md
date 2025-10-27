# Movement
I set out to explore the hidden layers of grief and the lingering emptiness that follows the loss of a loved one. 

When my dad passed away, our cherished nature walks became haunted by a silence that echoed with his absence. The peaceful trails we once wandered together shifted from places of comfort to landscapes tinged with sorrow. The  bright colors of nature faded into muted shades. However, as time mends hearts, those colors slowly seep back in, and some days, the emptiness feels less overwhelming.


## Design Choices

- Although it was simpler to code harsher shapes, I found that all the sharp corners added to the image's atmosphere, giving it a sense of tension and suggesting the harsh experiences of life. 

- Keeping the colours muted conveyed a more melancholy tone. It maintained an underlying sense of hope, making the image more dynamic through the noise in the colours. 

- A darker, pulsing void was added to the presentations of emptiness/grief. I added the pulse effect to suggest fluctuations in feelings of emptiness across different days.

- There is a rough silhouette in the pulsing void to focus on the loss of a loved one, rather than a general feeling of emptiness. 


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

- Helped me figure out how to use certain parts of an arra - https://www.geeksforgeeks.org/javascript/how-to-get-first-n-number-of-elements-from-an-array-in-javascript


## Study Notes 
This section is my study notes. I added explanations to the code to help me remember how and why it works. Please ignore this section…. unless it will help getting a better grade.


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


### Shape Colour Function

     function ShapeColour(points, baseColor, noiseFactor = 20) 
      let disableNoise = baseColor === colours.land;

### Creates a bridge
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

### Info
Apparently, when you have loops inside loops, it’s common to use 'j':
- i for the outer loop (the main one),
- j for the inner loop (the secondary one).

**Square brackets [] create an array, while parentheses () do not in JavaScript.**
- []	Array literal	 - Creates an array
- ()	Grouping / function call / comma operator

**Double brackets in the 'Coordinates to Lines' because:**
- [ and ] destructure each [x, y] array,
- ( and ) wrap the arrow function parameter.

**'forEach' and 'for'**
- forEach = simplicity / readability  e.g.'points.forEach(([x, y]) => vertex(x, y));'
- for = 'points' control / better for animated code  e.g.'for (let i = 0; i < points.length - 1; i++)'




