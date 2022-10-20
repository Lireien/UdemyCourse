'use strict';

const bigint = 12355454684321321541646513222n;

const sameBigint = BigInt(12355454684321321541646513222);

console.log(typeof(bigint));

console.log(5n + 1); // не допустимо смешивать
console.log(Math.round(5n)); //не допустимо применять конструктор Math

// можно: +(сложение), -, *, **, %, - возвращать будет bigint
// операторы сравнения работают, но только при нестрогом равенстве
console.log(5n/2n);

let bigintNumber = 1n;
let number = 2;

console.log(bigintNumber + BigInt(number));
console.log(Number(bigintNumber) + number); //унарный плюс не работает


