const getRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };

  xhr.send();
};

const users = getRequest(
  "https://jsonplaceholder.typicode.com/users",
  function (error, res) {
    if (error) {
      console.log(error);
    } else {
      res.forEach((element) => {
        console.log(element.name);
      });
    }
  }
);

const post = getRequest(
  "https://jsonplaceholder.typicode.com/posts",
  function (error, res) {
    if (error) {
      console.log(error);
    }

    res.forEach((e) => console.log(e.title));
  }
);
