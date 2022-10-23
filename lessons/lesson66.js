//Garbage collectors

//1) Утечки, связанные с глобальными переменными, если не включен строгий режим

function func() {
  smth = 'string';
}   // не может быть удалена сборщиком мусора

//2) Забытые таймеры

const someResources = getData();

const node = document.querySelector('.class');

setInterval(function() {
  if (node) {
    node.innerHTML = someResources;
  }
}, 1000);//даже если удалить элемент node, на него осталась ссылка в памяти

//3) Обработчики событий на несуществующих элементах
//в обработчике может остаться ссылка на элемент, который уже удален
//P.S - в современных браузерах это не актуально

//4) Замыкания

function outer() {
  const potentionallyHugeArray = [];
  return function inner() {
    potentionallyHugeArray.push('Hello');
    console.log('Hello!');
  };
}

const sayHello = outer(); //outer отработала, но внутри ссылка на ещё одну функцию = утечка памяти

//5) Работа с DOM элементом

function createElement () {
  const div = document.createElement('div');
  div.classList.add('test');
  return div;
}

const testDiv = createElement();

document.body.append(testDiv);

function deleteElement() {
  document.body.removeChild(document.querySelector('.test'));
}

deleteElement(); //удаляет элемент из вёрстки, но в JS сохранился
//Решение:

function createElement () {
  const div = document.createElement('div');
  div.classList.add('test');
  document.body.append(testDiv);
}

createElement();

function deleteElement() {
  document.body.removeChild(document.querySelector('.test'));
}

deleteElement();
