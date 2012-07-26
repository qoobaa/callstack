function first() {
    second();
    console.log("end of first");
}
function second() {
    third();
    console.log("end of second");
}
function third() {
    throw new Error("boom");
    console.log("end of third");
}
first();
console.log("end of main");
