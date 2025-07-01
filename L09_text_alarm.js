let countdown = 5;
let interval;
let alarmSound;
let alarmActive = false;
let lastColorChange = 0;
let lastSoundPlay = 0;
let bgColor;
let timerStarted = false;

function preload() {
    alarmSound = loadSound('assets/BossaNova.mp3'); // Ensure file is in the correct path
}

function setup() {
    textFont("Verdana");
    createCanvas(600, 400);
    // textSize(32);
    textAlign(CENTER, CENTER);
    bgColor = color(220);
}

function draw() {
    background(bgColor);

    // if (!timerStarted) {
    //     fill(0);
    //     text("Click to start the timer", width / 2, height / 2);
    //     return;
    // }
    
    // Change background color every 0.5 seconds when alarm is active
    if (alarmActive && millis() - lastColorChange > 500) {
        bgColor = color(random(255), random(255), random(255));
        lastColorChange = millis();
    }
    
    // Play sound every 0.5 seconds when alarm is active
    if (alarmActive && !alarmSound.isPlaying()) {
        alarmSound.play();
        lastSoundPlay = millis();
    }

    // Display digital clock
    let h = hour();
    let m = minute();
    let s = second();
    let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
    fill(0);
    textSize(72);
    // text("Digital Clock:", width / 2, height / 3 - 50);
    text(timeString, width / 2, height / 3);
    
    // Display countdown timer
    fill(255, 0, 0);
    textSize(24);
    text("Countdown Timer:", width / 2, (2 * height) / 3 - 50);
    text(countdown, width / 2, (2 * height) / 3);

    textSize(16);
    text("Click me to start the timer", width / 2, height - 50);
}

// Start timer on mouse click and enable sound playback
function mousePressed() {
    if (!timerStarted) {
        userStartAudio(); // Enables audio playback
        timerStarted = true;
        interval = setInterval(updateCountdown, 1000);
    }
}

function updateCountdown() {
    if (countdown > 0) {
        countdown--;
    } else {
        clearInterval(interval); // Stop countdown at 0
        if (!alarmActive) {
            alarmActive = true;
            alarmSound.play(); // Play alarm immediately
            lastSoundPlay = millis();
        }
    }
}

// Stop alarm and reset background on spacebar press
function keyPressed() {
    if (keyCode === 32 && alarmActive) { // Spacebar to stop alarm and reset background
        alarmActive = false;
        alarmSound.stop(); // Properly stop the alarm sound
        bgColor = color(220);
    }
}
