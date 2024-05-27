import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Metric, MetricsState } from '../../types';

const initialState: MetricsState = {
  metrics: [],
};

const MetricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    pushMetric: (state, action: PayloadAction<Metric>) => {
      state.metrics.push(action.payload);
    },
    reset: () => initialState,
  },
  selectors: {
    metrics: (state) => state.metrics,
  },
});

export const {
  actions: metricsActions,
  reducer: metricsReducer,
  selectors: metricsSelectors,
} = MetricsSlice;
