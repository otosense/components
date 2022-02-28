import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignContent: 'flex-start',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(65deg, #111433, #2d184d);',
  // backgroundImage: 'linear-gradient(to top left, #2D184D, #111533)',
  height: 80,
  paddingLeft: 24,
  paddingRight: 24,
  [theme.breakpoints.down('lg')]: {
    height: 60,
  },
  [theme.breakpoints.up('xl')]: {
    height: 100,
  },
}));




