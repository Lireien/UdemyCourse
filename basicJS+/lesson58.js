'use strict';

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: '20/04/1991',
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  }
};

for (const key in user) {
  console.log(user[key]);
}

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function () {};

console.dir(arr);

// for (const key in arr) {
//   console.log(arr[key]);
// }

// const str = 'string';
// for (const key in str) {
//   console.log(str[key]);
// }
//перебор массивов и строк с помощью for...in может идти не по порядку!

for (const key of arr) {
  console.log(key);
}

//объект не перебирается с помощью for...of

const salaries = {
  John: 500,
  Ivan: 1000,
  Ann: 5000,
  sayHello: function () {
    console.log('Hello');
  }
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.John,
    last: this.Ann,

    next() {
      if (this.current < this.last) {
        this.current += 500;
        return {
          done: false,
          value: this.current
        };
      } else {
        return {
          done: true
        };
      }
    },
  };
};

// for (let res of salaries) {
//   console.log(res);
// }

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
