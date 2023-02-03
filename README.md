# project-game


Hello and welcome to my Connect4 game! This is a 2 player game that you can play with a friend (if you have no friends the option to play against the computer will be there in the next update!)

The code is fairly simple, using forLoops to determine whether a winner is on the board and a healthy amount of if? statements to determine what tile counter the forLoop should be started on. 

I plan on updating the game in my spare time as I was over-complicating alot of the code in an attempt to make it cleaner but ran into some problems. Then, towards the end of the project, everything decided to break so focused on getting what I had to work so you can still enjoy yourselves and play the game!

Below is my pseudocode and the project breif alongside ideas I had how to tackle problems. You'll also find a "graveyard file" where sadly idea's that didn't work out or are unfinished are currently being held, ready to be resserected. 

This has been my favourite project so far. Even though the difficulty had increased I noticed many breakthrough moments in my understanding on how to communicate what I want to happen in a way the computer understands it. Admittidly there's a long way to go but I felt that with this project and the support of Rob I have a much greater understanding on JavaScript now.







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
Depending on decision it will then show what color you want to choose (randomise who goes first).
Once decided will the show the grid that we are playing on.
Players will hover over column to decide which one they want to choose and it will show a color difference so it is clear and then click to confirm the placement.
BONUS TO SHOW COUNTER FALL FROM TOP INTO POSITION BONUS
Once four are alligned banner to pop up . If win, show confetti and congrats. If lose, message better luck next time. Both options to have a button to play again.

**How Im going to attack this project.**

1. Get the grid on screen-raw design TICK 
2. Look into turn based soloutions so the app knows on the first click is player 1, second is player 2, third is player 1 and so on.. TICK 
3. Function to watch the board for when there are 4 in a row and when this is true to display a winner. TICK FOR H AND V NOT DIAG
4. Be able to maintain the image on screen of the chosen color, if the same column is picked to not replace it, to land one above.
5. When game is finished to show up with a message on who won and option to play again

5. Create a button to decide if 1 or 2 player
6. If 1 player, computer to move using random generated columns unless there are 3 of an opponents to go to block and if there are 3 of the computers to go to make the 4th
7. If 2 player, to decide on what color to have, then decides to go first based on colors (if player choose blue goes first)

8. Show counter falling (animation)
9. Congrats banner with confetti if win and you suck if you lose




Summary

This is a Connect 4 style game, that can be played with 2 human players. It can be played across multiple screen formats, keeps tracks of who's turn it is and declares a winner once a combination of 4 in a row has been found.

I did not get as far into the game as I would have liked, things I wanted to add was: A score board, confetti on win, tile to hover above board as you moved the mouse, a different layout and the option to go against the computer. I spent too much time overcomplicating the win function which led to me getting lost with my thoughts. This is much simplier that what i expect it to be i just need to understand how to properly word the tools.











Thoughts

I first thought to put containers around each colums so when a player clicked anywhere in the colum the tile will then show at the next available slot, this however ruined the grid so i added a hover feature so you can determine where you are.
what I am struggling with is how to add event listener to the hovered element.

I have tested it for an individual cell which works fine but i cannot identify the cell thats being clicked on when i use queryselecter all. 
Query selectorAll is an array, how do i identify things in an array?

if the even.target is the same as the class name in the array then show red
click on div container, change background to red

at end of handleClick to then change the nextcolor to yellow
nextclick =yellow
can i store moves made in an array so there is a memory of whatever the last color was? computer to then refer to array and if red change yellow else yellow change red

i have created an array and when handle clck is operated it shows up with the color red and push into array the word red.. this i can see being a problem as iw ant to be able to pushwhatever the background color was wiothout me hardtyping the wprds red or yellow

now must create a function that scans array.. if last entry matches red then change the background color to yellow, ive already created an identical function for player two with the only difference being the background color so i should be able to opass through this function.

After over complicating and not being able to wrap my head around the computer being able to tell whos turn was whos, calling a let function as player 1 = true when i wanted it to be red and false when i wanted it to be as yellow made all the problems melt away and deliver very simple easy straight forward code.. annoyingly obvious as well when looking back on it.

How to make counters fall..
putting additional classes now allow me to pin point a column, at the minute the handle click specifies an individual div to change the color, i want it to change to..

if you press anywhere on (A) column for the tile to fall to the next available slot.
i have to specify if a slot is full or not
- which can be done through is the style is red/yellow do nothing but if its white go to that one
- if there are multiple white slots go to the class with the lowest number

im not nderstanding how to use for loops correctly so i will state clearly what it is that i am attempting to do in english and try to refactopr that as simply as possible to hopefully help me undeerstand how i can get over this hurdle.

objective= for counter to go to the lowest available slot within a column

lets first look at it if it was empty...

we need the console to determine what classifys as an "available slot"
this can be done by targeting if the background color is white or not
if it is white, it is available
if it is not, it is not available

each column had 3 classes, tile= on the board, then letter=which column, then letter and number= which place in column (lowest at the bottom)

  if(event.target.classList[1]=="A"){
        aTiles.forEach((aTile)=>{
         console.log(aTile.style.backgroundColor)})

When clicked in the A column, it lists in order what their background color is.

We want the tile to fall to the lowest number to imitate gravity

if clicked on column a, go to the next availble white spaced background(and fill that) starting from the bottom

if ("click" .classList[1]==A) for loop => if (!white move on to next one else white background=> change color 

IDEAS FOR DECLARING WINNER

If i change the loop to check the +1-4 after index when it gets to the last line it thows an error for columns and spills over to the next one so if there were 3 on top of column a and 1 on bottom of column b it still results in a win
With the rows it throws an error with the top roght corner and depends on how you click the tiles, which then doesnt shopw a win even if it is.
This moving container that i need to create only needs to check columns [0]+4, [1]+4, [2]+4 and rows [0]+4, [6]+4, [12]+4, [18]+4 and be able to move along their respective axis
