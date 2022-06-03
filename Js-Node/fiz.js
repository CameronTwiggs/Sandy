function FizzBuzz(n) {
    for (let i=0;i <= n;i++) {
        if(!(i % 15)){
            console.log("FizzBuzz")
        }
        else if(!(i % 3)) {
            console.log("Fizz")
        }
        else if (!(i % 5)) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
    
}


const sFizzBuzz = (num) => {
    return((num % 3 ? '' : 'fizz') + (num % 5 ? '' : 'buzz') || num)
}

const ssFizzBuzz = (max) => {
    for (let i=0; i <= max; i++) {
        console.log(sFizzBuzz(i))
    }
}

ssFizzBuzz(15)



// The FizzBuzz problem is a classic test given in coding interviews. 
// The task is simple: Print integers 1 to N, but print “Fizz” if an integer is divisible by 3,
// “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5