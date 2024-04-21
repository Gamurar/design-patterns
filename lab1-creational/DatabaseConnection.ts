// Singleton
import { getRandomInt } from "./utils";

export class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor(private connectionId: number) {}

  static getInstance(): DatabaseConnection {
      if (!DatabaseConnection.instance) {
          console.log("Creating new database connection instance.");
          DatabaseConnection.instance = new DatabaseConnection(getRandomInt(1, 100));
      }
      return DatabaseConnection.instance;
  }

  query(sql: string): void {
      console.log(`[DB connection ${this.connectionId}]: ${sql}`);
  }
}
