import { StripeAdapter, PayPalPaymentProcessor, StripePaymentProcessor } from './adapter';
import { OrderProcessingFacade } from './facade';
import { DiscountDecorator, ServiceChargeDecorator } from './decorator';
import { Order, Product } from './composite';

// Setting up components
const order = new Order();
const product1 = new Product(100);
const product2 = new Product(200);

order.addComponent(product1);
order.addComponent(product2);

// Applying a discount
const discountedOrder = new DiscountDecorator(order, 0.1);
const finalOrder = new ServiceChargeDecorator(discountedOrder, 15);

// Processing payment
console.log("--- Processing payment by Stripe (discounted order) ---");
const paymentProcessor = new StripeAdapter(new StripePaymentProcessor());
const orderProcessor = new OrderProcessingFacade(paymentProcessor);
orderProcessor.processOrder(discountedOrder);

console.log("--- Processing payment by Paypal (final order) ---");
const orderProcessorPaypal = new OrderProcessingFacade(new PayPalPaymentProcessor());
orderProcessorPaypal.processOrder(finalOrder);
