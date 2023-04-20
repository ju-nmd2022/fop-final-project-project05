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

//pasefyer

fill(54, 149, 236);
noStroke();
ellipse(195, 342, 15);

fill(54, 149, 236);
noStroke();
ellipse(207, 342, 15);

noFill();
stroke(7, 103, 192);
strokeWeight(2);
triangle(195, 340, 207, 340, 201, 352);

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

fill(208, 128, 190);
noStroke();
translate(122, 170);
rotate(PI / -5);
rect(-25, 21, 40, 15, 5);
