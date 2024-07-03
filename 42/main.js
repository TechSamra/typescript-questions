function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
function make_great(magicians) {
    magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an Array of magicians names
var magicians_names = ["Harray potter", "Samra", "Hira"];
//Call make_great function to modify magicians names
var great_magicians = make_great(magicians_names);
//Call show_magicians function to modify list of magicians
show_magicians(great_magicians);
