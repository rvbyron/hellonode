// File System Package
var fs = require("fs");
// Variable to store filename
var filename = "steps.txt";

// Read File Function
function readfile(filename, processLine) {

    // Read the file via the FileSystem(fs) instance.
    fs.readFile(filename, function (err, data) {
        bufferString = data.toString();
        bufferLines = bufferString.split("\n");
        for (var i = 0; i < bufferLines.length; i++) {
            var line = bufferLines[i];
            processLine(i, line);
        }
    });
}

// Create a callback function to be called on every line.
function printLine(index, line) {
    function padnum(num, width) {
        return ("0000000000" + (num + 1)).substr(-1 * width);
    }

    console.log(padnum(index, 4) + ": " + line);
}

readfile(filename, printLine);

