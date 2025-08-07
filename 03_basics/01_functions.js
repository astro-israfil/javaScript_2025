function sayMyName() {
    console.log("Israfil");
}

sayMyName();


function addTwoNumbers(num1, num2) {
    const result = num1 + num2;

    // console.log(result);
    return result;
}

const result = addTwoNumbers(10, 20);
console.log(result);


function welcomeToUser(username = "Anonymous") {
    console.log(`Hello, ${username}. Welcome to dashboard`);
}

welcomeToUser();
welcomeToUser("Israfil");


// function calculateCartPrice() {
//     console.log(Array.from(arguments));
// }


function calculateCartPrice(...nums) {
    return nums
}

calculateCartPrice(22, 100, 200);


// taking object as parameter

function greetUser({ username, email, status }) {
    console.log(`Hello, ${username}.\nYou just ${status} with ${email}`);
}

// giving a object argument.
greetUser({
    username: "Israfil",
    email: "israfil@gmail.com",
    status: "logged in"
});