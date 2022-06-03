function secure() {
    const pii = {
        name : "Cam",
        ssn  : 123456789,
        job : "Dev"
    }

    return {
        getName() {
            return pii.name;
        },
        getJob () {
            return pii.job;
        }
    }
}

const person = secure();
console.log(person)
console.log(person.getName());

// let arr = [10]

// function add(num1,num2) {
//     let arr = [12,234,56,654]
//     let total
//     total = num1 + num2
//     return total
// }

// console.log(arr)

// add()