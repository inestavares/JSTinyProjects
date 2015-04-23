// with for loop and array data structure, returns array with sequence. 

var fibonacci = function(n) {
  var sequence = [];
  sequence[0] = 0;
  if(n === 1) {
    return sequence;
  } else {
    sequence[1] = 1;
    for(var i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  }
  return sequence;
}

fibonacci(10);
// fibonacci(1);


// with while loop, faster 

var fibonacci2 = function(n) {
  var prev = 0,
    cur = 1,
    c = 0,
    count = 0;
  while(count < n) {
    if(count === 0 || count === 1) {
      console.log(count);
      count++;
    } else {
      c = cur + prev;
      prev = cur;
      cur = c; 
      count++;
      console.log(c);
    }
  }
}



fibonacci2(10);


// recursive version, as a bonus - 
// recursion is notoriously slow in JS, but this is a more math-y solution
// sequence[n] = sequence[n-1] + sequence[n-2];

var fib = function(n) {
  if(n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return (fib( n - 1 ) + fib( n - 2 ));
  }
}

fib(10);








