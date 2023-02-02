// Functions Josh Needs

// handleClick(event) -> This will be a wider function that has functions inside it that fire off when someone clicks on a square.

// handleColumnDrop(columnTiles) -> This will be a function that decide which circle in the column gets coloured in and what colour it gets coloured.

// getActiveColor => This might be a function so we quickly decide what color we are going to pass to our column drop function

// getActiveColumn => This is a function that uses event.target.classList[1] to figure out which column was clicked.

// Maybe a function that loops through and does the logic you already had in the for loop but you pass in which column you are working with e.g. loopThroughColumn(aTiles)


const getActiveColor = () => {
  // This function is just nice and clean and will help us out whenever we need to decide what color we're meant to be dropping.
  if (playerOneTurn) {
    //What colour should we return out of the function here? "Red" or "Yellow"?
  } else {
    //What colour should we return out of the function here? "Red" or "Yellow"?
  }

}
const handleColumnDrop = (columnTiles) => {
  // In order to do a column drop I need to know what color I should be dropping - I could call my getActiveColor function here!
  let dropColor = getActiveColor()
  // Once I have my color I need to loop through my whichever column was clicked and drop a color.  This is where I would use that awesome forLoop that you created.  
  loopThroughTiles(columnTiles, dropColor)
  playerOneTurn = !playerOneTurn

  
}

const loopThroughTiles = (tiles, dropColor) => {
  // I have made some minor changes to this but it's mostly all you.
  for (let index = 0; index < tiles.length; index++) {
    if (tiles[index].style.backgroundColor == "") {
      tiles[index].style.backgroundColor = dropColor;
      break
    }
  }
}
const getActiveColumn = (event) => {
  switch (event.target.classList[1]) {
    case "A":
      // What should we return if the classList we clicked was a? The a tiles!
    case "B":
      return //???;
    case "C":
      return //???;
    case "D":
      return //???;
    case "E":
      return //???;
    case "F":
      return //???;
    case "G":
      return //???;
  }
};
const handleClick = (event) => {
  if (event.target.style.backgroundColor == "") {
    // Once someone clicks - We should do the following things
    // 1. Get the current tiles that we are working with! We can use getActiveColumn for that!
    const currentTiles = getActiveColumn(event)
    // 2.  Now we know what column we are working with, we can use our handleColumnDrop function!
    handleColumnDrop(currentTiles)
  } else {
    alert("Can't go there! Try somewhere else!");
  }

};
