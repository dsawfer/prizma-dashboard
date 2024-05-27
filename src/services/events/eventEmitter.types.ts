export type EventCallback<T> = (payload: T) => void;

export enum EventType {
  MESSAGE = 'message',
  METRIC = 'metric',
  RESET = 'reset',
}
