import { User } from "./Observer";
import { Task } from "./Task";

export interface State {
  addAssignee(user: User): void;
  removeAssignee(): void;
  changeTitle(title: string): void;
  moveToNextState(): void;
}

export class DraftState implements State {
  constructor(private task: Task) {}

  addAssignee(user: User): void {
    console.log(
      "Can't add an assignee because the task is in the draft state."
    );
  }

  removeAssignee(): void {
    console.log(
      "Can't remove an assignee because the task is in the draft state."
    );
  }

  changeTitle(title: string): void {
    console.log("Changing title of the task...");
    this.task.rename(title);
  }

  moveToNextState(): void {
    console.log("Moving the task to the active state...");
    this.task.setState(new ActiveState(this.task));
  }
}

export class ActiveState implements State {
  constructor(private task: Task) {}

  addAssignee(user: User): void {
    console.log("Adding assignee to the task...");
    this.task.setAssignee(user);
  }

  removeAssignee(): void {
    console.log("Removing assignee from the task...");
    this.task.unsetAssignee();
  }

  changeTitle(title: string): void {
    console.log(
      "Can't change title of an active task. Move the task to draft state first."
    );
  }

  moveToNextState(): void {
    console.log("Moving the task to the completed state...");
    this.task.setState(new CompletedState(this.task));
  }
}

export class CompletedState implements State {
  constructor(private task: Task) {}

  addAssignee(user: User): void {
    console.log(
      "Can't add assignee to the task because it's already completed."
    );
  }

  removeAssignee(): void {
    console.log(
      "Can't remove assignee from the task because it's already completed."
    );
  }

  changeTitle(title: string): void {
    console.log(
      "Can't change title of the task because it's already completed."
    );
  }

  moveToNextState(): void {
    console.log("Can't move the task to the next state because it's completed.");
  }
}
