// exercise 1 - find prime number from 0 to 250

let endNumber = 250;

for (let counter = 0; counter <= endNumber; counter++) {
  let isPrime = true;

  for (let dividerCounter = 2; dividerCounter <= counter; dividerCounter++) {
    if (counter % dividerCounter === 0 && dividerCounter !== counter) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(counter)
  }
}
