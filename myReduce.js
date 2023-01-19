const arr = [1, 2, 3];

// const sum = arr.reduce((current, accumulator) => {
//   return current + accumulator;
// });

// console.log(sum);

function myReduce(array, fun, acc) {
  for (let i = 0; i < array.length; i++) {
    acc = fun(acc, array[i]); // 0 + 1 = 1 => 1
  }
  return acc;
}

const sum = myReduce(
  arr,
  function (previous, current) {
    return previous + current;
  },
  0
);

console.log(sum);
