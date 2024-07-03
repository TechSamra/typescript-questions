function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an Array of magicians names
var magician_names = ["Harray potter", "Samra", "Hira"];
//make a copy of original array through .slice function
var copy_magician_names = magician_names.slice();
//Modify the copied array to include "the great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays Original and Copied
//Original
show_magicians(magician_names);
//copied
show_magicians(copy_great_magicians);
