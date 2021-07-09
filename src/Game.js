const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');


class Game {
  constructor(questions) {
    this.questions = questions;
    this.currentRound = 0;
  }

  start(){
    this.currentRound++;
    let card;
    let cards = this.questions.map(element => card = new Card(element.id, element.question, element.answers, element.correctAnswer));
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);


    return
  }



  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
