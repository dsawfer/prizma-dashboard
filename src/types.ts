import React from 'react';

export type ParentFunctionComponent<P = {}> = React.FunctionComponent<
  React.PropsWithChildren<P>
>;

export type Metric = {
  name: string;
  value: number;
};

export interface MetricsState {
  metrics: Metric[];
}

export interface SocketResponse {
  type: 'MESSAGE' | 'METRIC' | 'RESET';
  result: any;
}
