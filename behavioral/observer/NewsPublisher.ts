interface Subscriber {
  update: (message: string) => void;
}

class NewsPublisher {
  private subscribers: Subscriber[] = [];

  public subscribe(subscriber: Subscriber): void {
      this.subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: Subscriber): void {
      this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }

  public notifySubscribers(message: string): void {
      this.subscribers.forEach(sub => sub.update(message));
  }
}

class EmailSubscriber implements Subscriber {
  update(message: string): void {
      console.log(`Email Alert: ${message}`);
  }
}

class SMSSubscriber implements Subscriber {
  update(message: string): void {
      console.log(`SMS Alert: ${message}`);
  }
}

export { NewsPublisher, EmailSubscriber, SMSSubscriber };
