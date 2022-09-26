//Closures and lexsical enviroment

"use strict";

// let number = 5; 

// function logNumber() {
//   console.log(number);
// }

// number = 6;

// logNumber(); // получаем 6, т.к. функция "запомнила" ссылку на переменную number, не на её значение, и при вызове функции она обращается к переменной, не зависимо от того, какое в настоящий момент у нее значение.

// let number = 5;

// function logNumber() {
//   let number = 4;
//   console.log(number);
// }

// number = 6;

// logNumber(); //получаем 4, т.к. функция обратилась к переменной в своём внутреннем лексическом окружении

function createCounter() {
  let counter = 0;

  const myCounter = function() {
    counter += 1; 
    return counter;
    };

  return myCounter;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);