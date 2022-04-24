'use strict';

// ES6 style for default parameter values
//
function fnNew(a, b = 'Hello', c = 5) {
  console.dir({ a, b, c });
}

fnNew(1, 2, 3);
fnNew(1, 2);
fnNew();

// Old style for default parameter value
//
function fnOld(a, b, c) {
  b = b || 'Hello';
  c = c || 5;
  console.dir({ a, b, c });
}

fnOld(1, 2, 3);
fnOld(1, 2);
fnOld();

// Hash style for default parameter values
//
function fnHash(args) {
  args.a = args.a || [24, 3, 72];
  args.b = args.b || 'Hello';
  args.c = args.c || 2022;
  console.dir(args);
}

fnHash({ a: [1, 2, 3], b: 'Hi', c: 2021 });
fnHash({ b: 'Privet' });
fnHash({ c: 1914 });
