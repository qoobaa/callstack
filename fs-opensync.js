var fs = require("fs");
// fs.openSync(path, flags, [mode])
// Synchronous open(2).
// 'r' - Open file for reading.
// An exception occurs if the file does not exist.
var fd = fs.openSync("nonexisting", "r");
console.log("file descriptor", fd);
console.log("end of main");
