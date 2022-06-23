// You will be given a string and you task will be to return a list of ints detailing 
// the count of uppercase letters, lowercase letters, numbers, and special characters as follows


function solve(s) { 
    const uppercase = s.replace(/[^A-Z]*/g,"").length; // "CSBWLHIYOD"
    const lowercase = s.replace(/[^a-z]*/g,"").length;
    const numbers = s.replace(/[^0-9]*/g,"").length;
    const special = s.replace(/[^\W]*/g,"").length;
    return [uppercase,lowercase,numbers,special];
}


console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"))