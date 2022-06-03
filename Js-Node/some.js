const isBalenced = str => {
    const stack = [];
    let check = "";

    for (let cha of str) {
        if (cha == "[" || cha == "(" || cha == "{") { // If theres an opening
            stack.push(cha);
        } else if (cha == "]" || cha == ")" || cha == "}") { // if theres a closing
            check = stack[stack.length - 1] + cha; // they will contat the string to check for later // {]
            if (check !== "{}" && check !== "()" && check !== "[]") { // tests if string matches with isint correct..
                return false
            }
            stack.pop()
        }
    }
    //// validates if its really true
    if (stack.length == 0) {
        return true
    }
    return false
}

console.log(isBalenced("{()"))
