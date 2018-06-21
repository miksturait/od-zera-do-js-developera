// exercise 1 - find prime number from 0 to 250

let endNumber = 250;

for (let currentNumber = 0; currentNumber <= endNumber; currentNumber++) {
  let isPrime = true;

  for (let dividerCounter = 2; dividerCounter <= currentNumber; dividerCounter++) {
    if (currentNumber % dividerCounter === 0 && dividerCounter !== currentNumber) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(currentNumber)
  }
}
