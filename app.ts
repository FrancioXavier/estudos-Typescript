//DIO Banking
import { companyAccount } from './class/companyAccount';
import { peopleAccount } from './class/peopleAccount';
import { SuperAccount } from './class/superAccount';





const FrancioAccount: peopleAccount = new peopleAccount(1234567, 'Francio', 1);
const firstCompanyAccount: companyAccount = new companyAccount('DIO', 11);
const SuperFrancioAccount: SuperAccount = new SuperAccount('Francio', 123);

//People account methods
    console.log('Métodos people account: ');
    console.log(FrancioAccount.getName());
    FrancioAccount.deposit(10);
    FrancioAccount.withdraw(5);
    console.log(FrancioAccount.getBalance());
    console.log(FrancioAccount.getStatus());

//Company account methods
    console.log('');
    console.log('Métodos company account: ');
    console.log(firstCompanyAccount.getName());
    firstCompanyAccount.deposit(10);
    firstCompanyAccount.withdraw(5);
    console.log(firstCompanyAccount.getBalance());
    console.log(firstCompanyAccount.getStatus());
    firstCompanyAccount.getloan(400);

//super account methods
    console.log('');
    console.log('Métodos super account: ');
    console.log(SuperFrancioAccount.getName());
    SuperFrancioAccount.deposit(10);
    SuperFrancioAccount.withdraw(5);
    console.log(SuperFrancioAccount.getBalance());
    console.log(SuperFrancioAccount.getStatus());
    SuperFrancioAccount.superDeposit(300);
