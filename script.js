const buttons = [
    {
        text: "Yes",
        image: "Images/yes.png",
        category: "importantandnegation"
    },
    {
        text: "No",
        image: "Images/no.png",
        category: "importantandnegation"
    },
    {
        text: "Please",
        image: "Images/please.png",
        category: "socialandpreposition"
    },
    {
        text: "Thank you",
        image: "Images/thank you.png",
        category: "socialandpreposition"
    },
    {
        text: "More",
        image: "Images/more.png",
        category: "adverb"
    },
    {
        text: "Stop",
        image: "Images/stop.png",
        category: "verb"
    },
    {
        text: "Bathroom",
        image: "Images/bathroom.png",
        category: "noun"
    },
    {
        text: "Hungry",
        image: "Images/hungry.png",
        category: "adjective"
    },
    {
        text: "Thirsty",
        image: "Images/thirsty.png",
        category: "adjective"
    },
    {
        text: "Pain",
        image: "Images/pain.png",
        category: "noun"
    },
    {
        text: "Water",
        image: "Images/water.png",
        category: "noun"
    },
    {
        text: "Oreos",
        image: "Images/oreos.png",
        category: "noun"
    },
    {
        text: "Oatmeal",
        image: "Images/oatmeal.png",
        category: "noun"
    },
    {
        text: "Rice",
        image: "Images/rice.png",
        category: "noun"
    },
    {
        text: "iPad",
        image: "Images/ipad.png",
        category: "noun"
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
    button.classList.add("communication-button", item.category);

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