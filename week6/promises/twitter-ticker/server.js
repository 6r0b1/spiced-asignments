require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter");
const { get } = require("http");

const { PORT } = process.env;

app.use(express.static(path.join(__dirname, "ticker")));

app.get("/headlines.json", (req, res) => {
    // 1. get a token
    // 2. get tweets
    // 3. filter & format the tweets
    // 4. respond with JSON

    getToken()
        .then((token) => getTweets(token))
        .then((tweets) => {
            const filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        });

    // getToken((error, token) => {
    //     // check for errors...
    //     // send back empty JSON if there is an error!
    //     getTweets(token, (error, tweets) => {
    //         if (error) {
    //             console.log(error);
    //             return;
    //         }
    //         // console.log("Got some tweets:", tweets);
    //         const filteredTweets = filterTweets(tweets);
    //         res.json(filteredTweets);
    //     });
    // });
});

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`);
});
