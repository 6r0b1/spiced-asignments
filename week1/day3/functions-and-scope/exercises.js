// ad 1

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

let x = sum(3, 4, 8, 9);
console.log(x);

// ad 2

function waitThenRun(call) {
    console.log("Hello!");
    setTimeout(call, 1500);
}

function stage2() {
    console.log("Schüss!");
}

waitThenRun(stage2);

// ad 3

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

let k = orderOfMagnitude(-3);
console.log(k);

// ad bonus see: js closure

let valSoFar = 0;

function everSum(l) {
    valSoFar += l;
    return function () {
        return valSoFar;
    };
}

everSum(4);
everSum(4);
everSum(4);
everSum(4);

console.log(valSoFar);

// function sumUp(p) {

// }

// let totaler = sumUp();
