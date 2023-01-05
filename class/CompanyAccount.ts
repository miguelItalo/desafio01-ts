import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (loanValue: number): void => {
        if(this.validateStatus()){
            this.balance += loanValue
            console.log(`You took a loan of $${loanValue}`)
        }
    }

}