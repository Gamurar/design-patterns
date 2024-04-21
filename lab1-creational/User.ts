// src/User.ts
export abstract class User {
  constructor() {}

  abstract getPermissions(): string[];
}

export class Customer extends User {
  getPermissions() {
      return ['browse_products', 'place_order'];
  }
}

export class Admin extends User {
  getPermissions() {
      return ['add_product', 'remove_product', 'manage_orders'];
  }
}

export abstract class UserFactory {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  abstract createUser(): User;

  showPermissions(): void {
      const customer = this.createUser();
      console.log(customer.getPermissions());
  }
}

export class CustomerUserFactory extends UserFactory {
  createUser(): User {
      return new Customer();
  }
}

export class AdminUserFactory extends UserFactory {
  createUser(): User {
      return new Admin();
  }
}
