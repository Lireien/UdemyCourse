'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
}

User.prototype.exit = function(name) {
  console.log(`User ${this.name} has left the room`);
};

const mary = new User('Mary', 42263);
const alex = new User('Alex', 22357);

mary.hello();
alex.hello();
mary.exit();

console.log(mary, alex);