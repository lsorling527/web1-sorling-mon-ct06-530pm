let favoriteFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

function setup() {
    createCanvas(600, 400);
    textSize(24);
    textAlign(LEFT, TOP);
}

function draw() {
    background(220);
    
    fill(0);
    text("My Favorite Foods:", 50, 50);

    // Loop through the array and display each food item on the canvas
    for (let i = 0; i < favoriteFoods.length; i++) {
        text((i + 1) + ". " + favoriteFoods[i], 50, 80 + i * 30);
    }
}
