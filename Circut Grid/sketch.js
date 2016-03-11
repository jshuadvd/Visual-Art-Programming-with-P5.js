/**
 * Project 1: Circut Grid
 * By: Joshua David AKA jshuadvd
 */


 var x1 = 10;
 var y1 = 10;
 var openCircles = [];

 function setup() {
   createCanvas(windowWidth, windowHeight);
   // createCanvas(600, 600);
   // background(40, 40, 40);

   for (var i = 0; i < 500; i++) {

     openCircles[i] = {
       x: random(0, width),
       y: random(0, height),

       pink: function() {
         noFill();
         smooth();
         stroke(209, 17, 65);
         strokeWeight(3);
         // ellipse(this.x, this.y, x1, y1);
         ellipse(this.x, this.y, x1, y1);
       },

       blue: function() {
         fill(0, 174, 219);
         smooth();
         stroke(0, 174, 219);
         strokeWeight(3);
         line(20, 60, 60, 20);
         ellipse(20, 60, x1, y1);
         ellipse(60, 20, x1, y1);
       },

       line: function() {
         beginShape();
         fill(0, 174, 219);
         smooth();
         stroke(0, 174, 219);
         strokeWeight(3);
         ellipse(20, 60, x1, y1);
         vertex(20, 60);
         vertex(60, 20);
         ellipse(60, 20, x1, y1);
         endShape();
       }
     }
   }

 }

 function draw() {

   background(40, 40, 40);

   for (var i = 0; i < openCircles.length; i++) {
     //openCircles[i].pink();
     openCircles[i].line();
   }


   // noFill();
   // smooth();
   // stroke(209, 17, 65);
   // strokeWeight(3);
   // ellipse(20, 20, x1, y1);
   

   // fill(0, 174, 219);
   // smooth();
   // stroke(0, 174, 219);
   // strokeWeight(3);
   // line(20, 60, 60, 20);
   // ellipse(20, 60, x1, y1);
   // ellipse(60, 20, x1, y1);

 }