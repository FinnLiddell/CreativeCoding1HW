let player;
let obstacles = [];
let staticObstacles = [];
let exit;

function setup() {
  createCanvas(600, 400);
  
  player = {
    x: 50,
    y: 50,
    size: 30,
    speed: 5
  };
  
  exit = {
    x: width - 60,
    y: height - 60,
    size: 40
  };
  
  for (let i = 0; i < 2; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
      speedX: random(-2, 2),
      speedY: random(-2, 2)
    });
  }
}

function draw() {
  background(220);
  
  fill(0, 0, 255);
  ellipse(player.x, player.y, player.size);

  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }
  if (keyIsDown(UP_ARROW)) {
    player.y -= player.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.y += player.speed;
  }

  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
    
    obs.x += obs.speedX;
    obs.y += obs.speedY;

    if (obs.x > width) obs.x = 0;
    else if (obs.x < 0) obs.x = width;
    
    if (obs.y > height) obs.y = 0;
    else if (obs.y < 0) obs.y = height;
  }

  for (let staticObs of staticObstacles) {
    fill(100);
    rect(staticObs.x, staticObs.y, staticObs.w, staticObs.h);
  }

  fill(0, 255, 0);
  rect(exit.x, exit.y, exit.size, exit.size);

  if (player.x > exit.x && player.x < exit.x + exit.size &&
      player.y > exit.y && player.y < exit.y + exit.size) {
    textSize(32);
    fill(0);
    text("You Win!", width/2 - 80, height/2);
  }

  if (player.x < 0 || player.x > width || player.y < 0 || player.y > height) {
    textSize(16);
    fill(255, 0, 0);
    text("Stay inside the canvas!", 10, height - 10);
  } else if (player.x < width / 2 && player.y < height / 2) {
    textSize(16);
    fill(0);
    text("You're in the top-left quadrant!", 10, height - 10);
  } else {
  }
}

function mousePressed() {
  staticObstacles.push({
    x: mouseX,
    y: mouseY,
    w: 30,
    h: 30
  });
}