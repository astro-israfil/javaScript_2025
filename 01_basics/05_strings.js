// String and String Methods

const fullName = "Israfil Mallick";
const repoCount = 50;

// console.log(fullName + " has " + repoCount + " repositories on github.");
// console.log(`${fullName} has ${repoCount} repositories on github.`);

const myString = new String("Hello, world");

console.log(myString[0]);
console.log(myString.length);

// console.log(myString.__proto__.charAt())
console.log(myString.charAt(4));

const myNewString = myString.concat(". Fun with JS");
console.log(myNewString);

console.log(myString.startsWith("Hello"));
console.log(myString.endsWith("world"));

console.log(myNewString.includes("Fun"));
console.log(myNewString.indexOf("Fun"));
console.log(myNewString.lastIndexOf("Fun"));

console.log(myNewString.toUpperCase());
console.log(myNewString.toLowerCase());

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
console.log(paragraph[paragraph.search(regex)]);

console.log(myNewString.replace("JS", "JavaScript"));

const url = "https://aiavater/israfil%20mallick/space/new%20project";
console.log(url.replaceAll("%20", "-"));

const [firstName, lastName] = fullName.split(" ");
console.log(firstName, lastName);

const str = "Mozilla";
console.log(str.substring(1, 5));
console.log(str.substring(2));


const str1 = "The quick brown fox jumps over the lazy dog.";
console.log(str1.slice(4, 19));

console.log(str1.slice(-4));
console.log(str1.slice(-9, -5));
