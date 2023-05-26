// load images for screen backgrounds
let treeImg;
let scaryImg;
let sunImg;
let mamaImg;

//game values
let playerX = 1;
let playerY = 2;
let playerImg;
const tileSize = 20;
let mamaX = 37;
let mamaY = 26;

let coinCount = 0; // Variable to store the number of collected coins
let coins = []; // Array to store the coin objects

// image load for p5canvas.js
function preload() {
  treeImg = loadImage("img/tree.png");
  scaryImg = loadImage("img/scary.png");
  sunImg = loadImage("img/sunset.png");
  playerImg = loadImage("img/babymonster.png");
  mamaImg = loadImage("img/mama1.png");
}

// the tile-map set up - is going to be exported
const map = [
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],

  [
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  ],

  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 2, 0, 1, 1, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2,
    0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 2, 2, 2, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 2, 0, 1, 2,
    1, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2,
    2, 2, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 1,
  ],

  [
    1, 2, 1, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 0, 0, 0,
    0, 0, 0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2, 1,
  ],

  [
    1, 2, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 2, 0, 1, 1,
    1, 1, 1, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 1,
  ],

  [
    1, 2, 0, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2,
    2, 2, 2, 0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 1, 0, 1, 2, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 1, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 1, 2, 1, 1, 0, 1, 2, 1,
  ],

  [
    1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 1, 2, 2, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2, 0, 1, 2,
    0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2,
    0, 1, 1, 0, 1, 2, 1, 1, 1, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 0, 1, 2,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 1, 2,
    0, 1, 2, 0, 1, 1, 1, 1, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2, 0, 1, 2, 1, 1, 1, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 2, 2, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2,
    0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2,
    0, 1, 2, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2, 1,
  ],

  [
    1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2,
    0, 1, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2, 1,
  ],

  [
    1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  ],

  [
    1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],

  [
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
];

function setup() {
  createCanvas(800, 600);
  frameRate(25);
  generateCoins(80);
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
function monsterMamaStart() {
  //MAMA MONSTER
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

// draw statements for the tilemap
function drawMap() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 1) {
        noStroke();
        fill(83, 73, 73);
      } else if (map[y][x] === 2) {
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

function drawmama() {
  image(
    mamaImg,
    mamaX * tileSize,
    mamaY * tileSize,
    tileSize * 2,
    tileSize * 2
  );
}

function drawCoins() {
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    if (map[coin.y][coin.x] <= 0) {
      // Only draw the coin if it's on a tile with a value of 1 or lower
      drawCoin(coin.x, coin.y);
    }
  }
}

//style of coin
function drawCoin(x, y) {
  // Draw the coin at the specified location
  const coinSize = 13;
  const coinX = x * tileSize + coinSize;
  const coinY = y * tileSize + coinSize;
  fill(255, 215, 0); // Yellow color
  ellipse(coinX, coinY, coinSize, coinSize);
}

//style and draw coin cunter
function drawCoinCounter() {
  fill(0);
  textSize(15);
  text(`Coins: ${coinCount}`, 25, 34);
}

function movePlayer() {
  if (keyIsDown(37)) {
    if (
      playerX > 0 &&
      map[playerY][playerX - 1] <= 1 &&
      map[playerY + 1][playerX - 1] <= 1
    ) {
      playerX--;
    }
  } else if (keyIsDown(39)) {
    if (
      playerX < map[0].length - 2 &&
      map[playerY][playerX + 2] <= 1 &&
      map[playerY + 1][playerX + 2] <= 1
    ) {
      playerX++;
    }
  } else if (keyIsDown(38)) {
    if (
      playerY > 0 &&
      map[playerY - 1][playerX] <= 1 &&
      map[playerY - 1][playerX + 1] <= 1
    ) {
      playerY--;
    }
  } else if (keyIsDown(40)) {
    if (
      playerY < map.length - 2 &&
      map[playerY + 2][playerX] <= 1 &&
      map[playerY + 2][playerX + 1] <= 1
    ) {
      playerY++;
    }
  }
}

function generateCoins(numCoins) {
  for (let i = 0; i < numCoins; i++) {
    let coinPlaced = false;
    while (!coinPlaced) {
      let x = Math.floor(Math.random() * map[0].length);
      let y = Math.floor(Math.random() * map.length);
      if (map[y][x] <= 1) {
        coins.push({ x: x, y: y });
        coinPlaced = true;
      }
    }
  }
}

// function for collecting the coins
function collectCoin() {
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    if (coin.x === playerX && coin.y === playerY) {
      // Collect the coin if the player's position matches the coin's position
      coins.splice(i, 1); // Remove the coin from the array
      coinCount++; // Increment the coin count
      break;
    }
  }
}

// monstermama at the goal , the drawn version

// limit the charcther movement to the walls of the maze
function checkCollision() {
  if (
    map[playerY][playerX] > 1 ||
    map[playerY][playerX + 1] > 1 ||
    map[playerY + 1][playerX] > 1 ||
    map[playerY + 1][playerX + 1] > 1
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

  // tear
  fill(36, 166, 219);
  ellipse(310, 460, 10, 20);
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

function reset() {
  playerX = 1;
  playerY = 2;
  coinCount = 0;
  gameTimer = 0;
  gameState = "start";
}

// start screen
function startScreen() {
  image(treeImg, 0, 0, 0, 0);
  babyMonsterStart();
  monsterMamaStart();

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
  drawPlayer(playerX, playerY);
  drawmama();
  drawCoins();
  drawCoin();
  drawCoinCounter();
  movePlayer();
  generateCoins();
  collectCoin();
  checkCollision();
  timer();

  for (let i = 0; i < coins.length; i++) {
    if (
      playerX === coins[i].x &&
      playerY === coins[i].y &&
      !coins[i].collected
    ) {
      coins[i].collected = true;
      coinCount++;
    }
  }

  // Check for win condition
  if (playerX === mamaX && playerY === mamaY && coinCount === 5) {
    state = "win";
  }
}

// winnig screen yay
function winScreen() {
  image(sunImg, 0, 0, 0, 0);
  babyMonsterWin();
  monsterMamaWin();
  info();
  textInfoWin();
  reset();
}

// fail screen
function failScreen() {
  image(scaryImg, 0, 0, 0, 0);
  babyMonsterFail();
  info();
  textInfoFail();
  reset();
}

let state = "start";
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

  // how to win the game
  if (playerX === mamaX && playerY === mamaY) {
    state = "win";
  }

  // state display
  if (state === "start") {
    startScreen();
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
