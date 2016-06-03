/**
 * Assignment 1: Port an Image to Code
 * By: Joshua David AKA jshuadvd
 */

/* ========== Create a reenactment of the paiting by : with code ========== */






function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {
  // Leftmost Cream Rect
  fill(250, 240, 230);
  smooth();
  rect(0, 0, 24, 768);

  // Top Light Green Square
  fill(130, 166, 131, 50);
  smooth();
  beginShape();
    vertex(24, 0);
    vertex(24, 260);
    vertex(336, 280);
    vertex(350, 0)
  endShape();

  // Top Middle Large Light Green Square
  fill(130, 168, 148, 10);
  smooth();
  tint(255, 120);
  beginShape();
    vertex(348, 0);
    vertex(340, 228);
    vertex(675, 250);
    vertex(700, 0)
  endShape();

  fill(87, 147, 170, 50);
  smooth();
  tint(255, 120);
  beginShape();
    vertex(700, 0);
    vertex(680, 285);
    vertex(780, 286);
    vertex(782, 292);
    vertex(840, 292);
    vertex(840, 322);
    vertex(1024, 350);
  endShape();
}
