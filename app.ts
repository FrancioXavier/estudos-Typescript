//DIO Banking
import { companyAccount } from './class/companyAccount'
import { peopleAccount } from './class/peopleAccount'





const firstPeopleAccount: peopleAccount = new peopleAccount(1234567, 'Francio', 1)
const firstCompanyAccount: companyAccount = new companyAccount('DIO', 11)


firstCompanyAccount.deposit()