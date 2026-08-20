const buttons = [
    {
        text: "Yes",
        image: "Images/yes.png",
    },
    {
        text: "No",
        image: "Images/no.png",
    },
    {
        text: "Please",
        image: "Images/please.png",
    },
    {
        text: "Thank you",
        image: "Images/thank you.png",
    },
    {
        text: "More",
        image: "Images/more.png",
    },
    {
        text: "Stop",
        image: "Images/stop.png",
    },
    {
        text: "Bathroom",
        image: "Images/bathroom.png",
    },
    {
        text: "Hungry",
        image: "Images/hungry.png",
    },
    {
        text: "Thirsty",
        image: "Images/thirsty.png",
    },
    {
        text: "Pain",
        image: "Images/pain.png",
    },
    {
        text: "Water",
        image: "Images/water.png",
    },
    {
        text: "Oreos",
        image: "Images/oreos.png",
    },
    {
        text: "Oatmeal",
        image: "Images/oatmeal.png",
    },
    {
        text: "Rice",
        image: "Images/rice.png",
    },
    {
        text: "Oatmeal",
        image: "Images/ipad.png",
    }
    {
        text: "iPad",
        image: "Images/ipad.png",
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