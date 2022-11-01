// modules

const http = require("http");
const fs = require("fs");
const path = require("path");
const { join } = require("path");
const basicAuth = require("basic-auth");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// store original req.url in this

let originalRout;

function capitalizeFirstLetter(directory) {
    let dirArray = directory.split("-").map((folderPart) => {
        return folderPart[0].toUpperCase() + folderPart.slice(1);
    });
    return dirArray.join(" ");
}

// site map

const mapDirectories = (path) => {
    // set current item as empty object, because an object it shall be
    let currentItem = {};
    let data = fs.readdirSync(path, { withFileTypes: true });

    data.forEach((entry) => {
        let entryPath = join(path, entry.name);
        if (entry.isFile()) {
            // make new property entry.name: entry.size, this will be an end point for recursion
            // -> for a siteMap this is not needed <-
            // currentItem[entry.name] = fs.statSync(entryPath).size;
        } else if (entry.isDirectory()) {
            currentItem[entry.name] = capitalizeFirstLetter(entry.name);
            // at the end of each mapSizes {} is written because of currentItem reset at top
            // so callback inside if assigning value to property entry.name generates
            // braces inside braces inside braces until they are filled w/ end points
        }
    });
    return currentItem;
};

let siteMap = mapDirectories(join(__dirname, "projects"));
console.log(siteMap);

// authentication setup

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "them" || creds.pass != "123") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(require("cookie-parser")());
app.use(
    express.urlencoded({
        extended: false,
    })
);

// catch / and /projects  and check if cookie set
// if not send user to consent form
// this will happen over and over again

app.get("/", (req, res) => {
    const cookies = req.cookies;
    if (cookies.consent !== "1") {
        // update original rout for later use
        originalRout = req.url;
        console.log(originalRout);
        res.redirect("/cookies");
    }
    res.render("home", { siteMap: siteMap });
});

app.get("/projects/*", (req, res, next) => {
    const cookies = req.cookies;
    if (cookies.consent !== "1") {
        // update original rout for later use
        originalRout = req.url;
        console.log(originalRout);
        res.redirect("/cookies");
    }
    next();
});

// serve cookies.html no matter what

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

app.get("/projects/spotify/", auth, (req, res, next) => {
    next();
});

// serve dependencies after cookie check

app.use("/projects", express.static(path.join(__dirname, "projects")));

app.listen(8080, () => {
    console.log("listening");
});
