// write some user input to local storage

let userInput = document.querySelector("#input");

userInput.addEventListener("keyup", function () {
    console.log(userInput.value);
    try {
        localStorage.setItem("userInput", userInput.value);
    } catch (e) {
        console.log("What a nuisance");
    }
});

try {
    userInput.value = localStorage.getItem("userInput");
} catch (e) {
    console.log("None yet");
}

// check if input is valid json

let checkNow = document.querySelector("#checkJSON");
let JSONInput = document.querySelector("#JSONInput");

checkNow.addEventListener("click", function () {
    try {
        let test = JSON.parse(JSONInput.value);
        JSONInput.value = "Valid stuff!";
    } catch (error) {
        JSONInput.value = "Try again, son!";
    }
});

// translate to german

try {
    localStorage.setItem("1", "eins");
    localStorage.setItem("2", "zwei");
    localStorage.setItem("3", "drei");
    localStorage.setItem("4", "vier");
    localStorage.setItem("5", "fuenf");
    localStorage.setItem("6", "sechs");
    localStorage.setItem("7", "sieben");
    localStorage.setItem("8", "acht");
    localStorage.setItem("9", "neun");
    localStorage.setItem("10", "zehn");
} catch (error) {
    console.log("Gut, dann eben nicht!");
}

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        alert(
            "Well done, reading the instructions. In german this is: " +
                localStorage.getItem(num)
        );
        return num;
    }
    askForNumber();
}

askForNumber();
