let soundEffect, bgMusic;
let spriteSheet, staticImage;
let spriteFrames = [];
let frameIndex = 0;
let spriteX = 300, spriteY = 300;
let staticImageX = 100, staticImageY = 280;
let staticSpeed = 5; // Speed of static image movement

function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/BossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(600, 400);
    bgMusic.loop(); // Play background music in a loop. 
    // browser will block until user action. so need to press space key
    
    // Extract individual frames from the sprite sheet (assuming 4 frames in a row)
    // for (let i = 0; i < 4; i++) {
    //     spriteFrames.push(spriteSheet.get(i * 32, 0, 32, 32)); // Assuming each frame is 32x32
    // }
}

function draw() {
    background("lightblue");
    
    // Move the static image left and right
    if (keyIsDown(LEFT_ARROW)) {
        staticImageX -= staticSpeed;
        // soundEffect.play();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        staticImageX += staticSpeed;
        // soundEffect.play();
    }
    
    // Constrain static image within canvas boundaries
    staticImageX = constrain(staticImageX, 0, width - 100);
    
    // Draw the static image
    image(staticImage, staticImageX, staticImageY, 100, 100); // Display static image
    
    // Draw the sprite animation
    // image(spriteFrames[frameIndex], spriteX, spriteY, 64, 64); // Scaling up for visibility
}

function keyPressed() {
    if (keyCode === 32) { // Spacebar to trigger sound effect
        soundEffect.play();
    }
}

function keyIsDown() {
    // Animate sprite walking effect 
    // frameIndex = (frameIndex + 1) % spriteFrames.length;
}