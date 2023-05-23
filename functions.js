function setup() {
  createCanvas(800, 600);
  noLoop();
}

function drawMap() {
  background(83, 73, 73);

  let tileW = 20;
  let tileH = 20;

  let gridRows = 40;
  let gridCols = 40;

  const map = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,

    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,

    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,

    0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,

    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,

    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0,

    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,

    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,

    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,

    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  ];

  for (let row = 0; row < gridRows; row++) {
    for (let col = 0; col < gridCols; col++) {
      let tileX = col * tileW;
      let tileY = row * tileH;
      let tileValue = map[row * gridCols + col];

      if (tileValue === 0) {
        noStroke();
        fill(83, 73, 73);
      } else if (tileValue === 1) {
        noStroke();
        fill(111, 153, 86);
      }

      rect(tileX, tileY, tileW, tileH);
    }
  }
}

function drawBaby() {
  push();
  translate(babyX, babyY);

  //Feet

  //right foot

  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(3);
  ellipse(190, 315, 15, 5);

  //Left foot
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(3);
  ellipse(210, 315, 15, 5);

  //body
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(3);
  ellipse(200, 300, 30);

  //eye
  fill(24, 24, 24);
  noStroke();
  ellipse(200, 297, 10);

  fill(255, 255, 255);
  noStroke();
  ellipse(201, 295, 2);

  fill(255, 255, 255);
  noStroke();
  ellipse(198, 298, 3);

  //blush

  fill(177, 78, 155);
  ellipse(192, 305, 6, 3);

  fill(177, 78, 155);
  ellipse(207, 305, 6, 3);

  //pacifier

  fill(54, 149, 236);
  noStroke();
  ellipse(198.5, 309, 4);

  fill(54, 149, 236);
  noStroke();
  ellipse(201.5, 309, 4);

  fill(7, 103, 192);
  noStroke();
  ellipse(199.5, 310, 5, 3);

  pop();
}

let babyX = -170;
let babyY = -241;

function drawMama() {}

function draw() {
  drawMap();
  drawBaby();
  drawMama();
}
