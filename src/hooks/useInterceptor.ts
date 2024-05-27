import { useMetrics } from './useMetrics';
import { Metric } from '../types';

export const useInterceptor = () => {
  const { push, reset } = useMetrics();

  return {
    onMessage: (message: string) => {
      console.log(message);
    },
    onMetric: (metric: Metric) => {
      push({ ...metric, value: Math.round(metric.value) });
    },
    onReset: () => {
      reset();
    },
  };
};
