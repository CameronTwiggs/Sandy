
function evenOdd(arr){
    
    const odd=[]
    const even=[]
    for(let i = 0; i<= arr.length;i++){
        
        if(arr[i] % 2==0){
            even.push(arr[i])
        
        }else if(arr[i] %1==0){
            odd.push(arr[i])
        }
    } 
return(`even number:${even} Odd Number ${odd}`)
}
let bat=[2,4,7,11,15,16]
console.log(evenOdd(bat))

//by somesh with help from cameron

