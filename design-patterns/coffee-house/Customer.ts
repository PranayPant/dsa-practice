import { ICustomer, ICustomerGender } from "./types/customer";

export class Customer implements ICustomer {
    name: string;
    gender: ICustomerGender;
    constructor(name: string, gender: ICustomerGender) {
        this.name = name;
        this.gender = gender;
    }
    onOrderPlaced(ticketId: string): void {
        console.log("");
    }
}
