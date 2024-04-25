interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class ArrayIterator<T> implements Iterator<T> {
  private index = 0;

  constructor(private array: T[]) {}

  next(): T {
      if (!this.hasNext()) {
          throw new Error("No more elements");
      }
      return this.array[this.index++];
  }

  hasNext(): boolean {
      return this.index < this.array.length;
  }
}
