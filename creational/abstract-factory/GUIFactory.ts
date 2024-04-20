interface Button {
  paint(): void;
}

class WinButton implements Button {
  paint(): void {
      console.log("Render a Windows button");
  }
}

class MacOSButton implements Button {
  paint(): void {
      console.log("Render a MacOS button");
  }
}

interface GUIFactory {
  createButton(): Button;
}

export class WindowsFactory implements GUIFactory {
  createButton(): Button {
      return new WinButton();
  }
}

export class MacOSFactory implements GUIFactory {
  createButton(): Button {
      return new MacOSButton();
  }
}
