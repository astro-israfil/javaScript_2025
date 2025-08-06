const myArray = [0, 1, 2, 3, 4, 5];

// console.log(myArray.length);
// console.log(myArray[0]);

myArray.push(6);
myArray.push(7);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(100);
console.log(myArray);

myArray.shift();
// myArray.shift();
console.log(myArray);

console.log(myArray.includes(4));
console.log(myArray.includes(10));

console.log(myArray.indexOf(3));
console.log(myArray.indexOf(30));

const myArrayString = myArray.join("-");
console.log(myArrayString);

const partsOfMyArray = myArray.slice(1, 3);

console.log("myArray after slice: ", myArray);
console.log("Sliced part: ", partsOfMyArray);

const portionOfMyArray = myArray.splice(1, 3);
console.log("myArray after splice: ", myArray);
console.log("Spliced part: ", portionOfMyArray);
