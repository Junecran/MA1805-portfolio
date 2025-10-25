
  // -- Customise Key -- //
let colours = {
 sky: [155, 182, 196],
 churchMain: [122, 108, 97],
 churchSecond: [138, 119, 103],
 churchRoof: [46, 31, 26],
 churchWindow: [219, 176, 129],
 churchParts: [122, 104, 89],
 backgroundTree: [108, 128, 80],
 backgroundTree2: [173, 186, 155],
 backgroundTree3: [135, 153, 110],
 backgroundTree4: [125, 145, 97],
 backgroundTree5: [125, 145, 97],
 frontHouse: [133, 92, 66],
 frontHouseRoof: [43, 36, 35],
 chimmy: [117, 64, 43],
 roof: [33, 28, 27],
 bricks: [117, 64, 43],
 window: [219, 176, 129],
 windowFrame: [33, 20, 14],
 frontRightTree: [69, 92, 36],
 frontRightTree2: [80, 105, 46],
 frontLeftTree: [69, 92, 36],
 bush: [76, 99, 41],
 bush2: [76, 99, 41],
 land: [69, 59, 50],
 fence: [54, 40, 33],
 treesOutline: [29, 36, 29],
};


   // -- Data and Functions -- //
  // Noise Line Function //
let nScale = 0.01; // Noise smoothness
let ns = 8; // Noise strength
function drawLines(waveyPoints) {
stroke(colours.treesOutline);
for (let i = 0; i < waveyPoints.length - 1; i++) {
 let [p1, p2] = [waveyPoints[i], waveyPoints[i+1]];
 let n1 = noise(p1[0]*nScale, p1[1]*nScale, frameCount*0.01);
 let n2 = noise(p2[0]*nScale, p2[1]*nScale, frameCount*0.01);
 line(
  p1[0] + map(n1,0,1,-ns,ns), p1[1] + map(n1,0,1,-ns,ns),
  p2[0] + map(n2,0,1,-ns,ns), p2[1] + map(n2,0,1,-ns,ns)
  );
}
}
  // Colour Shape Function //                                                                                                                                                                                                                                                       
function ShapeColour(points, baseColor, noiseFactor = 20) {
  beginShape();
  noStroke();
  let disableNoise = baseColor === colours.land;
  points.forEach(([x, y]) => {
    let r = baseColor[0];
    let g = baseColor[1];
    let b = baseColor[2];

    if (!disableNoise) {
      r += map(noise(x * 0.01, y * 0.01, frameCount * 0.01), 0, 1, -noiseFactor, noiseFactor);
      g += map(noise(x * 0.01 + 100, y * 0.01 + 100, frameCount * 0.01), 0, 1, -noiseFactor, noiseFactor);
      b += map(noise(x * 0.01 + 200, y * 0.01 + 200, frameCount * 0.01), 0, 1, -noiseFactor, noiseFactor);
    }
    fill(constrain(r, 0, 255), constrain(g, 0, 255), constrain(b, 0, 255));
    vertex(x, y);
  });

  endShape();
}
  // Drawing Data //
