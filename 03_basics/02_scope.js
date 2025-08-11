const a = 10;
let b = 20;
var c = 30;

if (true) {
    const a = 100;
    let b = 200;
    var c = 300;
}

console.log(a); // 10
console.log(b); // 20
console.log(c); // 300

/*
    Note::

    the variable c is changed to 300
    the variable was declared by using var keyword
    that is why var doesn't have block scope so prefer to avoid use var
*/



function one() {
    const username = "Israfil";

    function two() {
        const website = "im.israfil.com";
        console.log(username);
    }

    // console.log(website); // doesn't available in function "one"s scope

    two();
}

// one();



// __________________Hoisting___________________

addOne(10);

function addOne(num) {
    return num + 1;
}


// addTwo(10);

// const addTwo = function (num) {
//     return num + 2;
// }
