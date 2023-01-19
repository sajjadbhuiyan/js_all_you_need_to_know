function forEach2(array, fuc) {
  for (let i = 0; i < array.length; i++) {
    fuc(array[i]);
  }
}

const arr = [1, 2, 3];

let sum = 0;
forEach2(arr, function (value) {
  sum *= value;
});

console.log(sum);

// arr.forEach((value) => {
//   console.log(value);
// });
