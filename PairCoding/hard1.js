function checkBrackets(str) {
    let cRound = 0; // round ()
    let cCurly = 0; // curly {}
    let cSquare = 0; // square []
    for (let char of str) {
        switch (char) {
            case "{":
                cCurly++
                break
            case "}":
                cCurly--
                break
            case "(":
                cRound++
                break
            case ")":
                cRound--
                break
            case "[":
                cSquare++
                break
            case "]":
                cSquare--
                break
        }

    }
// return(cCurly==cRound&&cCurly==cSquare)
console.log(cCurly, cRound, 2);
    
}
console.log(checkBrackets("(This is real)"))
//by somesh with help from cameron