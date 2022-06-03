const myArgs = process.argv.slice(2);


console.log(myArgs)

function add(num ,num2) {
    return Number(num) + Number(num2)
}


console.log(add(myArgs[0],myArgs[1]))