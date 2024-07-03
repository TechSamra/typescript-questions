let guestslist =["Sara","Haiqa","Mehreen","Zara"];

let dontcome =guestslist[0];

console.log(dontcome,"will not come");

guestslist.splice (0,1,"Hira");
console.log("Good news we have found a bigger table");
guestslist.unshift("Adeena");
guestslist.push("zareen");
let middleIndex : number = Math.floor(guestslist.length/2);
guestslist.splice(middleIndex ,0, "Samra");
console.log ("Updated list for our guest");
guestslist.forEach(oneguest =>console.log(`Hi ${oneguest},would you like to come to my dinner party`));