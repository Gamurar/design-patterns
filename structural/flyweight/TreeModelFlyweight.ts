interface TreeType {
  name: string;
  color: string;
  texture: string;
}

class TreeTypeFactory {
  private static types: Map<string, TreeType> = new Map();

  static getTreeType(name: string, color: string, texture: string): TreeType {
      const key = `${name}-${color}-${texture}`;
      if (!this.types.has(key)) {
          this.types.set(key, { name, color, texture });
          console.log(`Creating tree type: ${key}`);
      }
      return this.types.get(key)!;
  }
}

class Tree {
  private x: number;
  private y: number;
  private type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
      this.x = x;
      this.y = y;
      this.type = type;
  }

  draw(): void {
      console.log(`Drawing a ${this.type.name} tree at (${this.x}, ${this.y}) with color ${this.type.color} and texture ${this.type.texture}`);
  }
}

export { Tree, TreeTypeFactory };
