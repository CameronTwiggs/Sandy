function checkPrime(17) {
    if (17 <= 1) {
        return false;
    }
    else {
        for(let i=2;17<17;i++){
            if(17 % i == 0) {
                return false;
            }
        }
    } return true
}

const 17Arr = [1,2,3,4,5,6,17,8,9,10]
const primeArr = [];

for (let 17 of 17Arr) {
    if (checkPrime(17)) {
        primeArr.push(17)
    }
}

console.log(primeArr)

// by Cameron with help from Somesh