let frontRightTree = [
 [409, 84], [412, 105], [418, 150], [419, 170],
 [412, 180], [408, 188], [405, 196], [402, 202],
 [398, 213], [394, 225], [395, 235], [397, 251],
 [388, 261], [376, 270], [374, 274], [380, 277],
 [393, 273], [397, 272], [404, 274], [410, 285],
 [406, 302], [392, 319], [382, 335], [390, 349],
 [398, 349], [419, 347], [436, 348], [450, 350],
 [462, 356], [483, 356], [483, 84], [409, 84]
];
let frontRightTree2 = [
 [393, 230], [390, 233], [385, 236], [380, 241],
[378, 249], [363, 249], [355, 248], [329, 253], 
[328, 261], [306, 266], [298, 268], [296, 274], 
[290, 280], [286, 281], [286, 296], [288, 305], 
[295, 309], [303, 301], [304, 300], [312, 299], 
 [317, 296], [329, 307], [319, 318], [320, 322], 
 [323, 324], [330, 334], [325, 344], [321, 348], 
 [323, 355], [330, 365], [370, 366], [385, 367],
 [450, 369], [482, 365], [481, 250], [393, 230]
];
let backgroundTree = [
 [484, 311], [482, 82], [334, 85], [333,113],
 [332, 120], [334, 128], [336, 136], [332, 141], 
 [320, 146], [313, 149], [311, 158], [306, 162],
 [304, 167], [302, 174], [315, 184], [313, 196], 
 [310, 206], [306, 211], [305, 223], [301, 228], 
 [292, 232], [289, 234], [282, 237], [281, 240], 
 [286, 250], [290, 253], [303, 265], 
];
let backgroundTree2= [
 [297, 260], [266, 262], [248, 260], [242, 263], 
 [239, 264], [240, 280], [309, 278], [306, 263],
 [304, 256]
];
let backgroundTree3 = [
 [212, 269], [216, 263], [223, 258], [226, 253],
 [228, 248], [229, 243], [233, 238], [241, 240],
 [242, 244], [244, 248], [242, 261], [248, 266],
 [214, 310], [197, 287], [203, 269], [212, 269]
];
let backgroundTree4 = [
 [189, 257], [196, 259], [199, 264], [206, 265],
 [212, 277], [216, 280], [214, 292], [210, 302], 
 [208, 320], [204, 356], [203, 360], [125, 358], 
 [128, 282], [177, 250], [189, 257]
];
let backgroundTree5 = [
 [181, 244], [189, 245], [192, 248], [187, 253],
 [185, 254], [188, 258], [188, 266], [185, 269],
 [185, 276], [178, 278], [173, 285], [152, 292], 
 [154, 250], [181, 244]
];
let frontLeftTree = [
 [110, 341], [110, 362], [146, 358], [153, 336],
 [160, 315], [162, 306], [169, 289], [170, 278],
 [173, 270], [166, 264], [166, 257], [170, 257],
 [177, 246], [184, 238], [184, 233], [184, 226],
 [178, 223], [170, 224], [169, 213], [171, 210],
 [174, 201], [173, 193], [172, 180], [169, 172],
 [152, 162], [149, 153], [142, 146], [140, 142],
 [130, 140], [121, 142], [114, 148], [110, 154],
 [110, 154], [93, 169], [89, 173], [84, 175],
 [82, 189], [85, 198], [83, 209], [78, 216],
 [78, 225], [80, 231], [82, 238], [77, 250],
 [73, 257], [73, 262], [80, 278], [82, 282],
 [81, 286], [75, 294], [75, 303], [85, 301],
 [94, 304], [97, 310], [97, 317], [92, 322],
 [81, 322], [80, 327], [84, 328], [85, 332],
 [82, 335], [87, 339], [93, 339], [98, 334],
 [102, 332], [108, 333], [110, 341]
];
let bush = [
 [300, 358], [301, 353], [301, 349], [307, 347],
 [308, 338], [289, 337], [282, 337], [276, 333],
 [249, 335], [239, 334], [225, 333], [213, 335],
 [213, 340], [219, 346], [222, 353], [219, 361],
 [298, 371], [300, 358]
];
let bush2 = [
 [179, 352], [176, 349], [178, 339], [174, 329],
 [180, 324], [190, 325], [214, 321], [217, 325], 
 [238, 326], [236, 330], [231, 341], [227, 364], 
 [176, 362], [177, 334]
];
let frontHouse = [
 [240, 279], [189, 317], [189, 360], [284, 382],
 [374, 368], [377, 314], [286, 318]
];
let frontHouseRoof = [
 [240, 275], [292, 274], [340, 272], [358, 316],
 [319, 319], [286, 321], [240, 276]
];
let churchMain = [
 [200, 239], [200, 286], [237, 264], [235, 233],
 [228, 239], [200, 239]
];
let churchSecond = [
 [202, 215], [204, 239], [230, 239], [234, 233],
 [233, 214], [226, 215], [202, 216]
];
let churchRoof = [
 [214, 188], [214, 194], [205, 209], [205, 215],
 [227, 215], [232, 213], [223, 193], [223, 188],
 [214, 188]
];
let treesLines = [
 frontRightTree2.slice(0, 32),
 backgroundTree2.slice(0, 5),
 backgroundTree3.slice(0, 11),
 backgroundTree4.slice(0, 7),
 backgroundTree5.slice(0, 10),
 frontLeftTree.slice(3, 67),
 bush.slice(0, 16),
 bush2.slice(0, 10)
];
let land = [
 [478, 364], [324, 364], [289, 359], [181, 356],
 [139, 356], [108, 356], [48, 359], [37, 358],
 [0, 500], [500, 500]
];
let sky = [
 [0, 0], [0, 600], [600, 600], [600, 0]
];
const objects = { // Order is important here.
 churchMain, churchSecond, churchRoof,
 backgroundTree2, backgroundTree3, backgroundTree4,
 backgroundTree5, backgroundTree, frontHouse,
 frontHouseRoof, frontRightTree2, frontRightTree,
 frontLeftTree, bush2, land 
};
let clouds = [
  {x: 110, y: 140, w: 120, h: 40, offset: 100}, 
  {x: 260, y: 160, w: 150, h: 50, offset: 300},
  {x: 410, y: 130, w: 100, h: 30, offset: 500}
];


   // -- Colours & Outlines -- //
