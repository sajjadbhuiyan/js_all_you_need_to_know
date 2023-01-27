// There are two responsibility of callback fucntion in javaScript.

const arr = [1, 2, 3, 4];

const notAsysn = (arr, func) => {
  const result = arr.map((element) => func(element));
  return result;
};

const notAsys = notAsysn(arr, (v) => v * v * v);

console.log(notAsys);
