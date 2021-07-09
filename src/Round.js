const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.data[0];
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);

    if (turn.guess === this.currentCard.correctAnswer) {
      this.updateTurn();
      return `Correct!`;
    } else {
      this.incorrectGuesses.push(turn.guess);
      this.updateTurn()
      return `Incorrect!`
    }
    this.endRound();
  }

  calculatePercentCorrect() {
    this.percentCorrect = Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);

    return `${this.percentCorrect}%`;
  }

  updateTurn() {
    this.turns++;
    this.currentCard = this.deck.data[this.turns]
  }

  endRound() {
    this.calculatePercentCorrect()
    if (this.turns === this.deck.data.length) {
      console.log(`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`)
      return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
      }
  }
};
module.exports = Round;
