//creating aArray
var petAnimals = ["cat", "Dog", "Rabbit"];
//using for loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var onepet = petAnimals_1[_i];
    console.log("A ".concat(onepet, "would make a great pet."));
    console.log("Any of these animal will make a great pet!\n");
}
//print aMessage outside of for-loop
console.log("Any of these animals would make a great pet!");
