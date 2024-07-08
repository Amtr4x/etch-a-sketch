function generateSquares(amount) {
    const gridContainer = document.querySelector(".grid__container");

    for (let row = 0; row < amount; row++) {
        const row = document.createElement("div");
        row.className = "grid__container-row";

        for (let column = 0; column < amount; column++) {
            const square = document.createElement("div");
            square.className = "grid__container-row-square";
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
}

generateSquares(32);
