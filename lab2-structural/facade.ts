import { PaymentProcessor } from './adapter';
import { OrderComponent } from './composite';

class OrderProcessingFacade {
    private paymentProcessor: PaymentProcessor;

    constructor(paymentProcessor: PaymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    processOrder(order: OrderComponent): void {
        console.log('Order processing started...');
        order.calculateTotal();
        this.paymentProcessor.makePayment(order.getTotal());
        console.log('Order processed successfully');
    }
}

export { OrderProcessingFacade };
