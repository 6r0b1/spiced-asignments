(function () {
    let menuBox = document.getElementsByClassName("menu_slide")[0];
    let backSoft = document.getElementsByClassName("soften")[0];
    let everywhere = document.getElementsByTagName("main")[0];
    let hamburger = document.getElementsByClassName("menu")[0];
    let fade = document.getElementById("menu_img");
    console.log(hamburger);

    hamburger.addEventListener("click", function (e) {
        menuBox.classList.toggle("slide_in_right");
        backSoft.classList.toggle("fade_in_black");
        fade.classList.toggle("hide_menu_image");
        e.stopPropagation();
    });

    menuBox.addEventListener("klick", function (e) {
        e.stopPropagation();
    });

    everywhere.addEventListener("click", function () {
        menuBox.classList.remove("slide_in_right");
        backSoft.classList.remove("fade_in_black");
    });
})();
