const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  let card;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);

  })

  it('should take a guess and a card object as arguments', function() {
    expect(turn.guess).to.deep.equal('pug');
  })

  it('should have a method that returns the guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('pug');
  })

  it('should have a method that returns the card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal(card);
  } );

  it('should be able to evaluate guess when wrong', function(){
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to evaluate guess when correct', function(){
    turn.guess = 'sea otter';
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback when wrong', function() {
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal(`incorrect!`);
  });

  it('should be able to give feedback when correct', function() {
    turn.guess = 'sea otter';
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('correct!')
  })

    })
