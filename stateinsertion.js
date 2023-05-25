// import class
import MonsterMamaRun from "./mama-run.js";
// mama monster object start screen
let mamaRun = new MonsterMamaRun(100, 100);

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
window.preload = preload;

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
}

window.setup = setup;

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

  //right ear
  angleMode(DEGREES);
  push();
  translate(590, 90);
  fill(208, 128, 190);
  noStroke();
  rotate(100);
  rect(0, 0, 15, 120, 6);
  pop();

  //ear flapp
  angleMode(DEGREES);
  push();
  translate(465, 80);
  rotate(-70);
  fill(208, 128, 190);
  noStroke();
  rect(0, 0, 69, 15, 5);
  pop();

  //left ear
  angleMode(DEGREES);
  push();
  fill(208, 128, 185);
  noStroke();
  translate(700, 230);
  rotate(15);
  rect(0, 0, 15, 120, 6);
  pop();

  //ear flapp
  angleMode(DEGREES);
  push();
  fill(208, 128, 190);
  noStroke();
  translate(684, 315);
  rotate(-20);
  rect(-25, 21, 69, 15, 5);
  pop();
}

// mama monster start screen

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

// baby monster for winning screen layout
function babyMonsterWin() {
  //BABY MONSTER

  //body
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(300, 400, 100);

  //Feet

  //right foot

  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(280, 455, 40, 10);

  //Left foot
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(320, 455, 40, 10);
}

// monster mama for winning screen
function monsterMamaWin() {
  //right leg
  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(6);
  ellipse(500, 490, 25, 25);

  //Body
  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(7);
  rect(390, 320, 140, 170, 80);

  //left leg

  fill(190, 155, 202);
  stroke(125, 69, 113);
  strokeWeight(6);
  ellipse(430, 490, 25, 25);
}

// info box for winning and failing screen
function info() {
  stroke(220, 220, 240, 180);
  fill(230, 255, 240, 180);
  rect(250, 100, 300, 150, 20);
}

// text shown when player wins game
function textInfoWin() {
  textSize(15);
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(230, 255, 255);
  text("Thank you for helping me find my mama. ", 265, 150);
  text("Press space to play again ❤️ ", 265, 200);
}

// baby monster failing screen layout
function babyMonsterFail() {
  //right foot
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(320, 480, 40, 10);

  //body
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(300, 430, 100);

  //Feet

  //left foot

  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(290, 485, 40, 10);

  //eye
  fill(24, 24, 24);
  noStroke();
  ellipse(320, 430, 40);

  fill(255, 255, 255);
  noStroke();
  ellipse(315, 440, 10);

  fill(255, 255, 255);
  noStroke();
  ellipse(330, 435, 5);

  // eyelid
  fill(238, 161, 221);
  ellipse(320, 420, 45, 20);
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(320, 420, 45, 20);
  noStroke();
  ellipse(320, 413, 45, 15);

  //pacifier
  stroke(7, 103, 192);
  strokeWeight(2);

  push();
  translate(120, 120);
  fill(54, 149, 236);
  noStroke();
  ellipse(196, 342, 15);

  fill(54, 149, 236);
  noStroke();
  ellipse(206, 342, 15);

  fill(7, 103, 192);
  noStroke();
  ellipse(201, 342, 15, 5);

  noFill();
  stroke(7, 103, 192);
  strokeWeight(2);
  bezier(195, 342, 199, 350, 201, 360, 206, 342);
  pop();

  // tear
  fill(36, 166, 219);
  ellipse(300, 450, 5, 15);

  //right ear
  angleMode(DEGREES);
  push();
  translate(375, 380);
  fill(208, 128, 190);
  noStroke();
  rotate(65);
  rect(0, 0, 5, 60, 6);
  pop();

  //ear flapp
  angleMode(DEGREES);
  push();
  translate(330, 365);
  rotate(30);
  fill(208, 128, 190);
  noStroke();
  rect(0, 0, 15, 5, 5);
  pop();

  //left ear
  angleMode(DEGREES);
  push();
  fill(208, 128, 185);
  noStroke();
  translate(330, 366);
  rotate(40);
  rect(0, 0, 5, 60, 6);
  pop();

  // right ear flapp
  angleMode(DEGREES);
  push();
  fill(208, 128, 190);
  noStroke();
  translate(375, 380);
  rotate(30);
  rect(0, 0, 15, 5, 5);
  pop();
}

// text shown when player fails game
function textInfoFail() {
  textSize(15);
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(230, 255, 255);
  text(
    "Baby monster is still lost, will he ever find his mama again? ",
    265,
    130,
    280
  );
  text("Press space to retry ", 320, 200);
}

// Screens

// start screen
function startScreen() {
  image(treeImg, 0, 0, 0, 0);
  babyMonsterStart();
  // text
  textSize(60);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  text("BABY MONSTER", 165, 270);
  textSize(42);
  text("press SPACE to start", 200, 350);
}
// game screen
function gameScreen() {
  frameRate(18);
  drawMap();
  drawPlayer();
  movePlayer();
  checkCollision();
  monsterMamaGame();
  timer();
}

// winnig screen yay
function winScreen() {
  image(sunImg, 0, 0, 0, 0);
  babyMonsterWin();
  monsterMamaWin();
  info();
  textInfoWin();
  clear();
}

// fail screen
function failScreen() {
  image(scaryImg, 0, 0, 0, 0);
  babyMonsterFail();
  info();
  textInfoFail();
}

let state = "fail";
let gameTimer = 0;

// timer layout
function timer() {
  textSize(20);
  fill(255, 255, 255);
  text("Time:" + gameTimer, 710, 0, 200);
}

// press spacebar to start game from start, game and win screen
function draw() {
  if (state === "start" && keyIsDown(32)) {
    state = "game";
  } else if (state === "win" && keyIsDown(32)) {
    state = "game";
  } else if (state === "fail" && keyIsDown(32)) {
    state = "game";
  }

  // state display
  if (state === "start") {
    startScreen();
    mamaRun.draw();
    mamaRun.x += 0.2;
  } else if (state === "game") {
    gameScreen();
    gameTimer = gameTimer + 1;
    if (gameTimer >= 300) {
      gameTimer = 0;
      state = "fail";
    }
  } else if (state === "win") {
    winScreen();
  } else if (state === "fail") {
    failScreen();
  }
}
window.draw = draw;
mamaRun.draw;
