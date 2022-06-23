function gcd(num1,num2){
    while(num1){
        var hold=num1
        num1= num2 % num1
        num2=hold

    }
return num2

} 
console.log(gcd(336,360))
//by somesh with help from cameron