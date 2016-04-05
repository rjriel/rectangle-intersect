var intersection = require('./rectangle-intersect')

if (process.argv.length < 10) {
  console.log("Invalid call. This module needs to be called as follows:");
  console.log("npm start <rect 1 leftX> <rect 1 bottomY> <rect 1 width> <rect 1 height> <rect 2 leftX> <rect 2 bottomY> <rect 2 width> <rect 2 height>");
  process.exit();
}

var first_rectangle = {
    leftX: parseInt(process.argv[2]),
    bottomY: parseInt(process.argv[3]),
    width: parseInt(process.argv[4]),
    height: parseInt(process.argv[5])
};

var second_rectangle = {
    leftX: parseInt(process.argv[6]),
    bottomY: parseInt(process.argv[7]),
    width: parseInt(process.argv[8]),
    height: parseInt(process.argv[9])
};

console.log(first_rectangle);
console.log(second_rectangle);

var result = intersection(first_rectangle, second_rectangle);

console.log("Result: ");
console.log(result);

if (result == "The given rectangles do not intersect") {
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n"+
"░░░░░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░\n"+
"░░░░░░░░▄▄██▀▀▀▀░░▀█░░░░░░░░░░░░░░░\n"+
"░░░░▄▄█▀▀▀▄▄▄▄█▄░▄░██░░░░░░░░░░░░░░\n"+
"░░░▄█░▄▄▄░▄█▀▀▀▄██▀▄▀██░░░░░░░░░░░░\n"+
"░░▄█▀░░▀▄███░░▀░░███▄██████▄▄░░░░░░\n"+
"░░██░░░░░█▄█▀█▄██▀▀▀▀▄███▀▄▀██▄░░░░\n"+
"░░██▀░░░▀▀██▀░░▀█▄▄██████░█░░░▀█▄░░\n"+
"░▄██░░░░█▀█▀▀▀▀██████▀▄██░░░░░░▀█▄░\n"+
"░█▀██░░░▀░█░░▀▀▀░▄▄▀▀▀▀▀░░░░█░░░░█▄\n"+
"░█░░▀▀█░░░█░▀▀▀░░░░░░░░░░░▄▀░░░░░██\n"+
"▄█▄▄░░░░░░▄░░░░░░░░░░░░░░░█▄░░░░░██\n"+
"██▀▄░░▄░░░░▀▄░░░░░░░░░░░░█░░░░░░▄█░\n"+
"░█▄░░░█▀░░░░░█░░░░▄░░░░░░░░░░░░▄█▀░\n"+
"░░▀█▄▄█▄░░░░░░▀░░░░░▄░░░░░░░░░██░░░\n"+
"░░░░▀▀██▀█▄░░░░░░░░░░▄░░░░░░▄█▀░░░░\n"+
"░░░░░░░▀█▄█▄░░░░░░░░░▀░░░▄░▄█░░░░░░\n"+
"░░░░░░░░▀▀▀██▄▄█▄▄█▄███████▀░░░░░░░\n"+
"░░░░░░░░░░░░░░▀▀▀▀▀▀▀▀▀▀▀░░░░░░░░░░\n"+
"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n");
}
