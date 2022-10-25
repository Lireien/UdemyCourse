'use strict';

const arr = ['Alex', 'Ann', 'Mike', 'Alex'];

const set = new Set(arr);

set.add('Ivan');
set.add('Ann');

console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let val of set) {
//   console.log(val);
// };

// set.forEach((value, valueAgain, set) => {
//   console.log(value, valueAgain);
// });

console.log(set.values());
set.keys(); //для обратной совместимости с map, но возвращает то же, что в values
console.log(set.entries());

//Функция помощник, которая фильтрует любой массив

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));