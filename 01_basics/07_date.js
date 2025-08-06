const myDate = new Date();

// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// const myCreatedDate = new Date(2001, 9, 12);
// console.log(myCreatedDate.toDateString());

const myBirthday = new Date("2001-10-12");
console.log(myBirthday.toDateString());

const myAge = Math.floor((myDate.getTime() - myBirthday.getTime()) / (1000 * 60 * 60 * 24 * 365));

console.log(myAge);

console.log(myBirthday.toLocaleString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}));