// exercise 3 - print triangle

let triangle = '';
let hashSize = 1;
let bottomSize = 35;
let indent = Math.floor(bottomSize / 2);


while (hashSize <= bottomSize) {
  for(let counter = 0; counter < indent; counter++) {
    triangle = `${triangle} `;
  }

  for(let counter = 0; counter < hashSize; counter++) {
    triangle = `${triangle}#`;
  }

  triangle = `${triangle}\n`;

  indent--;
  hashSize = hashSize + 2;
}

console.log(triangle);
