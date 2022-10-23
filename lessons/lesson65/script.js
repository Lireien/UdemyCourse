//setTimeout && setInterval

const btn = document.querySelector('.btn');
let timerId,
  i = 0;

function animationHandler() {
  const elem = document.querySelector('.box');
  let pos = 0;

  const id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(id);

    } else {
      pos += 1;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', animationHandler);

// const timer = setTimeout(function(text) {
//   console.log(text);
// },2000, 'Hello');

// function logger() {
//   if (i === 3){
//     clearInterval(timerId);
//   }  
//   console.log('text');
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);