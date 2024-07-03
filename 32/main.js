//Array of current users
var current_users = ["sara", "haiqa", "Zara", "Mehreen"];
//Array of new users
var new_users = ["Samra", "Haiqa", "Zara", "Mehreen"];
//loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, "is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, "is available"));
    }
});
