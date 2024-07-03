var personalName = "samra Shakeel";
console.log(personalName.toLowerCase());
console.log(personalName.toUpperCase());
console.log(personalName.replace(/\b\w/g, function (abcd) { return abcd.toUpperCase(); }));
