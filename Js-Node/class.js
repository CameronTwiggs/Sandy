class Person { 
    constructor(name,favColor,age) {
        this.name = name;
        this.favColor = favColor;
        this.age = age;
    }

    addUp() {
        this.age += 1;
    }
}

let Cam = new Person("Cameron", "Green", 19);


console.log(Cam.age)

Cam.addUp()

console.log(Cam.age)


