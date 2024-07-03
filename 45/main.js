//define a function to create a car object with potional options
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //OInitializing a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim] = option.split();
    });
    return car;
}
//call a car function to create a car object
var my_car = create_car("Toyota", "Corolla", "color:Black", "Sunroof:true");
//print the variable show all the information is stored in the car object
console.log(my_car);
