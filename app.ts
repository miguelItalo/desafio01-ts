import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Conguitos', 1)
peopleAccount.deposit(20)
peopleAccount.withdraw(20)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Chimpa construções', 2)
companyAccount.getLoan(20)
console.log(companyAccount)

const premiumAccount: PremiumAccount = new PremiumAccount('Chokito', 3)
premiumAccount.deposit(100)
premiumAccount.withdraw(55)
console.log(premiumAccount)