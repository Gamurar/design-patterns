import { EventNotifier, User } from "./Observer";
import {
  EmailNotification,
  SMSNotification,
} from "./Strategy";
import { ArrayIterator } from "./Iterator";
import { Task } from "./Task";

const developer = new User("Iana Gamurar");
const manager = new User("Andrei Postaru");

// Iterator pattern usage
const users = [developer, manager];
const userIterator = new ArrayIterator(users);
// Observer pattern usage
const notifier = new EventNotifier(new EmailNotification()); // Set default notification strategy to email
while (userIterator.hasNext()) {
  const user = userIterator.next();
  notifier.attach(user);
  console.log(`Adding subscriber: ${user.name}`);
}

notifier.notify("Welcome to the task manager!");

const task = new Task("Develop login page");

// Try adding assignee while in the draft state
task.addAssignee(developer);

// Change the title and move to the next state
task.changeTitle("Develop login page and registration page");
// State pattern usage
task.moveToNextState();

// Starategy pattern usage
notifier.setStrategy(new SMSNotification());
notifier.notify(`There is a new task: ${task.getName()}`);

// Try to add assignee while in the active state and change the title
task.addAssignee(developer);
task.changeTitle(
  "Develop login page and registration page with email verification"
);

// Move to the next state and remove the assignee
task.moveToNextState();
task.removeAssignee();
