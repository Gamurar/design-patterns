class EditorMemento {
  private content: string;

  constructor(content: string) {
      this.content = content;
  }

  getContent(): string {
      return this.content;
  }
}

class Editor {
  private content: string = '';

  type(words: string): void {
      this.content += ' ' + words;
  }

  save(): EditorMemento {
      return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
      this.content = memento.getContent();
  }

  getContent(): string {
      return this.content;
  }
}

export { Editor, EditorMemento };
