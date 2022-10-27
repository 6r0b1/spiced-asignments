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
                handlebarsObject = info.items;
                console.log(handlebarsObject);
            },
            error: function (error) {
                console.log("Error!");
                console.log(error);
            },
        });
    }

    // put into handlebars variable

    document.querySelector("#results").innerHTML =
        Handlebars.templates.result_list({
            resultObjects: [
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/5XLWHp9tjK7PWm7SMcvo2q",
                    },
                    followers: {
                        href: null,
                        total: 90208,
                    },
                    genres: ["contemporary country", "country"],
                    href: "https://api.spotify.com/v1/artists/5XLWHp9tjK7PWm7SMcvo2q",
                    id: "5XLWHp9tjK7PWm7SMcvo2q",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb3f68ae67b3354691517b987d",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab676161000051743f68ae67b3354691517b987d",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f1783f68ae67b3354691517b987d",
                            width: 160,
                        },
                    ],
                    name: "Restless Road",
                    popularity: 54,
                    type: "artist",
                    uri: "spotify:artist:5XLWHp9tjK7PWm7SMcvo2q",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/7oAoGc2k7201dlU7mkhlDp",
                    },
                    followers: {
                        href: null,
                        total: 255434,
                    },
                    genres: ["gymcore", "heavy alternative"],
                    href: "https://api.spotify.com/v1/artists/7oAoGc2k7201dlU7mkhlDp",
                    id: "7oAoGc2k7201dlU7mkhlDp",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb9c6c01064e17efabe83dea5d",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab676161000051749c6c01064e17efabe83dea5d",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f1789c6c01064e17efabe83dea5d",
                            width: 160,
                        },
                    ],
                    name: "No Resolve",
                    popularity: 57,
                    type: "artist",
                    uri: "spotify:artist:7oAoGc2k7201dlU7mkhlDp",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/5GcWBUX00IPuWVGMIRK1sS",
                    },
                    followers: {
                        href: null,
                        total: 1164194,
                    },
                    genres: ["venezuelan hip hop"],
                    href: "https://api.spotify.com/v1/artists/5GcWBUX00IPuWVGMIRK1sS",
                    id: "5GcWBUX00IPuWVGMIRK1sS",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5ebd51bfc13658dc0d8a2af46b3",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174d51bfc13658dc0d8a2af46b3",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178d51bfc13658dc0d8a2af46b3",
                            width: 160,
                        },
                    ],
                    name: "Residente",
                    popularity: 64,
                    type: "artist",
                    uri: "spotify:artist:5GcWBUX00IPuWVGMIRK1sS",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/5xKXgnk2Uov5ZnQi87TV0i",
                    },
                    followers: {
                        href: null,
                        total: 78,
                    },
                    genres: [],
                    href: "https://api.spotify.com/v1/artists/5xKXgnk2Uov5ZnQi87TV0i",
                    id: "5xKXgnk2Uov5ZnQi87TV0i",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab67616d0000b273da07d4223ea05d3964ed0a92",
                            width: 640,
                        },
                        {
                            height: 300,
                            url: "https://i.scdn.co/image/ab67616d00001e02da07d4223ea05d3964ed0a92",
                            width: 300,
                        },
                        {
                            height: 64,
                            url: "https://i.scdn.co/image/ab67616d00004851da07d4223ea05d3964ed0a92",
                            width: 64,
                        },
                    ],
                    name: "Restorative",
                    popularity: 50,
                    type: "artist",
                    uri: "spotify:artist:5xKXgnk2Uov5ZnQi87TV0i",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
                    },
                    followers: {
                        href: null,
                        total: 18509465,
                    },
                    genres: [
                        "alternative rock",
                        "funk metal",
                        "funk rock",
                        "permanent wave",
                    ],
                    href: "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
                    id: "0L8ExT028jH3ddEcZwqJJ5",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5ebc33cc15260b767ddec982ce8",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174c33cc15260b767ddec982ce8",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178c33cc15260b767ddec982ce8",
                            width: 160,
                        },
                    ],
                    name: "Red Hot Chili Peppers",
                    popularity: 83,
                    type: "artist",
                    uri: "spotify:artist:0L8ExT028jH3ddEcZwqJJ5",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/7L19tYhXerWnAaJZrjZz41",
                    },
                    followers: {
                        href: null,
                        total: 10963,
                    },
                    genres: ["background jazz"],
                    href: "https://api.spotify.com/v1/artists/7L19tYhXerWnAaJZrjZz41",
                    id: "7L19tYhXerWnAaJZrjZz41",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb106e4b84926882ea8134f164",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174106e4b84926882ea8134f164",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178106e4b84926882ea8134f164",
                            width: 160,
                        },
                    ],
                    name: "Restaurant Lounge Background Music",
                    popularity: 55,
                    type: "artist",
                    uri: "spotify:artist:7L19tYhXerWnAaJZrjZz41",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/0QRp7CyL31iErUn6cX0YU3",
                    },
                    followers: {
                        href: null,
                        total: 17222,
                    },
                    genres: ["dark trap"],
                    href: "https://api.spotify.com/v1/artists/0QRp7CyL31iErUn6cX0YU3",
                    id: "0QRp7CyL31iErUn6cX0YU3",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb44a16f568ea58ed4d5586fda",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab6761610000517444a16f568ea58ed4d5586fda",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f17844a16f568ea58ed4d5586fda",
                            width: 160,
                        },
                    ],
                    name: "do not resurrect",
                    popularity: 53,
                    type: "artist",
                    uri: "spotify:artist:0QRp7CyL31iErUn6cX0YU3",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/0FcmRWJUfnCuwoXE1H2b0H",
                    },
                    followers: {
                        href: null,
                        total: 209462,
                    },
                    genres: ["country", "country rock"],
                    href: "https://api.spotify.com/v1/artists/0FcmRWJUfnCuwoXE1H2b0H",
                    id: "0FcmRWJUfnCuwoXE1H2b0H",
                    images: [
                        {
                            height: 688,
                            url: "https://i.scdn.co/image/35516100374f34eb7b8504bda8ed146e80782ca7",
                            width: 1000,
                        },
                        {
                            height: 440,
                            url: "https://i.scdn.co/image/92145b9a52f1021157a0ba4cd572ee002b10541c",
                            width: 640,
                        },
                        {
                            height: 138,
                            url: "https://i.scdn.co/image/a0b86f25eb4d675303c2dad4d31269e4ba9bcd44",
                            width: 200,
                        },
                        {
                            height: 44,
                            url: "https://i.scdn.co/image/77b55d619fbf61435db15f9a46581ee117a7efa1",
                            width: 64,
                        },
                    ],
                    name: "Restless Heart",
                    popularity: 47,
                    type: "artist",
                    uri: "spotify:artist:0FcmRWJUfnCuwoXE1H2b0H",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/7KkUirCiJZhgRN3NbgG98L",
                    },
                    followers: {
                        href: null,
                        total: 35878,
                    },
                    genres: [
                        "classical",
                        "impressionism",
                        "italian romanticism",
                        "neoclassicism",
                        "post-romantic era",
                    ],
                    href: "https://api.spotify.com/v1/artists/7KkUirCiJZhgRN3NbgG98L",
                    id: "7KkUirCiJZhgRN3NbgG98L",
                    images: [
                        {
                            height: 1000,
                            url: "https://i.scdn.co/image/6f1664190b39f8b288ab3ce0e32884cc33cfb2cd",
                            width: 1000,
                        },
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/0fc5f3a115ed10d13f22f7c1216ee4b8d721119e",
                            width: 640,
                        },
                        {
                            height: 200,
                            url: "https://i.scdn.co/image/5bb64126830ff9249bcf930d5e379610b205faa5",
                            width: 200,
                        },
                        {
                            height: 64,
                            url: "https://i.scdn.co/image/dde6aac764cfd79f2cc90a5624b98788618b83a6",
                            width: 64,
                        },
                    ],
                    name: "Ottorino Respighi",
                    popularity: 55,
                    type: "artist",
                    uri: "spotify:artist:7KkUirCiJZhgRN3NbgG98L",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/4HXv1CWVOyIO8ZNvGOSyEy",
                    },
                    followers: {
                        href: null,
                        total: 10087,
                    },
                    genres: [
                        "boston hardcore",
                        "chain punk",
                        "connecticut hardcore",
                        "modern hardcore",
                        "new england hardcore",
                    ],
                    href: "https://api.spotify.com/v1/artists/4HXv1CWVOyIO8ZNvGOSyEy",
                    id: "4HXv1CWVOyIO8ZNvGOSyEy",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5ebf1b3594443cbb802feaeea07",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174f1b3594443cbb802feaeea07",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178f1b3594443cbb802feaeea07",
                            width: 160,
                        },
                    ],
                    name: "Restraining Order",
                    popularity: 30,
                    type: "artist",
                    uri: "spotify:artist:4HXv1CWVOyIO8ZNvGOSyEy",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/4Sl3fpSDeo9cMb3ouKm0rV",
                    },
                    followers: {
                        href: null,
                        total: 12176,
                    },
                    genres: ["experimental jazz", "indie soul"],
                    href: "https://api.spotify.com/v1/artists/4Sl3fpSDeo9cMb3ouKm0rV",
                    id: "4Sl3fpSDeo9cMb3ouKm0rV",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5ebe16bb019534278f9d7f1d021",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174e16bb019534278f9d7f1d021",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178e16bb019534278f9d7f1d021",
                            width: 160,
                        },
                    ],
                    name: "Resavoir",
                    popularity: 42,
                    type: "artist",
                    uri: "spotify:artist:4Sl3fpSDeo9cMb3ouKm0rV",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/3nf2EaHj8HikLNdaiW3v73",
                    },
                    followers: {
                        href: null,
                        total: 233195,
                    },
                    genres: [
                        "alternative hip hop",
                        "conscious hip hop",
                        "escape room",
                        "rap",
                        "underground hip hop",
                    ],
                    href: "https://api.spotify.com/v1/artists/3nf2EaHj8HikLNdaiW3v73",
                    id: "3nf2EaHj8HikLNdaiW3v73",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb2a8b5966bf18ebc260d6f697",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab676161000051742a8b5966bf18ebc260d6f697",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f1782a8b5966bf18ebc260d6f697",
                            width: 160,
                        },
                    ],
                    name: "Injury Reserve",
                    popularity: 51,
                    type: "artist",
                    uri: "spotify:artist:3nf2EaHj8HikLNdaiW3v73",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/2PwJ42IKyAIub8omY3zgTS",
                    },
                    followers: {
                        href: null,
                        total: 13357,
                    },
                    genres: ["asmr"],
                    href: "https://api.spotify.com/v1/artists/2PwJ42IKyAIub8omY3zgTS",
                    id: "2PwJ42IKyAIub8omY3zgTS",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5ebd0d6532b278cf844f1e7b29d",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174d0d6532b278cf844f1e7b29d",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178d0d6532b278cf844f1e7b29d",
                            width: 160,
                        },
                    ],
                    name: "Restful Rambles ASMR",
                    popularity: 37,
                    type: "artist",
                    uri: "spotify:artist:2PwJ42IKyAIub8omY3zgTS",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/1eKaDCiRlBnJImrnezSk0A",
                    },
                    followers: {
                        href: null,
                        total: 3763,
                    },
                    genres: [],
                    href: "https://api.spotify.com/v1/artists/1eKaDCiRlBnJImrnezSk0A",
                    id: "1eKaDCiRlBnJImrnezSk0A",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb5fdb0b0f0ddac0b599b723b2",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab676161000051745fdb0b0f0ddac0b599b723b2",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f1785fdb0b0f0ddac0b599b723b2",
                            width: 160,
                        },
                    ],
                    name: "Restful Sound Loops",
                    popularity: 39,
                    type: "artist",
                    uri: "spotify:artist:1eKaDCiRlBnJImrnezSk0A",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/0yNSzH5nZmHzeE2xn6Xshb",
                    },
                    followers: {
                        href: null,
                        total: 2759704,
                    },
                    genres: [
                        "latin afrobeat",
                        "latin alternative",
                        "latin hip hop",
                        "puerto rican rock",
                        "rap conciencia",
                        "reggaeton",
                        "rock en espanol",
                    ],
                    href: "https://api.spotify.com/v1/artists/0yNSzH5nZmHzeE2xn6Xshb",
                    id: "0yNSzH5nZmHzeE2xn6Xshb",
                    images: [
                        {
                            height: 719,
                            url: "https://i.scdn.co/image/edabfb79fbf3d71ad9d0961a7b199a1470fe5372",
                            width: 1000,
                        },
                        {
                            height: 460,
                            url: "https://i.scdn.co/image/a3c9dd492b973e5d5ebfd957b30325972c16d2d4",
                            width: 640,
                        },
                        {
                            height: 144,
                            url: "https://i.scdn.co/image/896866e81c4a3d873ce3a28b2396f75212d192a0",
                            width: 200,
                        },
                        {
                            height: 46,
                            url: "https://i.scdn.co/image/28b48ccc46a8cb61fbf3e67867fc7794acc6dc85",
                            width: 64,
                        },
                    ],
                    name: "Calle 13",
                    popularity: 69,
                    type: "artist",
                    uri: "spotify:artist:0yNSzH5nZmHzeE2xn6Xshb",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/3vGbFUgGuy8Dz2JPF2xgwc",
                    },
                    followers: {
                        href: null,
                        total: 2090,
                    },
                    genres: [],
                    href: "https://api.spotify.com/v1/artists/3vGbFUgGuy8Dz2JPF2xgwc",
                    id: "3vGbFUgGuy8Dz2JPF2xgwc",
                    images: [],
                    name: "RESISTIRÉ MÉXICO",
                    popularity: 51,
                    type: "artist",
                    uri: "spotify:artist:3vGbFUgGuy8Dz2JPF2xgwc",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/56YiNz2C704YPpRtPvMBg7",
                    },
                    followers: {
                        href: null,
                        total: 34810,
                    },
                    genres: ["neo soul"],
                    href: "https://api.spotify.com/v1/artists/56YiNz2C704YPpRtPvMBg7",
                    id: "56YiNz2C704YPpRtPvMBg7",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5ebe7cbf46e01eab7ab095f468f",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174e7cbf46e01eab7ab095f468f",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178e7cbf46e01eab7ab095f468f",
                            width: 160,
                        },
                    ],
                    name: "Res",
                    popularity: 34,
                    type: "artist",
                    uri: "spotify:artist:56YiNz2C704YPpRtPvMBg7",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/52tIYMYQgBbgOFIJHaOPxY",
                    },
                    followers: {
                        href: null,
                        total: 16514,
                    },
                    genres: ["metalcore"],
                    href: "https://api.spotify.com/v1/artists/52tIYMYQgBbgOFIJHaOPxY",
                    id: "52tIYMYQgBbgOFIJHaOPxY",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb7036493362a3f4bd93802ecd",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab676161000051747036493362a3f4bd93802ecd",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f1787036493362a3f4bd93802ecd",
                            width: 160,
                        },
                    ],
                    name: "Resolve",
                    popularity: 41,
                    type: "artist",
                    uri: "spotify:artist:52tIYMYQgBbgOFIJHaOPxY",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/2LFckOYhr4hG0PtLqHYWkz",
                    },
                    followers: {
                        href: null,
                        total: 6724,
                    },
                    genres: ["sleep"],
                    href: "https://api.spotify.com/v1/artists/2LFckOYhr4hG0PtLqHYWkz",
                    id: "2LFckOYhr4hG0PtLqHYWkz",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5eb80cc195dd6d69b1ec43d9cf1",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab6761610000517480cc195dd6d69b1ec43d9cf1",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f17880cc195dd6d69b1ec43d9cf1",
                            width: 160,
                        },
                    ],
                    name: "White Noise Research",
                    popularity: 49,
                    type: "artist",
                    uri: "spotify:artist:2LFckOYhr4hG0PtLqHYWkz",
                },
                {
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/artist/7Hr2Po3TPTmzqtyB12OX89",
                    },
                    followers: {
                        href: null,
                        total: 6216,
                    },
                    genres: ["experimental bass"],
                    href: "https://api.spotify.com/v1/artists/7Hr2Po3TPTmzqtyB12OX89",
                    id: "7Hr2Po3TPTmzqtyB12OX89",
                    images: [
                        {
                            height: 640,
                            url: "https://i.scdn.co/image/ab6761610000e5ebe269ad8c9189349b5d280c5d",
                            width: 640,
                        },
                        {
                            height: 320,
                            url: "https://i.scdn.co/image/ab67616100005174e269ad8c9189349b5d280c5d",
                            width: 320,
                        },
                        {
                            height: 160,
                            url: "https://i.scdn.co/image/ab6761610000f178e269ad8c9189349b5d280c5d",
                            width: 160,
                        },
                    ],
                    name: "Resonant Language",
                    popularity: 23,
                    type: "artist",
                    uri: "spotify:artist:7Hr2Po3TPTmzqtyB12OX89",
                },
            ],
        });
})();
