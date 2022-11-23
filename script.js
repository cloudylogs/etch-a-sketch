const slider = document.getElementById("sliderRange");
const output = document.getElementById("rangeResult");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

const grid = document.getElementById("grid");

slider.addEventListener("change", () => {
    let squares = slider.value;
    let gridArea = squares * squares;

    grid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 0; i < gridArea; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }


})