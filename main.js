const tiles = document.querySelectorAll(".tile");
const aTiles = document.querySelectorAll(".A");
const bTiles = document.querySelectorAll(".B");
const cTiles = document.querySelectorAll(".C");
const dTiles = document.querySelectorAll(".D");
const eTiles = document.querySelectorAll(".E");
const fTiles = document.querySelectorAll(".F");
const gTiles = document.querySelectorAll(".G");

let playerTurn = [];
let playerOneTurn = true;

const handleClick = (event) => {
  if (event.target.style.backgroundColor == "") {
   const currentTiles = getActiveColumn(event)
   handleColumnDrop(currentTiles)
  } else {
    alert("Can't go there! Try somewhere else!");
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



const handleColumnDrop = (columnTiles) =>{
  let dropColor=getActiveColor()
  loopThroughTiles(columnTiles,dropColor)
  playerOneTurn = !playerOneTurn
}

const getActiveColor = () => {
  if(playerOneTurn){
    return "red"
  }else {
    return "yellow"
  }
}












tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});
