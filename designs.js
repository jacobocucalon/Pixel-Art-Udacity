//Variable Declaration
//Input Fields
var vColorPicker = document.getElementById("colorPicker");
var vSizePicker = document.getElementById("sizePicker");
//Grid Size
var vHeight = document.getElementById("inputHeight");
var vWidth = document.getElementById("inputWidth");
//Grid
var vGrid = document.getElementById("pixelCanvas");


// function for creating the matrix
function makeGrid() {
//clear matrix
  vGrid.innerHTML = ""; //(attribution: https://knowledge.udacity.com/questions/561177 (11/05/2021))
//loop that creates the rows
  let i = 0;
  while (i < vHeight.value) {
    // insert rows
    const lines = vGrid.insertRow(i);
    //add to loop variable
    i = i + 1;
    let j = 0; //create variable for loop + reset it for every row
    while (j < vWidth.value) {
      // insert cubicles
      const cubicles = lines.insertCell(j);
      cubicles.style.backgroundColor = "black";
      cubicles.style.borderColor="white";
      // insert color listener to each cell so they change color when clicked
      cubicles.addEventListener("click", function(){ //(attribution: https://knowledge.udacity.com/questions/297130)(11/05/2021)
        cubicles.style.backgroundColor = vColorPicker.value;
      });
      j = j + 1;
    }
  }
}

// Prevent refresh and Call Matrix Function when Submit is clicked
vSizePicker.addEventListener('submit', function(GenerateWhenSubmit) {
  //avoid page refreshing when submit button is clicked
  GenerateWhenSubmit.preventDefault(); //(attribution: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)(11/05/2021)
  makeGrid(vHeight,vWidth);
  });
