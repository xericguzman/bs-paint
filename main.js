const gridWidth = 10;
createCanvas("color-5");
const colors = document.querySelectorAll(".palette-color");
const brush = document.querySelector(".current-brush");
const canvas = document.querySelectorAll(".square");
const page = document.querySelector("html");
let currentColor = brush.classList[1];
let mouseDown = false;

function createCanvas(color) {
  let count = 0;
  while (count <= gridWidth * gridWidth) {
    const canvas = document.querySelector(".canvas");
    const div = document.createElement("div");
    div.className = "square" + color;
    canvas.appendChild(div);
    count++;
  }
}

page.addEventListener("mousedown", function () {
  mouseDown = true;
});
page.addEventListener("mouseup", function () {
  mouseDown = false;
});

colors.forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (event.shiftKey) {
      setCanvasBG(element.classList[1]);
    } else {
      updateBrush(element.classList[1]);
    }
  });
  canvas.forEach(function (element) {
    element.addEventListener("mousedown", function () {
      element.classList.replace(element.classList[i], currentColor);
    });
  });
  canvas.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      if (mouseDown) {
        element.classList.replace(element.classList[1], currentColor);
      }
    });
  });

  function updateBrush(newColor) {
    brush.classList.replace(currentColor, newColor);
    currentColor = newColor;
  }
  function setCanvasBG(color) {
    canvas.forEach(function (element) {
      element.classList.replace(element.classList[1], color);
    });
  }
});
