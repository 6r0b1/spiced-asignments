// exercise 2

function combineArrays(arr1, arr2) {
    let newArray = [...arr1, ...arr2];
    console.log(newArray);
}

let eins = [1, 2, 3];
let zwei = [4, 5, 6];

combineArrays(eins, zwei);
