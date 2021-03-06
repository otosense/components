import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import otosenseTheme2022 from '../../shared/theme2022';

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <ThemeProvider theme={otosenseTheme2022}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} sx={{height: 10}} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
    
  );
}

export default LinearProgressWithLabel;