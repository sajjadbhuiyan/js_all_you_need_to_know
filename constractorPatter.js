function CreateRrc(width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am rectungular");
    this.printPropertise();
  };

  this.printPropertise = function () {
    console.log("My width is" + " " + this.width);
    console.log("My width is" + " " + this.height);
  };
}

var newCreateRrc = new CreateRrc(25, 20);
newCreateRrc.draw();
