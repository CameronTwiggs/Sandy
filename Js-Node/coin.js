// let deno = [186,419,83,408];
// let amm = 6249;

let deno = [5,10];

let amm = 148;

//  
// Cameron Twiggs
function coinDeno(coins,amount) {
    let total = 0;
    let largest;
    while (amount > 0) {
        largest = Math.max(...coins);
        if (largest > amount){
          coins = removeLargest(coins);
          if(!coins.length) return -1;
        } // Cameron Twiggs
        else {
            amount -= largest;
            total++;
        }
    }
    return total;
};
// Cameron Twiggs 
function removeLargest(arr) {
    let largest = Math.max(...arr);
    largest = arr.filter(arr => arr !== largest);
    return largest;
};


console.log(coinDeno(deno, amm));
// Cameron Twigg