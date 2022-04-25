'use strict';

// Object / Hash
const person = {
  name: 'Alex',
  city: 'Antwerpen',
  born: '1972',
};

console.log('The name of the person is: ' + person.name);
console.log('The name of the person is: ' + person['name']);

delete person.name;
console.dir({ person });

delete person['city'];
console.dir({ person });

// Access with a getter
const person2 = {
  name: 'Vladimir Putin',
  get city() {
    return 'Moscow';
  },
  set city(value) {
    console.log('Vladimir Putin lives in Moscow');
  },
};

// TODO: continue with course number 11
