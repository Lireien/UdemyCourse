'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  // request.open(method, url(from HTML), async(default value = true), login, password);
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  // request.send(body - not in GET method);
  request.send();

  // request.addEventListener('readystatechange', () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //       console.log(request.response);
  //       const data = JSON.parse(request.response);
  //       inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
  //   } else {
  //       inputUsd.value = 'Something get wrong :(';
  //   }
  // });
  request.addEventListener('load', () => {
    if (request.status === 200) {
        console.log(request.response);
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
        inputUsd.value = 'Something get wrong';
    }
  });

  //свойства:
  // status
  // statusText - текстовое описание от сервера
  // response, responseText
  // readyState - текущее состояние запроса

  //События объекта
  //load, start, progress, timeout, load, end
  //onReadyStateChange - готовность запроса в данный текущий момент
});