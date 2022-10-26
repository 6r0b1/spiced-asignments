const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    const { headers, method, url } = request;
    console.log({ headers, method, url });
    let date = new Date();
    let logEntry = `${date}\t${request.method}\t${request.url}\t${request.headers["user-agent"]}\n`;
    fs.appendFile("requests.txt", logEntry, () => {
        console.log("request log updated");
    });

    if (request.method === "GET" || request.method === "HEAD") {
        response.writeHead(200, { "Content-Type": "text/html" });
        if (request.method === "HEAD") {
            response.end();
        }
        const responseBody =
            "<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>";
        response.end(responseBody);
    }
    if (request.method === "POST") {
        console.log("here");
        let body = [];
        request
            .on("error", (err) => {
                console.error(err);
            })
            .on("data", (chunk) => {
                body.push(chunk);
            })
            .on("end", () => {
                body = Buffer.concat(body).toString();
                console.log("this is the body: ", body);
            });
        console.log(body);

        response.writeHead(
            302,
            { "Content-Type": "text/html" },
            { location: "/" }
        );
        response.end();
    } else {
        response.writeHead(
            405,
            { "Content-Type": "text/html" },
            { location: "/" }
        );
        response.end();
    }
}).listen(8080);
