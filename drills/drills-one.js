'use strict';

function yearOfBirth(age) {
  return 2018 - age;
}

function whoAmI(name, age) {
  if (typeof name === 'undefined' || typeof age === 'undefined') {
    throw new Error('Arguments not valid');
  }
  if (typeof age !== 'number' || typeof name !== 'string') {
    throw new Error('Name needs to be a string, age needs to be a number');
  }
  if (age <= 0) {
    throw new Error('age cannot be negative or zero');
  }

  var yob = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log('I was born in ' + yob + '.');
}

try {
  whoAmI('John', -77);
  whoAmI('Not John', 30);
  whoAmI(85, 30);
  whoAmI('John', '23');
  whoAmI();
}
catch(e) {
  console.error(e.messege);
}

whoAmI();