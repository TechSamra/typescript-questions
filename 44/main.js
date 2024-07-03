//Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow enjoy sandwich");
}
//call the function 3times with 3different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "butter", "Mayo", "Egg", "Ketchup", "Lettuce", "Blackpepper");
