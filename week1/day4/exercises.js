// exercise 1

let testCase;

function each(objectOrArray, someCallback) {
    testCase = objectOrArray;
    console.log(testCase);
    if (Array.isArray(testCase)) {
        testCase.forEach((element) =>
            someCallback(
                testCase[testCase.indexOf(element)],
                testCase.indexOf(element)
            )
        );
    } else {
        for (var x in testCase) {
            someCallback(x, [testCase[x]]);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
);

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
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
