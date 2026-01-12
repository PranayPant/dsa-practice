export enum ICustomerGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}
export interface ICustomer {
    name: string;
    gender: ICustomerGender;
}
