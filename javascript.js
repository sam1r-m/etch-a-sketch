const grid = document.getElementById("grid");
let gridDivs;
createDivs(16);

function createDivs(gridLength) {
    let gridSize = gridLength * gridLength;

    for (let i = 0; i < gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridDiv");

        newDiv.style.width = (1024 / gridLength) + "px";
        newDiv.style.height = (1024 / gridLength) + "px";
        newDiv.style.backgroundColor = "white";

        grid.appendChild(newDiv);
    }

    gridDivs = document.querySelectorAll("div.gridDiv");
    implementHover(gridDivs, "black");
}

function implementHover(gridDivs, color) {
    gridDivs.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = color;
        }),
        e.addEventListener('mouseleave', () => {
            e.style.backgroundColor = color;
        })
    })
}

function deleteDivs() {
    gridDivs.forEach(e => {
        e.remove();
    })
}

const popupSize = document.getElementById("popupSize");
popupSize.addEventListener('click', () => {
    let sizeOfGrid = prompt('Input the desired size of the grid:');

    while (sizeOfGrid > 100) {
        sizeOfGrid = prompt('This grid size is too large. Input a smaller one:');
    }

    deleteDivs();
    createDivs(sizeOfGrid);
})

const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', () => {
    let counter = 0;
    gridDivs.forEach(() => {
        counter++;
    })

    deleteDivs();
    createDivs(Math.sqrt(counter));
})

const eraseButton = document.getElementById("erase");
eraseButton.addEventListener('click', () => {
    implementHover(gridDivs, "white");
})

const randomizeColorButton = document.getElementById("randomize")

