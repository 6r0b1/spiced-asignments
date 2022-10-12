(function () {
    //  prep

    let requestID; // capture animation frame
    let offset = 0; // amount of movement
    let $toBeMoved = $("#ticker_links"); // the acual moving element (div with links in)

    let $checkWidth = $("#ticker_links_element"); // check [0] of this for width

    function moveAlong() {
        $toBeMoved.css({ left: offset + "px" }); // write current offset into style
        offset--;
        if (offset + 40 <= $($checkWidth[0]).width() * -1) {
            // do s/th when offset reaches width of first element
            $toBeMoved.append($checkWidth[0]); // attaches first element to the end of div with links in and removes it from elements list

            $checkWidth = $("#ticker_links_element"); // resets if condition to new first element

            // tickerElements = document.querySelectorAll("#ticker_links_element"); // puts the previously removed item at the end of the ticker by storing all ticker elements again
            offset = 0;
            $toBeMoved.css({ left: offset + "px" }); // write offset to style at end of if to avoid jump
        }
        requestID = requestAnimationFrame(moveAlong); // stores animation frame and starts it at the same time (remember, requestAnimationFrame always returns the frame ID)
    }

    function stopThis() {
        cancelAnimationFrame(requestID); // stop animation at current animation frame
    }

    //  end prep

    //  actually do the thing

    requestID = requestAnimationFrame(moveAlong); // start animation right away

    let $eventItems = $("a");

    $($eventItems).on("mouseenter", stopThis);
    $($eventItems).on("mouseleave", moveAlong);
})();
