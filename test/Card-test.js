const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');


describe('Card', function() {
  let card;

  it('should be a function', function() {

<<<<<<< HEAD
    expect(Card).to.be.a('function');
  });

  beforeEach(() => {card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object') })

  it('should be an instance of Card', function() {
=======
  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
>>>>>>> feature/build-deck
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
<<<<<<< HEAD
=======
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
>>>>>>> feature/build-deck
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should store a list of possible answers', function() {
<<<<<<< HEAD
=======
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
>>>>>>> feature/build-deck
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store the correct answer', function() {
<<<<<<< HEAD
=======
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
>>>>>>> feature/build-deck
    expect(card.correctAnswer).to.equal('object');
  });
});
