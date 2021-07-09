![flashCard](https://user-images.githubusercontent.com/78764587/125016090-fd22d280-e02d-11eb-8f45-a566e0821e60.gif)
# Flashcard Fun!
Mod 2: Solo Project


## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Illustrations](#illustrations)
  - [Install + Setup](#set-up)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)

## Abstract
  This project uses the terminal to play a guessing game using flashcards. Once the game is initiated the user can chose between the three possible answers for the correct one. The game prints out if the the guess is correct or incorrect. Once the player has run through the deck of cards, the console will print the game is over and the percentage of guess correct.

## Technologies
  - Javascript
  - eslint
  - node
  - Atom


## Code Architecture
  - Each class file has a test file to ensure the code is outputting the desired results.
  - The Card file builds a the card class.
  - The Deck file builds the Deck class, which takes in the parameter of an array of instanciated Cards.
  - The Round file builds the Round class, which takes the parameter of the instanciated Deck. It allows the game to take turns and update the next card to be played. It records the amount of incorrect guesses and the turns taken and outputs the percentage of correct guesses.
  - The Game file builds the Game class, taking in the parameter of questions. The Game file starts the game and instantiates the card, deck and round based off of the questions used in the argument. This file used in the index.js file to allow the game to be played through the console. The method starts(), is invoked in the index.js file.

## Illustrations

![flashcards]() 
Gif of the game in action.


## Install + Setup

1. Fork this repo  
2. Clone the repo to your local machine
3. CD into the directory
4. View the play the game by running node index.js on the Terminal



## Contributors
  - [Hayley Dixon](https://github.com/hheyhhay)



## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/flash-cards.html)
