// Making an array of countries to visit
let countriesToVisit: string[] =["China","Australia","Bangladesh","Malaysia"];
//printing array in its original form
console.log("originalorder:",countriesToVisit);
//printing array in alphabetical order without modifying the array actual list
console.log("Alphabeticalorder:",[...countriesToVisit].sort());
console.log("still in original order:",countriesToVisit);
//printing array in reversed order without modifying array actual list
console.log("reverseorder:",[...countriesToVisit].reverse());
console.log("still in original order:",countriesToVisit);
// changed the original Array order
console.log("Original Array reversed :",countriesToVisit.reverse());
//printing the Array to show it is back to its original order 
console.log("back to original Order:",countriesToVisit.reverse());
//printing the Array to show that it has changed in Alphabetical Order
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());
//changing again the original Array order in reversed order
console.log("Orininal Array reversed again:",countriesToVisit.reverse());



