/**
 * Assignment 1: Port an Image to Code
 * By: Joshua David AKA jshuadvd
 */


function setup() {
  createCanvas(1024, 768);



}

function draw() {

  background(0);

  // Long Cream Rect
  fill(250, 240, 230);
  smooth();
  rect(0, 0, 24, 768);

  // Large Light Green Square
  fill(130, 166, 131, 50);
  smooth();
  beginShape();
    vertex(24, 0);
    vertex(24, 260);
    vertex(336, 280);
    vertex(350, 0)
  endShape();

  // Middle Large Light Green Square
  fill(130, 168, 148, 10);
  smooth();
  tint(255, 120);
  beginShape();
    vertex(348, 0);
    vertex(340, 228);
    vertex(675, 250);
    vertex(700, 0)
  endShape();
}
