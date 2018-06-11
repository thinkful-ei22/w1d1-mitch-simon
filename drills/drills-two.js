'use strict';

// function jediName(firstName, lastName) {
//   console.log(lastName[0] + lastName[1] + lastName[2] + firstName[0] + firstName[1]);
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
//   let word = str.toLowerCase();
//   if (word[0] === 'a') {
//     return word[1];
//   } else if (word[0] === 'b') {
//     return word[2];
//   } else if (word[0] === 'c') {
//     return word[3];
//   } else if (word[0] === 'd') {
//     return word[4];
//   } else {
//     return ' ';
//   }
// }

// console.log(decode('craft') + decode('block') + decode('argon') + decode('meter') + decode('bells') + decode('brown') + decode('croon') + decode('droop'));

// function daysInMonth (month, leapYear) {
//   let days = 0;

//   switch(month) {
//     case 'January':
//     case 'March':
//     case 'May':
//     case 'July':
//     case 'August':
//     case 'October':
//     case 'December':
//       days = 31;
//       break;
//     case 'April':
//     case 'June':
//     case 'September':
//     case 'November':
//       days = 30;
//       break;
//     case 'February':
//       if (leapYear) {
//         days = 29;
//       }
//       else {
//         days = 28;
//       }
//       break;
//     default:
//       throw new Error('Must provide a valid month.');
//   }

//   console.log(days);
// }


// daysInMonth('January');

function rockPaperScissors(num) {
  if (num !== 1 && num !== 2 && num !== 3) {
    throw new Error('Number must be 1, 2, or 3');
  }
	const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(`the computer picked ${randomNo}`);
  if (num === randomNo) {
    return 'tie';
  }
  if (num === 1 && randomNo === 2 || num === 2 && randomNo === 3 || num === 3 && randomNo === 1) {
    return 'lose';
  } else {
    return 'win';
  }
}

console.log(rockPaperScissors(3));



