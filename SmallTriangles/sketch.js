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

  // createNums();
  // createText();
  // createNums();
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

function drawBlueTriangles() {
    // fill(colors[5]);
    // fill(colors[Math.floor(random(colors.length))]);
    // fill(209, 17, 28);
    var randomBlue = floor(random(blueColors.length));
    // var randomGreen = floor(random(grnColors.length));

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

/* ++++++++++ ========== Create Text Function ========== ++++++++++ */

// function createText() {
//   var quotes = ["Vision is the art of seeing what is invisible to others.",
//                 "The artist vocation is to send light into the human heart.",
//                 "The true work of art is but a shadow of the divine perfection.",
//                 "To an engineer, good enough means perfect. With an artist, there's no such thing as perfect.",
//                 "Art is a collaboration between God and the artist, and the less the artist does the better.",
//                 "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
//                 "Creativity requires the courage to let go of certainties.",
//                 "To create one’s own world takes courage.",
//                 "Art must be an expression of love, or it is nothing.",
//                 "Love, Inspire, Create..."
//                ];
//
//   var index = floor(random(quotes.length));
//   fill(255, 255, 255);
//   text(quotes[index], width / 10, height / 3, 1200, 300);
// }

/* ++++++++++ ========== Function to Generate Random Numbers ========== ++++++++++ */

// function createNums() {
//
//   for (var x = -90; x <= width; x = x + 54) {
//     for (var y = 0; y <= height; y = y + 48) {
//
//       var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//
//       var randomNums = floor(random(nums.length));
//       var randomColors = floor(random(colors.length));
//         push();
//         translate(x, y);
//         textSize(60);
//         // fill(colors[randomColors]);
//         fill(random(100));
//         text(nums[randomNums], -600, -500, width, height, 10);
//         pop();
//     }
//   }
// }

/* ++++++++++ ========== Function to Change the Quote When Mouse is Pressed ========== ++++++++++ */
function mousePressed() {
  redraw();
}

/* ++++++++++ ========== Function to Resize the Display For All Devices ========== ++++++++++ */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
