class Deck {
  constructor(cards) {
    this.data = cards;
  }
  
  countCards() {
    return this.data.length;
  }
}

module.exports = Deck;
