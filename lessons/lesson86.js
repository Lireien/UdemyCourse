'use strict';

console.log('Waiting...');

//Callback hell
// setTimeout(() => {
//   console.log('Preparing');

//   const product = {
//     name: 'TV',
//     price: 2000
//   };

//   setTimeout(() => {
//     product.status = 'ordered';
//     console.log(product);
//   }, 2000);
// }, 2000);

const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Preparing');

    const product = {
      name: 'TV',
      price: 2000
    };

    resolve(product);
  }, 2000);
});

// req.then((product) => {
//   const req2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'ordered';
//       resolve(product);
//     }, 2000);
//   });

//   req2.then(data => {
//     console.log(data);
//   });
// });

req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'ordered';
      resolve(product);
      // reject();
    }, 2000);
  });

}).then(data => {
  data.modify = true;
  return data;
}).then(data => {
  console.log(data);
}).catch(() => {
  console.error('Error');
}).finally(() => {
  console.log('Finally');
});

const test = time => {
  return new Promise(res => {
    setTimeout(() =>
      res(), time);
  });
};

test(1000).then(() => {
  console.log('Done in 1000ms');
});
test(2000).then(() => {
  console.log('Done in 2000ms');
});

Promise.all([test(1000), test(2000)]).then(() => {
console.log('all');
});

Promise.race([test(1000), test(2000)]).then(() => {
  console.log('faster');
  });