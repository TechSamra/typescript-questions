function show_magicians(magicians : string[]){
    magicians.forEach(names => console.log(names));
}

function make_great(magicians: string[]){
    return magicians.map(name=> `The Great ${name}`);
}
//Define an Array of magicians names
let magicians_names=["Harray potter","Samra","Hira"];
 
//Call make_great function to modify magicians names

let great_magicians : string[]= make_great(magicians_names);
//Call show_magicians function to modify list of magicians

show_magicians(great_magicians);

    




