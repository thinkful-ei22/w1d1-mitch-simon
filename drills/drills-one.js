'use strict';

function yearOfBirth(age) {
  return 2018 - age;
}

function whoAmI(name, age) {
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
}
catch(e) {
  console.error(e.messege);
}

whoAmI('John', 7);