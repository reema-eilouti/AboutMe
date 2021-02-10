'use strict';

alert('Hey there! Welcome to my site.');
alert('Let\'s get to know each other, shall we?');

let userName = prompt('What\'s your name?');
alert('Greetings ' + userName + '! Happy to see you here :)');

alert('Let\'s see how well you can guess my favorites!');

let correctAnswers = 0;

function favColor (){
  let favoriteColor = prompt('Do you think my favorite color is Black? (Yes/No)');
  if (favoriteColor.toLowerCase() == 'yes' || favoriteColor.toLowerCase() == 'y') {
    // console.log('Oh! You got that one wrong :P It\'s actually Purple =]');
    alert('Oh! You got that one wrong :P It\'s actually Purple =]');
  } else {
    // console.log('True! My favorite color is Purple :)');
    alert('True! My favorite color is Purple :)');
    correctAnswers = correctAnswers + 1;
  }
}

function favNumber (){
  let favoriteNumber = prompt('Do you think my favorite number is 5? (Yes/No)');
  if (favoriteNumber.toLowerCase() == 'yes' || favoriteNumber.toLowerCase() == 'y') {
    alert('True! My favorite number is 5, and it\'s a Prime! (extra love) :D');
    correctAnswers = correctAnswers + 1;
  } else {
    alert('Oh! You got that one wrong :P It\'s ture, 5 is my favorite :D');
  }
}

function favSeason (){
  let favoriteSeason = prompt('Do you think my favorite Season is Winter? (Yes/No)');
  if (favoriteSeason.toLowerCase() == 'yes' || favoriteSeason.toLowerCase() == 'y') {
    // console.log('Oh! You got that one wrong :P It\'s actually Autumn =]');
    alert('Oh! You got that one wrong :P It\'s actually Autumn =]');
  } else {
    // console.log('True! My favorite season is Autumn, it has the perfect weather! :)');
    alert('True! My favorite season is Autumn, it has the perfect weather! :)');
    correctAnswers = correctAnswers + 1;
  }
}

function favDrink (){
  let favoriteDrink = prompt('Do you think my favorite hot drink is Tea? (Yes/No)');
  if (favoriteDrink.toLowerCase() == 'yes' || favoriteDrink.toLowerCase() == 'y') {
    // console.log('True! Can\'t start my day without a cup of Green Tea :D');
    alert('True! Can\'t start my day without a cup of Green Tea :D');
    correctAnswers = correctAnswers + 1;
  } else {
    // console.log('Oh! You got that one wrong :P It\'s true, I love Tea =]');
    alert('Oh! You got that one wrong :P It\'s true, I love Tea =]');
  }
}

function favArtist (){
  let favoriteArtist = prompt('Do you think my favorite Arab Tarab Artist is Fairouz? (Yes/No)');
  if (favoriteArtist.toLowerCase() == 'yes' || favoriteArtist.toLowerCase() == 'y') {
    // console.log('100% True! I love Fairouz so much <3');
    alert('100% True! I love Fairouz so much <3');
    correctAnswers = correctAnswers + 1;
  } else {
    // console.log('Oh! You got that one wrong :P Who doesn\'t love Fairouz! :D');
    alert('Oh! You got that one wrong :P Who doesn\'t love Fairouz! :D');
  }
}

function guessNumber (){
  let secretNumber = 10;
  let attempts = 4;
  while (attempts) {
    let guessedNumber = prompt('Guess the number I have in mind ;)');
    if (guessedNumber == secretNumber) {
      alert('You guessed right!');
      correctAnswers = correctAnswers + 1;
      // console.log('You guessed right!');
      break;
    } else if (guessedNumber < secretNumber) {
      alert('Your guess is too low :|');
    } else {
      alert('Your guess is too high :|');
    }
    attempts = attempts - 1;
  }
  alert('The number I had in mind was 10 !');

}

function fruitB (){
  let fruitBasket = ['apple', 'banana', 'orange', 'kiwi'];
  // console.log(fruitBasket);
  let opportunities = 6;
  while (opportunities) {
    let userGuess = prompt('Guess which fruit I have in my Fruit Basket!');
    if (fruitBasket.indexOf(userGuess) >= 0) {
      alert('You guessed right!');
      correctAnswers = correctAnswers + 1;
      break;
    } else {
      alert('You guessed wrong :P');
    }
    opportunities = opportunities - 1;
  }
  alert("The fruits were: ['apple', 'banana', 'orange', 'kiwi'] ");
  // console.log('Correct answers: ' + correctAnswers);
  alert('Your total correct answers out of 7 is :  ' + correctAnswers);
}


favColor ();
favNumber ();
favSeason ();
favDrink ();
favArtist ();
guessNumber ();
fruitB ();
