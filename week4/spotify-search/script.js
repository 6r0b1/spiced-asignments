(function () {
    console.log("linked");

    let searchType;
    let searchTerm;
    let resultsHTML = "";
    let searchForm = document.querySelector("#search_form");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        searchTerm = document.querySelector("#user_query").value;
        searchType = document.querySelector("#search_type").value;

        getData(searchTerm, searchType);
    });

    // get data from server

    function getData(searchTerm, searchType) {
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                q: searchTerm,
                type: searchType,
            },
            success: function (data) {
                console.log(data);
                createResults(data);
            },
            error: function (error) {
                console.log("Error!");
                console.log(error);
            },
        });
    }

    // get more results (next)

    function getMore(nextURL) {
        $.ajax({
            url: nextURL,

            success: function (data) {
                console.log(data);
                createResults(data);
            },
            error: function (error) {
                console.log("Error!");
                console.log(error);
            },
        });
    }

    // create html to be added to the results section

    function createResults(data) {
        let resultsSection = document.querySelector("#results");

        let info = data.artists || data.albums;
        let items = info.items;
        if (items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                let specificItem = items[i];
                let title = specificItem.name;
                let href = specificItem.external_urls.spotify;
                let images;
                if (specificItem.images[0]) {
                    images = specificItem.images[0].url;
                } else {
                    images =
                        "https://image.capital.de/31037060/t/Iq/v1/w1440/r0/-/gettyimages-453408496-jpg.jpg";
                }
                resultsHTML +=
                    '<div class="results_item"><a class="image_link" href="' +
                    href +
                    '"><img class="covers_artists" src="' +
                    images +
                    '" alt="cover_art"></a><div class="details"><a href="' +
                    href +
                    '"><p>' +
                    title +
                    "</p></a><p>Further information</p><p>Monthly listeners</p></div></div>";
            }
        } else {
            resultsHTML += '<div class="results_item">Spotify sucks ass!</div>';
        }

        resultsSection.innerHTML = resultsHTML;
        console.log(info.next);

        if (info.next != null) {
            document.querySelector("#paginate").innerHTML =
                '<button id="more">More</button>';

            // Load more on klick

            // let loadMore = document.querySelector("#more");
            // loadMore.addEventListener("mousedown", function () {
            //     console.log("here");
            //     getMore(info.next);
            // });

            // Load more on end of page (could actually skip creating the button...)

            window.onscroll = function () {
                if (
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - 50
                ) {
                    // you're at the bottom of the page
                    getMore(info.next);
                }
            };
        }
    }
})();
