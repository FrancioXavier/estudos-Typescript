import { DioAccount } from './DioAccount';

export class SuperAccount extends DioAccount{

    constructor(name:string, id:number){
        super(name, id);
    }

    superDeposit = (value:number):void =>{
        if(!this.getStatus()){
            console.log('IH');
        }else{
            this.deposit(value + 10);
            console.log(`Você fez um super depósito de ${value}! Seu saldo agora é ${this.getBalance()}`);
        }
    }
}