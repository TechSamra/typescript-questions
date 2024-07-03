//Define a function with a rest parameter that accept items arguments representing our sandwich

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:\n");

    items.forEach(singleItem => console.log("-"  + singleItem));
    console.log("\nNow enjoy sandwich");
}

    //call the function 3times with 3different number of arguments
    makeSandwich("Chicken","Cheese","Mayo","Egg");

    makeSandwich("Bread","Butter");

    makeSandwich("Bread","butter","Mayo","Egg","Ketchup","Lettuce","Blackpepper");

