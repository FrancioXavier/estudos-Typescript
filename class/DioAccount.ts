export abstract class DioAccount{
    private readonly name:string
    private readonly id: Number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, id: Number){
        this.name = name
        this.id = id
    }

    getName = ():string => {
        return this.name
    }

    deposit = (value: number):void => {
        if(this.validateStatus()){
            this.balance += value;
            console.log(`Você depositou ${value}, seu saldo agora é ${this.balance}`)
        }
    }

    withdraw = (value: number):void => {
        if(this.validateStatus() && this.balance >= value){
            this.balance -= value;
            console.log(`Você sacou ${value}, seu saldo agora é ${this.balance}`);
        }else{
            console.log(`Você não pode sacar um valor maior do que tem!`);
        }
    }
    getBalance = ():number => {
        return this.balance
    }

    private validateStatus = ():boolean => {
        if(this.status){
            return true
        }

        throw new Error
    }

    readonly getStatus = ():boolean => {
        if(this.validateStatus()){
            return true
        } else{
            return false
        }
    }
}

