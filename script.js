const buttons = [
    {
        text: "Yes",
        image: "images/yes.png",
    },
    {
        text: "No",
        image: "images/no.png",
    },
    {
        text: "Please",
        image: "images/please.png",
    },
    {
        text: "Thank you",
        image: "images/thank you.png",
    },
    {
        text: "More",
        image: "images/more.png",
    },
    {
        text: "Stop",
        image: "images/stop.png",
    },
    {
        text: "Bathroom",
        image: "images/bathroom.png",
    },
    {
        text: "Hungry",
        image: "images/hungry.png",
    },
    {
        text: "Thirsty",
        image: "images/thirsty.png",
    },
    {
        text: "Pain",
        image: "images/pain.png",
    },
    {
        text: "Water",
        image: "images/water.png",
    },
    {
        text: "Oreos",
        image: "images/oreos.png",
    },
    {
        text: "Rice",
        image: "images/rice.png",
    },
    {
        text: "iPad",
        image: "images/ipad.png",
    }
];

const board = document.getElementById("board");

function speak(text) {
    speechSynthesis.cancel(); // Cancel whatever is currently being said to reduce delay between words
    
    const utterance = new SpeechSynthesisUtterance(text);    
    
    //* Future add -> Ability to change voices

    speechSynthesis.speak(utterance);
}

/*
buttons.forEach(text => {

    const button = document.createElement("button");

    button.classList.add("communication-button");

    button.textContent = text;

    button.addEventListener("click", () => {
        speak(text);
    });

    board.appendChild(button);
*/

buttons.forEach(item => {

    const button = document.createElement("button");
    button.classList.add("communication-button");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.text;

    const text = document.createElement("span");
    text.textContent = item.text;

    button.appendChild(image);
    button.appendChild(text);

    button.addEventListener("click", () => {
        speak(item.text);
    });

    board.appendChild(button);
});