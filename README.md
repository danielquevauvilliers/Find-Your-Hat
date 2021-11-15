# FIND YOUR HAT project on Codecademy
Building an interactive terminal game.
## Table of contents
* [Objectives and requirements](#objectives-and-requirements) 
* [Technologies](#technologies)
* [Launch](#launch)
## Objectives and requirements
The main objective is to build an interactive terminal game using Node.js

### Scenario of the game
The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

### Requirements
* The game should be playable by users.
* When a user runs main.js, they should be prompted for input and be able to indicate which direction they’d like to “move”.
* After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with *. They should be prompted for their next move.
* This should continue until the user either:
  1. Wins by finding their hat.
  2. Loses by landing on (and falling in) a hole.
  3. Attempts to move “outside” the field.
* When any of the above occur, user must know and game is ended.

## Technologies
The following are required:
* Node.js installation. Follow the following [guide](https://www.codecademy.com/articles/setting-up-node-locally) to install Node.js on your computer.
* prompt-sync Node module: Run ```npm install prompt-sync``` in the terminal.

## Launch
Type ```Node main.js``` in the terminal in the folder that you have downloaded the files.