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
  // turn = new Turn('sea otter', card1);

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

  // it ('should instanciate a turn from guess', function(){
  //   round.takeTurn('sea otter');
  //   console.log('outside', turn);
  //   expect(turn).to.deep.equal({guess: 'sea otter', card: round.currentCard})
  // })

  it('should be able to update turns count', function(){
    round.takeTurn('sea otter'); // turn.guess;

    expect(round.turns).to.deep.equal(1);
  })

  it('should be able to update to next card after turn', function() {
    round.takeTurn('sea otter');
    expect(round.currentCard).to.deep.equal(deck.data[1])
  })

  it('should be able to return updated card', function() {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard)
  })

  it('should be able to evaluate correct guess', function() {
    expect(round.takeTurn('sea otter')).to.deep.equal(`Correct!`);
  })

  it('should be able to evaluate incorrect guess', function() {
    expect(round.takeTurn('pug')).to.deep.equal(`Incorrect!`);
  })

  it('should be able to store incorrect guesses', function() {
    round.takeTurn('pug');
    expect(round.incorrectGuesses[0]).to.deep.equal('pug')
  });

  it('should be able to calculate and return percentages of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('playing with bubble wrap');
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.deep.equal(`67%`)
  })

  it('should be able to calculate and return percentage of another set of guesses', function(){
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.deep.equal(`100%`)
  })

  it('should be able to end round when all cards are used', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');
    expect(round.endRound()).to.deep.equal(`** Round over! ** You answered 100% of the questions correctly!`)
  })
})
