let player;
let obstacles = [];
let exitZone;

function setup() {
  createCanvas(600, 400);
  player = createPlayer(width / 2, height - 30);

  for (let i = 0; i < 5; i++) {
    obstacles.push(createObstacle());
  }

  exitZone = {
    x: width - 60,
    y: 10,
    w: 50,
    h: 30
  };
}

function draw() {
  background(220);
  
  drawBorders();

  fill(0, 255, 0);
  rect(exitZone.x, exitZone.y, exitZone.w, exitZone.h);

  for (let obs of obstacles) {
    moveObstacle(obs);
    drawObstacle(obs);
  }

  drawPlayer(player);
  checkWin();
}

function createPlayer(x, y) {
  return {
    x: x,
    y: y,
    size: 20
  };
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) player.x -= 10;
  if (keyCode === RIGHT_ARROW) player.x += 10;
  if (keyCode === UP_ARROW) player.y -= 10;
  if (keyCode === DOWN_ARROW) player.y += 10;
}

function drawPlayer(p) {
  fill(0, 0, 255);
  ellipse(p.x, p.y, p.size);
}

function mousePressed() {
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10);
}

function createObstacle() {
  return {
    x: random(width),
    y: random(height),
    size: random(20, 50),
    speedX: random(-2, 2),
    speedY: random(-2, 2),
    color: color(random(255), random(255), random(255))
  };
}

function moveObstacle(obs) {
  obs.x += obs.speedX;
  obs.y += obs.speedY;

  if (obs.x > width) obs.x = 0;
  if (obs.x < 0) obs.x = width;
  if (obs.y > height) obs.y = 0;
  if (obs.y < 0) obs.y = height;
}

function drawObstacle(obs) {
  fill(obs.color);
  rect(obs.x, obs.y, obs.size, obs.size);
}


function drawBorders() {
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(0, 0, width, height);
}
function checkWin() {
  if (
    player.x > exitZone.x &&
    player.x < exitZone.x + exitZone.w &&
    player.y > exitZone.y &&
    player.y < exitZone.y + exitZone.h
  ) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("YOU WIN!", width / 2, height / 2);
    noLoop(); // Stop the game
  }
}