 // 1 Convert the following function into an arrow function named "arrowMyFunction".
const myFunction = function (num1, num2) {
    return num1 + num2;
};


const arrowMyFunction = (num1, num2) => num1 + num2;  // ES6
console.log(arrowMyFunction(12,12))

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
const add100 = function (money) {
    return money + 100;
};

const arrowAdd100 = num => num + 100;

console.log(arrowAdd100(23))

//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
let countLetters = (str,ch)=> {
    let count = 0;
    for (let char of str) {
        if(char.toLowerCase() == ch.toLowerCase()) {
            count++
        }
    }
    return count
    //  `The letter ${ch} appears in "${str}" ${count} times.`
}


console.log(countLetters("I came, I saw, I conquered, as the first baby in the family always does.", "i"))