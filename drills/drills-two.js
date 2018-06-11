'use strict';

// function jediName(firstName, lastName) {
//   let splitFirst = firstName.split('');
//   let splitLast = lastName.split('');
//   console.log(splitLast[0] + splitLast[1] + splitLast[2] + splitFirst[0] + splitFirst[1])
// }

// jediName('John', 'Dude');

function beyond(num) {
  if (num === Infinity){
    console.log('And beyond');
  }
  else if (num !== Infinity && num > 0) {
    console.log('To infinity');
  }
  else if (num !== Infinity && num < 0) {
    console.log('To negative infinity');
  }
  else if (num === 0) {
    console.log('Staying home');
  }
}

beyond(Infinity);