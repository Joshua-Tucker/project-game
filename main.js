const tiles = document.querySelectorAll(".tile");
const aTiles = document.querySelectorAll(".A");
const bTiles = document.querySelectorAll(".B");
const cTiles = document.querySelectorAll(".C");
const dTiles = document.querySelectorAll(".D");
const eTiles = document.querySelectorAll(".E");
const fTiles = document.querySelectorAll(".F");
const gTiles = document.querySelectorAll(".G");
const hTiles = document.querySelectorAll(".H");
const iTiles = document.querySelectorAll(".I");
const jTiles = document.querySelectorAll(".J");
const kTiles = document.querySelectorAll(".K");
const lTiles = document.querySelectorAll(".L");
const mTiles = document.querySelectorAll(".M");

const resetButton = document.querySelector(".reset");
const winRow = document.querySelectorAll(".checkRow");
const winCol = document.querySelectorAll(".checkCol");
const checkColAndRow = document.querySelectorAll(".checkBoth");
const tilesArr = [...tiles];
const checkableTiles = [].concat(winCol, winRow, checkColAndRow);
const playerDisplay = document.querySelector(".display-container");
const playerOneName = document.getElementById("playerOne");
const playerTwoName = document.getElementById("playerTwo");

let playerOneTurn = true;

const winDiagonalArray = [
  ["A1", "B2", "C3", "D4"],
  // [1, 8, 15, 22],
  // [2, 9, 16, 23],
  // [3, 8, 13, 18],
  // [4, 9, 14, 19],
  // [5, 10, 15, 20],
  // [6, 13, 20, 27],
  // [7, 14, 21, 28],
  // [8, 15, 22, 29],
  // [9, 14, 19, 24],
  // [10, 15, 20, 25],
  // [11, 16, 21, 26],
  // [12, 19, 26, 33],
  // [13, 20, 27, 34],
  // [14, 21, 28, 35],
  // [15, 20, 25, 30],
  // [16, 21, 26, 31],
  // [17, 22, 27, 32],
  // [18, 25, 32, 39],
  // [19, 26, 33, 40],
  // [20, 27, 34, 41],
  // [21, 26, 31, 36],
  // [22, 27, 32, 37],
  // [23, 28, 33, 38],
];

const nameDisplay = () => {
  if (playerOneTurn) {
    playerDisplay.innerHTML = playerOneName.value + " to move next!";
  } else {
    playerDisplay.innerHTML = playerTwoName.value + " to move next!";
  }
};

const playerOneWinner = () => {
  console.log("Red Winner");
  setTimeout(() => {
    alert(playerOneName.value + " is the Winner!");
  }, 250);
};

const playerTwoWinner = () => {
  console.log("Yellow Winner");
  setTimeout(() => {
    alert(playerTwoName.value + " is the Winner!");
  }, 250);
};

const getActiveColor = () => {
  if (playerOneTurn) {
    return "red";
  } else {
    return "yellow";
  }
};

const checkColorTile = () => {};

const loopThroughTiles = (tiles, dropColor) => {
  for (let index = 0; index < tiles.length; index++) {
    if (tiles[index].style.backgroundColor == "") {
      tiles[index].style.backgroundColor = dropColor;
      return;
    }
  }
};
const getActiveColumn = (event) => {
  switch (event.target.classList[1]) {
    case "A":
      return aTiles;
    case "B":
      return bTiles;
    case "C":
      return cTiles;
    case "D":
      return dTiles;
    case "E":
      return eTiles;
    case "F":
      return fTiles;
    case "G":
      return gTiles;
  }
};

// const diagonalCheck=()=>{
// tiles[index].style.backgroundColor == "red" &&
// tiles[index + 7].style.backgroundColor == "red" &&
// tiles[index + 14].style.backgroundColor == "red" &&
// tiles[index + 21].style.backgroundColor == "red"
// }


//can i use a switch case here if i bring the diagonal check outside the loop?  
// switch (tiles[index].classList[3].includes) {
    //   case "A1":
    //     return diagonalCheck() + playerOneWinner();
    // }
    
