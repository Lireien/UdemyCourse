//События и их обработчики

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

//способы "повесить" событие
//1)
{
  /* <button onclick="alert(Click)">Нажми меня</button> */ }

//2)

// btn.onclick = function() {
//   alert('Click');
// };

//3)

let i = 0;
const deleteEl = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i ==1 ) {
  //   btn.removeEventListener('click', deleteEl);
  // }
}; 

// btn.addEventListener('click', deleteEl);
// overlay.addEventListener('click', deleteEl);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(e.target);
});

btns.forEach(btn => {
  btn.addEventListener('click', deleteEl);
});
