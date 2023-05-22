//BABY MONSTER
function baby(x, y) {
  push();
  translate(x, y);

  //body
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(200, 300, 150);

  //eye
  fill(24, 24, 24);
  noStroke();
  ellipse(200, 295, 60);

  fill(255, 255, 255);
  noStroke();
  ellipse(210, 285, 20);

  fill(255, 255, 255);
  noStroke();
  ellipse(190, 303, 25);

  //blush

  fill(177, 78, 155);
  ellipse(158, 329, 20, 10);

  fill(177, 78, 155);
  ellipse(240, 329, 20, 10);

  //pacifier

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

  //right ear
  push();
  fill(208, 128, 190);
  noStroke();
  translate(158, 0);
  rotate(PI / 8);
  rect(158, 130, 10, 70, 3);
  pop();

  //ear flapp
  push();
  translate(124, -78);
  rotate(PI / 5);
  fill(208, 128, 190);
  noStroke();
  rect(259, 130, 40, 15, 5);
  pop();

  //left ear

  push();
  fill(208, 128, 190);
  noStroke();
  translate(128, 130);
  rotate(PI / -8);
  rect(-10, 54, 10, 70, 3);
  pop();

  //ear flapp
  push();
  fill(208, 128, 190);
  noStroke();
  translate(122, 170);
  rotate(PI / -5);
  rect(-25, 21, 40, 15, 5);
  pop();

  //Feet

  //right foot

  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(170, 378, 40, 10);

  //Left foot
  fill(238, 161, 221);
  stroke(177, 78, 155);
  strokeWeight(5);
  ellipse(230, 378, 40, 10);

  pop();
}

// baby monster movement with keys

let x = 100;
let y = 100;
let speed = 0;

function draw() {
  baby(x, y);

  if (keyIsDown(38)) {
    speed = 5;
  } else {
    speed = 0;
  }
}
