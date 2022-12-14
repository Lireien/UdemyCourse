// Tech screening tasks

"use strict";

// Какое будет выведено значение: 
let p = 5;
alert(p++); //5
//Чему равно такое выражение: 
console.log([] + false - null + true); //NaN
// т. к. [] + false = 'false', пустой массив приведен к строке ""
// Что выведет этот код:
let y = 1;
let x = y = 2;
alert(x); //2
//Чему равна сумма
console.log([] + 1 + 2); // '12'
//Что выведет этот код: 
alert("1" [0]); // 1
// Чему равно 
console.log(2 && 1 && null && 0 && undefined); //null
//Равны ли эти выраэения
console.log(!!(1 && 2) == (1 && 2)); // не равны, булиновое значение (!!) не будет равно выражению во вторых скобках
// Что выведет этот код: 
alert(null || 2 && 3 || 4); //3
//1) 2 && 3 - 3
//2) null || 3 - 3
//3) 3 || 4 - 3
//Правда ли что a == b ?
const q = [1, 2, 3];
const s = [1, 2, 3];
// не верно 
//Что выведет этот код: 
alert(+"Infinity"); // Infinity
// Верно ли сравнение: 
console.log("Ёжик" > "яблоко"); //не верно, см. unicode
// Чему равно 
console.log(0 || "" || 2 || undefined || true || falsе); //2


// Задание:

// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.

// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.

// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).

// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.

// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.

// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.

const restorantData = {
  menu: [{
      name: 'Salad Caesar',
      price: '14$'
    },
    {
      name: 'Pizza Diavola',
      price: '9$'
    },
    {
      name: 'Beefsteak',
      price: '17$'
    },
    {
      name: 'Napoleon',
      price: '7$'
    }
  ],
  waitors: [{
    name: 'Alice',
    age: 22
  }, {
    name: 'John',
    age: 24
  }],
  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Открыто' : answer = 'Закрыто';

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

function transferWaitors(data) {
  const copy = JSON.parse(JSON.stringify(data));

  copy.waitors[0] = {
    name: 'Mike',
    age: 32
  };
  return copy;
}
;
console.log(transferWaitors(restorantData), restorantData);