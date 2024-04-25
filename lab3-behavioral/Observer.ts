import { NotificationStrategy } from "./Strategy";

export interface Subscriber {
  update(message: string, type: string): void;
}

export class EventNotifier {
  private subscribers: Subscriber[] = [];
  private strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
      this.strategy = strategy;
  }

  setStrategy(strategy: NotificationStrategy) {
      this.strategy = strategy;
  }

  attach(subscriber: Subscriber): void {
      const isExist = this.subscribers.includes(subscriber);
      if (!isExist) {
          this.subscribers.push(subscriber);
      }
  }

  detach(subscriber: Subscriber): void {
      const subscriberIndex = this.subscribers.indexOf(subscriber);
      if (subscriberIndex !== -1) {
          this.subscribers.splice(subscriberIndex, 1);
      }
  }

  notify(message: string): void {
      console.log('Notifying subscribers...');
      for (const subscriber of this.subscribers) {
          this.strategy.send(message, subscriber);
      }
  }
}

export class User implements Subscriber {
  constructor(public name: string) {}

  update(message: string, type: string): void {
      console.log(`${this.name} received ${type}: ${message}`);
  }
}
