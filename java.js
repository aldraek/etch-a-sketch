const gridcontainer = document.querySelector('.gridcontainer');
const resetbutton = document.querySelector('.reset-button');
const blackbutton = document.querySelector('.black-button');
const colorbutton = document.querySelector('.colors-button');

let gridSize = 16;
let divToPaint = document.querySelectorAll('.cell');
let colorGrid = false;

gridcontainer.style.width = '500px';
gridcontainer.style.height = '500px';
gridcontainer.style.margin = '0 auto';
gridcontainer.style.border = '2px solid #6E6E6E';
gridcontainer.style.boxShadow = '5px 5px 5px black';
gridcontainer.style.display = 'grid';
gridcontainer.style.justifyContent = 'stretch';
gridcontainer.style.alignContent = 'stretch';





resetbutton.addEventListener('click', function() {
  gridSize = prompt("Please enter a grid size", "1-64");
  createGrid(gridSize);
});
blackbutton.addEventListener('click', function() {
  createGrid(gridSize);
  colorGrid = false;
});
colorbutton.addEventListener('click', function() {
  createGrid(gridSize);
  colorGrid = true;
});


function createGrid(size) {
  gridSize = size;
  gridcontainer.innerHTML = '';
  gridcontainer.style.gridTemplateRows = `${gridSize}`;
  gridcontainer.style.gridTemplateColumns = `${gridSize}`;

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {

      let griditem = document.createElement('div');
      griditem.style.backgroundColor = '#FFF';
      griditem.style.gridRow = `${i}`;
      griditem.style.gridColumn = `${j}`;
      gridcontainer.appendChild(griditem);
      griditem.classList.add('cell');
      //griditem.addEventListener('mouseenter', (griditem) => griditem.target.style.backgroundColor = 'black');
      griditem.addEventListener("mouseenter", function(e) {
        //griditem.setAttribute("style", "background-color:black;");
        if (colorGrid === false) {
          griditem.setAttribute("style", "background-color:black;");
        } else {
          griditem.setAttribute(`style`, `background-color:${randColor()};`);
        }
      });
    }

    //let divToPaint = document.querySelectorAll('.cell');

    //switchColor();

  }

}


function addColor(item) {
  item.setAttribute("style", "background-color:black;");
}

function randColor() {
    let colorsValues = '012345679ABCDEF';
    let randomcolor = Array.from(colorsValues);
    let newColor = '#';
    for (i = 0; i <= 5; i++) {
        newColor += colorsValues[Math.floor(Math.random() * colorsValues.length)];
    };
    return newColor;
};

function switchColor() {
    let divToPaint = document.querySelectorAll('.cell');

    divToPaint.forEach((divToPaint) => {
        if (colorGrid == true) {
            divToPaint.addEventListener('mouseenter', (divToPaint) => divToPaint.target.style.backgroundColor = randomColor());
        } else if (colorGrid == false) {
            divToPaint.addEventListener('mouseenter', (divToPaint) => divToPaint.target.style.backgroundColor = 'black');
        };
    });
};

createGrid(gridSize);
