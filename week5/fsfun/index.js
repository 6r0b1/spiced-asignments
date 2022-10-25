const { readdir } = require("fs");
const { stat } = require("fs");
const { join } = require("path");

// const logSizes = (path) => {
//     readdir(path, { withFileTypes: true }, (err, dirEntries) => {
//         if (err) {
//             console.log(err);
//         }
//         dirEntries.forEach((entry) => {
//             const entryPath = join(path, entry.name);

//             if (entry.isFile()) {
//                 stat(entryPath, (err, fileStats) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                     console.log(`${entryPath}: ${fileStats.size}`);
//                 });
//             } else if (entry.isDirectory()) {
//                 logSizes(entryPath);
//             }
//         });
//     });
// };

// logSizes(join(__dirname, "files"));

// create object
// check path

// if directory     =>  add property 'entry.name': {}
// if file          =>  add property 'entry.name': entry.size

const fs = require("fs");

const mapSizes = (path) => {
    let data = fs.readdirSync(path, { withFileTypes: true });
    data.forEach((entry) => {
        if (entry.isFile()) {
            console.log(entry);
        } else if (entry.isDirectory()) {
            mapSizes(join(path, entry.name));
        }
    });
};

mapSizes(join(__dirname, "files"));
