function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
  function draw() {
    background(255); // white background
  
    for (let x = 50; x <= width; x += 100) {
      for (let y = 50; y <= height; y += 100) {
        // Face
        fill(255, 204, 0);
        ellipse(x, y, 50, 50);
  
        // Eyes
        fill(0);
        ellipse(x - 10, y - 10, 8, 8); // left eye
        ellipse(x + 10, y - 10, 8, 8); // right eye
  
        // Smile
        noFill();
        stroke(0);
        strokeWeight(2);
        arc(x, y + 5, 20, 10, 0, PI);
      }
    }
  }