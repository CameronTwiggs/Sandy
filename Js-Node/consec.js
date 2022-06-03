function consecutive(arr, a, b) {
    let opts = [a + "" + b, b + "" + a];
    let result;

    for (let i = 0; i < arr.length - 1; i++) {

        const win = [arr[i], arr[i + 1]].join("");
        const match = opts.indexOf(win) !== -1;

        if (match) {
            result = match;
            break;
        } else {
            if (result !== true) result = match;
        }
    }
    return result;
}


consecutive([12,544,3,1],1,3)