const { readdir } = require("fs");
const { stat } = require("fs");
const { join } = require("path");

const logSizes = (path) => {
    readdir(path, { withFileTypes: true }, (err, dirEntries) => {
        if (err) {
            console.log(err);
        }
        dirEntries.forEach((entry) => {
            const entryPath = join(path, entry.name);

            if (entry.isFile()) {
                stat(entryPath, (err, fileStats) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`${entryPath}: ${fileStats.size}`);
                });
            } else if (entry.isDirectory()) {
                logSizes(entryPath);
            }
        });
    });
};

logSizes(join(__dirname, "files"));
