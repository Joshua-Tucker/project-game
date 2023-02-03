const tiles = document.querySelectorAll(".tile");
const aTiles = document.querySelectorAll(".A");
const bTiles = document.querySelectorAll(".B");
const cTiles = document.querySelectorAll(".C");
const dTiles = document.querySelectorAll(".D");
const eTiles = document.querySelectorAll(".E");
const fTiles = document.querySelectorAll(".F");
const gTiles = document.querySelectorAll(".G");
const resetButton = document.querySelector(".reset");
const playerDisplay = document.querySelector(".display-container");
const playerOneName = document.getElementById("playerOne");
const playerTwoName = document.getElementById("playerTwo");

let playerOneTurn = true;

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
const checkDiagonal = () => {
  for (let index = 0; index < tiles.length; index++) {
    if (
      tiles[index].classList[2].includes("A1") ||
      tiles[index].classList[2].includes("A2") ||
      tiles[index].classList[2].includes("A3") ||
      tiles[index].classList[2].includes("B1") ||
      tiles[index].classList[2].includes("B2") ||
      tiles[index].classList[2].includes("B3") ||
      tiles[index].classList[2].includes("C1") ||
      tiles[index].classList[2].includes("C2") ||
      tiles[index].classList[2].includes("C3") ||
      tiles[index].classList[2].includes("D1") ||
      tiles[index].classList[2].includes("D2") ||
      tiles[index].classList[2].includes("D3")
    ) {
      if (
        tiles[index].style.backgroundColor == "red" &&
        tiles[index + 7].style.backgroundColor == "red" &&
        tiles[index + 14].style.backgroundColor == "red" &&
        tiles[index + 21].style.backgroundColor == "red"
      ) {
        playerOneWinner();
      } else if (
        tiles[index].style.backgroundColor == "yellow" &&
        tiles[index + 7].style.backgroundColor == "yellow" &&
        tiles[index + 14].style.backgroundColor == "yellow" &&
        tiles[index + 21].style.backgroundColor == "yellow"
      ) {
        playerTwoWinner();
      }
    } else if (
      tiles[index].classList[2].includes("A4") ||
      tiles[index].classList[2].includes("A5") ||
      tiles[index].classList[2].includes("A6") ||
      tiles[index].classList[2].includes("B4") ||
      tiles[index].classList[2].includes("B5") ||
      tiles[index].classList[2].includes("B6") ||
      tiles[index].classList[2].includes("C4") ||
      tiles[index].classList[2].includes("C5") ||
      tiles[index].classList[2].includes("C6") ||
      tiles[index].classList[2].includes("D1") ||
      tiles[index].classList[2].includes("D2") ||
      tiles[index].classList[2].includes("D3")
    ) {
      if (
        tiles[index].style.backgroundColor == "red" &&
        tiles[index + 5].style.backgroundColor == "red" &&
        tiles[index + 10].style.backgroundColor == "red" &&
        tiles[index + 15].style.backgroundColor == "red"
      ) {
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
};
const checkColumn = () => {
  for (let index = 0; index < tiles.length; index++) {
    if (
      tiles[index].classList[2].includes("1") ||
      tiles[index].classList[2].includes("2") ||
      tiles[index].classList[2].includes("3")
    ) {
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
  for (let index = 0; index < tiles.length - 18; index++) {
    if (
      tiles[index].style.backgroundColor == "red" &&
      tiles[index + 6].style.backgroundColor == "red" &&
      tiles[index + 12].style.backgroundColor == "red" &&
      tiles[index + 18].style.backgroundColor == "red"
    ) {
      playerOneWinner();
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
  checkRow();
  checkColumn();
  checkDiagonal();
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
  playerDisplay.innerHTML = "Are you ready to play?!";
};

tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});
resetButton.addEventListener("click", handleReset);
