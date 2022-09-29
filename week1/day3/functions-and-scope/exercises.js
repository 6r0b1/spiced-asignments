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
    if (j <= 0) {
        return "ERROR!";
    } else if (isNaN(j)) {
        return "ERROR!";
    } else if (j < 1000000) {
        do {
            j *= 10;
        } while (j < 1000000);
        return j;
    } else if (j >= 1000000) {
        return j;
    }
}

let k = orderOfMagnitude(290);
console.log(k);

// ad bonus

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
