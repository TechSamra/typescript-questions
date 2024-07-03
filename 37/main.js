//Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, "prints on shirt"));
}
//calling a function with by-default values
make_shirt();
//calling a function now with Medium size and default message
make_shirt("Medium");
//calling a function now with small size and also different print Message
make_shirt("Small", "I love Javascript");
