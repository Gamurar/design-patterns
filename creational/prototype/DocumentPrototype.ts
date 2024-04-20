export interface Prototype<T> {
  clone(): T;
}

export class Document implements Prototype<Document> {
  title: string;
  content: string;

  constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
  }

  clone(): Document {
      return new Document(this.title, this.content);
  }
}
