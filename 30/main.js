//Creating a Array
var userNames = ["Sara", "Haiqa", "Zara", "Admin", "Yusra"];
//using Foreach Loop onarray
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin ") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thankyou for logging in again."));
    }
});
