export abstract class DioAccount{
    private name:string
    readonly id: Number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, id: Number){
        this.name = name
        this.id = id
    }

    setName = (name:string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso!');
    }

    getName = (name:string):string => {
        return this.name
    }

    deposit = ():void => {
        if(this.validateStatus()){
            console.log("Você depositou")
        }
    }

    withdraw = ():void => {
        console.log('Voce sacou')
    }
    getBalance = ():void => {
        console.log(this.balance);
    }

    private validateStatus = ():boolean => {
        if(this.status){
            return true
        }

        throw new Error
    }
}

