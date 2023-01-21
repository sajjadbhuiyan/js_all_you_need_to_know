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

var newCreateRrc = new CreateRrc(25, 20); //when we use new keyword that time an empty object generate in certain function and that function all code associate with that empty object.
newCreateRrc.draw();
