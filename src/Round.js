const Turn = require('../src/Turn');

class Round{
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.data[0];
    this.incorrectGuesses = [];


  }
  returnCurrentCard(){
    return this.currentCard;
  };

  takeTurn(guess){
    let turn = new Turn(guess, this.currentCard);

    if (turn.guess === this.currentCard.correctAnswer){
      this.updateTurn();
      return `Correct!`;
    } else {
      this.incorrectGuesses.push(turn.guess);
      this.updateTurn()
      return `Incorrect!`
    }

    this.currentCard = this.deck.data[this.turns]
    return turn;

  };

  updateTurn(){
    this.turns++;
    this.currentCard = this.deck.data[this.turns]

  }

}
module.exports = Round;
