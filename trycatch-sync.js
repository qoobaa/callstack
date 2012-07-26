function first() {
    try {
        second();
    } catch (error) {
        console.log("caught error");
        console.log(error.stack);
    }
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
