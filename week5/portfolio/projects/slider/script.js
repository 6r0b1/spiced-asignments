// detect mousedown on slider

let slider = document.querySelector(".slider");
let foreground = document.querySelector(".foreground");
let activeArea = document.querySelector(".compare");
console.log(activeArea.offsetLeft);

let setWidth;
console.log(activeArea);

let mousePressed;

document.addEventListener("mouseup", function () {
    mousePressed = false;
});

if (setWidth > 500 || setWidth < 500) {
    document.querySelector(".compare").removeEventListener("mousemove");
    console.log("jetzt");
}

slider.addEventListener("mousedown", function (e) {
    e.preventDefault();
    mousePressed = true;
    posX = e.clientX;
    document
        .querySelector(".compare")
        .addEventListener("mousemove", function (e) {
            if (mousePressed) {
                setWidth = e.clientX - activeArea.offsetLeft;
                if (setWidth < 500 && setWidth > 0) {
                    foreground.style.width = setWidth + "px";
                    slider.style.left = setWidth + "px";
                    console.log(setWidth);
                }
            }
        });
});
