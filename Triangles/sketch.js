var colors = ['#ff0329',
              '#d13551',
              '#dd4655',
              '#EB516B',
              '#FF6072',
              '#00526c',
              '#10828c',
              '#009ba8',
              '#03a4ae',
              '#04b8b7',
              '#00b0b2',
              '#00b7a9',
              '#00b392',
              '#00bb86',
              '#d7b74a',
              '#dece67',
              '#d9d26a',
              '#fff22d',
              '#dec358',
              '#e7a942',
              '#da7837',
              '#e6683c',
              '#ff7454',
              '#e6894e'
             ];

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
  //fill(random(colors[i]));
  // fill(209, 17, 28);
  noStroke();
  triangle(0, 48, 28, 0, 54, 48);
  // fill(0, 174, 219);
  triangle(28, 0, 54, 48, 82, 0);
}
