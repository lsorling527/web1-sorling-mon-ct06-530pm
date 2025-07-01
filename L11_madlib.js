let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace;
let submitButton;
let story = "Your fun story will appear here!";
let storyTemplates;

function setup() {
    createCanvas(600, 600);
    textSize(18);
    textAlign(CENTER, CENTER);
    
    // Create input fields
    inputNoun = createInput("e.g. dog");
    inputVerb = createInput("e.g. jump");
    inputAdjective = createInput("e.g. happy");
    inputAdverb = createInput("e.g. angrily");
    inputPlace = createInput("e.g. ang mo kio");
    
    inputNoun.position(250, 50);
    inputVerb.position(250, 100);
    inputAdjective.position(250, 150);
    inputAdverb.position(250, 200);
    inputPlace.position(250, 250);
    
    // Create button
    submitButton = createButton("Generate Story");
    submitButton.position(250, 300);
    submitButton.mousePressed(generateStory);
    
    // Define multiple story templates
    storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
    ];
}

function draw() {
    background(220);
    fill(0);
    
    text("Enter a noun:", 100, 60);
    text("Enter a verb:", 100, 110);
    text("Enter an adjective:", 100, 160);
    text("Enter an adverb:", 100, 210);
    text("Enter a place:", 100, 260);
    
    textSize(20);
    text(story, 50, height - 200, 500, 100);
}

function generateStory() {
    let noun = inputNoun.value();
    let verb = inputVerb.value();
    let adjective = inputAdjective.value();
    let adverb = inputAdverb.value();
    let place = inputPlace.value();
    
    // Select a random story template
    let template = random(storyTemplates);
    
    // Replace placeholders with user input
    story = template.replace("{noun}", noun)
                    .replace("{verb}", verb)
                    .replace("{adj}", adjective)
                    .replace("{adv}", adverb)
                    .replace("{place}", place);
}
