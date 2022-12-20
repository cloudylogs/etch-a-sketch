"use strict";

// DEFAULTS
const defaultSize = 20;

// slider related


const grid = document.getElementById("grid");
function createGrid(defaultSize) {
  grid.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
  for (let i = 1; i < defaultSize * defaultSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    });
    grid.appendChild(square);
  }
}

const slider = document.getElementById("sliderRange");
const output = document.getElementById("rangeResult");
slider.oninput = function () {
  output.innerHTML = this.value;
};
let squares = slider.value;
slider.addEventListener("change", () => {
  let squares = slider.value;
  grid.innerHTML = "";
  grid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
  for (let i = 0; i < squares * squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    });
    grid.appendChild(square);
  }
});

const rainbowBtn = document.getElementById("rainbowBtn");
function getRainbow() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

rainbowBtn.addEventListener("click", function () {
  for (let i = 0; i < squares * squares; i++) {
    let pixel = grid.children;
    pixel[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = getRainbow();
    });
  }
});

const colorDropper = document.getElementById("colorDropper");
colorDropper.addEventListener("input", function () {
  let newColor = colorDropper.value;
  let pixel = grid.children;
  for (let i = 0; i < squares * squares; i++) {
    pixel[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = newColor;
    });
  }
});

const eraserBtn = document.getElementById("eraserBtn");
eraserBtn.addEventListener("click", function () {
  let pixel = grid.children;
  for (let i = 0; i < squares * squares; i++) {
    pixel[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "white";
    });
  }
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function(){
  grid.innerHTML='';
  createGrid(defaultSize);
  slider.value = defaultSize;
  output.innerHTML = defaultSize;
})

window.onload = () => {
  createGrid(defaultSize);
};

