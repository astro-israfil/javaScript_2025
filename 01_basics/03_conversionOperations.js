let score = null;

let scoreInNumber = Number(score);

// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

// string -> number
// "" | " " | "  " -> 0
// "33" -> 33
// "33abc" -> NaN
// true -> 1, false -> 0
// null -> 0
// undefined -> 0


let userLoggedIn = undefined;

let userLoggedInInBool = Boolean(userLoggedIn);

// console.log(typeof userLoggedInInBool);
// console.log(userLoggedInInBool);


// 0 | "" | null | undefined -> false
// 1 | " " | "name" -> true


let userBirthYear = 2001;
let userBirthYearInStr = String(userBirthYear);

// console.log(typeof userBirthYearInStr);
// console.log(userBirthYearInStr);



//_______________________ Operations ___________________________

const greet = "Hello ";
const userName = "Israfil";

const greetUser = greet + userName;

// console.log(greetUser);

// console.log(1 + "2");
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// console.log(+true);
// console.log(+"");

// let num1, num2, num3 = 10;
// console.log(num1, num2, num3); // undefined undefined 10

// num1 = num2 = num3 = 20;
// console.log(num1, num2, num3) // 20 20 20



// prefix and postfix
let a = 10;
let b = 20;

let x = a++; // postfix
console.log(x, a);

let y = ++b;
console.log(y, b); // prefix