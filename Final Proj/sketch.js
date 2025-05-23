let mood = 'Calm';
let particles = [];
let moodSelector;

function setup() {
  createCanvas(windowWidth, windowHeight);

  moodSelector = createSelect();
  moodSelector.position(20, 20);
  moodSelector.option('Calm');
  moodSelector.option('Joy');
  moodSelector.option('Anger');
  moodSelector.option('Anxiety');
  moodSelector.changed(() => {
    mood = moodSelector.value();
  });

  for (let i = 0; i < 150; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  drawBackground();
  for (let p of particles) {
    p.update();
    p.show();
  }
}

function drawBackground() {
  let c1, c2;

  switch (mood) {
    case 'Joy':
      c1 = color(255, 204, 0);
      c2 = color(255, 100, 150);
      break;
    case 'Anger':
      c1 = color(120, 10, 10);
      c2 = color(255, 0, 0);
      break;
    case 'Calm':
      c1 = color(100, 200, 255);
      c2 = color(0, 100, 200);
      break;
    case 'Anxiety':
      c1 = color(50);
      c2 = color(100);
      break;
  }

  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 5);
    this.speed = random(0.5, 2);
  }

  update() {
    switch (mood) {
      case 'Joy':
        this.y -= this.speed * 0.3;
        if (this.y < 0) this.y = height;
        break;
      case 'Anger':
        this.x += random(-5, 5);
        this.y += random(-5, 5);
        break;
      case 'Calm':
        this.x += sin(frameCount * 0.01 + this.y * 0.01) * 0.5;
        this.y += this.speed * 0.1;
        if (this.y > height) this.y = 0;
        break;
      case 'Anxiety':
        this.x += random(-1, 1);
        this.y += random(-3, 3);
        break;
    }

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  show() {
    noStroke();
    switch (mood) {
      case 'Joy':
        fill(255, 255, 100, 200);
        break;
      case 'Anger':
        fill(255, 50, 50, 180);
        break;
      case 'Calm':
        fill(255, 255, 255, 150);
        break;
      case 'Anxiety':
        fill(200, 200, 255, 100);
        break;
    }
    ellipse(this.x, this.y, this.size);
  }
}