// load images for screen backgrounds
let treeImg;
let scaryImg;
let sunImg;

//game values
let playerX = 1;
let playerY = 2;
let playerImg;
const tileSize = 20;
let mamaX = 350;
let mamaY = 312;

// image load for p5canvas.js
function preload() {
  treeImg = loadImage("img/tree.png");
  scaryImg = loadImage("img/scary.png");
  sunImg = loadImage("img/sunset.png");
  playerImg = loadImage("img/babymonster.png");
}

// the tile-map set up - is going to be exported
const map = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],

  [
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  ],

  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  ],

  [
    0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],

  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],

  [
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
];

function setup() {
  createCanvas(800, 600);
  // frameRate(18);
  // playerImg = loadImage("img/babymonster.png");
}

//   baby monster start screen
function babyMonsterStart() {
  //BABY MONSTER

  //body
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(710, 100, 300);

  //eye
  fill(24, 24, 24);
  noStroke();
  ellipse(660, 140, 120);

  fill(255, 255, 255);
  noStroke();
  ellipse(635, 140, 60);

  fill(255, 255, 255);
  noStroke();
  ellipse(690, 150, 40);

  //blush

  angleMode(DEGREES);
  push();
  translate(760, 157);
  rotate(-40);
  fill(177, 78, 155);
  ellipse(0, 0, 30, 60);
  pop();

  push();
  translate(650, 40);
  rotate(-40);
  fill(177, 78, 155);
  ellipse(0, 0, 30, 60);
  pop();

  //pacifier

  fill(54, 149, 236);
  noStroke();
  ellipse(740, 25, 90);

  fill(54, 149, 236);
  noStroke();
  ellipse(780, 70, 90);

  push();
  translate(760, 50);
  rotate(-40);
  fill(7, 103, 192);
  noStroke();
  ellipse(0, 0, 40, 70);
  pop();

  push();
  translate(760, 50);
  noFill();
  stroke(7, 103, 192);
  strokeWeight(6);
  bezier(22, 25, 80, -100, -80, 0, 0, -20);
  pop();
}

// mama monster start screen
function monsterMamaStart() {
  //MAMA MONSTER
  fill(30, 50, 30);
  rect(245, 300, 345, 90);
  //Arms

  // //Left

  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(5);
  // beginShape();
  // curveVertex(522, 277);
  // curveVertex(522, 277);
  // curveVertex(537, 203);
  // curveVertex(567, 215);
  // curveVertex(563, 261);
  // curveVertex(540, 300);
  // curveVertex(540, 300);
  // endShape();

  ellipse(35, 350, 30, 100);
  ellipse(180, 350, 30, 100);

  //Right

  // fill(190, 155, 202);
  // stroke(125, 69, 113);
  // strokeWeight(5);
  // beginShape();
  // curveVertex(409, 277);
  // curveVertex(409, 277);
  // curveVertex(399, 203);
  // curveVertex(366, 215);
  // curveVertex(371, 261);
  // curveVertex(403, 300);
  // curveVertex(403, 300);
  // endShape();

  //Body
  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(7);
  rect(40, 300, 140, 170, 80);

  //eyes

  //whites

  fill(255, 255, 255);
  noStroke();
  ellipse(75, 355, 30, 30);

  fill(255, 255, 255);
  noStroke();
  ellipse(140, 355, 30, 30);

  //iris

  fill(24, 24, 24);
  noStroke();
  ellipse(80, 350, 10, 10);

  fill(24, 24, 24);
  noStroke();
  ellipse(145, 350, 10, 10);

  //Nose

  fill(208, 128, 190);
  noStroke();
  ellipse(102, 380, 40, 20);

  //nostrils

  //right

  push();
  fill(177, 78, 155);
  noStroke();
  translate(100, 386);
  rotate(PI / 8);
  ellipse(10, -3, 18, 8);
  pop();

  //left

  push();
  fill(177, 78, 155);
  noStroke();
  translate(65, 370);
  rotate(PI / -8);
  ellipse(28, 10, 18, 8);
  pop();

  //Mouth

  fill(156, 37, 87);
  noStroke();
  ellipse(95, 410, 35, 35);

  push();
  angleMode(DEGREES);
  fill(255, 255, 255);
  noStroke();
  translate(90, 420);
  rotate(30);
  ellipse(0, 0, 25, 13);
  pop();

  //Legs

  //right leg

  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(6);
  ellipse(79, 475, 25, 25);

  //Left leg
  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(6);
  ellipse(134, 480, 25, 25);
}

