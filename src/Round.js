class Round{
  constructor(deck){
    this.deck = deck;
    this.currentCard = deck.data[0];
    this.turns = 0;

  }
  returnCurrentCard(){
    return this.currentCard;
  };

  takeTurn(guess){ // needs a para
    this.turns++;
    this.currentCard // finsih here how to iterate to next element?
  };
}
module.exports = Round;
