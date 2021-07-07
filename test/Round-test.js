const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function(){
  let card1;
  let card2;
  let card3;
  let deck;
  let turn;
  let round;


beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  deck = new Deck([card1, card2, card3]);
  turn = new Turn('sea otter', card1);

  round = new Round(deck);

} )

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });

  it('should take in a deck instance as an arguement', function() {
    expect(round.deck).to.equal(deck)
  });

  it('should keep track of current card', function(){
    expect(round.currentCard).to.deep.equal(deck.data[0]);
  });

  it('should be able to count turns', function(){
    expect(round.turns).to.deep.equal(0);
  })

  it('should return the current card played', function(){
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard)
  })

  it('should be able to update turns count', function(){
    round.takeTurn(); // turn.guess;
    expect(round.turns).to.deep.equal(1);
  })

  // it('should be able to update to next card after turn', function() {
  //   round.takeTurn();
  //   expect(round.currentCard).to.deep.equal(deck[1])
  // }
})
