barray = [1,2,1,2,1]


function boom (arr) {
    let boom = 0
    arr.forEach( (element, index) => {
     if (arr[index] == arr[index + 2] && arr[index + 1] != arr[index]) {
        boom += 1
     } 
    })
    return boom
}

console.log(boom(barray));
