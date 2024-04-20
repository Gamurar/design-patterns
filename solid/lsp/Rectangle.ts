// LSP: Derived classes must be usable through the interface of their base class, without the need for the user to know the difference.

class Rectangle {
  constructor(protected width: number, protected height: number) {}

  setWidth(width: number) {
      this.width = width;
  }

  setHeight(height: number) {
      this.height = height;
  }

  getArea(): number {
      return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width: number) {
      super.setWidth(width);
      super.setHeight(width);
  }

  setHeight(height: number) {
      super.setWidth(height);
      super.setHeight(height);
  }
}

export { Rectangle, Square };
