
   // Data // 
// Customize Key // For easy access.
let nScale = 0.05; // Noise smoothness
let ns = 10; // Noise strength

// Noise function 

function drawLines(points) {
  stroke(0);
  for (let i = 0; i < points.length - 1; i++) {
    let p1 = points[i];
    let p2 = points[i + 1];

    // Calculate noise offsets
    let n1 = noise(p1[0] * nScale, p1[1] * nScale, frameCount * 0.01);
    let n2 = noise(p2[0] * nScale, p2[1] * nScale, frameCount * 0.01);

    let offX1 = map(n1, 0, 1, -ns, ns);
    let offY1 = map(n1, 0, 1, -ns, ns);
    let offX2 = map(n2, 0, 1, -ns, ns);
    let offY2 = map(n2, 0, 1, -ns, ns);

    // Draw line between jittered points
    line(p1[0] + offX1, p1[1] + offY1, p2[0] + offX2, p2[1] + offY2);
  }
}
// Tree Data 
let frontRightTree = [
[409, 84], [412, 105], [418, 150], [419, 170],
[412, 180], [408, 188], [405, 196], [402, 202],
[398, 213], [394, 225], [395, 235], [397, 251],
[388, 261], [376, 270], [374, 274], [380, 277],
[393, 273], [397, 272], [404, 274], [410, 285],
[406, 302], [392, 319], [382, 335], [390, 349],
[398, 349], [419, 347], [436, 348], [450, 350],
[462, 356], [483, 356]
];
let forntLeftTree = [
 [110, 341], [108, 333], [102, 332], [98, 334],
 [93, 339], [87, 339], [82, 335], [85, 332],
 [84, 328], [80, 327], [81, 322], [92, 322],
 [97, 317], [97, 310], [94, 304], [85, 301],
];
let Tree2 = [
[398, 230], [390, 233], [385, 236], [380, 241],
[378, 249], [363, 249], [329, 253], [328, 261],
[306, 266], [302, 274], [296, 274], [290, 280],
[286, 281], [286, 296], [288, 305], [295, 309],
[303, 303], [312, 300], [312, 296], [318, 290],
[325, 288], [341, 288], [342, 294], [341, 298],
[329, 307], [319, 318], [320, 322], [323, 324],
[330, 334], [325, 344], [321, 348], [323, 355],
[342, 359], [375, 357], [400, 358], [428, 358],
[481, 361]
];
let backgroundTree = [
[334, 85], [333,113], [332, 120], [334, 128],
[336, 136], [332, 141], [320, 146], [313, 149],
[311, 158], [306, 162], [304, 167], [302, 174],
[315, 184], [313, 196], [310, 206], [306, 211],
[305, 223], [301, 228], [292, 232], [289, 234],
[282, 237], [281, 240], [286, 250], [290, 253],
[303, 265]

];







   // Canvas //
function setup() {
 createCanvas(600, 500);

}

function draw() {
  background(255);
  text(`x: ${mouseX} y: ${mouseY}`, 100, 100);

drawLines(frontRightTree);
drawLines(forntLeftTree);
drawLines(Tree2);
drawLines(backgroundTree);

}

