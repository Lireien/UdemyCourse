//Descriptors
"use strict";

//writtable
//enumerable
//configurable

const birthday = Symbol('birthday');

const user = {
  name: "Alex",
  surname: "Smith",
  [birthday] : '20/04/1991',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
};

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) {
  console.log(key); //метод перебора игнорирует символы
}

// Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, birthday));
//символ всегда неперечисляем


// user.name = "mike"; - ошибка

Object.defineProperties(user, {
  name: {
    writable: false,
  },
  surname: {writable: false}
});


//object methods





