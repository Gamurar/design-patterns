interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
      console.log(`ConsoleLogger: ${message}`);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
      console.log(`FileLogger: ${message}`);
  }
}

export abstract class LoggerFactory {
  abstract createLogger(): Logger;

  logMessage(message: string): void {
      const logger = this.createLogger();
      logger.log(message);
  }
}

export class ConsoleLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
      return new ConsoleLogger();
  }
}

export class FileLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
      return new FileLogger();
  }
}
