import { FC } from 'react';
import { Metric } from './Metric/Metric';
import { useMetrics } from '../hooks/useMetrics';
import { Interceptor } from './Interceptor';
import Typography from '@mui/material/Typography';

export const Page: FC = () => {
  const { metrics } = useMetrics();

  return (
    <Interceptor>
      <Typography variant="h1" align={'center'} gutterBottom>
        {'Metrics'}
      </Typography>
      {metrics.map((metric) => {
        return <Metric value={metric.value} name={metric.name}></Metric>;
      })}
    </Interceptor>
  );
};
