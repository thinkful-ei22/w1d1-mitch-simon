function jediName(firstName, lastName) {
  let splitFirst = firstName.split('');
  let splitLast = lastName.split('');
  console.log(splitLast[0] + splitLast[1] + splitLast[2] + splitFirst[0] + splitFirst[1])
}

jediName('John', 'Dude');