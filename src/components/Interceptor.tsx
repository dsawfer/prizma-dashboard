import { ParentFunctionComponent } from '../types';
import { useEffect } from 'react';
import { eventEmitter, EventType } from '../services/events';
import { useInterceptor } from '../hooks/useInterceptor';

export const Interceptor: ParentFunctionComponent = (props) => {
  const { onMessage, onMetric, onReset } = useInterceptor();

  useEffect(() => {
    eventEmitter.on(EventType.MESSAGE, onMessage);
    eventEmitter.on(EventType.METRIC, onMetric);
    eventEmitter.on(EventType.RESET, onReset);

    return () => {
      eventEmitter.off(EventType.MESSAGE, onMessage);
      eventEmitter.off(EventType.METRIC, onMetric);
      eventEmitter.off(EventType.RESET, onReset);
    };
  }, []);

  return <>{props.children}</>;
};
