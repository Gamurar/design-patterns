// src/DatabaseConnection.ts
export class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor(private connectionString: string) {}

  static getInstance(): DatabaseConnection {
      if (!DatabaseConnection.instance) {
          console.log("Creating new database connection instance.");
          DatabaseConnection.instance = new DatabaseConnection("YourConnectionString");
      }
      return DatabaseConnection.instance;
  }

  query(sql: string): void {
      console.log(`Querying database with SQL: ${sql}`);
  }
}
