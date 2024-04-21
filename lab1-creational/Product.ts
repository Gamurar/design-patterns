// src/Product.ts
export class Product {
  constructor(
      public name: string,
      public price: number,
      public description?: string,
      public category?: string,
  ) {}
}

export class ProductBuilder {
  private name!: string;
  private price!: number;
  private description?: string;
  private category?: string;

  setName(name: string): ProductBuilder {
      this.name = name;
      return this;
  }

  setPrice(price: number): ProductBuilder {
      this.price = price;
      return this;
  }

  setDescription(description: string): ProductBuilder {
      this.description = description;
      return this;
  }

  setCategory(category: string): ProductBuilder {
      this.category = category;
      return this;
  }

  build(): Product {
      console.log(`Building product ${this.name} with price ${this.price}`);
      return new Product(this.name, this.price, this.description, this.category);
  }
}
