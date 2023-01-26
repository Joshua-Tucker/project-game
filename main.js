
const tiles = document.querySelectorAll(".tile");


// const handleClick = () => {
//     for (let index = 0; index < tiles.length; index++) {
//         tiles[index].style.backgroundColor="red"
//     }
//     }
const playerOne = (event) =>  {
    tiles.forEach((tile)=>{
    if(tile=event.target){
        tile.style.backgroundColor="red"
    } else {tile.style.backgroundColor="white"}
})  
}


const handleClick = (event) => {
    playerOne(event)
     
    }

tiles.forEach((tile)=>{
    tile.addEventListener("click", handleClick)})