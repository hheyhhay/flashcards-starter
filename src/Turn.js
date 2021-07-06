class Turn{
  constructor(guess, card){
    this.guess = guess;
    this.card = card;
  }
  returnGuess(){
    return this.guess;
  };

  returnCard(){
    return this.card;
  };

  evaluateGuess(){
<<<<<<< HEAD
    if(this.guess === this.card.correctAnswer){
      return true
    } else {
        return false
    }
=======
    console.log(this.card.correctAnswer)
    if(this.guess === this.card.correctAnswer){
      return true
    } else { return false }
>>>>>>> 13090eb0fb167c93b5225d9b9248ca1500598474
  };

  giveFeedback(){
    if (this.evaluateGuess()){
      return `correct!`
<<<<<<< HEAD
    } else {
      return `incorrect!`
    }
=======
    } else {return `incorrect!`}
>>>>>>> 13090eb0fb167c93b5225d9b9248ca1500598474
  }

};
module.exports= Turn;
