let car = {
    make: "Honda",
    model: "Civic",
    year: "2016",
    milage: 40000,
    color: "black",

    driveToWork() {
        this.milage += 33
        console.log(`old milage: ${this.milage - 33} new milage: ${this.milage}`)
    },

    driveAroudTheWorld() {
        this.milage += 24000
        console.log(`old milage: ${this.milage - 24000} new milage: ${this.milage}`)
    },

    runErrands() {
        this.milage += 30
        console.log(`old milage: ${this.milage - 30} new milage: ${this.milage}`)
    }
}

car.driveToWork();
car.driveAroudTheWorld();
car.runErrands();


console.log(car.milage)


// by Cameron with help from Somesh