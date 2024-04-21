interface Button {
  paint(): void;
}

interface Checkbox {
  check(): void;
}

class WinButton implements Button {
  paint(): void {
    console.log("Render a Windows button");
  }
}

class MacButton implements Button {
  paint(): void {
    console.log("Render a Mac button");
  }
}

class WinCheckbox implements Checkbox {
  check(): void {
    console.log("Checking a Windows checkbox");
  }
}

class MacCheckbox implements Checkbox {
  check(): void {
    console.log("Checking a Mac checkbox");
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
