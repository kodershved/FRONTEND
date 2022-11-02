//algo
//1.itefate 2..num
//2.check if number is prime

///2.0. create counter
///2.1. itetate 1...number
///2.2 if number% index ===0->count++;
///2.3 if count>=2->is not prime
//3.If prime ->console

const ifPrime = (number) => {
  let tmp = 2;
  while (number % tmp !== 0) {
    tmp++;
  }
  return tmp === number;
};

function getPrimes(num) {
  for (let number = 2; number <= num; number++) {
    if (ifPrime(number)) {
      console.log(number);
    }
  }
}

console.log(ifPrime(7));
