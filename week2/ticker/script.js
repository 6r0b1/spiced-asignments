(function () {
    let offset = 0;
    console.log(Math.abs(offset));
    let toBeMoved = document.getElementById("ticker_links");

    let checkWidth = document.querySelector("#ticker_links_element");
    console.log(checkWidth);

    let tickerElements = document.querySelectorAll("#ticker_links_element");
    console.log(tickerElements);

    function moveAlong() {
        toBeMoved.style.left = offset + "px";
        offset--;
        if (offset > checkWidth.offsetWidth * -1) {
            requestAnimationFrame(moveAlong);
        } else {
            offset = 0;
            toBeMoved.appendChild(tickerElements[0]);
            tickerElements = document.querySelectorAll("#ticker_links_element");
            checkWidth = document.querySelector("#ticker_links_element");
            requestAnimationFrame(moveAlong);
        }
    }

    requestAnimationFrame(moveAlong);
})();
