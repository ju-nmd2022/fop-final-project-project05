// code inspired from Garrits tutorial about classes

export default class MonsterMamaRun {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    // mama monster start screen
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

    ellipse(this.x - 65, this.y + 245, 30, 100);
    ellipse(this.x + 85, this.y + 245, 30, 100);

    //Right

    //Body
    fill(190, 155, 202);
    stroke(125, 69, 113);
    strokeWeight(7);
    rect(this.x - 60, this.y + 200, 140, 170, 80);

    //eyes

    //whites

    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - 25, this.y + 255, 30, 30);

    fill(255, 255, 255);
    noStroke();
    ellipse(this.x + 40, this.y + 255, 30, 30);

    //iris

    fill(24, 24, 24);
    noStroke();
    ellipse(this.x - 20, this.y + 250, 10, 10);

    fill(24, 24, 24);
    noStroke();
    ellipse(this.x + 45, this.y + 250, 10, 10);

    //Nose

    fill(208, 128, 190);
    noStroke();
    ellipse(this.x, this.y + 280, 40, 20);

    //nostrils

    //right

    push();
    fill(177, 78, 155);
    noStroke();
    translate(this.x + 10, this.y + 286);
    rotate(PI / 8);
    ellipse(0, 0, 18, 8);
    pop();

    //left

    push();
    fill(177, 78, 155);
    noStroke();
    translate(this.x - 10, this.y + 283);
    rotate(PI / -8);
    ellipse(0, 0, 18, 8);
    pop();

    //Mouth

    fill(156, 37, 87);
    noStroke();
    ellipse(this.x - 5, this.y + 310, 35, 35);

    push();
    angleMode(DEGREES);
    fill(255, 255, 255);
    noStroke();
    translate(this.x - 10, this.y + 320);
    rotate(30);
    ellipse(0, 0, 25, 13);
    pop();

    //Legs

    //right leg

    fill(190, 155, 202);
    stroke(125, 69, 113);
    strokeWeight(6);
    ellipse(this.x - 20, this.y + 380, 25, 25);

    //Left leg
    fill(190, 155, 202);
    stroke(125, 69, 113);
    strokeWeight(6);
    ellipse(this.x + 35, this.y + 380, 25, 25);
  }
}
let mamaRun = new MonsterMamaRun(100, 100);
