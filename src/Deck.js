class Deck{
  constructor(dataSet){
    this.data = dataSet;

  }
  countCards(){
    return this.data.length;
  }
};

module.exports = Deck;
