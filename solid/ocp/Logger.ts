// OCP: Classes should be open for extension, but closed for modification.

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
      console.log('Log entry:', message);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
      console.log('Write to log file:', message);
  }
}

class LoggerManager {
  constructor(private logger: Logger) {}

  changeLogger(newLogger: Logger) {
      this.logger = newLogger;
  }

  logMessage(msg: string) {
      this.logger.log(msg);
  }
}

export { ConsoleLogger, FileLogger, LoggerManager };
