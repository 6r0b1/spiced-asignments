require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter");
const { get } = require("http");

const { PORT } = process.env;

app.use(express.static(path.join(__dirname, "ticker")));

app.get("/headlines.json", (req, res) => {
    getToken()
        .then((token) => {
            return Promise.all([
                getTweets(token, "bbc"),
                getTweets(token, "nyt"),
                getTweets(token, "nasa"),
            ]);
        })
        .then((tweets) => {
            const filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        });
});

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`);
});
