//Define a function to proint each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
//Define an array containing magicians names
var magicians_names = ["Harray potter", "Samra", "Haiqa"];
//Call the function to each magicians name
show_magicians(magicians_names);
