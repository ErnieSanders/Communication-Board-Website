const buttons = [
    "Hello",
    "Yes",
    "No",
    "Help",
    "Water",
    "Food",
    "Bathroom",
    "Sleep",
    "Stop",
    "Want",
    "Fries"
];

const board = document.getElementById("board");

function speak(text) {
    //speechSynthesis.cancel(); //Cancel whatever is currently being said to reduce delay between words

    
    
    const utterance = new SpeechSynthesisUtterance(text);    
    //Future add -> Ability to change voices

    speechSynthesis.speak(utterance);
}

buttons.forEach(text => {

    const button = document.createElement("button");

    button.classList.add("communication-button");

    button.textContent = text;

    button.addEventListener("click", () => {
        speak(text);
    });

    board.appendChild(button);

});