import { DatabaseConnection } from './singleton/DatabaseConnection';
import { ConsoleLoggerFactory } from './factory-method/LoggerFactory';
import { IglooHouseBuilder } from './builder/HouseBuilder';
import { WindowsFactory } from './abstract-factory/GUIFactory';
import { Document } from './prototype/DocumentPrototype';
import { ConnectionPool } from './object-pool/ConnectionPool';

// Singleton demo
const dbConnection = DatabaseConnection.getInstance();
dbConnection.query("SELECT * FROM users");

// Factory Method demo
const loggerFactory = new ConsoleLoggerFactory();
const logger = loggerFactory.createLogger();
logger.log("Factory Method demo.");

// Builder demo
const iglooBuilder = new IglooHouseBuilder();
iglooBuilder.buildFoundation();
iglooBuilder.buildStructure();
iglooBuilder.buildRoof();
iglooBuilder.buildInterior();
console.log(iglooBuilder.getHouse());

// Abstract Factory demo
const guiFactory = new WindowsFactory();
const button = guiFactory.createButton();
button.paint();

// Prototype demo
const originalDoc = new Document("Title1", "Content1");
const clonedDoc = originalDoc.clone();
console.log(`Original: ${originalDoc.title}, Cloned: ${clonedDoc.title}`);

// Object Pool demo
const pool = new ConnectionPool(2);
const connection1 = pool.getConnection();
connection1.query("SELECT * FROM posts");
const connection2 = pool.getConnection();
connection2.query("SELECT * FROM users");

try {
  const connection3 = pool.getConnection();
  connection3.query("SELECT * FROM files");
} catch(e) {
  console.error("Error: ", e.message);
}

pool.releaseConnection(connection1);
const connection3 = pool.getConnection();
connection3.query("SELECT * FROM files");
