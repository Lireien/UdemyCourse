"use strict";

//Typisation

//To String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5+ ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//To Number
// 1) 
console.log(typeof(Number(null)));
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
let answer = +prompt('Type your number here', '');
//Всё, что приходит от пользователя: инпут, промт, текстареа - вседа тип данных "строка".

//To Boolean

//0, '', null, undefined, NAN - falsy-значения (в логическом контексте - 0);

// 1)
let switcher = null;

if (switcher) {
  console.log('Working...');
}

switcher = 1;
if (switcher) {
  console.log('Working...');
}

// 2)
console.log(typeof(Boolean('5')));

// 3)
console.log(typeof(!!"sds"));
