abstract class Logger {
  static INFO = 1;
  static DEBUG = 2;
  static ERROR = 3;

  protected level: number;
  protected nextLogger?: Logger;

  constructor(level: number) {
      this.level = level;
  }

  setNextLogger(nextLogger: Logger): void {
      this.nextLogger = nextLogger;
  }

  logMessage(level: number, message: string): void {
      if (this.level <= level) {
          this.write(message);
      }
      if (this.nextLogger != null) {
          this.nextLogger.logMessage(level, message);
      }
  }

  protected abstract write(message: string): void;
}

class ConsoleLogger extends Logger {
  constructor(level: number) {
      super(level);
  }

  protected write(message: string): void {
      console.log(`Standard Console::Logger: ${message}`);
  }
}

class ErrorLogger extends Logger {
  constructor(level: number) {
      super(level);
  }

  protected write(message: string): void {
      console.log(`Error Console::Logger: ${message}`);
  }
}

export { ConsoleLogger, ErrorLogger };
