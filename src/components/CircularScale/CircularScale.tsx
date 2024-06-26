import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CircularScaleProps } from './CircularScale.types';
import { FC } from 'react';

export const CircularScale: FC<CircularScaleProps> = (props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          // component="div"
          color="text.secondary"
        >
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
};

// export default function CircularWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);
//
//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 0 : prevProgress + 10,
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//
//   return <CircularProgressWithLabel value={progress} />;
// }
