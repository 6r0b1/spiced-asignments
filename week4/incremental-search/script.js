// // 1. necessary variables

// // find your text field and sugestions area:

// // declare for later:
// let resultsString = "";
// let results;

// // 2. necessary functions and listeners

// // 3. add event listener to input field

// searchField.addEventListener("input", function () {
//     // reset imputs and outputs from 2nd character onward
//     if (resultsString != "") {
//         suggestions.innerHTML = "";
//         resultsString = "";
//         results = "";
//     }

//     // Output into new string: '<div>'+filterCountries[0]+'</div> ...
//     // first run the filter with user input as argument
//     let resultsArray = filterItems(countries, searchField.value);

//     // write a div for every item in the results array
//     for (let j = 0; j < resultsArray.length; j++) {
//         if (j < 4) {
//             resultsString +=
//                 '<div class="results">' + resultsArray[j] + "</div>";
//         }
//     }

//     // Append new sting as inner html to suggestions div
//     suggestions.innerHTML = resultsString;

//     // auto complete on mouse down, not click.
//     // Click happens to late and the target may be already gone from blur
//     // also add event listeners for mouse over
//     results = document.querySelectorAll(".results");
//     for (let i = 0; i < results.length; i++) {
//         results[i].addEventListener("mousedown", function (e) {
//             searchField.value = results[i].innerText;
//         });
//         results[i].addEventListener("mouseenter", function (e) {
//             console.log("works");
//             results[i].classList.add("mouseover");
//         });
//         results[i].addEventListener("mouseleave", function (e) {
//             results[i].classList.remove("mouseover");
//         });
//     }
// });

// some variables

let searchField = document.querySelector(".country_input");
let suggestions = document.querySelector(".suggestions");

// event listener for input field

searchField.addEventListener("input", function () {
    getResultsFromCountrys(searchField.value);
});

// query function

function getResultsFromCountrys(userQuery) {
    $.ajax({
        url: "https://spicedworld.herokuapp.com/",
        data: {
            q: userQuery,
        },
        success: function (data) {
            console.log(data);
            buildSuggestions(data, userQuery);
            noResults(data);
        },
    });
}

// use data function on success

function buildSuggestions(queryReturn, originalQuery) {
    let resultsString = "";

    for (let i = 0; i < queryReturn.length; i++) {
        resultsString += '<div class="results">' + queryReturn[i] + "</div>";
    }
    if (originalQuery === searchField.value) {
        suggestions.innerHTML = resultsString;
    }
}

// error message for no results

function noResults(queryReturn) {
    if (queryReturn.length === 0) {
        searchField.classList.add("error");
        searchField.value = "Not a known country";
    }
}

// Event listener for input blur

searchField.addEventListener("blur", function (e) {
    suggestions.classList.add("sugestions_hidden");
});

searchField.addEventListener("focus", function (e) {
    suggestions.classList.remove("sugestions_hidden");
});
