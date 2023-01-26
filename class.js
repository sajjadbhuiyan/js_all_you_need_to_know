/* class Rectangale {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  draw() {}

  static test() {}
}

Rectangale.test() */

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    console.log(`Name is ${this.name} and Email is ${this.email}`);
  }

  static create(str) {
    const person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

const str =
  '{"name": "Sajjad Bhuiya Taki", "email": "sajjadbhuiyan2018@gmail.com"}';

const person = Person.create(str);

console.log(person);
