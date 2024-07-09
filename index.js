function generateSquares(amount) {
    const gridContainer = document.querySelector(".grid__container");

    for (let row = 0; row < amount; row++) {
        const row = document.createElement("div");
        row.className = "grid__container-row";

        for (let column = 0; column < amount; column++) {
            const square = document.createElement("div");
            square.className = "grid__container-row-square";
            square.id = `${Math.floor(Math.random() * 13627)}`;
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
}

function changeColor() {
    const gridContainer = document.querySelector(".grid__container");

    // generate random color when the square is hovered
    gridContainer.addEventListener("mouseover", (cell) => {
        const square = cell.target;

        if (square.className !== "grid__container") {
            square.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 100) * 3},
                ${Math.floor(Math.random() * 100) * 3},
                ${Math.floor(Math.random() * 100) * 3})`;
        }
    });
}

// TODO create a function to increase the opacity of the squares

generateSquares(16);
changeColor();
