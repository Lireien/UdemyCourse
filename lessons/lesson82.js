'use strict';

const person = {
  name: 'Alex',
  tel: '+53245662',
  parents: {
    mother: 'Juli',
    father: 'Jack'
  }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mother = 'Ann';

// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));
console.log(person);
console.log(clone);

