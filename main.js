const tiles = document.querySelectorAll(".tile");
const aTiles = document.querySelectorAll(".A");
const bTiles = document.querySelectorAll(".B");
const cTiles = document.querySelectorAll(".C");
const dTiles = document.querySelectorAll(".D");
const eTiles = document.querySelectorAll(".E");
const fTiles = document.querySelectorAll(".F");
const gTiles = document.querySelectorAll(".G");
const resetButton = document.querySelector(".reset")
const winRow = document.querySelectorAll(".checkRow")
const winCol = document.querySelectorAll(".checkCol")
const checkColAndRow = document.querySelectorAll(".checkBoth")
const tileArr=[...tiles]
const checkableTiles = [].concat(winCol,winRow,checkColAndRow)

let playerOneTurn = true;




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

const checkColumn = (column, event) => {
const checkingColumn = getActiveColumn(event)
  for (let index = 0; index < checkingColumn.length; index++) {
    if(
      (checkingColumn[index].style.backgroundColor=="red") &&
      (checkingColumn[index+1].style.backgroundColor=="red") &&
      (checkingColumn[index+2].style.backgroundColor=="red") &&
      (checkingColumn[index+3].style.backgroundColor=="red"))
      { console.log("Red Winner")
      setTimeout(()=>{alert("Red is the Winner!")},250)
      break;
      } else if(
      (checkingColumn[index].style.backgroundColor=="yellow") &&
      (checkingColumn[index+1].style.backgroundColor=="yellow") &&
      (checkingColumn[index+2].style.backgroundColor=="yellow") &&
      (checkingColumn[index+3].style.backgroundColor=="yellow"))
      { console.log("Yellow Winner")
      setTimeout(()=>{alert("Yellow is the Winner!")},250)
      break;
    }
  }
}

//APPLY SAME LOGIC WITH COLUMNS TO ROW(ACTIVE ROW THEN CHANGE IF STATEMENT)
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


const checkDiagonal =() =>{
  winDiagonalArray = [
    [0,7,14,21],
    [1,8,15,22],
    [2,9,16,23],
    [3,8,13,18],
    [4,9,14,19],
    [5,10,15,20],
    [6,13,20,27],
    [7,14,21,28],
    [8,15,22,29],
    [9,14,19,24],
    [10,15,20,25],
    [11,16,21,26],
    [12,19,26,33],
    [13,20,27,34],
    [14,21,28,35],
    [15,20,25,30],
    [16,21,26,31],
    [17,22,27,32],
    [18,25,32,39],
    [19,26,33,40],
    [20,27,34,41],
    [21,26,31,36],
    [22,27,32,37],
    [23,28,33,38]

  ]

}




const checkWin=(event)=>{
  if(checkableTiles[0]){
    checkColumn(winCol, event)
    return
  } else if(checkableTiles[1]){
    checkRow(winRow, event)
    return
  } else {
    checkColumn(checkColAndRow, event);
    checkRow(checkColAndRow, event)
    return
  }
}


const handleColumnDrop = (columnTiles) =>{ 
  let dropColor=getActiveColor() 
  loopThroughTiles(columnTiles,dropColor)
  playerOneTurn = !playerOneTurn
}

const handleClick = (event) => {
  if (event.target.style.backgroundColor == "") {
   const currentTiles = getActiveColumn(event);
   handleColumnDrop(currentTiles)
  } else {
    alert("Can't go there! Try somewhere else!");
  }
  checkWin(event)
}

const handleReset = (event) => {
  tiles.forEach((tile) => {tile.style.backgroundColor= ""})
}







tiles.forEach((tile) => {
tile.addEventListener("click", handleClick);
tile.addEventListener("click", handleClick);})

resetButton.addEventListener("click",handleReset)






