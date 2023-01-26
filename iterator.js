/* const arr = [1, 2, 3]; */

function createIterator(eterabale_thing) {
  let i = 0;
  return {
    next() {
      return {
        done: i >= eterabale_thing.length,
        value: eterabale_thing[i++],
      };
    },
  };
}

/* const ourIterator = arr[Symbol.iterator]();
console.log(ourIterator.next());
console.log(ourIterator.next());
console.log(ourIterator.next());
console.log(ourIterator.next()); */

/* const str = "START";
const iterateStr = str[Symbol.iterator](); */

/* console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next()); */
