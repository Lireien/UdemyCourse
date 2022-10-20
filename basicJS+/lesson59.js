'use strict';

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: '20/04/1991',
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  }
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const convertUser = Object.fromEntries(userMap);
console.log('convertUser is', convertUser);

const shops = [{
    rice: 500
  },
  {
    oil: 200
  },
  {
    bread: 50
  },
];

const budgets = [5000, 15000, 25000];

const map = new Map([
  [{
    paper: 400
  }, 8000]
]);

// map.set(shops[0], 5000)
//   .set(shops[1], 15000)
//   .set(shops[2], 25000);

shops.forEach((shop, i) => {
  map.set(shop, budgets[i]);
});
console.log(map);
console.log(map.get(shops[0]));
console.log(map.has(shops[0]));

//map.delete(key);
//map.clear();
//map.size;
//map.keys();

// for (let shop of map.keys()) {
//   console.log(shop);
// };

// const goods = [];
// for (let shop of map.keys()) {
//   goods.push(Object.keys(shop)[0]);
// };

// console.log(goods);

for (let price of map.values()) {
  console.log(price);
};

for (let [shop, price] of map.entries()) {
  console.log(shop, price);
};

map.forEach((value, key, map) => {
  console.log(value, key);
});

