// buttons
const colorDropper = document.getElementById("colorDropper");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const shadowBtn = document.getElementById("shadowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const resetBtn = document.getElementById("resetBtn");

// grid related
const slider = document.getElementById("sliderRange");
const output = document.getElementById("rangeResult");
const grid = document.getElementById("grid");

// slider input
slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
};

// create grid
function createGrid() {
  slider.addEventListener("change", () => {
    let squares = slider.value;
    let gridArea = squares * squares;
    grid.innerHTML = "";

    grid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 0; i < gridArea; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
    }
  });
  const colored = document.querySelector("square");
  colored.addEventListener("mousedown", (e) => {
    e.target.classList.replace("square", "color");
  });
}

// reset button
resetBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  slider.value = "";
  output.innerHTML = "slide for grid";
});

createGrid();
