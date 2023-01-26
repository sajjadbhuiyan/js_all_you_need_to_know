const Shape = require("./Shape");

class Rectangale extends Shape {
  constructor(height, width, color) {
    super(color);
    this.height = height;
    this.width = width;
  }

  common() {
    console.log("this common method from Rrctangale class");
  }

  draw() {
    console.log(
      `the rectangle hight is ${this.height} and width is ${this.width}`
    );
  }
}

module.exports = Rectangale;
