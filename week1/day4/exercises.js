// exercise 1

let testCase;

function each(objectOrArray, someCallback) {
    testCase = objectOrArray;
    console.log(testCase);
    if (Array.isArray(testCase)) {
        testCase.forEach((element) => someCallback(testCase.indexOf(element)));
    }
}

each([3, 4], function (sayThis) {
    console.log(testCase[sayThis]);
});

// exercise 2

function reverse(anyAarray) {
    let workingArray = anyAarray;
    if (Array.isArray(workingArray)) {
        let outputArray = [];
        workingArray.forEach((element) => outputArray.unshift(element));
        return outputArray;
    } else {
        console.log("Not an Array!");
    }
}

let testexercise1 = reverse([1, 2, 3]);

console.log(testexercise1);

// exercise 3

function getLessThanZero(anyOtherArray) {
    return anyOtherArray.filter((item) => item < 0);
}

let testexercise2 = getLessThanZero([3, -2, -3]);

console.log(testexercise2);
