'use strict';

// Question: Can you change the value of an identifier in a scope 1 step lower?
//
// Answer: Yes
//
// Question: What value takes precedence if an identifier is definited inside
// the current scope, and in the scope above?
//
// Answer: The value inside the current scope always takes precedence.
//

let yearNumber = 2022;

const plusOne = () => {
  yearNumber++;
  console.log('The yearNumber inside plusOne context is:', yearNumber);
};

plusOne();

console.log(
  'Has plusOne affected yearNumber outside its context?:',
  yearNumber
);
