/**
 * Assignment 1: Port an Image to Code
 * By: Joshua David AKA jshuadvd
 */


function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {

  fill(250, 240, 230);
  beginShape();
    vertex(0, 768);
    vertex(24, 768);
    vertex(24, 0);
    vertex(0, 0)
  endShape();
}
