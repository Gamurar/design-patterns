interface Participant {
  name: string;
  send(message: string, to?: Participant): void;
  receive(message: string, from: Participant): void;
}

class ChatRoom {
  private participants: Participant[] = [];

  join(participant: Participant): void {
      this.participants.push(participant);
      console.log(`${participant.name} joined the chat room.`);
  }

  send(message: string, from: Participant, to?: Participant): void {
      if (to) {
          to.receive(message, from);
      } else {
          this.participants
              .filter(p => p !== from)
              .forEach(p => p.receive(message, from));
      }
  }
}

class User implements Participant {
  name: string;
  private chatRoom: ChatRoom;

  constructor(name: string, chatRoom: ChatRoom) {
      this.name = name;
      this.chatRoom = chatRoom;
      this.chatRoom.join(this);
  }

  send(message: string, to?: Participant): void {
      console.log(`${this.name} sends message: '${message}'`);
      this.chatRoom.send(message, this, to);
  }

  receive(message: string, from: Participant): void {
      console.log(`${this.name} received message from ${from.name}: '${message}'`);
  }
}

export { ChatRoom, User };
