let guestslist = ["Sara","Haiqa","Mehreen","Zara"];

let dontcome =guestslist [0];

console.log(dontcome,"will not come");

guestslist.splice(0,0, "Hira");

guestslist.forEach(guest => console.log(`Hi,${guest},will you like to dinner with me`));