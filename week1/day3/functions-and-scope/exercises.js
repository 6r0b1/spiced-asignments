// Exercise 2

function waitThenRun(call) {
    console.log("Hello!");
    setTimeout(call, 1500);
}

function stage2() {
    console.log("Schüss!");
}

waitThenRun(stage2);

// Exercise 1

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

let x = sum(3, 4, 8, 9);
console.log(x);

// Exercise 3

function orderOfMagnitude(start) {
    let j = start;
    if (j <= 0 || isNaN(j)) {
        return "ERROR!";
    }
    if (j >= 1000000) {
        return j;
    }
    if (j < 1000000) {
        return orderOfMagnitude(j * 10);
    }
}

let k = orderOfMagnitude(-2);
console.log(k);

// Exercise bonus see: js closure

function getTotaler() {
    let sum = 0;
    return function sumUp(v) {
        sum += v;
        console.log(sum);
    };
}

let thisWorks = getTotaler();

thisWorks(3);
thisWorks(3);
thisWorks(3);