// Screens

// start screen
function startScreen() {
  image(treeImg, 0, 0, 0, 0);
  babyMonsterStart();
  monsterMamaStart();

  // text
  textSize(45);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  text("BABY MONSTER", 240, 270);
}

// draw statements for the tilemap
function drawMap() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 1) {
        noStroke();
        fill(111, 153, 86);
      } else {
        fill(83, 73, 73);
      }
      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

// characther draw
function drawPlayer() {
  image(
    playerImg,
    playerX * tileSize,
    playerY * tileSize,
    tileSize * 2,
    tileSize * 2
  );
}

// characther movement
function movePlayer() {
  if (keyIsDown(37)) {
    if (
      playerX > 0 &&
      map[playerY][playerX - 1] === 0 &&
      map[playerY + 1][playerX - 1] === 0
    ) {
      playerX--;
    }
  } else if (keyIsDown(39)) {
    if (
      playerX < map[0].length - 2 &&
      map[playerY][playerX + 2] === 0 &&
      map[playerY + 1][playerX + 2] === 0
    ) {
      playerX++;
    }
  } else if (keyIsDown(38)) {
    if (
      playerY > 0 &&
      map[playerY - 1][playerX] === 0 &&
      map[playerY - 1][playerX + 1] === 0
    ) {
      playerY--;
    }
  } else if (keyIsDown(40)) {
    if (
      playerY < map.length - 2 &&
      map[playerY + 2][playerX] === 0 &&
      map[playerY + 2][playerX + 1] === 0
    ) {
      playerY++;
    }
  }
}

// monstermama at the goal , the drawn version

function monsterMamaGame() {
  push();

  translate(mamaX, mamaY);

  //Arms

  //Left

  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(1.5);
  ellipse(429, 229, 7, 7);

  //Right

  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(1.5);
  ellipse(398, 228, 7, 7);

  //Body
  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(3);
  rect(401, 210, 25, 30, 30);

  //eyes

  //whites

  fill(255, 255, 255);
  noStroke();
  ellipse(410, 220, 5, 5);

  fill(255, 255, 255);
  noStroke();
  ellipse(418, 220, 5, 5);

  //iris

  fill(24, 24, 24);
  noStroke();
  ellipse(411, 220, 2, 2);

  fill(24, 24, 24);
  noStroke();
  ellipse(417, 220, 2, 2);

  //Nose

  fill(208, 128, 190);
  noStroke();
  ellipse(414, 228, 8, 4);

  //nostrils

  //left

  push();
  fill(177, 78, 155);
  noStroke();
  translate(401, 227);
  rotate(PI / 8);
  ellipse(10, -3, 3.5, 2);
  pop();

  //right

  push();
  fill(177, 78, 155);
  noStroke();
  translate(385, 227);
  rotate(PI / -8);
  ellipse(28, 13, 3.5, 2);
  pop();

  //Mouth

  fill(156, 37, 87);
  noStroke();
  ellipse(416, 233.5, 5, 5);

  push();
  fill(255, 255, 255);
  noStroke();
  translate(416.5, 234.5);
  rotate(PI / -8);
  ellipse(0, 0, 4, 2);
  pop();

  //Legs

  //right leg

  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(2);
  ellipse(406, 242, 8, 8);

  //Left leg
  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(2);
  ellipse(420, 242, 8, 8);
  pop();
}

// limit the charcther movement to the walls of the maze
function checkCollision() {
  if (
    map[playerY][playerX] === 1 ||
    map[playerY][playerX + 1] === 1 ||
    map[playerY + 1][playerX] === 1 ||
    map[playerY + 1][playerX + 1] === 1
  ) {
    console.log("Collision detected!");
  }
}

// game screen
function gameScreen() {
  frameRate(18);
  drawMap();
  drawPlayer();
  movePlayer();
  checkCollision();
  monsterMamaGame();
}

let state = "game";

function draw() {
  // state switch
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "fail") {
    failScreen();
  }
}
