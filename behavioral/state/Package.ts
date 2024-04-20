interface PackageState {
  next(pkg: PackageContext): void;
  prev(pkg: PackageContext): void;
  printStatus(): void;
}

class PackageContext {
  private state: PackageState;

  constructor(state: PackageState) {
      this.state = state;
  }

  nextState(): void {
      this.state.next(this);
  }

  previousState(): void {
      this.state.prev(this);
  }

  setState(state: PackageState): void {
      this.state = state;
  }

  printStatus(): void {
      this.state.printStatus();
  }
}

class OrderedState implements PackageState {
  next(pkg: PackageContext): void {
      console.log("Package ordered, moving to shipped.");
      pkg.setState(new ShippedState());
  }

  prev(pkg: PackageContext): void {
      console.log("The package is in its root state.");
  }

  printStatus(): void {
      console.log("Package ordered.");
  }
}

class ShippedState implements PackageState {
  next(pkg: PackageContext): void {
      console.log("Package shipped, moving to delivered.");
      pkg.setState(new DeliveredState());
  }

  prev(pkg: PackageContext): void {
      console.log("Package going back to ordered state.");
      pkg.setState(new OrderedState());
  }

  printStatus(): void {
      console.log("Package shipped.");
  }
}

class DeliveredState implements PackageState {
  next(pkg: PackageContext): void {
      console.log("Package already delivered.");
  }

  prev(pkg: PackageContext): void {
      console.log("Package going back to shipped state.");
      pkg.setState(new ShippedState());
  }

  printStatus(): void {
      console.log("Package delivered.");
  }
}

export { PackageContext, OrderedState, ShippedState, DeliveredState };
