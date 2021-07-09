const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game')
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

describe('Game', function() {

  let game;


beforeEach(() => {

  game = new Game(prototypeQuestions);

} )


  it('should be a function', function() {
    expect(Game).to.be.a('function')
  } )
  it('should be able to keep track of current round', function() {
    game.start();
    expect(game.currentRound).to.equal(1);
  });

  it('should be able to print message', function() {
    game.printMessage(deck, round);

  })

})
