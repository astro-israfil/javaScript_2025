// Singleton
// Object.create 

// Object literals
// {}

const myKey = Symbol("123");

const user = {
    name: "Israfil",
    "full name": "Israfil Mallick",
    age: 23,
    [myKey]: "secret key",
    email: "israfil@gmail.com",
    loggedIn: true,
    loggedInDevices: ["Windows 11", "Macbook Pro", "Android"],
}

// console.log(user.email);
// console.log(user["email"]);

// console.log(user["full name"]);


// Object.freeze(user);


user.email = "israfil@ist.com";
console.log(user);

console.log(user[myKey]);

user.greeting = function () {
    console.log(`Hello, ${this.name}`);
}

console.log(user);


user.greeting();