interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
}

class TV implements Device {
  private on: boolean = false;
  private volume: number = 10;

  isEnabled(): boolean {
      return this.on;
  }

  enable(): void {
      this.on = true;
  }

  disable(): void {
      this.on = false;
  }

  getVolume(): number {
      return this.volume;
  }

  setVolume(percent: number): void {
      this.volume = percent;
  }
}

class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
      this.device = device;
  }

  togglePower(): void {
      if (this.device.isEnabled()) {
          this.device.disable();
      } else {
          this.device.enable();
      }
  }

  volumeUp(): void {
      this.device.setVolume(this.device.getVolume() + 10);
  }

  volumeDown(): void {
      this.device.setVolume(this.device.getVolume() - 10);
  }
}

export { TV, RemoteControl };
