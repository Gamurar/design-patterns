import { User } from "./Observer";
import { CompletedState, DraftState, State } from "./State";

export class Task {
  private state: State = new DraftState(this);
  private assignee: User | null;

  constructor(private title: string) {
  }

  getName() {
    return this.title;
  }

  rename(title: string): void {
      this.title = title;
  }

  setAssignee(user: User): void {
      this.assignee = user;
  }

  unsetAssignee(): void {
      this.assignee = null;
  }

  setState(newState: State): void {
      this.state = newState;
      console.log(`The task moved to ${newState.constructor.name} state.`);
  }

  addAssignee(user: User): void {
      this.state.addAssignee(user);
  }

  removeAssignee(): void {
    this.state.removeAssignee();
  }

  changeTitle(title: string): void {
      this.state.changeTitle(title);
  }

  moveToNextState(): void {
      this.state.moveToNextState();
  }
}
