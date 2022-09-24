//Передача по ссылке или значению, spread
"use strict";

//по значению
let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

// по ссылке
const obj = {
  a: 5,
  b: 1,
};

const copy = obj;
copy.a = 10;

console.log(copy);
console.log(obj);

//Копии
//поверхностная копия

function copyMaker(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const nums = {
  a: 2,
  b: 5,
  c: {
    d: 3,
    f: 8,
  },
};

// const newNums = copyMaker(nums);
// newNums.a = 10;
// newNums.c.f = 7;

// console.log(newNums);
// console.log(nums);

const add = {
  x: 17,
  l: 22,
}

const clone = Object.assign({}, add);

clone.x = 55;

console.log(add);
console.log(clone);

//Копия массива
const basicArray = ['a', 'b', 'c'];
const newArray = basicArray.slice();

newArray[1] = "try";
console.log(newArray);
console.log(basicArray);


//Spread
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const digits = [2, 5, 7];

log(...digits);

const array = ['a', 'b'];
const copyArr = [...array];

const q = {
  one: 1,
  two: 2
};

const newQ = {...q};