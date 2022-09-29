function logType(input) {
    if (typeof input === "string") {
        console.log("string!");
    } else if (input === null) {
        console.log("null!");
    } else if (Array.isArray(input) === true) {
        console.log("array!");
    } else if (typeof input === "object") {
        console.log("object!");
    } else if (isNaN(input)) {
        console.log("not a number!");
    } else if (typeof input === "number") {
        console.log("number!");
    } else if (typeof input === "boolean") {
        console.log("boolean!");
    } else if (typeof input === "bigint") {
        console.log("bigint!");
    } else if (input === "undefined") {
        console.log("undefined!");
    } else if (isNaN(input)) {
        console.log("not a number!");
    } else {
        console.log("I have no idea!");
    }
}

logType(null);

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var x in a) {
    b[a[x]] = x;
}

console.log(a);
console.log(b);

for (var index = 10; index > 0; index--) {
    console.log(index);
}
