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
    // set current item as empty object, because an object it shall be
    let currentItem = {};
    let data = fs.readdirSync(path, { withFileTypes: true });

    data.forEach((entry) => {
        let entryPath = join(path, entry.name);
        if (entry.isFile()) {
            // make new property entry.name: entry.size, this will be an end point for recursion
            currentItem[entry.name] = fs.statSync(entryPath).size;
        } else if (entry.isDirectory()) {
            currentItem[entry.name] = mapSizes(entryPath);
            // at the end of each mapSizes {} is written because of currentItem reset at top
            // so callback inside if assigning value to property entry.name generates
            // braces inside braces inside braces until they are filled w/ end points
        }
    });
    return currentItem;
};

let fileMap = mapSizes(join(__dirname, "files"));

let data = JSON.stringify(fileMap, null, 4);
console.log(data);
fs.writeFileSync("files.json", data);
