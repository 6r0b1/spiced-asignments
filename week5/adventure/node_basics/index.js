const { URL } = require("url");
const querystring = require("node:querystring");

urlToParse = process.argv.slice(2);

function makeURLobject(urlToPass) {
    let myURL = new URL(urlToPass);
    let myQuery = myURL.href.split("?")[1];

    console.log(
        `The protocol is ${myURL.protocol},\n
        the host is ${myURL.host},\n
        the hostneme is ${myURL.hostname},\n
        the port is ${myURL.port},\n
        the path is ${myURL.pathname},\n
        the query is ${myURL.search} and\n
        the serch parameters are: a= ${querystring.parse(myQuery).a}, b= ${
            querystring.parse(myQuery).b
        }`
    );
}

makeURLobject(urlToParse);
