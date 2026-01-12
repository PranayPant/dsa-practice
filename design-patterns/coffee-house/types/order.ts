export interface IMenuItem {
    _id: string;
    displayName: string;
    description: string;
    price: number;
}

export enum IOrderStatus {
    PLACED = "PLACED",
    PROCESSING = "PROCESSING",
    READY = "READY",
    ERROR = "ERROR",
}

export interface IObservable<O = unknown> {
    subscribe: (observer: O) => void;
    unsubscribe: (observer: O) => void;
}

export interface IOrderObserver {
    onOrderPlaced(ticketId: string): void;
    onOrderProcessing(status: IOrderStatus): void;
    onOrderReady(ticketId: string, order: IOrder): void;
    onError(reason: string): void;
}

export interface IOrderEvent {
    _id: string;
    orderId: string;
    orderStatus: IOrderStatus;
}

export interface IOrder {
    _id: string;
    ticketNumber: number;
    status: IOrderStatus;
    items: IMenuItem[];
}

export interface ICoffeeHouse {
    menu: IMenuItem[];
    placeOrder: (order: IOrder) => IObservable<IOrderObserver>;
}
