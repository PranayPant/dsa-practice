import { IOrder } from "../../types/order";

export interface IWaitingStrategy {
    waitForOrder: (order: IOrder) => void;
}
