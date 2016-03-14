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
  noLoop();
}

function draw() {
  background(40, 40, 40);

  for (var x = -28; x <= windowWidth; x = x + 54) {
		for (var y = 0; y <= windowHeight; y = y + 48) {
			push();
			translate(x, y);
      drawTriangles();
			pop();
		}
	}
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

}
