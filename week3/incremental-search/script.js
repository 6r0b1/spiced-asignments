// Country list array
let countries = ["Cat", "Dog", "Fish", "Hamster", "Tucan", "Tortoise"];

// Register inputs and return matching results

// 1. necessary variables
let searchField = document.querySelector(".country_input");
console.log(searchField);
let searchTyped;
let resultsString = "";
let suggestions = document.querySelector(".suggestions");
let results;

// 2. add event listener to input field
searchField.addEventListener("input", function () {
    // reset results after each character, not the tirst one
    if (resultsString != "") {
        suggestions.innerHTML = "";
        resultsString = "";
        results = "";
    }

    searchTyped = searchField.value;

    // Output into new string: '<div>'+filterCountries[0]+'</div> ...
    let resultsArray = filterItems(countries, searchTyped);

    for (const result of resultsArray) {
        resultsString += '<div class"results">' + result + "</div>";
    }

    // Append new sting as inner html to results div
    suggestions.innerHTML = resultsString;

    results = document.querySelectorAll(".results");
    console.log(results);

    for (let i = 0; i < results.length; i++) {
        results.addEventListener("click", function (e) {
            e.stopPropagation();
            console.log("works");
            searchField.output = results.innerText;
        });
    }
});

// Filter country list for user input
function filterItems(countries, searchTyped) {
    return countries.filter((el) =>
        el.toLowerCase().startsWith(searchTyped.toLowerCase())
    );
}

// Event listener for input blur

searchField.addEventListener("blur", function (e) {
    suggestions.classList.add("sugestions_hidden");
});

searchField.addEventListener("focus", function () {
    suggestions.classList.remove("sugestions_hidden");
});
