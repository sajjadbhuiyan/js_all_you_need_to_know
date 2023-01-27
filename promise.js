const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "One");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Two");
});

promise1
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });

promise2
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
