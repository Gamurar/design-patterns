// DIP: High-level modules should not depend on low-level modules but both should depend on abstractions.

interface EmailService {
  sendEmail(message: string, to: string): void;
}

class GmailService implements EmailService {
  sendEmail(message: string, to: string): void {
      console.log(`Sending email via Gmail: ${message} to ${to}`);
  }
}

class EmailClient {
  constructor(private service: EmailService) {}

  sendEmail(message: string, to: string) {
      this.service.sendEmail(message, to);
  }
}

export { GmailService, EmailClient };
