(function () {

//  prep

    let requestID;                                                              // capture animation frame
    let offset = 0;                                                             // amount of movement
    let toBeMoved = document.getElementById("ticker_links");                    // the acual moving element (div with links in)

    let checkWidth = document.querySelector("#ticker_links_element");           // move limit with current first element in ticker (tickerElements.0)

    let tickerElements = document.querySelectorAll("#ticker_links_element");    // list of elements in moving element

    function moveAlong() {
        toBeMoved.style.left = offset + "px";                                   // write current offset into style
        offset--;
        if (offset <= checkWidth.offsetWidth * -1) {                            // do s/th when offset reaches width of first element
            toBeMoved.appendChild(tickerElements[0]);                           // attaches first element to the end of div with links in and removes it from elements list
            checkWidth = document.querySelector("#ticker_links_element");       // resets if condition to new first element

            tickerElements = document.querySelectorAll("#ticker_links_element");// puts the previously removed item at the end of the ticker by storing all ticker elements again
            offset = 0;                                                         
            toBeMoved.style.left = offset + "px";                               // write offset to style at end of if to avoid jump
        }
        requestID = requestAnimationFrame(moveAlong);                           // stores animation frame and starts it at the same time (remember, requestAnimationFrame always returns the frame ID)
    }

    function stopThis() {
        cancelAnimationFrame(requestID);                                        // stop animation at current animation frame
    }

//  end prep

//  actually do the thing

    requestID = requestAnimationFrame(moveAlong);                               // start animation right away                    

    let eventItems = document.querySelectorAll("a");

    for (let i = 0; i < eventItems.length; i++) {
        eventItems[i].addEventListener("mouseenter", stopThis);
        eventItems[i].addEventListener("mouseleave", moveAlong);
    }
})();
