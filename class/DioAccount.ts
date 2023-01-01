export abstract class DioAccount{
    name:string
    id: Number
    balance: number = 0

    constructor(name: string, id: Number){
        this.name = name
        this.id = id
    }

    deposit = ():void => {
        console.log("Você depositou")
    }

    withdraw = ():void => {
        console.log('Voce sacou')
    }
}

