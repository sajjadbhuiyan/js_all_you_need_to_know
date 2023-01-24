function curring(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = curring(5);
const result2 = result(10);
const result3 = result2(15);

console.log(result3);
