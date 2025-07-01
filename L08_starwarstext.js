let yPos;
let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];

let bgMusic;
let audioStarted = false;

function preload() {
    bgMusic = loadSound('assets/star_wars_theme_8_bit.mp3'); // Replace with actual file path
}

function setup() {
    createCanvas(600, 400);
    yPos = height; // Start text at the bottom of the screen
}

function draw() {
    background(0);
    fill(255, 255, 0);
    textSize(24);
    textAlign(CENTER, CENTER);

    if (audioStarted){
  
        push(); // save the before drawing state
        translate(width / 2, yPos); // resets origin to center
        scale(1, 3); // Creates the perspective effect
        for (let i = 0; i < storyText.length; i++) {
            text(storyText[i], 0, i * 20);
        }
        pop(); // resets the drawing state to before transforms
    
        yPos -= 0.6; // Move text upwards
    
        // Reset text position when it goes off screen
        console.log(yPos);
        if (yPos < -storyText.length * 60) {
            yPos = height;
        }
    }
    else{
        text("Click to start the show", width/2,height/2)
    }
}

function mousePressed() {
    if (!audioStarted) {
        userStartAudio(); // Enables audio playback in browsers
        bgMusic.loop(); // Start looping the background music
        loop(); //continue looping
        audioStarted = true;
    }
    //click again to stop the animation
    else{
        audioStarted = false;
        bgMusic.stop(); //stop background music
        noLoop(); // stop the draw loop
    }
}
