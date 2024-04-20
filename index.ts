import DatabaseConnection from './singleton/DatabaseConnection';
import EmailAdapter from './adapter/EmailAdapter';
import { NewsPublisher, EmailSubscriber, SMSSubscriber } from './observer/NewsPublisher';

// Singleton usage
const dbInstance = DatabaseConnection.getInstance();
dbInstance.query("SELECT * FROM users");

// Adapter usage
const emailAdapter = new EmailAdapter();
emailAdapter.sendEmail("Hello", "This is a test email.", "example@example.com");

// Observer usage
const newsPublisher = new NewsPublisher();
const emailAlerts = new EmailSubscriber();
const smsAlerts = new SMSSubscriber();

newsPublisher.subscribe(emailAlerts);
newsPublisher.subscribe(smsAlerts);

newsPublisher.notifySubscribers("New Article Released: Design Patterns in TypeScript");
