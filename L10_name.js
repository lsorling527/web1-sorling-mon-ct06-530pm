let nameInput;
let ageInput;
let colorPicker;
let userName = "Your Name";
let userAge = "Age";

function setup() {
    createCanvas(600, 400);
    
    // Create input field for name
    nameInput = createInput();
    ageInput = createInput();
    nameInput.position(200, height -100);
    ageInput.position(200, height -75);
    nameInput.input(updateName); // Callback function when input changes
    ageInput.input(updateAge);

    // ageInput.position(20, height + 40);

    // Create color picker
    colorPicker = createColorPicker("#ffcc00");
    colorPicker.position(200, height -50);
}

function draw() {
    background(colorPicker.value()); // Set background color based on picker

    // Draw name tag rectangle
    fill(255);
    rect(50, 100, 500, 160, 10); // Rounded rectangle

    // Display user's name
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(userName, width / 2, 140);
    text(userAge, width / 2, 200);

    // Label instructions
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text("Enter your name:", 20, height -90);
    text("Enter your age:", 20, height -60);
    text("Pick a background color:", 20, height -32);
}

// Function to update name from input field
function updateName() {
    userName = this.value();
}

function updateAge(){
    userAge = this.value();
}
