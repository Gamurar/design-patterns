// src/Order.ts
import { Product } from "./Product";

export class Order {
    constructor(public orderId: number, public products: Product[], public username: string) {}

    clone(): Order {
        console.log(`Cloning order ${this.orderId}`);
        return new Order(this.orderId, this.products.map(product => product), this.username);
    }
}
