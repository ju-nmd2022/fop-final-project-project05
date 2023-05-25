// load images for screen backgrounds
let treeImg;
let scaryImg;
let sunImg;

function preload() {
  treeImg = loadImage("img/tree.png");
  scaryImg = loadImage("img/scary.png");
  sunImg = loadImage("img/sunset.png");
}

function setup() {
  createCanvas(800, 600);
  frameRate(18);
  playerImg = loadImage("babymonster.png");
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

// game screen
function gameScreen() {}

let state = "start";

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
