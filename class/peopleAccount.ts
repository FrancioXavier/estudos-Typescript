import { DioAccount } from "./DioAccount";

export class peopleAccount extends DioAccount{
    doc_id: number

    constructor(doc_id: number, name: string, id: number){
        super(name, id)
        this.doc_id = doc_id
    }
}