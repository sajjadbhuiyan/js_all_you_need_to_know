class Shape {
  constructor(color) {
    this.color = color;
  }

  common() {
    console.log("this is common method");
  }
}

class Rectangale extends Shape {
  constructor(height, width, color) {
    super(color);
    this.height = height;
    this.width = width;
  }

  draw() {
    console.log(
      `the rectangle hight is ${this.height} and width is ${this.width}`
    );
  }
}

const rec = new Rectangale(30, 25, "green");
console.log(rec);

/* function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log(`The color is ${this.color}`);
};

function Rectangale(height, width, color) {
  this.height = height;
  this.width = width;

  Shape.call(this, color);

  this.draw = function () {
    console.log(
      `Rectangale height is ${this.height} and width is ${this.width} and color shows that ${color}`
    );
  };
}

Rectangale.prototype = Object.create(Shape.prototype);
Rectangale.prototype.constructor = Rectangale;

const rec = new Rectangale(30, 25, "Green"); */
