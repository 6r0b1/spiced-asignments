// exercise 1

function Rectangle(x, y) {
    this.height = x;
    this.width = y;
    this.getArea = function () {
        let area = this.height * this.width;
        return area;
    };
}

let rectCase = new Rectangle(3, 5);

console.log(rectCase.getArea());

function Square(z) {
    this.height = z;
    this.width = z;
    this.getArea = new Rectangle().getArea;
}

let sqCase = new Square(5);

console.log(sqCase.getArea());

// exercise 2

function invertCase(anyString) {
    let output = "";
    for (let index = 0; index < anyString.length; index++) {
        let check = anyString.charAt(index);

        if (check.toUpperCase() === check) {
            output += check.toLowerCase();
        } else {
            output += check.toUpperCase();
        }
    }
    return output;
}

invertedString = invertCase("Any Other Day");
console.log(invertedString);

// bonus

function delay(tMinus) {
    setTimeout(() => {
        console.log(tMinus);
    }, 1000);
}

function Countdown(time) {
    this.time = time;
    this.start = () => {
        for (let index = this.time; index >= 0; index--) {
            delay(index);
        }
    };
}

let testCountdown = new Countdown(5);
testCountdown.start();
