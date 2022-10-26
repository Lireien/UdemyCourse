'use strict';

// const now = new Date(2022, 9, 25, 21, 41);
// const now = new Date(0);
// const now = new Date(-138526);

// const now = new Date();
const now = new Date('2022-10-26');

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTime());

// console.log(now.setHours(18, 40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let count = i ** 3;
}

let end = new Date();

console.log(`Finished in ${end - start} mileseconds`);

