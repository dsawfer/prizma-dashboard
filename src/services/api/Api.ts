class Api {
  private socket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8999');

    this.socket.onopen = () => {
      console.log('Вебсокет подключен');
    };

    this.socket.onmessage = () => {};

    this.socket.onclose = (event) => {
      event.wasClean
        ? console.log('Соединение закрыто чисто')
        : console.error('Обрыв соединения, код: ' + event.code);
    };

    this.socket.onerror = (error) => {
      console.warn('Ошибка ' + error);
    };
  }

  public status() {
    return this.socket.readyState;
  }
}

export const api = new Api();
