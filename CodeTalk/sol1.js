// You will be given a string and you task will be to return a list of ints detailing 
// the count of uppercase letters, lowercase letters, numbers, and special characters as follows
//  [uppercase,lowercase,numbers,special]

const solve = (s) => {
    result = [0,0,0,0];

    for (let i = 0; i < s.length;i += 1) {
        if (s[i].toLowerCase() > s[i]) {
            result[0] += 1;
        }
        else if (s[i].toUpperCase() < s[i] ) {
            result[1] += 1;
        }
        else if (s[i] >= 0 && s[i] <= 9) {
            result[2] += 1;
        }
        else {
            result[3] += 1;
        }
    }
    return result;
}

console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"),"[uppercase,lowercase,numbers,special]")

