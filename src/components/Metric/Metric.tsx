import { FC } from 'react';

import { CircularScale } from '../CircularScale/CircularScale';
import { MetricProps } from './Metric.types';
import Typography from '@mui/material/Typography';

import s from './Metric.module.css';
import { getMetricProgress } from '../../utils/getMetricProgress';
import { getProgressColor } from '../../utils/getProgressColor';

export const Metric: FC<MetricProps> = (props) => {
  const progress = getMetricProgress(props);
  return (
    <div class={s.Wrapper}>
      <CircularScale
        value={progress}
        color={getProgressColor(progress)}
        label={props.value.toString()}
        size={100}
      />
      <Typography variant="h2">{props.name}</Typography>
    </div>
  );
};
