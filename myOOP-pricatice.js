function Course() {}

Course.prototype.cost = function () {
  console.log("Const is heigh");
};

function University(name, ranking) {
  this.name = name;
  this.ranking = ranking;

  this.getRanking = function () {
    console.log(
      `University short form is ${this.name} and Ranking is ${this.ranking}`
    );
  };
}

University.prototype = Object.create(Course.prototype);
University.prototype.constructor = University;

University.prototype.region = {
  country: "Bangladesh",
  continant: "Asia",
};

var uni = new University("BUP", 5674);
const crs = new Course();

// function College() {}

// College.prototype.name = "NDC";

// College.prototype = Object.create(Course.prototype);
