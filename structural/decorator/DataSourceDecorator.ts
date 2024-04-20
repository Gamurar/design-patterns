interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

class FileDataSource implements DataSource {
  private data: string = '';

  writeData(data: string): void {
      this.data = data;
      console.log(`FileDataSource: Writing data ${data}`);
  }

  readData(): string {
      console.log(`FileDataSource: Reading data`);
      return this.data;
  }
}

class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource;

  constructor(source: DataSource) {
      this.wrappee = source;
  }

  writeData(data: string): void {
      this.wrappee.writeData(data);
  }

  readData(): string {
      return this.wrappee.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
      const encryptedData = `encrypted(${data})`;
      console.log(`EncryptionDecorator: Encrypting data`);
      super.writeData(encryptedData);
  }

  readData(): string {
      const data = super.readData();
      return `decrypted(${data})`;
  }
}

export { FileDataSource, EncryptionDecorator };
