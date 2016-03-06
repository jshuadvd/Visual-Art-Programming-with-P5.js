/**
 * Assignment 1: Port an Image to Code
 * By: Joshua David AKA jshuadvd
 */


function setup() {
  createCanvas(1024, 768);
  background(0);
  smooth();

}

function draw() {

  // Long Cream Rect
  fill(250, 240, 230);
  rect(0, 0, 24, 768);

  // Light Green Square
  fill(130, 166, 131, 50);
  beginShape();
    vertex(24, 0);
    vertex(24, 260);
    vertex(336, 280);
    vertex(350, 0)
  endShape();

  // Next Light Green Square
  fill(130, 168, 148, 10);
  tint(255, 120);
  beginShape();
    vertex(348, 0);
    vertex(340, 228);
    vertex(675, 250);
    vertex(700, 0)
  endShape();
}