const checkDiagonal = () =>{
  for (let index = 0; index < (tiles.length); index++) {

    if (tiles[index].classList[3].includes("A1")||tiles[index].classList[3].includes("A2")||tiles[index].classList[3].includes("A3")||tiles[index].classList[3].includes("B1")||tiles[index].classList[3].includes("B2")||tiles[index].classList[3].includes("B3")||tiles[index].classList[3].includes("C1")||tiles[index].classList[3].includes("C2")||tiles[index].classList[3].includes("C3")||tiles[index].classList[3].includes("D1")||tiles[index].classList[3].includes("D2")||tiles[index].classList[3].includes("D3")) {
     if(
        tiles[index].style.backgroundColor == "red" &&
        tiles[index + 7].style.backgroundColor == "red" &&
        tiles[index + 14].style.backgroundColor == "red" &&
        tiles[index + 21].style.backgroundColor == "red"
     ){
      playerOneWinner();
     } else if (
      tiles[index].style.backgroundColor == "yellow" &&
      tiles[index + 7].style.backgroundColor == "yellow" &&
      tiles[index + 14].style.backgroundColor == "yellow" &&
      tiles[index + 21].style.backgroundColor == "yellow"
    ) {
      playerTwoWinner();
      }
    } else if (tiles[index].classList[3].includes("A4")||tiles[index].classList[3].includes("A5")||tiles[index].classList[3].includes("A6")||tiles[index].classList[3].includes("B4")||tiles[index].classList[3].includes("B5")||tiles[index].classList[3].includes("B6")||tiles[index].classList[3].includes("C4")||tiles[index].classList[3].includes("C5")||tiles[index].classList[3].includes("C6")||tiles[index].classList[3].includes("D1")||tiles[index].classList[3].includes("D2")||tiles[index].classList[3].includes("D3")){
      if(
        tiles[index].style.backgroundColor == "red" &&
        tiles[index + 5].style.backgroundColor == "red" &&
        tiles[index + 10].style.backgroundColor == "red" &&
        tiles[index + 15].style.backgroundColor == "red"
     ){
      playerOneWinner();
     } else if (
      tiles[index].style.backgroundColor == "yellow" &&
      tiles[index + 5].style.backgroundColor == "yellow" &&
      tiles[index + 10].style.backgroundColor == "yellow" &&
      tiles[index + 15].style.backgroundColor == "yellow"
    ) {
      playerTwoWinner();
      }
    }
  }

}
const checkColumn = () => {
  for (let index = 0; index < tiles.length; index++) {
    //Surely this is still broken but we can talk about it tomorrow
    if(tiles[index].classList[3].includes("1")||tiles[index].classList[3].includes("2")||tiles[index].classList[3].includes("3")){
      if (
        tiles[index].style.backgroundColor == "red" &&
        tiles[index + 1].style.backgroundColor == "red" &&
        tiles[index + 2].style.backgroundColor == "red" &&
        tiles[index + 3].style.backgroundColor == "red"
      ) {
        playerOneWinner();
  
        break;
      } else if (
        tiles[index].style.backgroundColor == "yellow" &&
        tiles[index + 1].style.backgroundColor == "yellow" &&
        tiles[index + 2].style.backgroundColor == "yellow" &&
        tiles[index + 3].style.backgroundColor == "yellow"
      ) {
        playerTwoWinner();
        break;
      }
    }
    
  }
};
const checkRow = () => {
  for (let index = 0; index < (tiles.length -18); index++) {
    // I did less than 18 so it doesn't check the last 3 rows

    //this puzzled me for a long time initally because i thought if it was limited it would stop at the 18th tile.. meaning that once you go past the first couple of tiles when it does i+18 it wouldnt pick it up because the programme is only limited to the first 18
    if (
      tiles[index].style.backgroundColor == "red" &&
      tiles[index + 6].style.backgroundColor == "red" &&
      tiles[index + 12].style.backgroundColor == "red" &&
      tiles[index + 18].style.backgroundColor == "red"
    ) {
      playerOneWinner();
      ;
      break;
    } else if (
      tiles[index].style.backgroundColor == "yellow" &&
      tiles[index + 6].style.backgroundColor == "yellow" &&
      tiles[index + 12].style.backgroundColor == "yellow" &&
      tiles[index + 18].style.backgroundColor == "yellow"
    ) {
      playerTwoWinner();
      break;
    }
  }
};
const checkWin = () => {
  checkRow()
  checkColumn()
  checkDiagonal()
};
const handleColumnDrop = (columnTiles) => {
  let dropColor = getActiveColor();
  loopThroughTiles(columnTiles, dropColor);
  playerOneTurn = !playerOneTurn;
  nameDisplay();
};
const handleClick = (event) => {
  if (event.target.style.backgroundColor == "") {
    const currentTiles = getActiveColumn(event);
    handleColumnDrop(currentTiles);
  } else {
    alert("Can't go there! Try somewhere else!");
  }
  checkWin(event);
};
const handleReset = (event) => {
  tiles.forEach((tile) => {
    tile.style.backgroundColor = "";
  });
  playerDisplay.innerHTML = "";
};

tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});

resetButton.addEventListener("click", handleReset);
