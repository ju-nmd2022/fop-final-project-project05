//BABY MONSTER

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

//MAMA MONSTER

//Arms

//Left

fill(190, 155, 202);
stroke(125, 69, 113);
strokeWeight(5);
beginShape();
curveVertex(522, 277);
curveVertex(522, 277);
curveVertex(537, 203);
curveVertex(567, 215);
curveVertex(563, 261);
curveVertex(540, 300);
curveVertex(540, 300);
endShape();

//Right

fill(190, 155, 202);
stroke(125, 69, 113);
strokeWeight(5);
beginShape();
curveVertex(409, 277);
curveVertex(409, 277);
curveVertex(399, 203);
curveVertex(366, 215);
curveVertex(371, 261);
curveVertex(403, 300);
curveVertex(403, 300);
endShape();

//Body
fill(190, 155, 202);
stroke(125, 69, 113);
strokeWeight(7);
rect(401, 210, 140, 170, 80);

//eyes

//whites

fill(255, 255, 255);
noStroke();
ellipse(440, 265, 30, 30);

fill(255, 255, 255);
noStroke();
ellipse(500, 265, 30, 30);

//iris

fill(24, 24, 24);
noStroke();
ellipse(445, 264, 10, 10);

fill(24, 24, 24);
noStroke();
ellipse(495, 264, 10, 10);

//Nose

fill(208, 128, 190);
noStroke();
ellipse(470, 300, 40, 20);

//nostrils

//left

push();
fill(177, 78, 155);
noStroke();
translate(450, 303);
rotate(PI / 8);
ellipse(10, -3, 18, 8);
pop();

//right

push();
fill(177, 78, 155);
noStroke();
translate(450, 303);
rotate(PI / -8);
ellipse(28, 13, 18, 8);
pop();

//Mouth

fill(156, 37, 87);
noStroke();
ellipse(486, 340, 35, 35);

push();
fill(255, 255, 255);
noStroke();
translate(490, 350);
rotate(PI / -8);
ellipse(0, 0, 25, 13);
pop();

//Legs

//right leg

fill(190, 155, 202);
stroke(125, 69, 113);
strokeWeight(6);
ellipse(446, 388, 25, 25);

//Left leg
fill(190, 155, 202);
stroke(125, 69, 113);
strokeWeight(6);
ellipse(500, 388, 25, 25);
