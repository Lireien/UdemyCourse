//Основы ООП, прототипно-ориентированное наследование

"use strict";

let str = "some";
let strObj = new String(str);

console.log(str); //some
console.log(strObj); //[String: 'some']

console.log(typeof(str)); //string
console.log(typeof(strObj)); //object

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello');
  }
};

// const john = {
//   health: 100,
// };

const john = Object.create(soldier);

//устаревшее
// john.__proto__ = soldier;

//современное
// Object.setPrototypeOf(john, soldier);

console.log(john); //{ health: 100 }
console.log(john.armor); // 100
john.sayHello();

