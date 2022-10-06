(function () {
    let offset = 0;
    let toBeMoved = document.getElementById("ticker_links");

    let checkWidth = document.querySelector("#ticker_links_element");

    let tickerElements = document.querySelectorAll("#ticker_links_element");

    function moveAlong() {
        toBeMoved.style.left = offset + "px";
        offset--;
        if (offset > checkWidth.offsetWidth * -1) {
            requestAnimationFrame(moveAlong);
        } else {
            offset = 0;
            toBeMoved.appendChild(tickerElements[0]);
            checkWidth = document.querySelector("#ticker_links_element");

            tickerElements = document.querySelectorAll("#ticker_links_element");
            requestAnimationFrame(moveAlong);
        }
    }

    requestAnimationFrame(moveAlong);
})();
