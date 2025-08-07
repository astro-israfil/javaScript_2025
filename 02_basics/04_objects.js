// const user = new Object();

// console.log(user);

// const user1 = {};

// console.log(user1);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);


const users = [
    {
        id: 1,
        name: "user1",
    },
    {
        id: 2,
        name: "user1",
    },
    {
        id: 3,
        name: "user1",
    },
    {
        id: 4,
        name: "user1",
    },
];

const tinderUser = {
    name: {
        userName: "israfil",
        fullName: {
            firstName: "Israfil",
            lastName: "Mallick",
        }
    },
    userId: "43454543",
    email: "israfil@microsoft.com",
    isLoggedIn: true,
};


console.log(tinderUser.name?.fullName?.firstName);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));