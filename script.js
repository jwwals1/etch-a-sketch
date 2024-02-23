let color = "black";

document.addEventListener("DOMContentLoaded", function () {
    createDiv(16);


    console.log("test")
})

function createDiv(size) {
    let container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;

    for (let i = 0; i < numberDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);
    }

}

function erase(size) {
    let container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;


    for (let i = 0; i < numberDivs; i++) {
        let div = document.createElement("div");

        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = 'white'
            console.log('erase')
        })

        container.insertAdjacentElement("beforeend", div);
    }
    console.log('erase')

}

function numberOfSquares() {
    if (document.getElementById("numberOfSquares") != null) {
        document.getElementById("numberOfSquares").innerHTML
    }
    let answer = prompt("How many squares per side do you want? (maximum 100)");
    if (isNaN(answer)) {
        window.alert("You must enter a number between 0 and 100")
        return
    }
    if (answer > 100) {
        window.alert("Maximum number of squares is 100");
        return
    }
    if (answer <= 0) {
        window.alert("Number must be greater than 0");
        return
    }
    let numberSquares = parseInt(answer, 10)
    resetBoard()
    createDiv(numberSquares);
    console.log(answer)
}


function colorDiv() {
    if (color == "white") {
        this.style.backgroundColor = "white"
    }
    else {
        this.style.backgroundColor = "black"
    }
}


function setColor(colorChoice) {
    color = colorChoice;
}

function colorChanged(color) {
    alert(`Color has changed to ${color}!`)
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div => div.style.backgroundColor = "white"))
}