'use strict';

// Задание:

// В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

// Пример:

// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

// Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

//         amountOfPages(5) => 5

//         amountOfPages(25) => 17

//         amountOfPages(1095) => 401   

//         amountOfPages(185) => 97

function amountOfPages(summary){
let answer = '';
let n = 0;

for (let i = 1; i < summary; i++) {
  answer += i;
  if (answer.length === summary) {
    n = i;
    break;
  } 
}
return n;
}

// Задание:

// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

// Пример:

// isPangram(«The quick brown fox jumps over the lazy dog») => true

// isPangram(«Hello world») => false

// P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, которые мы будем проходить дальше по курсу. Но и без них можно это сделать.

function isPangram(string) {
string = string.toLowerCase();
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
return alphabet.split('').every((l) => string.indexOf(l) !== -1);
}

// Задание:

// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8

function deepCount(a){
let count = a.length;
for (let i = 0; i< a.length; i++) {
  if (Array.isArray(a[i])) {
    count += deepCount(a[i]);
  }
}
return count;
}