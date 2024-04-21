// src/index.ts
import { DatabaseConnection } from "./DatabaseConnection";
import { AdminUserFactory } from "./User";
import { ProductBuilder } from "./Product";
import { Order } from "./Order";

// Simulate database interaction
const db = DatabaseConnection.getInstance();
db.query("SELECT * FROM users");

// User factory
const admin = new AdminUserFactory("Johny");
admin.showPermissions();

// Product builder
const product = new ProductBuilder()
    .setName("Gaming Laptop")
    .setPrice(1500)
    .setDescription("High performance for gaming and work")
    .setCategory("Electronics")
    .build();

// Prototype pattern
const order1 = new Order(1, [product], admin.username);
const order2 = order1.clone();
console.log("Cloned order: ", JSON.stringify(order2, null, 2));
