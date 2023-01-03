import { DioAccount } from './DioAccount';

export class companyAccount extends DioAccount{

    constructor(name: string, id: number){
        super(name, id)
    }

    getloan = (value:number): void => {
        if(this.getStatus()){
            this.deposit(value);
            console.log(`Você pegou um empréstimo de ${value}, seu saldo agora é ${this.getBalance()}`)
        }
    }
}