function Square(width, height) {
  this.width = width;
  this.height = height;

  this.getWidth = function () {
    console.log("My width is" + this.width);
    // this.draw();
  };
}

Square.prototype = {
  draw: function () {
    console.log("this is draw function");
    this.getWidth();
  },

  toString: function () {
    console.log("My width is" + this.width);
  },
};

const sq1 = new Square(25, 20);
const sq2 = new Square(400, 300);

console.log(sq1);
console.log(sq2);
