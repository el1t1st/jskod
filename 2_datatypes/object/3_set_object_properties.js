'use strict';

const person = {
  name: 'Vladimir Putin',
  city: 'Saint-Petersburg',
  bornYear: 1952,
};

// How to check if a key exists?

if ('name' in person) {
  console.log('The name is : ' + person.name);
}

// How to loop over an object?
for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

// How to assign values to keys in an object?
const name = 'Alex K';
const bornYear = '1972';

// Old school
const person2 = { name: name, bornYear: bornYear };
console.dir(person2);

// Modern
const person3 = { name, bornYear };
console.dir(person3);

// Dynamic field name
const fieldName = 'jobName';
const fieldValue = 'programmer';
const person4 = {
  name: 'Alex K',
  [fieldName]: fieldValue,
};
console.dir(person4);

// Expressions in dynamic field name
const person5 = {
  name: 'Alex K',
  ['current' + 'Job']: fieldValue,
};
console.dir(person5);

// Function in field name
function fn(s) {
  return s + 'Current';
}

const person6 = {
  name: 'Alex K',
  [fn('job')]: fieldValue,
};

console.dir(person6);
