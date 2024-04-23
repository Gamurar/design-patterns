export interface PaymentProcessor {
  makePayment(amount: number): void;
}
class PayPalPaymentProcessor implements PaymentProcessor {
  makePayment(amount: number): void {
    console.log(`Making PayPal payment of $${amount}`);
  }
}

class StripePaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Stripe payment of $${amount}`);
  }
}

class StripeAdapter extends PayPalPaymentProcessor implements PaymentProcessor {
  private stripe: StripePaymentProcessor;

  constructor(stripe: StripePaymentProcessor) {
    super();
    this.stripe = stripe;
  }

  makePayment(amount: number): void {
    this.stripe.processPayment(amount);
  }
}

export { StripeAdapter, PayPalPaymentProcessor, StripePaymentProcessor };
