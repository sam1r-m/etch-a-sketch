const grid = document.getElementById("grid");

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
} 

createDivs(64);

const gridDivs = document.querySelectorAll("div.gridDiv");

gridDivs.forEach(e => {
    e.addEventListener('mouseleave', () => {
        e.style.backgroundColor = "cyan";
    }),
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = "cyan";
    })
})

