const rainbowBtn = document.getElementById("rainbowBtn");
const colorBtn = document.getElementById("colorBtn");
const shadowBtn = document.getElementById("shadowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const resetBtn = document.getElementById("resetBtn");
const slider = document.getElementById("sliderRange");
const output = document.getElementById("rangeResult");
const grid = document.getElementById("grid");

slider.oninput = function () {
    output.innerHTML = `${this.value} x ${this.value}`;
};

function createGrid() {
  slider.addEventListener("change", () => {
    let squares = slider.value;
    let gridArea = squares * squares;
    grid.innerHTML = "";

    grid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 0; i < gridArea; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
    }
  });
}

createGrid();

function colorGrid() {
    
}