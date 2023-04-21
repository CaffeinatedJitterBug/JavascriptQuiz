const startButton = document.getElementById("start");
const div = document.querySelector("div");
const header = document.createElement("h1");
const button = document.createElement("button");

function nextQuestion() {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
    div.appendChild(header);
    for (x=0; x<4; x++) {
        div.appendChild(button);
    }
}

startButton.addEventListener("click", nextQuestion);