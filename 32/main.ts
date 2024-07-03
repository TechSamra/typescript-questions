//Array of current users
let current_users =["sara","haiqa","Zara","Mehreen"];
//Array of new users
let new_users =["Samra","Haiqa","Zara","Mehreen"];
//loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user =>{
    let our_condition =current_users.some(current_one_user => current_one_user.toLowerCase()===new_one_user.toLowerCase())
    if (our_condition){
        console.log(`sorry ${new_one_user}is already taken!`)

    }else{
    console.log(`This Username ${new_one_user}is available`)}})

