class DatabaseConnection {
    constructor(public id: number) {}

    query(sql: string): void {
        console.log(`Connection ${this.id}: Querying ${sql}`);
    }
}

export class ConnectionPool {
    private available: DatabaseConnection[] = [];
    private inUse = new Set<DatabaseConnection>();

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.available.push(new DatabaseConnection(i));
        }
    }

    getConnection(): DatabaseConnection {
        if (this.available.length > 0) {
            const connection = this.available.pop()!;
            this.inUse.add(connection);
            return connection;
        } else {
            throw new Error("No available connections.");
        }
    }

    releaseConnection(connection: DatabaseConnection): void {
        if (this.inUse.has(connection)) {
            this.inUse.delete(connection);
            this.available.push(connection);
        }
    }
}
