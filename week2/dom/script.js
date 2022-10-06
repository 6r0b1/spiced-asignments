(function () {
    // exercise 2

    let change = document.getElementsByClassName("text");
    console.log(change);

    // exercise 1

    for (let i = 0; i < change.length; i++) {
        change[i].style.fontStyle = "italic";
        change[i].style.fontWeight = "bold";
        change[i].style.textDecoration = "underline";
    }

    // exercise 3

    let fatText = document.createElement("h3");
    let fatTextContent = document.createTextNode("AWESOME!");

    fatText.appendChild(fatTextContent);
    document.body.appendChild(fatText); // stop here if style h3 exists

    let hindsightStyling = document.querySelector("h3");
    console.log(hindsightStyling);

    hindsightStyling.style.position = "fixed";
    hindsightStyling.style.zIndex = "2147483647";
    hindsightStyling.style.left = "20px";
    hindsightStyling.style.top = "100px";
    hindsightStyling.style.fontSize = "200px";
})();
