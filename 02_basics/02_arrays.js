const arr1 = [0, 1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const arr3 = arr1.concat(arr2);

console.log(arr3);


const nestedArray = [0, 1, 2, [3, 4], 5, 6, [7, 8, [9, 10]]];

const flatedArray = nestedArray.flat(Infinity);
console.log(flatedArray);

console.log(Array.isArray(arr1));
console.log(Array.isArray("Israfil"));

console.log(Array.from("Israfil"));
console.log(Array.from({ name: "Israfil" })); // []  @important

const score1 = 100;
const score2 = 130;
const score3 = 140;

const scores = Array.of(score1, score2, score3);
console.log(scores);