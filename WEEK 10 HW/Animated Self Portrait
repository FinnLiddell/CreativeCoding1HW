let eyeLX, eyeRX;
let eyeSpeedL, eyeSpeedR;

let legLY, legRY;
let legSpeedL, legSpeedR;

let armLStartX, armRStartX, armLStartY, armRStartY;
let armLEndX, armREndX, armLEndY, armREndY;
let armSpeedLX, armSpeedLY, armSpeedRX, armSpeedRY;

let titleSize = 12;
let growing = true;
let sizeChangeCount = 0;

function setup() {
  createCanvas(400, 400);

  eyeLX = 185;
  eyeRX = 215;
  eyeSpeedL = random(0.5, 2);
  eyeSpeedR = random(0.5, 2);

  legLY = 330;
  legRY = 330;
  legSpeedL = random(0.5, 2);
  legSpeedR = random(0.5, 2);

  armRStartX = 175;
  armLStartX = 225;  
  armLStartY = 220;
  armRStartY = 220;
  
  armLEndX = armLStartX + 70;
  armREndX = armRStartX - 70;
  armLEndY = armLStartY;
  armREndY = armRStartY;
  
  armSpeedLX = random(0.5, 2);
  armSpeedLY = random(0.5, 2);
  armSpeedRX = random(0.5, 2);
  armSpeedRY = random(0.5, 2);
}

function draw() {
  background(255);

  eyeLX += eyeSpeedL;
  eyeRX += eyeSpeedR;
  if (eyeLX > 195 || eyeLX < 175) eyeSpeedL *= -1;
  if (eyeRX > 225 || eyeRX < 205) eyeSpeedR *= -1;

  legLY += legSpeedL;
  legRY += legSpeedR;
  if (legLY > 350 || legLY < 310) legSpeedL *= -1;
  if (legRY > 350 || legRY < 310) legSpeedR *= -1;

  armLEndX += armSpeedLX;
  armLEndY += armSpeedLY;
  armREndX += armSpeedRX;
  armREndY += armSpeedRY;

  if (armLEndX > armLStartX + 80 || armLEndX < armLStartX + 60) armSpeedLX *= -1;
  if (armLEndY > armLStartY + 20 || armLEndY < armLStartY - 20) armSpeedLY *= -1;
  if (armREndX > armRStartX + 80 || armREndX < armRStartX - 80) armSpeedRX *= -1;
  if (armREndY > armRStartY + 20 || armREndY < armRStartY - 20) armSpeedRY *= -1;

  if (growing) {
    titleSize += 0.2;
    if (titleSize >= 24) {
      growing = false;
      sizeChangeCount++;
    }
  } else {
    titleSize -= 0.2;
    if (titleSize <= 12) {
      growing = true;
      sizeChangeCount++;
    }
  }
  if (sizeChangeCount >= 10) {
    sizeChangeCount = 0;
  }

  textSize(titleSize);
  text('Self Portrait', 150, 30);

  ellipse(200, 255, 70, 100);

  circle(200, 180, 70);

  triangle(200, 185, 200, 195, 220, 187);

  circle(eyeRX, 172, 10);
  circle(eyeLX, 172, 10);
  point(eyeRX, 172);
  point(eyeLX, 172);

  line(armLStartX, armLStartY, armLEndX, armLEndY);
  line(armRStartX, armRStartY, armREndX, armREndY);

  line(220, 294, 250, legRY);
  line(180, 294, 150, legLY);
  textSize(12);
  text('by Finn Liddell', 290, 395);
}
