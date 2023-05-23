const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
const gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Add three color stops
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);

function draw() {}

// // Monster Guide Layout

// // eyebrows
// stroke(152, 218, 214);
// strokeWeight(5);
// line(185, 230, 185, 300);
// line(225, 230, 225, 300);

// // feet
// fill(152, 218, 214);
// ellipse(170, 299, 30, 10);
// ellipse(210, 299, 30, 10);

// // ear
// noStroke();
// ellipse(160, 166, 15, 40);
// ellipse(240, 166, 15, 40);

// // head/body
// stroke(90, 110, 129);
// strokeWeight(4);
// fill(152, 218, 214);
// ellipse(200, 200, 100);

// // eyes
// fill(255, 255, 250);
// noStroke();
// ellipse(180, 200, 17, 30);
// ellipse(220, 200, 17, 30);

// // puil-lines
// fill(255, 255, 255);
// stroke(0, 0, 0);
// strokeWeight(2);
// ellipse(219, 206, 15, 15);

// // pupils
// fill(0, 0, 0);
// ellipse(219, 210, 10, 10);
// fill(255, 255, 255);
// ellipse(180, 206, 15, 15);
// fill(0, 0, 0);
// ellipse(180, 210, 10, 10);

// // eyebrows
// fill(0, 0, 0);
// rect(170, 180, 15, 4);
// rect(210, 180, 15, 4);
// fill(255, 255, 255);
// noStroke();
// ellipse(190, 230, 20);

// // monster hunter layout

// // body
// fill(250, 195, 140);
// stroke(130, 69, 67);
// strokeWeight(5);
// ellipse(400, 200, 150);

// // eyes
// fill(61, 34, 34);
// noStroke();
// ellipse(400, 200, 25);
// ellipse(470, 200, 25);

// // pupils
// fill(222, 222, 222);
// triangle(389, 205, 400, 189, 410, 205);
// triangle(459, 205, 470, 189, 480, 205);

// // teeth
// fill(61, 34, 34);
// triangle(400, 225, 410, 247, 422, 230);
// triangle(422, 230, 430, 250, 445, 235);
// triangle(445, 235, 452, 253, 465, 240);

// // smile curve
// bezier(394, 236, 430, 215, 400, 224, 399, 226);

// // hat-base
// fill(131, 91, 73, 255);
// stroke(61, 7, 7, 255);
// push();
// angleMode(DEGREES);
// rotate(10);
// ellipse(425, 70, 220, 80);
// pop();

// // hat-top
// beginShape();
// vertex(350, 150);
// bezierVertex();
