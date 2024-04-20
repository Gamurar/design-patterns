interface Component {
  accept(visitor: ComponentVisitor): void;
}

interface ComponentVisitor {
  visitDot(dot: Dot): void;
  visitCircle(circle: Circle): void;
}

class Dot implements Component {
  accept(visitor: ComponentVisitor): void {
      visitor.visitDot(this);
  }
}

class Circle implements Component {
  accept(visitor: ComponentVisitor): void {
      visitor.visitCircle(this);
  }
}

class XMLExportVisitor implements ComponentVisitor {
  visitDot(dot: Dot): void {
      console.log(`Exporting dot to XML.`);
  }

  visitCircle(circle: Circle): void {
      console.log(`Exporting circle to XML.`);
  }
}

export { Dot, Circle, XMLExportVisitor };