function setup() {
 createCanvas(415, 350);
}

function draw() {
 background(sky);
 stroke(1);

  // Image //
  translate(-60, -90);// Add push() and pop() if needed.
  ShapeColour(sky, colours.sky); // Here for order.

// Clouds 
  clouds.forEach(cloud => {
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
 });

// Drawing Shapes Command
 push();
  for (let shape in objects) {
   ShapeColour(objects[shape], colours[shape], 18);
  }
 pop();

  // Outlines //
// Front house 
stroke(1);
line(242, 274.6, 290, 275);
line(189, 319, 189, 324);
line(283, 323, 283, 335);
// Chimmy 
push();
fill(colours.chimmy)
quad(254, 278, 262, 279, 262, 332.5, 252, 333);
quad(262, 279, 269, 277, 269, 294, 262, 294);
quad(262, 301, 268, 306, 268, 331.5, 262, 332.5);
quad(292, 323, 289, 320, 319, 319, 321, 322);
quad(254, 274, 262, 274, 262, 279, 254, 278.5);
quad(262, 274, 269, 274, 269, 278.5, 262, 279);
pop();
// Roof details
push();
fill(colours.roof);
quad(241, 275.1, 241, 281, 189, 319, 182, 319);
quad(241, 275.2, 253, 286, 253, 294, 241, 281);
quad(262, 294, 262, 301, 283, 323, 292, 323);
quad(292, 323, 289, 320, 319, 319, 321, 322);
pop();
// Bricks
push();
 fill(colours.bricks);
 rect(236, 304, 9, 4);
 rect(240, 308, 9, 4);
 rect(232, 300, 9, 4);
 rect(220, 308, 9, 4);
 rect(236, 318, 9, 4);
 line(225, 304, 250, 304); // Brick details here for order. 
 line(230, 308, 240, 308); 
pop();
// Windows
push();
fill(colours.windowFrame);
quad(291, 325, 320, 324.5, 320, 338, 291, 339);
fill(colours.window);
quad(300, 327, 311, 326.8, 311, 336.5, 300, 337);
rect(293, 327, 5, 10);
rect(313, 326.5, 5, 10);
pop();
// Front bush
push();
 ShapeColour(bush, colours.bush); // Here for order.
  ShapeColour(land, colours.land);
pop();
// Church
let churchLines = [
  [200,240,200,260],[200,240,229,240],[205,217,224,217],[205,215,224,215],
  [200,240,225,240],[200,244,225,244],[205,209,214,195],[214,195,214,190],
  [221,189,221,195],[221,195,224,202.5],[229,214.5,232,213.5],[229,216.5,232,215.5],
  [233,214,223,194],[223,194,223,189],[218,180,218,156],[215,162,221,162],
  [229,240,236,233],[236,232,236,239],[205,240,205,243],[210,240,210,243],
  [214.5,240,214.5,243],[220,240,220,243],[224,240,224,243],[200,246,222,246],
  [200,256,220,256],[211,224,211,239],[218,225,218,239]
];
churchLines.forEach(l => line(...l));
// Church details
push();
 fill(colours.churchWindow)
 arc(214.5, 227, 7, 13, PI + QUARTER_PI, TWO_PI);
 noStroke();
 rect(211.5, 224, 6, 15.4);
pop();
push();
 fill(colours.churchParts)
 quad(233, 206, 236.5, 205, 236, 233, 233, 236);
 rect(200, 207, 5, 33);
 rect(224, 207, 5, 33);
 triangle(199, 207, 202.5, 198, 206, 207 );
 triangle(223, 207, 226.5, 198, 230, 207);
 triangle(232.5, 207, 235, 198.5, 237, 206);
 triangle(207, 205, 210.5, 198, 211, 199);
 circle(218.2, 186 ,11);
pop();
// Noisy Outlines
[ frontRightTree, backgroundTree, ...treesLines ].forEach(drawLines);
// Fence // Here for order.
push();
 fill(colours.fence);
 rect(67, 339, 111, 4);
 rect(178, 336, 3, 20);
 rect(140, 336, 3, 20);
 rect(110, 336, 3, 20);
 rect(65, 338, 3, 20);
pop();


   // -- Void -- //
push();
 noStroke();
 let vx = 330;   // x position
 let vy = 330;  // y position 
 let p = sin(frameCount * 0.005) * 20 + 80; // pulse size
 let b = 40; // base brightness

 for (let i = 0; i < 60; i++) {
  fill(250, 250, 250, map(i, 0, 60, b, 0));
  ellipse(vx, vy, p + i, p * 0.6 + i * 3);
 }
pop();

}

