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

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

for (let i = 0; i < circles.length; i++) {
  circles[i].style.backgroundColor = 'yellow';
}

hearts.forEach(item => {
  item.style.backgroundColor = 'chartreuse';
});

const div = document.createElement('div');
// const text = document.createTextNode('TEXT');


const wrapper = document.querySelector('.wrapper');
div.classList.add('black');
// document.body.append(div);
wrapper.append(div);
//устаревшее:
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);
//устаревшее:
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
//устаревшее:
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
//устаревшее:
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend', '<h2>New text</h2>');