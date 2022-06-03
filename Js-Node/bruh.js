// Create a for loop that returns an array greater than or equal to 21

function createArr (arr,num) {
    for (let i=0; i < num + 1; i++) {
        arr.push(i)
    }
    return arr
}

let bruh = createArr([],21)
console.log(bruh)