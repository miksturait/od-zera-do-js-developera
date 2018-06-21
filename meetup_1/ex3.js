// exercise 3 - print triangle

let triangle = '';
let bottomSize = 63;
let indent = Math.floor(bottomSize / 2);

for (let hashSize = 1; hashSize <= bottomSize; hashSize = hashSize + 2) {
  for(let counter = 0; counter < indent; counter++) {
    triangle = `${triangle} `;
  }

  for(let counter = 0; counter < hashSize; counter++) {
    triangle = `${triangle}#`;
  }

  triangle = `${triangle}\n`;

  indent--;
}

console.log(triangle);
