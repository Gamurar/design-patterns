import { PaymentAdapter } from './adapter';
import { Order } from './composite';

class OrderProcessingFacade {
    private paymentProcessor: PaymentAdapter;

    constructor(paymentProcessor: PaymentAdapter) {
        this.paymentProcessor = paymentProcessor;
    }

    processOrder(order: Order): void {
        console.log('Order processing started...');
        order.calculateTotal();
        this.paymentProcessor.processPayment(order.getTotal());
        console.log('Order processed successfully');
    }
}

export { OrderProcessingFacade };
