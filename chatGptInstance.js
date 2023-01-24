function Person(name, age) {
  // instance member
  this.name = name;
  this.age = age;

  // instance method
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

// prototype member
Person.prototype = {
  myName: this.name,
  getGender: function () {
    console.log("Male");
    this.greet();
  },
};

// prototype method
// Person.prototype.getGender = function () {
//   return this.gender;
// };

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.name); // "Alice"
console.log(person1.age); // 25
console.log(person1.greet()); // "Hello, my name is Alice"
// console.log(person1.gender); // "unknown" (prototype member)
console.log(person1.getGender()); // "unknown" (prototype method)

console.log(person2.name); // "Bob"
console.log(person2.age); // 30
console.log(person2.greet()); // "Hello, my name is Bob"
// console.log(person2.gender); // "unknown" (prototype member)
console.log(person2.getGender()); // "unknown" (prototype method)
