(function () {
    let imageDivs = document.querySelectorAll(".carousel_inner"); // Need a list of all cat images
    let stageLeft; // this to allow for a different listener to have a different transition on the dots
    let dotIndicators = document.querySelectorAll(".indicator_dot");

    let kittyCount = 0; // Need an indicator when finished, so some kind of index

    function moveCarousel() {
        // Starting with an image already on screen,
        // need to address first image and move it along
        imageDivs[kittyCount].classList.remove("carousel_onscreen");
        imageDivs[kittyCount].classList.add("carousel_stage_left");
        dotIndicators[kittyCount].classList.remove("active_dot");

        // Increase count to address next image
        kittyCount++;

        stageLeft = document.querySelector(".carousel_stage_left");
        // reset count when end of images list is reached
        // must be done before addressing next in line
        // otherwise uncaught at index 4
        if (kittyCount == imageDivs.length) {
            kittyCount = 0;
            // no need to manipulate the list of images
            // order off screen does not matter like in ticker
            // simpler to address array.index directly

            // setTimeout(moveCarousel, 3000);
            // actually no need to call here
        }

        // finally addressing next in line and calling back w/ delay
        imageDivs[kittyCount].classList.add("carousel_onscreen");

        // Would like to have the dot show up a little before transitionend
        // ... put it outside the listener then
        dotIndicators[kittyCount].classList.add("active_dot");
        setTimeout(moveCarousel, 3000);

        stageLeft.addEventListener("transitionend", function () {
            // listener is only on images, not on dots
            stageLeft.classList.remove("carousel_stage_left");
        });
        // wierd stuff happens when changing tab
        // ask about it
    }

    setTimeout(moveCarousel, 1000);

    // Add on click to dotIndicators, use for loop

    for (let i = 0; i < dotIndicators.length; i++) {
        dotIndicators[i].addEventListener("click", function () {
            imageDivs[kittyCount].classList.remove("carousel_onscreen");
            imageDivs[kittyCount].classList.add("carousel_stage_left");
            dotIndicators[kittyCount].classList.remove("active_dot");
            kittyCount = i;
            imageDivs[kittyCount].classList.add("carousel_onscreen");
            dotIndicators[kittyCount].classList.add("active_dot");
        });
    }
})();

// Add and remove bacground to the indicator much the same way
