//creating an Array
 let userName =["Sara","Haiqa","Zara","Admin" ,"Mehreen"];
//removed all values from an array now an array is empty 
 userName =[]
//if statement for checking an array is empty
 if(userName.length===0){
    console.log("Your array is empty.We need to find some users")}else
    {
        //using foreach loop on Array
        userName.forEach(oneUser =>{
            if (oneUser ==="Admin "){
                console.log(`Hello ${oneUser},would you like to see a status report?`)}
                else{
                    console.log(`Hello ${oneUser},thankyou for logging in again.`)}
                })
            }