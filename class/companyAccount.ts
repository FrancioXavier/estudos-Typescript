import { DioAccount } from './DioAccount'

export class companyAccount extends DioAccount{

    constructor(name: string, id: number){
        super(name, id)
    }

    getloan = (): void => {
        console.log('Você pegou um empréstimo')
    }

    deposit = ():void => {
        console.log('A empresa depositou')
    }
}