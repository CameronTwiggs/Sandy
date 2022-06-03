class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        if(this.items.length == 0) {
            return "Its already empty bro";
        }
        this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length == 0
    }

    printStack() {
        let str = "";
        for (let item of this.items) {
           str += `${item} \n`
        }
        return str
    }
}

const isBalenced = str => {
    const stack = new Stack();
    let check = ""
    for (let char of str) {
        if (char == "[" || char == "(" || char == "{") {
            stack.push(char)
            stack.printStack()
        }
        else if (char == "]" || char == ")" || char == "}")  {
            check = stack.peek() + char;
            if (check !== "{}" && check !== "()" && check !== "[]") { // tests if string matches with isint correct..
                return false
            }
            stack.pop();
        }
    }
    if(stack.isEmpty()) {
        return true
    }
    return false
}


console.log(isBalenced("({}"))