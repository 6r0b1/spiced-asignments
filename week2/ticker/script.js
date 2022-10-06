(function () {
    let requestID;
    let offset = 0;
    let toBeMoved = document.getElementById("ticker_links");

    let checkWidth = document.querySelector("#ticker_links_element");

    let tickerElements = document.querySelectorAll("#ticker_links_element");

    function moveAlong() {
        toBeMoved.style.left = offset + "px";
        offset--;
        if (offset <= checkWidth.offsetWidth * -1) {
            toBeMoved.appendChild(tickerElements[0]);
            checkWidth = document.querySelector("#ticker_links_element");

            tickerElements = document.querySelectorAll("#ticker_links_element");
            offset = 0;
            toBeMoved.style.left = offset + "px";
        }
        requestID = requestAnimationFrame(moveAlong);
    }

    function stopThis(){
cancelAnimationFrame(requestID);        
    }

    requestID = requestAnimationFrame(moveAlong);

    let eventItems = document.querySelectorAll("a");

    for (let i = 0; i < eventItems.length; i++) {
        eventItems[i].addEventListener("mouseenter", stopThis);
        eventItems[i].addEventListener("mouseleave", moveAlong);
}


})();
