import { OrderComponent } from './composite';

class OrderDecorator implements OrderComponent {
    protected wrappee: OrderComponent;

    constructor(order: OrderComponent) {
        this.wrappee = order;
    }

    calculateTotal() {
        this.wrappee.calculateTotal();
    }

    getTotal(): number {
        return this.wrappee.getTotal();
    }

    setTotal(total: number): void {
        this.wrappee.setTotal(total);
    }
}

class DiscountDecorator extends OrderDecorator {
    private discountRate: number; // e.g., 0.1 for 10% discount

    constructor(order: OrderComponent, discountRate: number) {
        super(order);
        this.discountRate = discountRate;
    }

    calculateTotal() {
        super.calculateTotal();
        const total = super.getTotal();
        const discount = total * this.discountRate;
        console.log(`Applying discount: -$${discount}`);
        super.setTotal(total - discount);
    }
}

class ServiceChargeDecorator extends OrderDecorator {
    private serviceCharge: number;

    constructor(order: OrderComponent, serviceCharge: number) {
        super(order);
        this.serviceCharge = serviceCharge;
    }

    calculateTotal() {
        super.calculateTotal();
        const total = super.getTotal();
        console.log(`Adding service charge: +$${this.serviceCharge}`);
        super.setTotal(total + this.serviceCharge);
    }
}

export { DiscountDecorator, ServiceChargeDecorator };
