function createRrc(width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am rectungular");
      this.printPropertise();
    },

    printPropertise: function () {
      console.log("My width is" + " " + this.width);
      console.log("My width is" + " " + this.height);
    },
  };
}

var rec1 = createRrc(20, 25);
rec1.draw();
