"use strict";

// DEFAULTS
const DEFAULT_SIZE = 20;

// GLOBALS
const grid = document.getElementById("grid");
const slider = document.getElementById("sliderRange");
const output = document.getElementById("rangeResult");
const rainbowBtn = document.getElementById("rainbowBtn");
const colorDropper = document.getElementById("colorDropper");
const eraserBtn = document.getElementById("eraserBtn");
const resetBtn = document.getElementById("resetBtn");


function createGrid(size) {
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    });
    grid.appendChild(square);
  }
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
  
  slider.addEventListener('change', (e) => {
    grid.innerHTML = '';
    output.innerHTML = e.target.value;
    createGrid(slider.value);
  });

	rainbowBtn.addEventListener('click', function () {
		Array.from(grid.children).forEach((pixel) => {
			pixel.addEventListener('mouseover', (e) => {
				e.target.style.backgroundColor = getRandomColor();
			});
		});
  });
  
  colorDropper.addEventListener('click', function() {
    let newColor = colorDropper.value;
    Array.from(grid.children).forEach((pixel) => {
      pixel.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = newColor;
      })
    })
  })

  eraserBtn.addEventListener('click', function() {
    Array.from(grid.children).forEach((pixel) => {
      pixel.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white';
      })
    })
  })

  resetBtn.addEventListener('click', function() {
    grid.innerHTML= '';
    createGrid(DEFAULT_SIZE);
    slider.value = DEFAULT_SIZE;
    output.innerHTML = DEFAULT_SIZE;
  })
};
