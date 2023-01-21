function add(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

// add.call({ a: 20, b: 30 });
// add.apply({ a: 20, b: 30 });
// var myBidn = add.bind({ a: 20, b: 30 });
// myBidn(40, 50);

function CreateRrc(width, height) {
  var position = {
    x: 45,
    y: -45,
  };

  this.width = width;
  this.height = height;

  var printPropertise = function () {
    console.log("My width is" + " " + this.width);
    console.log("My height is" + " " + this.height);
  }.bind(this);

  this.draw = function () {
    console.log("I am rectungular");
    printPropertise();
    console.log(position.x, position.y);
  };
}

var newCreatRrc = new CreateRrc(25, 20);
newCreatRrc.draw();
