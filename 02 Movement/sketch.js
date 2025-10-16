const octahedron_model = `
v 0.000000E+00 0.000000E+00 40.0000
v 22.5000 22.5000 0.000000E+00
v 22.5000 -22.5000 0.000000E+00
v -22.5000 -22.5000 0.000000E+00
v -22.5000 22.5000 0.000000E+00
v 0.000000E+00 0.000000E+00 -40.0000
f     1 2 3
f     1 3 4
f     1 4 5
f     1 5 2
f     6 5 4
f     6 4 3
f     6 3 2
f     6 2 5
`;
//draw a spinning octahedron
let octahedron;

function setup() {
  createCanvas(100, 100, WEBGL);
  octahedron = createModel(octahedron_model, '.obj');
  describe('Vertically rotating 3D octahedron.');
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(octahedron);
}
