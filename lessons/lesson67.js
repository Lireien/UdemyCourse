//WeakMap & WeakSet

let user = {
  name: 'Ivan'
};

let map = new WeakMap();
map.set(user, 'data');

user = null;

console.log(map);
//Обычный Map хранил бы ссылку на удаленный объект

let cache = new WeakMap();

//WeakMap имеет методы has, set, get, delete

function cacheUsers(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }

  return cache.get(user);
}

let lena = {name: 'ELena'};
let alex = {name: 'Alex'};

cacheUsers(lena);
cacheUsers(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


//WeakSet имеет методы add, has, delete

let messages = [
  {text:'Hello', from: 'John'},
  {text:'Hi', from: 'Mary'},
  {text:'Bye', from: 'Max'},
];

let readenMessages = new WeakSet();

readenMessages.add(messages[0]);
// readenMessages.add(messages[1]);


console.log(readenMessages.has(messages[0]));

messages.shift();


console.log(readenMessages.has(messages[0]));
