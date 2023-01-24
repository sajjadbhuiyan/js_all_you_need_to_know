function myFind(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      //   return arr[i];
      return i;
    }
  }
}

const number = [1, 4, 6, 24, 98];

const find = myFind(number, function (value) {
  return value === 6;
});

console.log(typeof find);
console.log(number);
