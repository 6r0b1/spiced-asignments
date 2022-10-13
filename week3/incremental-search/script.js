// 1. necessary variables

// find your text field and sugestions area:
let searchField = document.querySelector(".country_input");
let suggestions = document.querySelector(".suggestions");
// declare for later:
let resultsString = "";
let results;

// 2. necessary functions and listeners

// Filter country list for user input
function filterItems(countries, searchTyped) {
    return countries.filter(
        (el) => el.toLowerCase().startsWith(searchTyped.toLowerCase()) // if possible rather go with includes
    );
}

// Event listener for input blur

searchField.addEventListener("blur", function (e) {
    suggestions.classList.add("sugestions_hidden");
});

searchField.addEventListener("focus", function (e) {
    suggestions.classList.remove("sugestions_hidden");
});

// 3. add event listener to input field

searchField.addEventListener("input", function () {
    // reset imputs and outputs from 2nd character onward
    if (resultsString != "") {
        suggestions.innerHTML = "";
        resultsString = "";
        results = "";
    }

    // Output into new string: '<div>'+filterCountries[0]+'</div> ...
    // first run the filter with user input as argument
    let resultsArray = filterItems(countries, searchField.value);

    // error message for no results
    if (resultsArray.length === 0) {
        searchField.classList.add("error");
        searchField.value = "Not a known country";
    }

    // write a div for every item in the results array
    for (let j = 0; j < resultsArray.length; j++) {
        if (j < 4) {
            resultsString +=
                '<div class="results">' + resultsArray[j] + "</div>";
        }
    }

    // Append new sting as inner html to suggestions div
    suggestions.innerHTML = resultsString;

    // auto complete on mouse down, not click.
    // Click happens to late and the target may be already gone from blur
    // also add event listeners for mouse over
    results = document.querySelectorAll(".results");
    for (let i = 0; i < results.length; i++) {
        results[i].addEventListener("mousedown", function (e) {
            searchField.value = results[i].innerText;
        });
        results[i].addEventListener("mouseenter", function (e) {
            console.log("works");
            results[i].classList.add("mouseover");
        });
        results[i].addEventListener("mouseleave", function (e) {
            results[i].classList.remove("mouseover");
        });
    }
});

// Country list array
let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
