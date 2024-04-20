class Amplifier {
  on() {
      console.log("Amplifier on");
  }

  setVolume(level: number) {
      console.log(`Setting volume to ${level}`);
  }

  off() {
      console.log("Amplifier off");
  }
}

class Lights {
  dim() {
      console.log("Lights dimming");
  }
}

class Projector {
  turnOn() {
      console.log("Projector turning on");
  }

  turnOff() {
      console.log("Projector turning off");
  }
}

class HomeTheaterFacade {
  private amp: Amplifier;
  private lights: Lights;
  private projector: Projector;

  constructor(amp: Amplifier, lights: Lights, projector: Projector) {
      this.amp = amp;
      this.lights = lights;
      this.projector = projector;
  }

  watchMovie() {
      console.log("Get ready to watch a movie...");
      this.lights.dim();
      this.amp.on();
      this.amp.setVolume(5);
      this.projector.turnOn();
  }

  endMovie() {
      console.log("Shutting movie theater down...");
      this.amp.off();
      this.projector.turnOff();
  }
}

export { HomeTheaterFacade };
