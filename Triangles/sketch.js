var colors = ['#ff0329', // 0
              '#d13551', // 1
              '#dd4655', // 2
              '#EB516B', // 3
              '#FF6072', // 4
              '#00526c', // 5
              '#10828c', // 6
              '#009ba8', // 7
              '#03a4ae', // 8
              '#04b8b7', // 9
              '#00b0b2', // 10
              '#00b7a9', // 11
              '#00b392', // 12
              '#00bb86', // 13
              '#d7b74a', // 14
              '#dece67', // 15
              '#d9d26a', // 16
              '#fff22d', // 17
              '#dec358', // 18
              '#e7a942', // 19
              '#da7837', // 20
              '#e6683c', // 21
              '#ff7454', // 22
              '#e6894e'  // 23
             ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(80);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textFont("Helvetica");
  noLoop();
}

function draw() {
  background(40, 40, 40);

  for (var x = -28; x <= windowWidth; x = x + 54) {
		for (var y = 0; y <= windowHeight; y = y + 48) {
			push();
			translate(x, y);
      drawTriangles();
      //createText();
			pop();
		}
	}

  createText();
  createNums()
}

function drawTriangles() {
    // fill(colors[5]);
    // fill(colors[Math.floor(random(colors.length))]);
    // fill(209, 17, 28);
    fill(colors[5]);
    noStroke();
    triangle(random(255), random(255), random(255), random(255), random(255), random(255));
    // triangle(0, 48, 28, 0, 54, 48);
    // fill(colors[Math.floor(random(colors.length))]);
    fill(colors[7]);
    triangle(random(255), random(255), random(255), random(255), random(255), random(255));
    // fill(0, 174, 219);
    // triangle(28, 0, 54, 48, 82, 0);

    fill(colors[13]);
    // stroke(255, 96, 114);
    // strokeWeight(4);
    triangle(random(255), random(255), random(255), random(255), random(255), random(255));

    fill(colors[1]);
    //noStroke();
    triangle(random(60), random(60), random(60), random(60), random(60), random(60));
}

function createText() {
  var quotes = ["Vision is the art of seeing what is invisible to others.",
                "The artist vocation is to send light into the human heart.",
                "The true work of art is but a shadow of the divine perfection.",
                "To an engineer, good enough means perfect. With an artist, there's no such thing as perfect.",
                "Art is a collaboration between God and the artist, and the less the artist does the better.",
                "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
                "Creativity requires the courage to let go of certainties.",
                "To create one’s own world takes courage.",
                "Art must be an expression of love or it is nothing.",
                "Love, Create, Inspire"
               ];

  var index = floor(random(quotes.length));
  fill(255, 255, 255);
  //console.log(quotes[i]);
  text(quotes[index], windowWidth / 10, windowHeight / 3, 1200, 300);
}

function createNums() {
  for (var y = 0; y <= windowHeight; y = y + 48) {
  var quotes = ["Vision is the art of seeing what is invisible to others.",
                "The artist vocation is to send light into the human heart.",
                "The true work of art is but a shadow of the divine perfection.",
                "To an engineer, good enough means perfect. With an artist, there's no such thing as perfect.",
                "Art is a collaboration between God and the artist, and the less the artist does the better.",
                "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
                "Creativity requires the courage to let go of certainties.",
                "To create one’s own world takes courage.",
                "Art must be an expression of love or it is nothing.",
                "Love, Create, Inspire..."
               ];

  var index = floor(random(quotes.length));
  fill(255, 255, 255);
  //console.log(quotes[i]);
  text(index, width / 2, height / 2, 1200, 1200);
  }
}
