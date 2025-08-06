const score = 400;

console.log(typeof score, score);

const balance = new Number(5000);
console.log(balance.toString());

const price = 1123.8764;
console.log(price.toFixed(2));

console.log(price.toPrecision(3).replace("e", " X 10^"));
console.log(price.toPrecision(2));

const creadit = 1000000
console.log(creadit.toLocaleString("bn-BD"));
console.log(creadit.toLocaleString("en-BD"));
console.log(creadit.toLocaleString("en-IN"));


// _____________________ Math_________________________

console.log(Math.abs(-4));
console.log(Math.PI);

console.log(Math.sqrt(25));
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

console.log(Math.floor(Math.random() * 10) + 1);


// Generate random value between a range of numbers;
const MIN = 10;
const MAX = 20;

console.log(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);