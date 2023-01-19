function myfitler(array, fun) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fun(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

const arr = [1, 2, 3, 4];

const biggerThanTwo = myfitler(arr, function (value) {
  return value > 2;
});

console.log(biggerThanTwo);
