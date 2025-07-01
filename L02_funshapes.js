function setup() {
    createCanvas(600, 400);
    background(220); // light grey background
  }
  
  function draw() {
    fill(255, 204, 0); // Yellow fill
    ellipse(300, 200, 400, 400); // Face
  
    fill(0);
    ellipse(240, 170, 50, 70); // Left eye
    ellipse(360, 200, 50, 50); // Right eye
  
    fill(255, 0, 0); // Red
    ellipse(300, 280, 150, 60); // Mouth
  
    fill(255); // White
    ellipse(300, 270, 140, 30); // Teeth
  
    fill(255, 204, 0); // Yellow
    ellipse(100, 60, 90, 80); // Ear left
    ellipse(500, 60, 90, 80); // Funny ear
  }