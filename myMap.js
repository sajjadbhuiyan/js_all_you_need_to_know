function myMap(array, fun) {
  const rewArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = fun(array[i]);
    rewArray.push(value);
  }
  return rewArray;
}

const arr = [1, 2, 3];

let sum = 0;
const everyStepSum = myMap(arr, function (value) {
  console.log(value + 1);
});
