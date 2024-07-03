//Define variable
let apple ="apple";
let uppercaseApple="APPLE";
let ten =10;
let twenty=20;
let fruits = ["apple","banana", "orange"];

// testing equality and inequality
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple !="apple");
// testing using lowercase
console.log("\nIs APPLE equals to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()=="apple");
 
console.log("\nIs Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()!="apple");

//Numeric test
console.log("\nIs ten equal to twenty?");
console.log(ten==twenty);

//Not equal to
console.log("\n Is ten not equal to twenty");
console.log(ten!=twenty);

//greater than
console.log("\nIs ten greater than 5?");
console.log(ten>5);

//lesser than
console.log("\nIs ten lesser than 5?");
console.log(ten<5);

// greater than or equal to
console.log("\n Is ten equal to or greater than 5?");
console.log(ten>=5);

//lesser than or equal to
console.log("\nIs ten less than or equal to 5?");
console.log(ten<=5);
//test using and or operators
// using $$ and
console.log("\n twenty is not equal to ten and twenty is greater than ten");
console.log(twenty !=10 && twenty > 10);

console.log("\n Is twenty equal to ten and twenty is greater than 10?");
console.log(twenty ==10 && twenty >10);


//using || or
console.log ("\n twenty is greater than 50 or twenty is equal to 20?");
console.log(twenty>50 || twenty==20);

console.log("\ntwenty is greater than 50 or twenty is not equal to 20?");
console.log(twenty>50 || twenty !=20);

// testing whether an item is included in an array
console.log("\n Is orange included in fruits array?");
console.log(fruits.includes("orange"));
//not include 
console.log("\n Is orange not include in my array")
console.log(!fruits.includes("orange"));


