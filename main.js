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
            if (playerOneTurn) {
              event.target.style.backgroundColor = "red";
              playerOneTurn = false;
            } else {
              event.target.style.backgroundColor = "yellow";
              playerOneTurn = true;
            }
  } else {
    alert("Can't go there! Try somewhere else!");
  }
  if(event.target.classList[2]=="A"){
      for (let index = 0; index < aTiles.length; index++) {
        if(aTiles[i].style.backgroundColor !== "red" && aTiles[i].style.backgroundColor !== "yellow"){
          aTiles[i].style.backgroundColor = "red";
          break;
        };
      }
       }

  






}
















tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});
