const container = document.querySelector(".container");
const btn1 = document.querySelector("#change-grid");
const btn2 = document.querySelector("#reset-grid");
const fragment = document.createDocumentFragment();
let squares = [];


function createSquareGrids(rows) {
    container.style.setProperty('--grid-size', rows);
    let square = rows * rows;

    for (let i = 1; i <= square; i++) {
        const div = document.createElement("div");
        squares.push(div);
    }

    squares.forEach((divElement) => {
        fragment.appendChild(divElement);
    });

    container.appendChild(fragment);
    const divs = container.children;

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.backgroundColor = getRandomColors();
        });
    }
}

createSquareGrids(16);



btn1.addEventListener("click", changeGrid);
btn2.addEventListener("click", resetGrid);

function getRandomColors() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor < 6) {
        randomColor = "0" + randomColor;
    }

    return "#" + randomColor;
}


function changeGrid() {
    let userChoice = prompt("Enter a number: (2 to 100)", 0);
    if (userChoice >= 4 && userChoice <= 100) {
        squares = [];
        container.replaceChildren();
        createSquareGrids(userChoice);
    } else {
        alert("Enter a number not less than 4 and not more than 100");
    }
}

function resetGrid() {
    squares = [];
    container.replaceChildren();
    createSquareGrids(16);
}