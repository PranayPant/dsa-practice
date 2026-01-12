import { IObservable, IOrder, IOrderEvent, IOrderObserver } from "./types/order";

export class ObservableOrder implements IObservable<IOrderObserver> {
    #dto: IOrder;
    #messages: IOrderEvent[];
    #observers: IOrderObserver[];

    subscribe(observer: IOrderObserver) {
        this.#observers.push(observer);
    }

    unsubscribe(observer: IOrderObserver) {
        this.#observers = this.#observers.filter((obs) => obs !== observer);
    }
}
