//Mobile events

//touchstart - касание к элементу
//touchmove - скольжение пальца по элементу
//touchend - 
//touchenter - палец "зашел" в пределы элемента
//touchleave - -//- вышел
//touchcancel - точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('Start');
    console.log(e.touches);
  });

  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log(e.targetTouches[0].pageX);
  });

  box.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log('End');
  });
  
});

//свойства ивента при работе с сенсорными устройствами:
// touches - список всех пальцев, которые сейчас взаимодействуют с экраном
// targetToches - все пальцы, взаимодействующие с конкретным элементом
// changedTouches - список пальцев, участвующие в текущем событии