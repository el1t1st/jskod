'use strict';

const person1 = {};
person1.name = 'Vladimir';
person1.city = 'Moscow';
person1.country = 'Russia';

const person2 = new Object();
person2.name = 'Vladimir';
person2.city = 'Moscow';
person2.country = 'Russia';

const person3 = {
  name: 'Vladimir',
  city: 'Moscow',
  country: 'Russia',
};

console.dir({ person1, person2, person3 });
