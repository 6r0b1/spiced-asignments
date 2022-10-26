const http = require("http");
const fs = require("fs");
const chalk = require("chalk");

http.createServer((request, response) => {
    // Store properties of request for later use
    const { headers, method, url } = request;

    // log request to text file
    let date = new Date();
    let logEntry = `${date}\t|\tMethod: ${request.method}\tURL: ${request.url}\tUser-Agent: ${request.headers["user-agent"]}\n`;
    fs.appendFile("requests.txt", logEntry, () => {});

    // Standard resposnse to get/head with hard coded html
    if (request.method === "GET" || request.method === "HEAD") {
        response.writeHead(200, { "Content-Type": "text/html" });
        if (request.method === "HEAD") {
            response.end();
        }
        const responseBody =
            '<!doctype html><html><title>Colors</title><form method="POST"><input type="text" name="text"><select name="color"><option value="red">red</option><option value="blue">blue</option><option value="green">green</option><option value="yellow">yellow</option><option value="gray">gray</option><option value="magenta">magenta</option><option value="cyan">cyan</option></select><button type="submit">Go</button></form></html>';
        response.end(responseBody);
    }

    // Response to post from submitted serch/form
    if (request.method === "POST") {
        let body = [];
        // search parameters
        let text;
        let color;
        request
            .on("error", (err) => {
                console.error(err);
            })
            // construct request body
            .on("data", (chunk) => {
                body.push(chunk);
            })
            // Generate search query
            .on("end", () => {
                body = Buffer.concat(body).toString();
                const query = new URLSearchParams(body);
                text = query.get("text");
                color = query.get("color");
                // Respond with html and variables from query
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(
                    `<!doctype html><html><title>colorful-console</title><a href="/" style="color:${color}">${text}</a></html>`
                );
                console.log(chalk[color](text));
            });
        // Respond to forbidden methods
    } else {
        response.writeHead(
            405,
            { "Content-Type": "text/html" },
            { location: "/" }
        );
        response.end();
    }
}).listen(8080);
