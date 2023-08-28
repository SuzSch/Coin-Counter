
export default class Calculator{
    constructor(amount){
        this.amount = amount;
    }

    calculate(){
        let newAmount;
        for(let x = this.amount; x > 0; x = newAmount){
            if (x >= 0.25){
                //how many full quarters go into the amount
                const quarters = x / 0.25;
                //what is left over. This will always be less than 0.25
                newAmount = x % 0.25;
                return newAmount;
            }
            else if(x >= 0.10){
                const dimes = newAmount / 0.10;
                newAmount = x % 0.10;
                return newAmount;
            }
        } 
    }
}


let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;


const CoinCounter = (amount) => {
    
    console.log(pennies)
    console.log(nickels)
    console.log(dimes)
    console.log(quarters)
    if (amount < 0.01){
        return amount;
    }
    else{
        if(amount > 0 && amount < 0.05){
            pennies += 1
            return CoinCounter(amount - 0.01);
        }
        else if(amount >= 0.05 && amount < 0.10){
            nickels += 1
            return CoinCounter(amount - 0.05);
        }
        else if(amount >= 0.10 && amount < 0.25){
            dimes += 1
            return CoinCounter(amount - 0.10);
        }
        else if(amount >= 0.25){
            quarters += 1
            return CoinCounter(amount - 0.25);
        }
    }
}