// // const handleClick = (event) => {

// //     const currentTile = event.target;

// //     const tileArr = tiles.map = ((tile) => {
// //         if(tile.className.includes(currentTile)){
// //         tile.className.add ("playerOne")
// //         } else {return false;}
            
// //     })
// //     console.log(tileArr)

   
// // }

// // };


// // const handleClick = (event) => {
// //     tiles.forEach((tile)=>{
// //         if (event.target.includes(classList.event.target))
// //     })

   

// //     const currentTile = event.target;
// //     if (currentTile.matches())


// //     const tileArr = tiles.map = ((tile) => {
// //         if(tile.classList.contains(${currentTile})){
// //         tile.className.add ("playerOne")
// //         } else {return false;}
            
// //     })
    

   
// // }

// // };
// // const isPlayerOne = (playerTurn)=>{

// //     if(playerTurn.slice(-1)="playerOne"){
// //         //tile not defined
// //         event.target.style.backgroundColor="yellow"}
// //         else {return}

// //     //change background color of div container
// // }

// // if(event.target.classList[2]=="A"){
// //     aTiles.forEach((aTile)=>{
// //      console.log(aTile.style)
// //     })
// //    }
// // const handleClick = () => {
// //     for (let index = 0; index < tiles.length; index++) {
// //         tiles[index].style.backgroundColor="red"
// //     }
// //     }
// // console.log(playerTurn)
// // if(playerTurn="playerOne"){
// //     playerTurn.push("playerTwo");
// // } else {playerOne(event)}

// // if(isPlayerOne=!isPlayerOne){
// //     isPlayerOne ? (event.target.backgroundColor = "red"):(event.target.backgroundColor = "yellow");
// // }

// if (playerOneTurn) {
//     event.target.style.backgroundColor = "red";
//     playerOneTurn = false;
//   } else {
//     event.target.style.backgroundColor = "yellow";
//     playerOneTurn = true;
// //   }

      // if(console.log("Red Winner")){
      //   alert("Red Winner")
      // } else if (console.log("Yellow Winner")){
      //   alert("Yellow Winner")}






//       THIS IS CLOSE

//       // check wDA=>for each index=>loop through the value=> if backgroundcolor=red=> red wins else if backgroundcolor=yellow=> yellow wins NOT QUITE

// loop through the board, if the background color =red/yellow and thir index matchs the combination of one of the wDA values = win

// tilesArr.forEach, if index.backgroundcolor=red &= wDA.index.every()
// tilesArr.forEach, if index.backgroundcolor=red && index.classList == wDA.index
// =>red win

// change below to classlist values

// const winDiagonalArr = [
//   ["A1","B2","C3", "D4"],
//   [1,8,15,22],
//   [2,9,16,23],
//   [3,8,13,18],
//   [4,9,14,19],
//   [5,10,15,20],
//   [6,13,20,27],
//   [7,14,21,28],
//   [8,15,22,29],
//   [9,14,19,24],
//   [10,15,20,25],
//   [11,16,21,26],
//   [12,19,26,33],
//   [13,20,27,34],
//   [14,21,28,35],
//   [15,20,25,30],
//   [16,21,26,31],
//   [17,22,27,32],
//   [18,25,32,39],
//   [19,26,33,40],
//   [20,27,34,41],
//   [21,26,31,36],
//   [22,27,32,37],
//   [23,28,33,38]

// ]

// ///////////////////////////////////

// const checkWinDiag = () => {
//   const winDiagonalArray = [
//     [0, 7, 14, 21],
//     [1, 8, 15, 22],
//     [2, 9, 16, 23],
//     [3, 8, 13, 18],
//     [4, 9, 14, 19],
//     [5, 10, 15, 20],
//     [6, 13, 20, 27],
//     [7, 14, 21, 28],
//     [8, 15, 22, 29],
//     [9, 14, 19, 24],
//     [10, 15, 20, 25],
//     [11, 16, 21, 26],
//     [12, 19, 26, 33],
//     [13, 20, 27, 34],
//     [14, 21, 28, 35],
//     [15, 20, 25, 30],
//     [16, 21, 26, 31],
//     [17, 22, 27, 32],
//     [18, 25, 32, 39],
//     [19, 26, 33, 40],
//     [20, 27, 34, 41],
//     [21, 26, 31, 36],
//     [22, 27, 32, 37],
//     [23, 28, 33, 38],
//   ];
//   winDiagonalArray.forEach((index) => {
//     index.includes.tile.classList; //this isnt right.. i just want them to loop through each of the child arrays(0-30) 
//   });
// };




