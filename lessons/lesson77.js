'use strict';

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}


class ColoredRectangleWithText extends Rectangle {
  constructor(width, height, text, bgColor) {
    super(height, width); //ВСЕГДА на 1ом месте в конструкторе
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');
console.log(div.showMyProps());
console.log(div.calcArea());

// const square = new Rectangle(10,10);
// const long = new Rectangle(50,10);
// console.log(square.calcArea());
// console.log(long.calcArea());

