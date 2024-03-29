import { styled } from '@mui/material/styles';
import { Switch, SwitchProps } from '@mui/material';
import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
import { otosenseTheme2022 } from '../..';

export const OtoSwitch = styled((props: SwitchProps) => 
  <Switch focusVisibleClassName=".Mui-focusVisible" {...props} />
)({
  width: 45,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: otosenseTheme2022.palette.primary.main,
        // backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
      otosenseTheme2022.palette.mode === 'light'
          ? otosenseTheme2022.palette.grey[100]
          : otosenseTheme2022.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: otosenseTheme2022.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: otosenseTheme2022.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: otosenseTheme2022.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
});
export const OtoSwitch1 = styled(Switch)(({theme}) => ({
  width: 45,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
        // backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
      theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  }
}));
// const OtoSwitch = () => {
//   return (
//     <ThemeProvider theme={otosenseTheme2022}>
//       <ToggleSwitch />
//     </ThemeProvider>
//   );
// };

// export default OtoSwitch;