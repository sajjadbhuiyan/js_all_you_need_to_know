function extend(parant, child) {
  child.prototype = Object.create(parant.prototype);
  child.prototype.constructor = child;
}

function Routine(startTime, endTime) {
  this.startTime = startTime;
  this.endTime = endTime;
}

Routine.prototype.routine = function () {
  console.log(
    `Class time start from ${this.startTime} and end will be ${this.endTime}`
  );
};

function Semester(semesterName, duration, startTime, endTime) {
  this.semesterName = semesterName;
  this.duration = duration;
  Routine.call(this, startTime, endTime);

  this.semesterDescribe = function () {
    console.log(
      `This is ${this.semesterName} semester, duration is ${this.duration} months
      Class start from ${startTime} and end ${endTime}`
    );
  };
}

extend(Routine, Semester);

var semester = new Semester("7th", 6, "08:30", "02:30");

function StudyYear(year) {
  this.year = year;
}

extend(Routine, StudyYear);

StudyYear.prototype.routine = function () {
  console.log(`Study year is ${this.year}`);
};

const studyYear = new StudyYear(2020);
