import { useDispatch, useSelector } from 'react-redux';
import { metricsActions, metricsSelectors } from '../store/slices/metricsSlice';
import { Metric } from '../types';

export const useMetrics = () => {
  const dispatch = useDispatch();

  return {
    metrics: useSelector(metricsSelectors.metrics),
    push: (metric: Metric) => dispatch(metricsActions.pushMetric(metric)),
    reset: () => dispatch(metricsActions.reset()),
  };
};
