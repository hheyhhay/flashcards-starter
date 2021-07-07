const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function(){
  it('shold be a function', function() {
    expect(Round).to.be.a('function')
  })
})
