function myPrint(inp) {
  console.log(
    inp
    /* 
        function muliplayByFive(n
            
                function add(a, b) {
                return a + b;
                }
            
            ) {
        return n * 5;
        }
    */
  );
}

// function muliplayByFive(n) {
//   return n * 5;
// }

// function add(a, b) {
//   return a + b;
// }

// myPrint(muliplayByFive(add(5, 6)));

function test() {
  console.log(
    (muliplayByFive = (
      add = () => {
        return 5 + 6;
      }
    ) => {
      return add() * 5;
    })()
  );
}

// test(muliplayByFive());

test();
