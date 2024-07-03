var guestslist = ["Sara", "Haiqa", "Mehreen", "Zara"];
var dontcome = guestslist[0];
console.log(dontcome, "will not come");
guestslist.splice(0, 1, "Hira");
console.log("Good news we have found a bigger table");
guestslist.unshift("Adeena");
guestslist.push("zareen");
var middleIndex = Math.floor(guestslist.length / 2);
guestslist.splice(middleIndex, 0, "Samra");
console.log("Updated list for our guest");
guestslist.forEach(function (oneguest) { return console.log("Hi ".concat(oneguest, ",would you like to come to my dinner party")); });
console.log("Unfortunately,the bigger table cant come on time so, I can only invite two guest");

while(guestslist.length > 2 );{
    let removedGuests=guestslist.pop();
    console.log(`sorry, ${removedGuests},I cant invite you to my dinner party`);
}
console.log("invitation to last two guests");
guestslist.pop();
guestslist.pop();
console.log("Empty List:",guestslist);
