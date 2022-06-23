function vowelChecker(x){
vowels=["a","e","i","o","u"]
for(let vowel of vowels){
    if (vowel==x){
       return true 
    }else{
        return false
    }        
}
}
vowelChecker("a")
console.log(vowelChecker("a"))
//by somesh with help from cameron