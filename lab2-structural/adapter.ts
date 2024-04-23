interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalPaymentProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
      console.log(`Processing PayPal payment of $${amount}`);
  }
}

class StripePaymentProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
      console.log(`Processing Stripe payment of $${amount}`);
  }
}

class PaymentAdapter implements PaymentProcessor {
  private paymentService: PaymentProcessor;

  constructor(paymentService: PaymentProcessor) {
      this.paymentService = paymentService;
  }

  processPayment(amount: number): void {
      this.paymentService.processPayment(amount);
  }
}

export { PaymentAdapter, PayPalPaymentProcessor, StripePaymentProcessor };
