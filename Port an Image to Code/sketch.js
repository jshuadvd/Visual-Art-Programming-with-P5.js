/**
 * Assignment 1: Port an Image to Code
 * By: Joshua David AKA jshuadvd
 */


function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {

  // Long Cream Rect
  fill(250, 240, 230);
  rect(0, 0, 24, 768);

  // Light Green Square
  fill(130, 166, 131, 100);
  beginShape();
    vertex(24, 0);
    vertex(24, 260);
    vertex(336, 280);
    vertex(350, 0)
  endShape();
}
