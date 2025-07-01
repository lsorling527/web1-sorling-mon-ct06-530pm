let ball = {
    x: 300,
    y: 200,
    size: 30,
    speedX: 2,
    speedY: 2
};

let leaveTrail = true; // Change to true to keep a trail

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    if (!leaveTrail) {
        background(220); // Comment this line to leave a trail
    }
    
    // Move the ball
    ball.x = ball.x + ball.speedX; //ball.x += ball.speedX;
    ball.y = ball.y + ball.speedY;//ball.y += ball.speedY;
    
    // Bounce off walls. Note that 15 is half ball size.
    if (ball.x-15 <= 0 || ball.x+15 >= width) {
        ball.speedX = ball.speedX * -1; //ball.speedX *= -1;
        fill(random(255),random(255),random(255));
    }
    if (ball.y-15 <= 0 || ball.y+15 >= height) {
        ball.speedY = ball.speedY * -1;// ball.speedY *= -1;
        fill(random(255),random(255),random(255));
    }
    
    // Draw the ball again and again
    // fill(255, 0, 0);
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
}

// Function to increase speed (optional)
function keyPressed() {
    if (keyCode === UP_ARROW) {
        ball.speedX *= 1.2;
        ball.speedY *= 1.2;
    } else if (keyCode === DOWN_ARROW) {
        ball.speedX *= 0.8;
        ball.speedY *= 0.8;
    }
}