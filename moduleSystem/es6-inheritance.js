/* const Rectangale = require("./Rectangale");

const rec2 = new Rectangale(30, 25, "green");
console.log(rec2); */

function Shape(color) {
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

Rectangale.prototype.common = function () {
  console.log("Overridding from recthangale constractor pattern");
};

const rec = new Rectangale(30, 25, "Green");
