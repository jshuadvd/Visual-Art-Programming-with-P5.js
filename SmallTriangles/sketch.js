/**
 * By: Joshua David AKA jshuadvd
 **/

/* Still need to determine how to randomly 
(And in color sequence, distribute colors in a good scale pattern) */


/* ++++++++++ ========== Arrays of colors ========== ++++++++++ */

var pinkColors = ['#ff0329',
                  '#d13551',
                  '#dd4655',
                  '#EB516B',
                  '#FF6072'
                 ];

var blueColors = ['#00526c',
                  '#10828c',
                  '#009ba8',
                  '#03a4ae',
                  '#00b0b2'
                 ];

var grnColors =  ['#04b8b7',
                  '#00b7a9',
                  '#00b392',
                  '#00bb86'
                 ];

var yellColors = ['#d7b74a',
                  '#dece67',
                  '#d9d26a',
                  '#fff22d',
                  '#dec358'
                ];

var ongColors =  ['#e7a942',
                  '#e6894e',
                  '#da7837',
                  '#e6683c',
                  '#ff7454'
                 ];

/* ++++++++++ ========== Setup Function ========== ++++++++++ */

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(70);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textFont("Helvetica");
  noLoop();
}

/* ++++++++++ ========== Draw Function ========== ++++++++++ */

function draw() {
  background(40, 40, 40);

  for (var x = -28; x <= 300; x = x + 54) {
		for (var y = 0; y <= 300; y = y + 48) {
			push();
			translate(x, y);
      drawPinkTriangles();
			pop();
		}
	}

  for (var x = 348; x <= 654; x = x + 54) {
		for (var y = 0; y <= 300; y = y + 48) {
			push();
			translate(x, y);
      drawBlueTriangles();
			pop();
		}
	}
}

/* ++++++++++ ========== Darw Triangles Function ========== ++++++++++ */

function drawPinkTriangles() {
    // fill(colors[5]);
    // fill(colors[Math.floor(random(colors.length))]);
    // fill(209, 17, 28);
    var randomPink = floor(random(pinkColors.length));

    fill(pinkColors[randomPink]);
    noStroke();
    //triangle(random(255), random(255), random(255), random(255), random(255), random(255));
    triangle(0, 48, 28, 0, 54, 48);
    // fill(colors[Math.floor(random(colors.length))]);
    fill(pinkColors[randomPink]);
    // triangle(random(255), random(255), random(255), random(255), random(255), random(255));
    // fill(0, 174, 219);
    triangle(28, 0, 54, 48, 82, 0);

    //fill(pinkColors[randomPink]);
    // stroke(255, 96, 114);
    // strokeWeight(4);
    //triangle(random(255), random(255), random(255), random(255), random(255), random(255));

    //fill(pinkColors[randomPink]);
    //triangle(random(60), random(60), random(60), random(60), random(60), random(60));
}

/* ========== Draw Blue Triangles ========== */

function drawBlueTriangles() {
    // fill(colors[5]);
    // fill(colors[Math.floor(random(colors.length))]);
    // fill(209, 17, 28);
    var randomBlue = floor(random(blueColors.length));
    // var randomGreen = floor(random(grnColors.length));

    // Determine how to generate colors mathematically
    // What is the best way?
    // Should generate in a pattern, but not randomly possibly?
    // but how do I create the pattern?
    // What is the best way?
    fill(blueColors[randomBlue]);
    noStroke();
    //triangle(random(255), random(255), random(255), random(255), random(255), random(255));
    triangle(0, 48, 28, 0, 54, 48);
    // fill(colors[Math.floor(random(colors.length))]);
    fill(blueColors[randomBlue]);
    // triangle(random(255), random(255), random(255), random(255), random(255), random(255));
    // fill(0, 174, 219);
    triangle(28, 0, 54, 48, 82, 0);

    //fill(pinkColors[randomPink]);
    // stroke(255, 96, 114);
    // strokeWeight(4);
    //triangle(random(255), random(255), random(255), random(255), random(255), random(255));

    //fill(pinkColors[randomPink]);
    //triangle(random(60), random(60), random(60), random(60), random(60), random(60));
}

/* ++++++++++ ========== Function to Resize the Display For All Devices ========== ++++++++++ */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
