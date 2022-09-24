//Arrays and pseudoarrays

'use strict';

const arr = [1, 12, 233, 6, 85];

arr.sort(compareNums);
console.log(arr);
// arr.pop();
// arr.push(10);

function compareNums( a, b) {
  return a - b; 
}

// for (let i = 0; i< arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function(value, i, arr) {
//   console.log(`${i}: ${value} внутри массива ${arr}`);
// });

const str = prompt('',"");

const products = str.split(', ');
console.log(products.join('; '));