// exercise 2 - area of triange
// based on https://en.wikipedia.org/wiki/Heron%27s_formula

let a = 3;
let b = 4;
let c = 5;

let semiperimeter = (a + b + c) / 2;
let s = semiperimeter;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

console.log(area);
