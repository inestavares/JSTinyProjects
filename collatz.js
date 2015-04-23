var start = function(n) {
  var steps = 0;
  (function collatz(n) {
    if(n === 1) {
     return; // exit function 
    } else if(n % 2 === 0) {
      steps++;
      collatz(n/2);
    } else if(n % 2 !== 0) {
      steps++;
      collatz((n*3) + 1);
    }
  }(n));
  return steps; 
}

start(20);


