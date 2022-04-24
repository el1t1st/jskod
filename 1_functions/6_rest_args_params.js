'use strict';

// The rest args are pushed inside an Array
//
const f1 = (...args) => {
  console.log(args);
};

f1(1, 2, 3);

const f2 = (...args) => {
  args.forEach(arg => {
    console.log('Type: ' + typeof arg);
    if (typeof arg === 'object') {
      console.log('Value :' + JSON.stringify(arg));
    } else {
      console.log('Value :' + arg);
    }
  });
};

f2(1, 'V.V. Putin', { field: 'value' });
