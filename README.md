# project-game

Project Brief

PSEUDOCODE:
You will need to present a simple plan of your game to one of the coaches, this should include:
A guide on what is going to happen in your game in plain english
How you are planning on building it
A list of features the game will include, in order of importance

VERSION CONTROL
You need to have it as a public repository on GitHub. In the repo you will also need a
README.md with a short intro to the project.
You must have at least 15 meaningful Git commits for the project and repo on GitHub, with descriptive names.

READABILITY
Your JS code must be formatted as functions.
Code must be formatted correctly using suitable indentation and variable names.

THE CODE
The code must be all your own, and you should be able to explain what everything does and why it is there. If you can’t explain it, you shouldn't use it.
You must use click or keypress events in JavaScript to trigger the events in the game
(no refreshing to start the game again!)
We would like you to take a mobile-first approach to the implementation. It needs to
work on different device widths.


**PSEUDOCODE**

The game I'm choosing is Connect4. It will be a simple grid layout with the player to have the choice on what color to choose.
Bonus would be to choose to play between another player or the computer.

BONUSThe screen would display a welcome header of the game and the choice if your playing 1 player or 2 player.BONUS
Depending on decision it will then show what color you want to choose (will also have the benefit of going 1st like whites in chess).
Once decided will the show the grid that we are playing on.
Players will hover over column to decide which one they want to choose and it will show a color difference so it is clear and then click to confirm the placement.
BONUS TO SHOW COUNTER FALL FROM TOP INTO POSITION BONUS
Once four are alligned banner to pop up . If win, show confetti and congrats. If lose, message better luck next time. Both options to have a button to play again.

**How Im going to attack this project.**

1. Get the grid on screen-raw design
2. Look into turn based soloutions so the app knows on the first click is player 1, second is player 2, third is player 1 and so on..
3. Function to watch the board for when there are 4 in a row and when this is true to display a winner.
4. Be able to maintain the image on screen of the chosen color, if the same column is picked to not replace it, to land one above.
5. When game is finished to show up with a message on who won and option to play again

5. Create a button to decide if 1 or 2 player
6. If 1 player, computer to move using random generated columns unless there are 3 of an opponents to go to block and if there are 3 of the computers to go to make the 4th
7. If 2 player, to decide on what color to have, then decides to go first based on colors (if player choose blue goes first)

8. Show counter falling (animation)
9. Congrats banner with confetti if win and you suck if you lose



Thoughts

I first thought to put containers around each colums so when a player clicked anywhere in the colum the tile will then show at the next available slot, this however ruined the grid so i added a hover feature so you can determine where you are.
what I am struggling with is how to add event listener to the hovered element.

I have tested it for an individual cell which works fine but i cannot identify the cell thats being clicked on when i use queryselecter all. 
Query selectorAll is an array, how do i identify things in an array?

if the even.target is the same as the class name in the array then show red
click on div container, change background to red


