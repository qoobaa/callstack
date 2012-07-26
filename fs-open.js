var fs = require("fs");
function callback(err, fd) {
    if (err) {
        console.log("caught error");
        console.log(err.stack);
    } else {
        console.log("file descriptor", fd);
    }
}
// fs.open(path, flags, [mode], [callback])
// Asynchronous file open. See open(2). flags can be:
// 'r' - Open file for reading.
// An exception occurs if the file does not exist.
// The callback gets two arguments (err, fd).
fs.open("nonexisting", "r", callback);
console.log("end of main");
