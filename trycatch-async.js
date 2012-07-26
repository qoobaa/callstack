function first() {
    try {
        second();
    } catch (error) {
        console.log("caught", error);
    }
    console.log("end of first");
}
function second() {
    setTimeout(third, 1000);
    console.log("end of second");
}
function third() {
    throw new Error("boom");
    console.log("end of third");
}
first();
console.log("end of main");
