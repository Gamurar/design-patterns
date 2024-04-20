export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private constructor(public id: number) {
      console.log("Database Connection has been created");

    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection(Math.floor(Math.random() * 1000));
        }
        return DatabaseConnection.instance;
    }

    public query(sql: string): void {
        console.log(`[${this.id}] Query: ${sql}`);
    }
}

