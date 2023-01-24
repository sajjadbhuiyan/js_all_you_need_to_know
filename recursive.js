function recursive(n) {
  if (n === 0) {
    return;
  }
  //   console.log("sajjad");
  recursive(n - 1);
}

recursive(10);

let summ = 0;

function sum(array) {
  let len = array.length();
  if (len === 0) {
    return;
  }

  summ += array[len - 1];
  sum(len - 1);
}

const arr = [1, 2, 3, 4, 5, 6];

sum(arr);

console.log(summ);
