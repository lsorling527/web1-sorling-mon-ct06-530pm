// global variables 
let circleSize;
let bgColor;

function setup() {
    createCanvas(600, 400);
    bgColor = "lightgrey";
    background(bgColor);
    circleSize = 100; // Initial circle size
    strokeWeight(3);
    noCursor();
}

function draw() {
    // comment the code in draw out to see effect of mousePressed() and mouseDragged
    // background(bgColor);
    fill(255, 0, 0);
    noStroke();
    ellipse(mouseX, mouseY, 15, 15); // Circle following mouse pointer
}

//inbuilt functions for p5js, doesn't need to be called
function mousePressed() {
    let randomColor = color(random(255), random(255), random(255));
    fill(randomColor);
    noStroke();
    circleSize = random(100)
    ellipse(mouseX, mouseY, circleSize, circleSize);
    
    // Decrease the circle size, but keep a minimum limit
    // circleSize = max(20, circleSize - 10);
}

//inbuilt functions for p5js
function mouseDragged() {
    stroke(random(255), random(255), random(255));
    line(pmouseX, pmouseY, mouseX, mouseY);
}

//inbuilt functions for p5js
function mouseReleased() {
    bgColor = color(random(255), random(255), random(255)); // Change background color
}