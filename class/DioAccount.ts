export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true 

  constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
  }
  setName = (name: string): void => {
      this.name = name
      console.log('Successfully changed name')
  }
  getName = (): string => {
      return this.name
  }
  deposit = (deposit: number): void => {
      if(this.validateStatus()){
          this.balance += deposit
          console.log(`You deposited $${deposit}`)    
      }
  }
  withdraw = (withdrawalValue: number): void => {
      if(this.validateStatus()){
          if(withdrawalValue <= this.balance){
              this.balance -= withdrawalValue
              console.log(`You withdrew $${withdrawalValue}`)
          }
          else{
              throw new Error('Insufficient balance')
          }
      }
  }
  getBalance = (): void => {
      console.log(this.balance)
  }
  protected validateStatus = (): boolean => {
      if(this.status){
          return this.status
      }
      throw new Error('Invalid Account')
  }
}