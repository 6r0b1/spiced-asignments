// modules

const http = require("http");
const fs = require("fs");
const path = require("path");
const { join } = require("path");
const express = require("express");
const app = express();

// store original req.url in this

let originalRout;

app.use(require("cookie-parser")());
app.use(
    express.urlencoded({
        extended: false,
    })
);

// serve cookies.html no matter what
// this at the top avoids redirect errors

app.get("/cookies", (req, res) => {
    res.sendFile(path.join(__dirname, "/cookies/index.html"));
});

// serve cookie dependencies before consent
// need this to serve css

app.use(express.static(path.join(__dirname, "cookies")));

// accept post from /cookies, duh.

app.post("/cookies", (req, res) => {
    // if checkbox is checked, set cookie
    if (req.body.cookies === "on") {
        res.cookie("consent", 1);
        // send user back where they came from
        res.redirect(originalRout);
        return;
    }
    // no cookies? tell user what you think of them
    res.send("Sod off!");
});

// catch all and check if cookie set
// if not send user to consent form
// this will happen over and over again

app.get("*", (req, res, next) => {
    const cookies = req.cookies;
    if (cookies.consent !== "1") {
        // update original rout for later use
        originalRout = req.url;
        res.redirect("/cookies");
    }
    next();
});

// serve dependencies after cookie check

app.use("/projects", express.static(path.join(__dirname, "projects")));

app.listen(8080, () => {
    console.log("listening");
});
