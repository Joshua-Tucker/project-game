const tiles = document.querySelectorAll(".tile");
const aTiles = document.querySelectorAll(".A");
const bTiles = document.querySelectorAll(".B");
const cTiles = document.querySelectorAll(".C");
const dTiles = document.querySelectorAll(".D");
const eTiles = document.querySelectorAll(".E");
const fTiles = document.querySelectorAll(".F");
const gTiles = document.querySelectorAll(".G");
const resetButton = document.querySelector(".reset")

let playerOneTurn = true;

console.log(tiles)

const getActiveColor = () => {
  if(playerOneTurn){
    return "red"
  }else {
    return "yellow"
  }
}


const getActiveColumn = (event) =>{
  switch(event.target.classList[1]){
    case"A": return aTiles;
    case"B": return bTiles;
    case"C": return cTiles;
    case"D": return dTiles;
    case"E": return eTiles;
    case"F": return fTiles;
    case"G": return gTiles;
  }
};

const loopThroughTiles = (tiles,dropColor) =>{
  for (let index = 0; index < tiles.length; index++) {
    if(tiles[index].style.backgroundColor == ""){
      tiles[index].style.backgroundColor = dropColor;
      break; 
    };
  }
}












const checkColumn = (getActiveColumn) => {
const checkingColumn = getActiveColumn
  for (let index = 0; index < checkingColumn.length; index++) {
    if(
      (tiles[index].style.backgroundColor=="red") &&
      (tiles[index+1].style.backgroundColor=="red") &&
      (tiles[index+2].style.backgroundColor=="red") &&
      (tiles[index+3].style.backgroundColor=="red"))
      { console.log("Red Winner")
      setTimeout(()=>{alert("Red is the Winner!")},250)
      break;
      } else if(
      (tiles[index].style.backgroundColor=="yellow") &&
      (tiles[index+1].style.backgroundColor=="yellow") &&
      (tiles[index+2].style.backgroundColor=="yellow") &&
      (tiles[index+3].style.backgroundColor=="yellow"))
      { console.log("Yellow Winner")
      setTimeout(()=>{alert("Yellow is the Winner!")},250)
      break;
    }
  }
}

//I want to check the entire board for their colors but I only want to apply the function up to 
const checkRow = ()=>{
for (let index = 0; index <= 23; index++) {
  if(
    (tiles[index].style.backgroundColor=="red") &&
    (tiles[index+6].style.backgroundColor=="red") &&
    (tiles[index+12].style.backgroundColor=="red") &&
    (tiles[index+18].style.backgroundColor=="red"))
    { console.log("Red Winner")
    setTimeout(()=>{alert("Red is the Winner!")},250)
    break;
    }else if(
    (tiles[index].style.backgroundColor=="yellow") &&
    (tiles[index+6].style.backgroundColor=="yellow") &&
    (tiles[index+12].style.backgroundColor=="yellow") &&
    (tiles[index+18].style.backgroundColor=="yellow"))
    { console.log("Yellow Winner")
    setTimeout(()=>{alert("Yellow is the Winner!")},250)
    break;

    }  
  }
}


// /not understanding this function
//from the name i think its to determine what color tile is dropped when click

const handleColumnDrop = (columnTiles) =>{ 
  let dropColor=getActiveColor() //whether player 1 turn true or false 
  loopThroughTiles(columnTiles,dropColor)//above function, go through all the tiles, if     currently white change to whosever turn it is
  playerOneTurn = !playerOneTurn//change it to now not be the same players turn
}


// when clicked, if the background is white then then handlecolum drop function is in play, which 
const handleClick = (event) => {
  if (event.target.style.backgroundColor == "") {
   const currentTiles = getActiveColumn(event);
   handleColumnDrop(currentTiles)
  } else {
    alert("Can't go there! Try somewhere else!");
  }
  checkColumn()
  checkRow()

}

const handleReset = (event) => {
  tiles.forEach((tile) => {tile.style.backgroundColor= ""})
}







tiles.forEach((tile) => {
tile.addEventListener("click", handleClick);
tile.addEventListener("click", checkColumn);})

resetButton.addEventListener("click",handleReset)
// tile.addEventListener("click", checkRow);});






