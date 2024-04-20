interface EmailProvider {
  sendEmail(subject: string, content: string, to: string): void;
}

class ThirdPartyEmailProvider {
  public send(subject: string, body: string, recipient: string): void {
      console.log(`Email sent to ${recipient} with subject ${subject}`);
  }
}

class EmailAdapter implements EmailProvider {
  private thirdPartyEmailProvider: ThirdPartyEmailProvider;

  constructor() {
      this.thirdPartyEmailProvider = new ThirdPartyEmailProvider();
  }

  sendEmail(subject: string, content: string, to: string): void {
      this.thirdPartyEmailProvider.send(subject, content, to);
  }
}

export default EmailAdapter;