// const checkDiagonal = () => {
//   tileArr.forEach((tile) => {
//     if ((tile.backgroundColor = "red") &= checkWinDiag()) { //so when it is called down here, if the tiles with the same color has the same classList as the ones in the array then its a match so its a win
//       console.log("Hi");
//     }
//   });
// };

// const handleTileMouseOver = (event)=>{
//   const topTile = topTiles
//   if (playerOneTurn) {//
//     topTile.add.style.backgroundColor("#A31621")
//   } else {
//     topTile.add.style.backgroundColor("#FFFC99")

//   }
// }

  // tile.addEventListener("mouseover", handleTileMouseOver);













// const nameDisplay = ()=>{
//   if(playerOneTurn){
//     playerDisplay.innerHTML = playerOneName.value + " to move"
//   } else if (!playerOneTurn)
//   {playerDisplay.innerHTML =  playerTwoName.value + " to move"
// }
// break;
//  else if(playerOneTurn){
//   playerDisplay.innerHTML = playerOneName.value + " Red to move"
// } else 
// {playerDisplay.innerHTML =  playerTwoName.value + " Yellow to move"
// }
// }




// const checkDiagonal = () => {
//   tiles.forEach((tile) => {//for each tile on the board
//     winDiagonalArray.forEach((array) => {//and for each array we have a winning combination
//       if (array.includes(tile.classList[2])) { //if the array includes the tile value
//         array.every((item,tileClasslist) => {//and if every index in that array has THIS RETURNS TRUE OR FALSE VALUE
//           tileClasslist.style.backgroundColor == "red";//a background color of red
//         })

//         return playerOneWinner(); //display a winner
//         ;
//       }
//     });
//   });

// };


// 



// const checkDiagonal= (event)=>{
//       //   for (let index = 0; index < winDiagonalArray.length; index++) {
//       //     const tileOne = tiles[winDiagonalArray[index][0]] 
//       //     const tileTwo = tiles[winDiagonalArray[index][1]]
//       //     const tileThree = tiles[winDiagonalArray[index][2]]
//       //     const tileFour = tiles[winDiagonalArray[index][3]]
//       // console.log(tileOne, tileTwo, tileThree, tileFour)
      
// const getActiveRow = (event) =>{
//   console.log(event)
//   switch (event.target.classList[2]){
//     case "H":
//       return hTiles;
//     case "I":
//       return iTiles;
//     case "J":
//       return jTiles;
//     case "K":
//       return kTiles;
//     case "L":
//       return lTiles;
//     case "M":
//       return mTiles;
//   }
// }
// const winDiagonalArray = [
//       ["A1", "B2", "C3", "D4"],
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
//     ];
      
          
//       //   }
//       // //     if(
//       // //       tileOne.classList.contains(winDiagonalArray[index][0]) && 
//       // //       tileTwo.classList.contains(winDiagonalArray[index][1]) && 
//       // //       tileThree.classList.contains(winDiagonalArray[index][2]) && 
//       // //       tileFour.classList.contains(winDiagonalArray[index][3])) {
//       // //       playerOneWinner()
      
//       // //   }
//       // // }
//       // }

// const changeTopTiles = () =>{
//   topTiles.classList.add("tile")
// }

// const topTiles =document.querySelectorAll(".top")
// const handleTileMouseOver = (event)=>{
//   const topTile = topTiles
//   if (playerOneTurn) {//
//     topTile.add.style.backgroundColor("red")
//   } else {
//     topTile.add.style.backgroundColor("yellow")

//   }
// }
  // tile.addEventListener("mouseover", handleTileMouseOver);
