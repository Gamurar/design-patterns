// Prototype
import { DatabaseConnection } from "./DatabaseConnection";
import { Product } from "./Product";

interface IPrototype {
    clone(): IPrototype;
}

export class Order implements IPrototype {
    constructor(public orderId: number, public products: Product[], public username: string) {
        const db = DatabaseConnection.getInstance();
        db.query(`INSERT INTO orders (order_id, products, username) VALUES (${orderId}, ${JSON.stringify(products)}, ${username})`);
    }

    clone(): Order {
        console.log(`Cloning order ${this.orderId}`);
        return new Order(this.orderId, this.products.map(product => product), this.username);
    }
}
