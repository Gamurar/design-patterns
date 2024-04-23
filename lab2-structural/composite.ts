abstract class OrderComponent {
  abstract calculateTotal(): void;
  abstract getTotal(): number;
  abstract setTotal(total: number): void;
}

class Product extends OrderComponent {
  private total: number;

  constructor(private price: number) {
      super();
      this.total = this.price;
  }

  calculateTotal(): void {
      console.log(`Product price: $${this.total}`);
  }

  getTotal(): number {
      return this.total;
  }

  setTotal(total: number): void {
      this.total = total;
  }
}

class Order extends OrderComponent {
  private components: OrderComponent[] = [];
  private total: number = 0;

  addComponent(component: OrderComponent): void {
      this.components.push(component);
  }

  calculateTotal(): void {
      this.total = this.components.reduce((sum, component) => {
          component.calculateTotal();
          return sum + component.getTotal();
      }, 0);
      console.log(`Total order price: $${this.total}`);
  }

  getTotal(): number {
      return this.total;
  }

  setTotal(total: number): void {
      this.total = total;
  }
}

export { Order, Product };
