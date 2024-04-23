import { Order } from './composite';

class DiscountDecorator extends Order {
    constructor(private order: Order, private discountRate: number) {
        super();
    }

    calculateTotal(): void {
        this.order.calculateTotal();
        const total = this.order.getTotal();
        const discount = total * this.discountRate;
        console.log(`Applying discount: $${discount}`);
        this.order.setTotal(total - discount);
    }
}

export { DiscountDecorator };
