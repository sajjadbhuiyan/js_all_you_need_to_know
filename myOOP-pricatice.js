function extend(parant, child) {
  child.prototype = Object.create(parant.prototype);
  child.prototype.constructor = child;
}

function Course(courseName) {
  this.courseName = courseName;
}

Course.prototype.cost = function () {
  console.log("Const is heigh");
};

function University(name, ranking, courseName) {
  this.name = name;
  this.ranking = ranking;
  Course.call(this, courseName);

  this.getRanking = function () {
    console.log(
      `University short form is ${this.name} and Ranking is ${this.ranking}`
    );
  };
}

// University.prototype = Object.create(Course.prototype);
// University.prototype.constructor = University;

extend(Course, University);

University.prototype.region = {
  country: "Bangladesh",
  continant: "Asia",
};

var uni = new University("BUP", 5674, "hons");
// const crs = new Course();

function College(quality, courseName) {
  this.quality = quality;
  Course.call(this, courseName);
}

College.prototype.name = "NDC";

extend(Course, College);

var college = new College("unique", "HSC");
