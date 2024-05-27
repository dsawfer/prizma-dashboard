import { Metric } from '../types';
import { MetricGoals, MetricName } from '../constants';

export const getMetricProgress = (metric: Metric) => {
  switch (metric.name) {
    case MetricName.FP:
      return (metric.value / MetricGoals[MetricName.FP].bad) * 100;
    case MetricName.FCP:
      return (metric.value / MetricGoals[MetricName.FCP].bad) * 100;
    case MetricName.LCP:
      return (metric.value / MetricGoals[MetricName.LCP].bad) * 100;
    case MetricName.FID:
      return (metric.value / MetricGoals[MetricName.FID].bad) * 100;
    default:
      return metric.value;
  }
};
