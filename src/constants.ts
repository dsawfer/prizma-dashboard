export enum MetricName {
  FP = 'first-paint',
  FCP = 'first-contentful-paint',
  LCP = 'largest-contentful-paint',
  FID = 'first-input',
}

export const MetricGoals = {
  [MetricName.FP]: {
    good: 1800,
    bad: 3000,
  },
  [MetricName.FCP]: {
    good: 1800,
    bad: 3000,
  },
  [MetricName.LCP]: {
    good: 2500,
    bad: 4000,
  },
  [MetricName.FID]: {
    good: 150,
    bad: 300,
  },
};
