//DOM navigation

//console.log(document.head);
// console.log(document.documentElement);

// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

//получить родителя
console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentElement);

//след.ноду
console.log(document.querySelector('[data-current="3"]').nextSibling);
//предыдущ.ноду
console.log(document.querySelector('[data-current="3"]').previousSibling);

//след.элем
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//пред.элем
console.log(document.querySelector('[data-current="3"]').previousElementSibling);


//получить все элементы, но не ноды
for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }

  console.log(node);
}