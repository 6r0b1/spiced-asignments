const { text } = require("express");
const https = require("https");

const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env;

module.exports.getToken = (callback) => {
    // encode credentials the way twitter wants you to
    const credentials = `${TWITTER_API_KEY}:${TWITTER_API_SECRET}`;
    const encodedCredentials = Buffer.from(credentials).toString("base64");

    // set a header for the request to twitter (includes the creds)
    const config = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    // set the actual request
    const getTokenCallback = (response) => {
        // report an error if response code in not 200 (ok)
        if (response.statusCode !== 200) {
            console.log(response);
            callback(new Error(response.statusCode));
            return;
        }

        // concatenate the response body
        let body = "";
        response
            .on("data", (chunk) => (body += chunk))
            .on("error", (error) => {
                console.log(error);
                callback(new Error(error));
            })
            .on("end", () => {
                const data = JSON.parse(body);
                callback(null, data.access_token);
            });
    };

    const request = https.request(config, getTokenCallback);
    request.end("grant_type=client_credentials");
};

module.exports.getTweets = (token, callback) => {
    const config = {
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json?screen_name=theonion",
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const getTweetsCallback = (response) => {
        // concatenate the response body
        let body = "";
        response
            .on("data", (chunk) => (body += chunk))
            .on("error", (error) => {
                console.log(error);
                callback(new Error(error));
            })
            .on("end", () => {
                const data = JSON.parse(body);
                callback(null, data);
            });
    };
    const request = https.request(config, getTweetsCallback);
    request.end();
};

module.exports.filterTweets = (tweets) => {
    let tweetsWithURLs = tweets.filter(
        (tweet) => tweet.entities.urls.length > 0
    );
    let tweetsAndURLs = [];
    tweetsWithURLs.map((tweet) => {
        let tweetText = tweet.text;
        let pureText = tweetText.split("http");
        console.log(pureText);
        tweetsAndURLs.push({
            headline: pureText[0],
            url: tweet.entities.urls[0].url,
        });
    });
    console.log(tweetsAndURLs);

    return tweetsAndURLs;
};
