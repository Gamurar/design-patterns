interface Graphic {
  render(): void;
}

class Circle implements Graphic {
  render(): void {
      console.log("Rendering a circle");
  }
}

class Square implements Graphic {
  render(): void {
      console.log("Rendering a square");
  }
}

class CompositeGraphic implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic): void {
      this.children.push(child);
  }

  render(): void {
      this.children.forEach(child => child.render());
  }
}

export { Circle, Square, CompositeGraphic };
