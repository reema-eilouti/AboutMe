'use strict';

prompt('Hey there! Welcome to my site.');
prompt('Let\'s get to know each other, shall we?');

let userName = prompt('What\'s your name?');
prompt('Greetings ' + userName + '! Happy to see you here :)');

prompt('Let\'s see how well you can guess my favorites!');

let favoriteColor = prompt('Do you think my favorite color is Black? (Yes/No)');
if (favoriteColor.toLowerCase() == 'yes' || favoriteColor.toLowerCase() == 'y'){
    // console.log('Oh! You got that one wrong :P It\'s actually Purple =]');
    alert('Oh! You got that one wrong :P It\'s actually Purple =]');
} else {
    // console.log('True! My favorite color is Purple :)');
    alert('True! My favorite color is Purple :)');
}

let favoriteNumber = prompt('Do you think my favorite number is 5? (Yes/No)');
if (favoriteNumber.toLowerCase() == 'yes' || favoriteNumber.toLowerCase() == 'y'){
    alert('True! My favorite number is 5, and it\'s a Prime! (extra love) :D');
} else {
    alert('Oh! You got that one wrong :P It\'s ture, 5 is my favorite :D');
}

let favoriteSeason = prompt('Do you think my favorite Season is Winter? (Yes/No)');
if (favoriteSeason.toLowerCase() == 'yes' || favoriteSeason.toLowerCase() == 'y'){
    // console.log('Oh! You got that one wrong :P It\'s actually Autumn =]');
    alert('Oh! You got that one wrong :P It\'s actually Autumn =]');
} else {
    // console.log('True! My favorite season is Autumn, it has the perfect weather! :)');
    alert('True! My favorite season is Autumn, it has the perfect weather! :)');
}

let favoriteDrink = prompt('Do you think my favorite hot drink is Tea? (Yes/No)');
if (favoriteDrink.toLowerCase() == 'yes' || favoriteDrink.toLowerCase() == 'y'){
    // console.log('True! Can\'t start my day without a cup of Green Tea :D');
    alert('True! Can\'t start my day without a cup of Green Tea :D');
} else {
    // console.log('Oh! You got that one wrong :P It\'s true, I love Tea =]');
    alert('Oh! You got that one wrong :P It\'s true, I love Tea =]');
}

let favoriteArtist = prompt('Do you think my favorite Arab Tarab Artist is Fairouz? (Yes/No)');
if (favoriteArtist.toLowerCase() == 'yes' || favoriteArtist.toLowerCase() == 'y'){
    // console.log('100% True! I love Fairouz so much <3');
    alert('100% True! I love Fairouz so much <3');
} else {
    // console.log('Oh! You got that one wrong :P Who doesn\'t love Fairouz! :D');
    alert('Oh! You got that one wrong :P Who doesn\'t love Fairouz! :D');
}