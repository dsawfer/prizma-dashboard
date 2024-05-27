import { EventCallback } from './eventEmitter.types';

class EventEmitter {
  private readonly listeners: Record<string, EventCallback<any>[]>;

  constructor() {
    this.listeners = {};
  }

  public on<T>(event: string, callback: EventCallback<T>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off<T>(event: string, callback: EventCallback<T>) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  public emit<T>(event: string, data: T) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => listener(data));
  }
}

export const eventEmitter = new EventEmitter();
