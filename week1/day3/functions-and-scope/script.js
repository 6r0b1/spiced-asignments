// var is hoisted, but not the value
var id = 42;

console.log(id);

// scope

// function declaration

function greet() {
    var greeting = "hello";
    console.log(greeting);
    return greeting;
}

// function expression (a variable would take the value of a function)
// this is hoisted (all declarations are moved to the top of the code)

var greet = function () {
    var greeting = "hello";
    console.log(greeting);
    return greeting;
};

console.log(greet());

// The arguments object (arguments is an array that contains all the parameters/arguments. To be used when the number of arguments is unclear beforehand)
function myConcat() {
    console.log(arguments[0]);
}

myConcat(3, 9, 7);

// set a delay with setTimeout, parameters for setTimeout are first the function to be executed, second the delay

setTimeout(function () {}, 2000);
