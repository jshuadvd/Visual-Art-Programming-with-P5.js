var colors = color('#ff0329',
                   '#d13551',
                   '#EB516B',
                   '#FF6072',
                   '#04b8b7',
                   '#009ba8',
                   '#03a4ae',
                   '#10828c',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                   '#',
                 );

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(40, 40, 40);

  for (var x = -28; x <= windowWidth; x = x+54){
		for (var y = 0; y <= windowHeight; y = y+48){
			push();
			translate(x, y);
      drawTriangles();
			pop();
		}
	}
}

function drawTriangles() {
  // fill(209, 17, 28);
  noStroke();
  triangle(0, 48, 28, 0, 54, 48);
  // fill(0, 174, 219);
  triangle(28, 0, 54, 48, 82, 0);
}
