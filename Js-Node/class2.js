class Person {

    constructor (name = "Jon Doe", job = "Boomer", age = 99) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    randommethodname() {
        return this.name
    }

    ageUp(){
        this.age += 10;
        return this.age
    } 

    changeJob(newJob) {
        this.job = newJob
        return this.job
    }

}

const John = new Person("Cam", undefined, 12)
console.log(John)

// const Cam = new Person("Cam",19,"Pizza Delivery")
// const Mac = new Person("Mac",91,"Developer")



// class Job extends Person {
    

//     constructor(name,age,job, timeSpent, title, payRate) {
//         super(name,age,job)
//         this.timeSpent = timeSpent;
//         this.title = title;
//         this.payRate = payRate;
//     }

//     listPayRate() {
//         return this.payRate
//     }

// }

// const Dev = new Job("Cam",19,"Dev",2,"JR. Dev", 55);
