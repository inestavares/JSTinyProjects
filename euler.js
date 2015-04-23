var isEven = function(number) {
  if(number % 2 === 0) {
    return true;
  }
}




var divide = function(number) {
  for (var i = 3; i <= 20; i++) {
    if(number % i !== 0) {
      return false;
    } else {
    }
  }
}




var smallestMultiple = function(n) {
  while(divide(n) === false) {
    console.log(n + "is not divisible!")
    n = n + 2520;
  }



}

smallestMultiple(2520);