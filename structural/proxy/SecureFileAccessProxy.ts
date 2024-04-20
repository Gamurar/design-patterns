interface FileAccess {
  openFile(name: string): void;
}

class RealFileAccess implements FileAccess {
  openFile(name: string): void {
      console.log(`Opening file: ${name}`);
  }
}

class SecureFileAccessProxy implements FileAccess {
  private realAccess: RealFileAccess;
  private authorizedUser: string;

  constructor(user: string) {
      this.authorizedUser = user;
      this.realAccess = new RealFileAccess();
  }

  openFile(name: string): void {
      if (this.authorizedUser === "admin") {
          this.realAccess.openFile(name);
      } else {
          console.log(`Access denied to open file: ${name}`);
      }
  }
}

export { SecureFileAccessProxy };
