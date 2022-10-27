// modules

const http = require("http");
const fs = require("fs");
const path = require("path");

// variables

const fileLUT = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

http.createServer((request, response) => {
    // request log
    let date = new Date();
    let logEntry = `${date}\t${request.method}\t${request.url}\t${request.headers["user-agent"]}\n`;
    fs.appendFile("requests.txt", logEntry, () => {
        console.log("request log updated");
    });
    // request log end

    // serve according to request method
    if (request.method !== "GET") {
        // forbidden
        response.writeHead(
            405,
            { location: "/" },
            { "Content-Type": "text/html" }
        );
        response.end();
        return;
    }
    // okay! -> what url?

    let myPath = path.join(__dirname, "projects", request.url);
    const projectsRoot = path.join(__dirname, "projects");
    let extension = fileLUT[path.extname(myPath)];

    // forbidden

    if (!myPath.startsWith(projectsRoot)) {
        response.statusCode = 405;
        response.end();
        return;
    }

    // okay! -> home?
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        const responseBody =
            "<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>";
        response.end(responseBody);
        return;
    }

    // exists?
    if (fs.existsSync(myPath)) {
        if (fs.statSync(myPath).isFile()) {
            response.writeHead(200, { "Content-Type": extension });
            const readStream = fs.createReadStream(myPath);
            readStream.pipe(response);
            readStream.on("end", () => {
                response.end();
            });
        }
        if (fs.statSync(myPath).isDirectory()) {
            if (myPath.endsWith("/")) {
                myPath += "index.html";
                response.writeHead(200, { "Content-Type": "text/html" });
                const readStream = fs.createReadStream(myPath);
                readStream.pipe(response);
                readStream.on("end", () => {
                    response.end();
                });
            } else {
                response.writeHead(
                    301,
                    { Location: `${request.url}/` },
                    { "Content-Type": "text/html" }
                );
                response.end();
            }
        }
    } else {
        // 404
        response.writeHead(
            301, // 404 not redirecting, need 301
            { Location: "http://localhost:8080/" },
            { "Content-Type": "text/html" }
        );
        response.end();
    }
}).listen(8080);
