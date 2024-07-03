//define a function to create a car object with potional options
function create_car(manufacturer,model,...options){
    //OInitializing a car object with manufacturer and model
    let car={
        manufacturer: manufacturer,
        model:model
    };
    //Add additional options to the car object
    options.forEach(option =>{
        let[key,value] = option.split(":");
        car[key.trim]=option.split();
    });
    return car;
}
//call a car function to create a car object
let my_car=create_car("Toyota","Corolla","color:Black","Sunroof:true");

//print the variable show all the information is stored in the car object
console.log(my_car)