function fib() {
    // Some variables here
    let x = 0;
    let y = 1;
    function nacci() {
      // do something to those variables here
        let temp = x + y;
        x = y;
        y = temp;
        return x;
    }
    return nacci;
  }
  var fibCounter = fib();
//   console.log(fibCounter);
  console.log(fibCounter()) //   "1"
  console.log(fibCounter()) //   "1"
  console.log(fibCounter()) //   "2"
  console.log(fibCounter()) //   "3"
  console.log(fibCounter()) //   "5"
  console.log(fibCounter()) //   "8"
  console.log(fibCounter()) //   "13"
  console.log(fibCounter()) //   "21"
  