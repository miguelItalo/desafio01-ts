import { DioAccount } from "./DioAccount"

export class PremiumAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (deposit: number) => {
        if(this.validateStatus()){
            this.balance += deposit + 10
            console.log(`You deposited $${deposit} and got a $10 freebie from the bank, totaling a deposit of $${deposit + 10}`)
        }
    }
}