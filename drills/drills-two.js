'use strict';

// function jediName(firstName, lastName) {
//   let splitFirst = firstName.split('');
//   let splitLast = lastName.split('');
//   console.log(splitLast[0] + splitLast[1] + splitLast[2] + splitFirst[0] + splitFirst[1])
// }

// jediName('John', 'Dude');

// function beyond(num) {
//   if (num === Infinity){
//     console.log('And beyond');
//   }
//   else if (num !== Infinity && num > 0) {
//     console.log('To infinity');
//   }
//   else if (num !== Infinity && num < 0) {
//     console.log('To negative infinity');
//   }
//   else if (num === 0) {
//     console.log('Staying home');
//   }
// }

// beyond(Infinity);

// function decode(str) {
//   let wordArray = str.toLowerCase().split('');
//   if (wordArray[0] === 'a') {
//     return wordArray[1];
//   } else if (wordArray[0] === 'b') {
//     return wordArray[2];
//   } else if (wordArray[0] === 'c') {
//     return wordArray[3];
//   } else if (wordArray[0] === 'd') {
//     return wordArray[4];
//   } else {
//     return ' ';
//   }
// }

// console.log(decode('craft') + decode('block') + decode('argon') + decode('meter') + decode('bells') + decode('brown') + decode('croon') + decode('droop'));

function daysInMonth (month, leapYear) {
  let days = 0;

  switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = 31;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      days = 30;
      break;
    case 'February':
      if (leapYear) {
        days = 29;
      }
      else {
        days = 28;
      }
      break;
    default:
      throw new Error('Must provide a valid month.');
  }

  console.log(days);
}


daysInMonth('January');

