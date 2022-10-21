(function () {
    // handlebars setup

    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    templates.forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    // get data
    let info;
    let searchType;
    let searchTerm;
    let handlebarsObject;
    let searchForm = document.querySelector("#search_form");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        searchTerm = document.querySelector("#user_query").value;
        searchType = document.querySelector("#search_type").value;

        getData(searchTerm, searchType);
    });

    function getData(searchTerm, searchType) {
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                q: searchTerm,
                type: searchType,
            },
            success: function (data) {
                console.log(data);
                info = data.artists || data.albums;
                // put into handlebars variable
                handlebarsObject = info;
                console.log(handlebarsObject);
                document.querySelector("#results").innerHTML =
                    Handlebars.templates.result_list(handlebarsObject);
            },
            error: function (error) {
                console.log("Error!");
                console.log(error);
            },
        });
    }
})();
