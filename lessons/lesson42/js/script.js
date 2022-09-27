'use strict';
//1)
const box = document.getElementById('box');

console.log(box);
//2)
const btns = document.getElementsByTagName('button');

//Получаем HTML-коллекцию(Псевдомассив)
console.log(btns);

//получаем 2ую кнопку
//const btns = document.getElementsByTagName('button')[1];
// console.log(btns[1]);

//3)
const circles = document.getElementsByClassName('circle');
//Получаем HTML-коллекцию
console.log(circles);

//4)
const hearts = document.querySelectorAll('.heart');
//Получаем NodeList(псевдомассив), имеет метод forEach();
console.log(hearts);
hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
//Получаем 1ый элемент со страницы с этим селектором
console.log(oneHeart);