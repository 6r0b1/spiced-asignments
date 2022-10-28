// modules

const http = require("http");
const fs = require("fs");
const path = require("path");
const { join } = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use("/projects", express.static(path.join(__dirname, "projects")));

// app.get("/", (request, response) => {
//     console.log("A console message first...");
//     response.send("Hi there, Okra!");
// });

// // variables

// const fileLUT = {
//     ".html": "text/html",
//     ".css": "text/css",
//     ".js": "text/javascript",
//     ".json": "application/json",
//     ".gif": "image/gif",
//     ".jpg": "image/jpeg",
//     ".png": "image/png",
//     ".svg": "image/svg+xml",
// };

// // build site map

// const mapDirectories = (path) => {
//     // set current item as empty object, because an object it shall be
//     let currentItem = {};
//     let data = fs.readdirSync(path, { withFileTypes: true });

//     data.forEach((entry) => {
//         let entryPath = join(path, entry.name);
//         if (entry.isFile()) {
//             // make new property entry.name: entry.size, this will be an end point for recursion
//             // -> for a siteMap this is not needed <-
//             // currentItem[entry.name] = fs.statSync(entryPath).size;
//         } else if (entry.isDirectory()) {
//             currentItem[entry.name] = mapDirectories(entryPath);
//             // at the end of each mapSizes {} is written because of currentItem reset at top
//             // so callback inside if assigning value to property entry.name generates
//             // braces inside braces inside braces until they are filled w/ end points
//         }
//     });
//     return currentItem;
// };

// let siteMap = mapDirectories(join(__dirname, "projects"));
// console.log(siteMap);

// // bild homepage html

// let homeHTML = "";
// let subDirs = Object.keys(siteMap);

// for (const directory of subDirs) {
//     homeHTML += `<a href="${directory}/">${directory}</a><br>`;
// }
// console.log(homeHTML);

// // serve (don t protect)

// http.createServer((request, response) => {
//     // request log
//     let date = new Date();
//     let logEntry = `${date}\t${request.method}\t${request.url}\t${request.headers["user-agent"]}\n`;
//     fs.appendFile("requests.txt", logEntry, () => {
//         console.log("request log updated");
//     });
//     // request log end

//     // serve according to request method
//     if (request.method !== "GET") {
//         // forbidden
//         response.writeHead(
//             405,
//             { location: "/" },
//             { "Content-Type": "text/html" }
//         );
//         response.end();
//         return;
//     }
//     // okay! -> what url?

//     let myPath = path.join(__dirname, "projects", request.url);
//     const projectsRoot = path.join(__dirname, "projects");
//     let extension = fileLUT[path.extname(myPath)];

//     // forbidden

//     if (!myPath.startsWith(projectsRoot)) {
//         response.statusCode = 405;
//         response.end();
//         return;
//     }

//     // okay! -> home?
//     if (request.url === "/") {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         const responseBody = `<!doctype html><html><title>veits portfolio</title><h1>What a wonderful portfolio</h1>${homeHTML}</html>`;
//         response.end(responseBody);
//         return;
//     }

//     // exists?
//     if (fs.existsSync(myPath)) {
//         if (fs.statSync(myPath).isFile()) {
//             response.writeHead(200, { "Content-Type": extension });
//             const readStream = fs.createReadStream(myPath);
//             readStream.pipe(response);
//             readStream.on("end", () => {
//                 response.end();
//             });
//         }
//         if (fs.statSync(myPath).isDirectory()) {
//             if (myPath.endsWith("/")) {
//                 myPath += "index.html";
//                 response.writeHead(200, { "Content-Type": "text/html" });
//                 const readStream = fs.createReadStream(myPath);
//                 readStream.pipe(response);
//                 readStream.on("end", () => {
//                     response.end();
//                 });
//             } else {
//                 response.writeHead(
//                     301,
//                     { Location: `${request.url}/` },
//                     { "Content-Type": "text/html" }
//                 );
//                 response.end();
//             }
//         }
//     } else {
//         // 404
//         response.writeHead(
//             301, // 404 not redirecting, need 301
//             { Location: "http://localhost:8080/" },
//             { "Content-Type": "text/html" }
//         );
//         response.end();
//     }
// }).listen(8080);

app.listen(8080, () => {
    console.log("listening");
});
