function Course() {}

Course.prototype = {
  cost: function () {
    console.log("Const is heigh");
  },
};

function College() {}

College.prototype.name = "NDC";

College.prototype = Object.create(Course.prototype);
