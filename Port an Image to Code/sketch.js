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
    vertex(-2, 769);
    vertex(24, 769);
    vertex(24, -2);
    vertex(-2, -2)
  endShape();
}
