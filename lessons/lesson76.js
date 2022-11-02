'use strict';

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return this.a + this.b;
//   }

//   console.log(sum());
// } // undefined, undefined, Uncaught TypeError

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }

  console.log(sum());
} //undefined, undefined, 7
showThis(2, 5); 

const obj = {
  a:20,
  b: 15,
  sum: function() {
    console.log(this);
    function show() {
      console.log(this);
    }
    show();
  }
};

obj.sum();

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
}

let mary = new User('Mary', 35135);

function sayName(surname) {
  console.log(this);
  console.log(this.name +' '+ surname);
}

const user = {
  name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
  return this*num;
}

const double = count.bind(2);
console.log(double(3));

//1) Обычная функция без 'use stirct' -  получаем глобальный объект Window
//                     с 'use stirct - undefined
//2) Контекст у методов объекта - сам объект
//3) this в конструкторах и классах - это новый экземпляр объекта
//4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function(e) {
  console.log(this);
  console.log(e.target);
  this.style.backgroundColor = 'beige';
});
//контекст вызова - сам элемент, на котором произошло событие(this === e.target)

btn.addEventListener('click', () => {
  console.log(this);
  this.style.backgroundColor = 'beige';
});
//контекст вызова теряется, this = undefined, cannot set property of undefined

const newObj = {
  num: 5,
  sayNumber:  function() {
    const say = () => {
      console.log(this.num);
    };
    say();
  }
};

newObj.sayNumber();

const doubled = a => a*2;

console.log(doubled(4));
