"use strict";
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
let squares = slider.value;

function createGrid(squares) {
  grid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
  for (let i = 1; i < squares * squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }
  const gridPixels = document.querySelectorAll(".square");
  gridPixels.forEach((pixel) => {
    pixel.addEventListener("mousedown", changeColor);
    pixel.addEventListener("mouseover", changeColor);
    function changeColor(e) {
      e.target.style.backgroundColor = "black";
    }
  });
  
  
  // update grid
  slider.addEventListener("change", () => {
    let squares = slider.value;
    grid.innerHTML = "";
    grid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 0; i < squares * squares; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
    }
    //change color 
  const gridPixels = document.querySelectorAll(".square");
  gridPixels.forEach((pixel) => {
    pixel.addEventListener("mousedown", changeColor);
    pixel.addEventListener("mouseover", changeColor);
    function changeColor(e) {
      e.target.style.backgroundColor = "black";
    }
  });
  });
}


window.onload = () => {
  createGrid(squares);
}