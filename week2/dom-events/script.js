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
    let speech = "Ihr VÖlker der Welt, schaut auf diese Stadt";
    console.log(speech.charAt(typeCount));

    let output = document.getElementById("blockade_text");

    document
        .getElementById("blockade_text")
        .addEventListener("input", function (e) {
            output.value = "";
            for (let i = 0; i < typeCount; i++) {
                output.value += speech.charAt(i);
            }
            typeCount++;
        });

    //  exercise 3
})();
