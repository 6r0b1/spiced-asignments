(function () {
    // var title = document.getElementsByTagName("h1");
    // console.log(title);
    // var img = document.getElementById("image");
    // console.log(img);
    // var paragraph = document.getElementsByClassName("text");
    // console.log(paragraph);

    let change = document.querySelectorAll(".text");
    console.log(change);

    for (let i = 0; i < change.length; i++) {
        change[i].style.fontStyle = "italic";
        change[i].style.fontWeight = "bold";
        change[i].style.textDecoration = "underline";
    }
})();
