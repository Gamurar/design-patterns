import { Subscriber } from "./Observer";

export interface NotificationStrategy {
  send(message: string, user: Subscriber): void;
}

export class EmailNotification implements NotificationStrategy {
  send(message: string, user: Subscriber): void {
      user.update(message, "Email");
  }
}

export class SMSNotification implements NotificationStrategy {
  send(message: string, user: Subscriber): void {
      user.update(message, 'SMS');
  }
}
