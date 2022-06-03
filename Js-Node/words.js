let arr =  ["Osiel", "Jordan", "Jodi", "Narivi"]
function rev(x) {
    let arr = []
    for(let i = 0; i < x.length; i++) {
        arr.unshift(x[i])
    }
    return arr
}

console.log(rev(arr))