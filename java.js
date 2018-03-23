const gridcontainer = document.querySelector('.gridcontainer');

let gridSize = 16;

gridcontainer.style.width = '500px';
gridcontainer.style.height = '500px';
gridcontainer.style.margin = '0 auto';
gridcontainer.style.border = '2px solid #6E6E6E';
gridcontainer.style.boxShadow = '5px 5px 5px black';

gridcontainer.style.display = 'grid';
gridcontainer.style.justifyContent = 'stretch';
gridcontainer.style.alignContent = 'stretch';



//gridcontainer.style.display = 'grid';
//gridcontainer.style.margin = '0 auto';
//gridcontainer.style.border = '2px solid #6E6E6E';
//gridcontainer.style.boxShadow = '5px 5px 5px black';
//gridcontainer.style.height = '600px';
//gridcontainer.style.width = '600px';
//gridcontainer.style.justifyContent = 'stretch';
//gridcontainer.style.alignContent = 'stretch';

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
    }

  }

}

createGrid(gridSize);
