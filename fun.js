let x;
let doubleX;

x = 233;

function timesTwo(number) {
    let workThis = number * 2;
    return workThis;
}

doubleX = timesTwo(x);
console.log(doubleX);

let numbers;

numbers = [x, doubleX];

numbers.forEach((element) => {
    console.log(element);
});

numbers = {};

numbers.y = doubleX;

console.log(numbers);
