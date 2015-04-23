var factorialPrimes = [];

var isPrime = function(n) {
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}
   var isPrime = true;
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }
   return isPrime;

}


var factorialPrime = function(number) {
  var i = 2;
  while(i <= number) {
    if(number % i === 0) {
      number = number / i;
      if(isPrime(i)) {
        factorialPrimes.push(i);
      }
    }
    i++;
  }
}


factorialPrime(600851475143);

console.log(factorialPrimes);
