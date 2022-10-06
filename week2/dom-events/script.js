(function () {
    //  exercise 1

    let movingObject = document.getElementById("moving");

    document.body.addEventListener("mousemove", function (e) {
        let posX = e.clientX - 50;
        let posY = e.clientY - 50;
        movingObject.style.left = posX + "px";
        movingObject.style.top = posY + "px";
    });

    //  exercise 2

    let typeCount = 1;
    let speech =
        "I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation.";
    console.log(speech.charAt(typeCount));

    let output = document.getElementById("dream_text");

    document
        .getElementById("dream_text")
        .addEventListener("input", function (e) {
            output.value = "";
            for (let i = 0; i < typeCount; i++) {
                output.value += speech.charAt(i);
            }
            typeCount++;
        });

    //  exercise 3

    //  random color generator

    function rcg() {
        let charSpace = "1234567890ABCDEF";
        let randomColor = "#";

        for (let i = 0; i < 6; i++) {
            randomColor += charSpace.charAt(Math.floor(Math.random() * 16));
        }
        return randomColor;
    }

    //  actually do the thing

    function changeNow(what) {
        what.style.backgroundColor = rcg();
    }

    //  end random color generator

    let rainbowObjekt = document.getElementById("changing");

    rainbowObjekt.addEventListener("mousedown", function () {
        changeNow(rainbowObjekt);
    });

    rainbowObjekt.addEventListener("mouseup", function () {
        changeNow(rainbowObjekt);
    });

    //  exercise 4

    let outerObject = document.getElementById("outer");
    let innerObject = document.getElementById("inner");

    outerObject.addEventListener("click", function () {
        changeNow(outerObject);
    });
    innerObject.addEventListener("click", function (e) {
        e.stopPropagation();
        changeNow(innerObject);
    });
})();
