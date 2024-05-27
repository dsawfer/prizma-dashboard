import { SocketResponse } from '../types';
import { eventEmitter, EventType } from '../services/events';

const createSocketConnection = () => {
  const socket = new WebSocket('ws://localhost:8999');

  socket.onopen = () => {
    console.log('Вебсокет подключен');
  };

  socket.onmessage = (event) => {
    const response: SocketResponse = JSON.parse(event.data);

    switch (response.type) {
      case 'MESSAGE':
        console.log('MESSAGE', response.result.message);
        eventEmitter.emit(EventType.MESSAGE, {
          message: response.result.message,
        });
        break;
      case 'METRIC':
        console.log('METRIC:', response.result.name, response.result.value);
        eventEmitter.emit(EventType.METRIC, {
          name: response.result.name,
          value: response.result.value,
        });
        break;
      case 'RESET':
        console.log('RESET');
        eventEmitter.emit(EventType.RESET, {});
        break;
    }
  };

  socket.onclose = (event) => {
    event.wasClean
      ? console.log('Соединение закрыто чисто')
      : console.error('Обрыв соединения, код: ' + event.code);
  };

  socket.onerror = (error) => {
    console.warn('Ошибка ' + error);
  };
};

export const useSocket = () => {
  return {
    createSocketConnection,
  };
};
