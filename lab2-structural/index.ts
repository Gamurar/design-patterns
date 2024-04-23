import { PaymentAdapter, PayPalPaymentProcessor, StripePaymentProcessor } from './adapter';
import { OrderProcessingFacade } from './facade';
import { DiscountDecorator } from './decorator';
import { Order, Product } from './composite';

// Setting up components
const order = new Order();
const product1 = new Product(100);
const product2 = new Product(200);

order.addComponent(product1);
order.addComponent(product2);

// Applying a discount
const discountedOrder = new DiscountDecorator(order, 0.1);
discountedOrder.calculateTotal();

// Processing payment
const paymentProcessor = new PaymentAdapter(new PayPalPaymentProcessor());
const orderProcessor = new OrderProcessingFacade(paymentProcessor);
orderProcessor.processOrder(discountedOrder);
