let ball = {
    x: 300,
    y: 200,
    size: 40,
    speed: 5,
    boost: 10
};

let moving = false; // Track whether movement is active

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    background(220);
    
    // Draw the ball
    fill(0, 102, 255);
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
    
    // Continuous movement using keyIsDown
    if (keyIsDown(LEFT_ARROW)) {
        if (keyIsDown(SHIFT)){
            ball.x -= ball.boost;
        }
        else{
            ball.x -= ball.speed;
        }
        // ball.x -= keyIsDown(SHIFT) ? ball.boost : ball.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if (keyIsDown(SHIFT)){
            ball.x += ball.boost;
        }
        else{
            ball.x += ball.speed;
        }
        // ball.x += keyIsDown(SHIFT) ? ball.boost : ball.speed;
    }
    if (keyIsDown(UP_ARROW)) {
        if (keyIsDown(SHIFT)){
            ball.y -= ball.boost;
        }
        else{
            ball.y -= ball.speed;
        }
        // ball.y -= keyIsDown(SHIFT) ? ball.boost : ball.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (keyIsDown(SHIFT)){
            ball.y += ball.boost;
        }
        else{
            ball.y += ball.speed;
        }
        // ball.y += keyIsDown(SHIFT) ? ball.boost : ball.speed;
    }
    
    // Constrain ball within canvas boundaries
    // https://p5js.org/reference/p5/constrain/
    ball.x = constrain(ball.x, 0+20, width-20);
    ball.y = constrain(ball.y, 0+20, height-20);
}

// reset the ball position to center
// single press
function keyPressed() {
    moving = true; // Set movement flag when any key is pressed
    if (key === 'r' || key === 'R') {
        ball.x = width / 2;
        ball.y = height / 2;
    }
}

function keyReleased() {
    moving = false; // Reset movement flag when key is released
}