// 1, 2, 3, 4, 5, 6 ... n

let (fn) 0
    (fn) 1 0 
    ...
    n ... 1 0
    
// exercise 2

function combineArrays(arr1, arr2) {
    let newArray = [...arr1, ...arr2];
    console.log(newArray);
}

let eins = [1, 2, 3];
let zwei = [4, 5, 6];

combineArrays(eins, zwei);

// exercise 3

function logInfo(city) {
    let { name, country, population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

logInfo({ name: "Marseille", country: "France", population: 861635 });

// exercise 4

let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

console.log(getRelocatedCity());
