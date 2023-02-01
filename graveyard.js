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