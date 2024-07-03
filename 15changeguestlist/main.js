var guestslist = ["Sara", "Haiqa", "Mehreen", "Zara"];
var dontcome = guestslist[0];
console.log(dontcome, "will not come");
guestslist.splice(0, 0, "Hira");
guestslist.forEach(function (guest) { return console.log("Hi,".concat(guest, ",will you like to dinner with me")); });
