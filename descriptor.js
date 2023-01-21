const person = {
  name: "sajjad",
};

console.log(person);

// for (var i in person) {
//   console.log(i);
// }

// console.log(Object.keys(person));

// var baseObject = Object.getPrototypeOf(person);

// var descriptor = Object.getOwnPropertyDescriptor(baseObject, "toString");
// console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: "Sajjad ka Jannati",
});
