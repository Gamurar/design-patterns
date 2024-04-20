// ISP: Clients should not be forced to depend upon interfaces that they do not use.

interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

class SimplePrinter implements Printer {
  print(document: string): void {
      console.log('Print Document:', document);
  }
}

class MultiFunctionMachine implements Printer, Scanner {
  print(document: string): void {
      console.log('Print Document:', document);
  }

  scan(document: string): void {
      console.log('Scan Document:', document);
  }
}

export { SimplePrinter, MultiFunctionMachine };
