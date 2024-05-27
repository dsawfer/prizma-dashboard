import { configureStore } from '@reduxjs/toolkit';
import { metricsReducer } from './slices/metricsSlice';

export const store = configureStore({
  reducer: { metrics: metricsReducer },
});
