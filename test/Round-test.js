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
  turn = new Turn('sea otter', card1);  // ask if should be instantiated here or else
// add turn
  round = new Round(deck);
  // console.log(round, 'insside before each')
  // console.log(deck, 'inside')
  //   console.log(deck.data[0], 'INSIDE')
} )

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });

  it('should take in a deck instance as an arguement', function() {
    console.log(round.deck);
    console.log(deck);
    expect(round.deck).to.equal(deck)
  });

  it('should keep track of current card', function(){
    // console.log(deck.data[0]);
    // console.log(round.currentCard) // fix!
    expect(round.currentCard).to.deep.equal({
  id: 1,
  question: "What is Robbie's favorite animal",
  answers: [ 'sea otter', 'pug', 'capybara' ],
  correctAnswer: 'sea otter'
}) // could also LITERALLY put in object
  });

  it('should be able to count turns', function(){
    expect(round.turns).to.deep.equal(0);
    // expect(round.turns).to.equal(0);

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
