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

// TODO: continue with course number 11
