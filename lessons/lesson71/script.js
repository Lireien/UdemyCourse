'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const widthO = box.offsetWidth;
// const heightO = box.offsetHeight;

const widthS = box.scrollWidth;
const heightS = box.scrollHeight;

// console.log(width, height);
// console.log(widthO, heightO);
console.log(widthS, heightS);

btn.addEventListener('click', ()=> {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.clientWidth);



