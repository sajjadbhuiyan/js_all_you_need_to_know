function* generator(something) {
  for (let i = 0; i < something.length; i++) {
    yield something[i];
  }
}

const arr = [10, 20, 36];

const it = generator(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
