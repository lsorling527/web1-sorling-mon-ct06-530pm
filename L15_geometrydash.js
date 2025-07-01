let playerX = 100;
let playerY;
let playerSize = 30;
let velocity = 0;
let gravity = 0.8;
let jumpPower = -12;
let isGrounded = false;

let spikesX = [];
let spikeWidth = 20;
let spikeHeight = 30;
let spikeSpeed = 5;

let gameOver = false;
let gameStarted = false;
let score = 0;

let bgMusic, deathSound;
let musicStarted = false;

function preload() {
    bgMusic = loadSound('assets/BossaNova.mp3');
    deathSound = loadSound('assets/DunDunDunnn.mp3');
}

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;

    for (let i = 0; i < 3; i++) {
        spikesX.push(width + i * 300);
    }
}

function draw() {
    background(0);

    if (!gameStarted) {
        fill(255);
        textSize(32);
        text("Press SPACE to Start", width / 2, height / 2);
        return;
    }

    if (!musicStarted && !gameOver) {
        userStartAudio(); // Enables playback in browsers
        bgMusic.setLoop(true);
        bgMusic.play();
        musicStarted = true;
    }

    if (!gameOver) {
        // Gravity and jump logic
        velocity += gravity;
        playerY += velocity;

        if (playerY >= height - playerSize) {
            playerY = height - playerSize;
            isGrounded = true;
            velocity = 0;
        } else {
            isGrounded = false;
        }

        // Draw player
        fill(0, 255, 0);
        rect(playerX, playerY, playerSize, playerSize);

        // Move and draw spikes
        fill(255, 0, 0);
        for (let i = 0; i < spikesX.length; i++) {
            spikesX[i] -= spikeSpeed;

            if (spikesX[i] < -spikeWidth) {
                spikesX[i] = width + random(100, 300);
                score++; // Add to score when a spike is avoided
            }

            triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);

            // Collision detection
            if (
                playerX + playerSize > spikesX[i] &&
                playerX < spikesX[i] + spikeWidth &&
                playerY + playerSize > height - spikeHeight
            ) {
                gameOver = true;
                deathSound.play();
                bgMusic.stop();
            }
        }

        fill(255);
        textSize(20);
        text("Press SPACE to jump", width / 2, 30);
        text("Score: " + score, width / 2, 60);

    } else {
        fill(255, 0, 0);
        textSize(32);
        text("Game Over!", width / 2, height / 2 - 20);
        textSize(20);
        text("Final Score: " + score, width / 2, height / 2 + 10);
        text("Press R to restart", width / 2, height / 2 + 40);
    }
}

function keyPressed() {
    if (!gameStarted && key === ' ') {
        gameStarted = true;
        return;
    }

    if (key === ' ' && isGrounded && !gameOver) {
        velocity = jumpPower;
    }

    if ((key === 'r' || key === 'R') && gameOver) {
        restartGame();
    }
}

function restartGame() {
    playerY = height - playerSize;
    velocity = 0;
    spikesX = [];
    for (let i = 0; i < 3; i++) {
        spikesX.push(width + i * 300);
    }
    gameOver = false;
    score = 0;
    bgMusic.play();
}
