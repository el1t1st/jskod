'use strict';

const Context = function () {
  this.name = 'Vladimir';
  const city = {
    name: 'Moscow',
    year: 1147,
    f1: function () {
      return this.name;
    },
    f2: () => {
      // Because this is an arrow function it can't access this.name
      return this.name;
    },
    f3() {
      return this.name;
    },
  };
  return city;
};

const city = new Context();

console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
console.log('city.f3() = ' + city.f3());
