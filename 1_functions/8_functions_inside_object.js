'use strict';

// Functions inside objects are called methods.
//
const powName = 'pow';

const obj1 = {
  fn1: function inc(a) {
    return ++a;
  },
  // Anonymous function
  sum: function (a, b) {
    return a + b;
  },
  // Both the key and the value is inc
  inc(a) {
    return ++a;
  },
  max: (a, b) => {
    return a > b ? a : b;
  },
  min: (a, b) => (a > b ? a : b),
  dec: a => --a,
  // The [ ] brackets are used when the name is replaced by the value of
  // the powName variable
  [powName](a, b) {
    return Math.pow(a, b);
  },
};

console.log('obj1.fn1.name = ' + obj1.fn1.name);
console.log('obj1.sum.name = ' + obj1.sum.name);
console.log('obj1.inc.name = ' + obj1.inc.name);
console.log('obj1.max.name = ' + obj1.max.name);
console.log('obj1.min.name = ' + obj1.min.name);
console.log('obj1.dec.name = ' + obj1.dec.name);
console.log('obj1.pow.name = ' + obj1.pow.name);

console.log("obj1['pow'](8,6) = " + obj1['pow'](8, 6));
