function show_magicians(magicians : string[]){

    magicians.forEach(names => console.log(names));
}

function make_great(magicians: string[]){
    return magicians.map(name=> `The Great ${name}`);
}
//Define an Array of magicians names
let magician_names=["Harray potter","Samra","Hira"];
 
//make a copy of original array through .slice function
let copy_magician_names = magician_names.slice();

//Modify the copied array to include "the great" with their names
let copy_great_magicians=make_great(copy_magician_names);

// show both arrays Original and Copied

//Original
show_magicians(magician_names);

//copied
show_magicians(copy_great_magicians);
    