var functionAsObject = new Function(
  "para1",
  "para2",
  `
console.log(para1 + para2)
`
);

functionAsObject(10, 10);
