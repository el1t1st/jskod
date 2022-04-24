'use strict';

// Function declaration

function plusOne(age) {
  console.log('The old age is', age);
  const newAge = ++age;
  console.log('The new age is:', newAge);
  return newAge;
}

plusOne(21);

// Function Expression

const minusOne = function (age) {
  console.log('The age prior is', age);
  const newAge = --age;
  console.log('The new age is:', newAge);
  return newAge;
};

minusOne(21);

// Short Arrow Function

const maximum = (a, b) => (a > b ? a : b);

maximum(15, 20);

// Arrow Function

const sumOfTwo = (a, b) => {
  const c = a + b;
  console.log('The sum of a and b is:', c);
  return c;
};

sumOfTwo(18, 18);
